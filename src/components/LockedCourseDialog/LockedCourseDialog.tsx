import React from "react";
import {Dialog, DialogTitle} from "@mui/material";
import TonConnectUIProviderWrapper from "@/components/wrappers/TonConnectUIProviderWrapper";

export interface SimpleDialogProps {
    open: boolean;
    lessonName: string;
    onClose: (value: string) => void;
}

function SimpleDialog(props: SimpleDialogProps) {
    const { onClose, lessonName, open } = props;
    return (
        <Dialog open={open}>
            <DialogTitle>Unlock {lessonName} lesson by providing a deposit.</DialogTitle>
            <TonConnectUIProviderWrapper />
        </Dialog>
    );
}

export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value: string) => {
        setOpen(false);
    };

    return (
        <div>
            <SimpleDialog
                lessonName="Lesson" // TODO: pass course name
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}