import { Result } from "@/types/searchTypes";
import { Badge } from "./badge";
import Image from "next/image";
import Link from "next/link";

function Product({ product }: { product: Result }) {
  return (
    <Link
      href={{
        pathname: "/productpage",
        query: {
          flipkartLink: product.link,
        },
      }}
      className="flex flex-col border p-5 rounded-md h-full relative shadow-sm"
    >
      <p>{product.name}</p>

      <Image
        src={product.thumbnail}
        alt={product.name}
        width={200}
        height={200}
        className="mx-auto"
      />

      <p className="font-bold mt-1">₹ {product.current_price}</p>

      {product.discounted && (
        <div>
          <Badge className="absolute top-2 right-2">Sale</Badge>
          <p className="line-through text-gray-400 text-xs font-semibold">
            ₹ {product.original_price}
          </p>
        </div>
      )}
    </Link>
  );
}

export default Product;
