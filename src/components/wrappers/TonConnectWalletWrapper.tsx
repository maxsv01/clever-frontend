"use client";
import {TonConnectButton, TonConnectUIProvider} from "@tonconnect/ui-react";
import React, {FC} from "react";
import TransferTon from "../TransferTon/TransferTon";

const TonConnectWalletWrapper: FC = () => {
    const manifestUrl =
        "https://raw.githubusercontent.com/ton-community/tutorials/main/03-client/test/public/tonconnect-manifest.json";
    return (
        <TonConnectUIProvider manifestUrl={manifestUrl}>
            <TonConnectButton/>
        </TonConnectUIProvider>
    );
};

export default TonConnectWalletWrapper;
