"use client";
import { Address, fromNano, toNano } from "ton";
import { useTonConnect } from "@/hooks/useTonConnect";
import { useEffect, useState } from "react";

export default function TransferTon() {
  const { sender, connected, wallet } = useTonConnect();

  const tonAmount = "0.05";
  const platformAddress = "EQDeCeHK_T2Fwvf4av5FTNPq3-gPuBPLBt2GtZDq3N8FHcsU";
  const walletInfoUrl = `https://toncenter.com/api/v2/getWalletInformation?address=${wallet}`;
  // TODO: make a request to walletInfoUrl and parse answer to get balance: fromNano(response.balance)
  const [username, setUsername] = useState<string | null>("");
  useEffect(() => {
    if (window) {
      setUsername(new URLSearchParams(window.location.search).get("username"));
    }
  }, []);

  return (
    <div>
      <div>
        <h3>Hello, {username}</h3>
        <h3>Wallet: {wallet}</h3>
        <h3>Balance: </h3>
        <h3>Transfer a deposit</h3>
        <div>
          <label>
            Pay now, get a discount later if you answer correctly and quickly.
          </label>
        </div>
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
            console.log(result);
          }}
        >
          Transfer
        </button>
      </div>
    </div>
  );
}
