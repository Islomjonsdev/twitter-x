import { X } from "lucide-react";
import { ReactElement } from "react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "./dialog";

interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    body?: ReactElement;
    footer?: ReactElement;
    step: number,
    totalStep?: number,
}

const Modal = ({ isOpen, onClose, body, footer, step, totalStep }: ModalProps) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="bg-black p-1">
                <div className="flex items-center gap-6">
                    <button className='p-1 border-0 text-white hover:opacity-70 transition w-fit' onClick={onClose}>
                        <X size={28} />
                    </button>
                    {step && totalStep && (
                        <div className="text-xl font-bold">Step {step} of {totalStep}</div>
                    )}
                </div>
                <div className="mt-4">{body}</div>
                {footer && <div className="mt-4">{footer}</div>}
            </DialogContent>
        </Dialog>
    )
}

export default Modal