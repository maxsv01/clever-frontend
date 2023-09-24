"use client";
import { Address, toNano } from "ton";
import { useTonConnect } from "@/hooks/useTonConnect";
import { FC, useEffect, useState } from "react";
import { Button } from "@mui/material";

interface ITransferTon {
  price: number;
}

const TransferTon: FC<ITransferTon> = ({ price }) => {
  const { sender, connected, wallet } = useTonConnect();

  const tonAmount = price?.toString();
  const platformAddress = "EQDeCeHK_T2Fwvf4av5FTNPq3-gPuBPLBt2GtZDq3N8FHcsU";
  const walletInfoUrl = `https://toncenter.com/api/v2/getWalletInformation?address=${wallet}`;

  const [username, setUsername] = useState<string | null>("");
  useEffect(() => {
    if (window) {
      setUsername(new URLSearchParams(window.location.search).get("username"));
    }
  }, []);

  return (
    <div className="p-6 flex flex-col items-center">
      <h3>Transfer a deposit</h3>
      <div>
        <label>
          <b>Price: {tonAmount} TONs.</b>
        </label>
      </div>
      <Button
        className="mt-5"
        variant="contained"
        disabled={!connected}
        onClick={async () => {
          const result = await sender.send({
            to: Address.parse(platformAddress),
            value: toNano(tonAmount),
          });
        }}
      >
        Transfer
      </Button>
    </div>
  );
};

export default TransferTon;
