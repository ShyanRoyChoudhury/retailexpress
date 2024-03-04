"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useRouter } from "next/navigation";
import Basket from "@/components/ui/Basket";
import BasketPage from "@/app/basket/page";

function BasketInterception() {
  const router = useRouter();
  const onDismiss = () => {
    router.back();
  };
  return (
    <div>
      <Dialog
        open
        onOpenChange={(isOpen) => {
          if (!isOpen) {
            onDismiss();
          }
        }}
      >
        <DialogContent className="h-4/5  max-w-3xl overflow-scroll">
          <DialogHeader className="mb-0">
            <DialogTitle>Basket</DialogTitle>
            <DialogDescription>Contents of your Basket</DialogDescription>
          </DialogHeader>
          <Basket />
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default BasketInterception;
