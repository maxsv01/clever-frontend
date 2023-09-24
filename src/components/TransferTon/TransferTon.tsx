"use client";
import { Address, fromNano, toNano } from "ton";
import { useTonConnect } from "@/hooks/useTonConnect";
import { useEffect, useState } from "react";

export default function TransferTon() {
  const { sender, connected, wallet } = useTonConnect();

  const tonAmount = "0.05";
  const platformAddress = "EQDeCeHK_T2Fwvf4av5FTNPq3-gPuBPLBt2GtZDq3N8FHcsU";
  const walletInfoUrl = `https://toncenter.com/api/v2/getWalletInformation?address=${wallet}`;

  const [username, setUsername] = useState<string | null>("");
  useEffect(() => {
    if (window) {
      setUsername(new URLSearchParams(window.location.search).get("username"));
    }
  }, []);

  return (
    <div>
      <div>
        <h3>Transfer a deposit</h3>
        <div>
          <label>
            <b>Price: {tonAmount} TONs.</b>
          </label>
        </div>
        <button
          disabled={!connected}
          style={{ marginTop: 18 }}
          onClick={async () => {
            const result = await sender.send({
              to: Address.parse(platformAddress),
              value: toNano(tonAmount),
            });
          }}
        >
          Transfer
        </button>
      </div>
    </div>
  );
}
