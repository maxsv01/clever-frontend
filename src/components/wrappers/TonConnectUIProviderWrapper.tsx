"use client";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import React, { FC } from "react";
import TransferTon from "../TransferTon";

interface ITonConnectUIProviderWrapper {
  price: number;
}

const TonConnectUIProviderWrapper: FC<ITonConnectUIProviderWrapper> = ({
  price,
}) => {
  const manifestUrl =
    "https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json";
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <TransferTon price={price} />
    </TonConnectUIProvider>
  );
};

export default TonConnectUIProviderWrapper;
