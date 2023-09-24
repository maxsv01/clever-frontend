"use client";
import React, { FC, useEffect } from "react";
import { Dialog, DialogTitle } from "@mui/material";
import TonConnectUIProviderWrapper from "@/components/wrappers/TonConnectUIProviderWrapper";

export interface ILockedCourseDialog {
  lessonName: string;
  price: number;
}

const LockedCourseDialog: FC<ILockedCourseDialog> = ({ lessonName, price }) => {
  const [open, setOpen] = React.useState(true);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, [open]);

  const handleClose = () => {
    document.body.style.overflow = "";
    setOpen(false);
  };
  return (
      <TonConnectUIProviderWrapper price={price} />
  );
};

export default LockedCourseDialog;
