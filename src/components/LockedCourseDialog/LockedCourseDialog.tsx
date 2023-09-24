"use client";
import React, { FC } from "react";
import { Dialog, DialogTitle } from "@mui/material";
import TonConnectUIProviderWrapper from "@/components/wrappers/TonConnectUIProviderWrapper";

export interface ILockedCourseDialog {
  lessonName: string;
  price: number;
}

const LockedCourseDialog: FC<ILockedCourseDialog> = ({ lessonName, price }) => {
  const [open, setOpen] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
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
