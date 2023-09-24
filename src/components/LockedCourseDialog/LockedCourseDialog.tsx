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
    <Dialog open={open}>
      <DialogTitle>
        Unlock {lessonName} lesson by providing a deposit.
      </DialogTitle>
      <TonConnectUIProviderWrapper price={price} />
    </Dialog>
  );
};

export default LockedCourseDialog;
