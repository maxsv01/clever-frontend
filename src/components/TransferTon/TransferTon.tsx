"use client";
import {Address, toNano} from "ton";
import {useTonConnect} from "@/hooks/useTonConnect";
import {FC, useEffect, useState} from "react";
import {Button} from "@mui/material";
import {useTonConnectUI} from "@tonconnect/ui-react";

interface ITransferTon {
  price: number;
}

const TransferTon: FC<ITransferTon> = ({ price }) => {
  const {  connected } = useTonConnect();
  const [tonConnectUI] = useTonConnectUI();

  const tonAmount = price?.toString();
  const platformAddress = "EQDeCeHK_T2Fwvf4av5FTNPq3-gPuBPLBt2GtZDq3N8FHcsU";

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
          const result = await tonConnectUI.sendTransaction({
                  messages: [
                      {
                          address: Address.parse(platformAddress).toString(),
                          amount: toNano(tonAmount).toString(),
                      },
                  ],
                  validUntil: Date.now() + 5 * 60 * 1000, // 5 minutes for user to approve
              });
            console.log(result);
        }}
      >
        Transfer
      </Button>
    </div>
  );
};

export default TransferTon;
