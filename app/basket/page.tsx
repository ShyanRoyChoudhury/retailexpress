import { ShoppingCartIcon } from "lucide-react";
import Basket from "@/components/ui/Basket";

function basketPage() {
  return (
    <div className="p-10 w-full mx-auto max-w-7xl">
      <div className="flex space-x-2 items-center">
        <ShoppingCartIcon size={40} />
        <h1 className="text-3xl">Your Cart</h1>
      </div>
      <p className="mt-2">
        Review the items in your cart and checkout when ready!
      </p>
      <Basket />
    </div>
  );
}

export default basketPage;
