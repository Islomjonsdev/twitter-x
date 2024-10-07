import { ReactElement } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";

interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    title?: string;
    body?: ReactElement;
    footer?: ReactElement;
    step?: number;
    totalStep: number;
}

const Modal = ({ isOpen, onClose, title, body, footer, step, totalStep }: ModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-black">
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                </DialogHeader>
                <div className="mt-4">{body}</div>
                {footer && <div className="mt-4">{footer}</div>}
            </DialogContent>
        </Dialog>
    )
}

export default Modal