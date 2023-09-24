"use client";
import { TonConnectUIProvider } from "@tonconnect/ui-react";
import React, { FC } from "react";
import TransferTon from "../TransferTon/TransferTon";

const TonConnectUIProviderWrapper: FC = () => {
  const manifestUrl =
    "https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json";
  return (
    <TonConnectUIProvider manifestUrl={manifestUrl}>
      <TransferTon />
    </TonConnectUIProvider>
  );
};

export default TonConnectUIProviderWrapper;
