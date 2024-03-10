"use client";
import Signin from "@/components/ui/Signin";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";

function SignInInterception() {
  const router = useRouter();
  function onDismiss() {
    router.back();
  }
  return (
    <Dialog
      open
      onOpenChange={(isOpen) => {
        if (!isOpen) onDismiss();
      }}
    >
      <DialogContent>
        <DialogHeader>
          <DialogDescription className="p-2">
            <Signin />
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default SignInInterception;
