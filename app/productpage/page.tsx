import fetchProduct from "@/lib/fetchProduct";
import removeBaseURL from "@/lib/removeFlipkartLink";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import AddToCart from "@/components/ui/AddToCart";
import { Product } from "@/types/productPageTypes";
import { Button } from "@/components/ui/button";
//import { CartItem } from "../store/features/cartSlice";

type Props = {
  searchParams: {
    flipkartLink?: string;
    serverLink?: string;
  };
};

async function ProductPage({
  searchParams: { flipkartLink, serverLink },
}: Props) {
  let productQuery: string | undefined;
  console.log("poduct page: ", flipkartLink);
  console.log("poduct page: ", serverLink);
  if (flipkartLink) {
    productQuery = removeBaseURL(flipkartLink, "https://flipkart.com/");
    console.log("poduct page inside flipkart: ", productQuery);
  }
  if (serverLink) {
    productQuery = removeBaseURL(
      serverLink,
      `${process.env.BACKEND_CRAWLER_URL}/product/`
    );
    console.log("poduct page inside server: ", productQuery);
  }

  if (!productQuery) return;
  const productData = await fetchProduct(productQuery);
  if (!productData) return notFound();
  const { result, url } = productData;
  //console.log("url inside product page:", url);
  return (
    <div className="flex flex-col p-6 lg:p-10 lg:flex-row w-full">
      <div className="hidden lg:inline space-y-4 h-screen overflow-auto">
        {result?.thumbnails.map((image, i) => {
          const upscaledImage = image.replace("128/128", "720/720");
          return (
            <Image
              key={i}
              src={upscaledImage}
              alt={result.name + " " + i}
              height={100}
              width={100}
              className="border rounded-sm"
            />
          );
        })}
      </div>
      <div className="">
        <Carousel
          opts={{ loop: true }}
          className="flex w-3/5 lg:w-4/5 items-center mx-auto self-start max-w-xl mb:10"
        >
          <CarouselContent>
            {result?.thumbnails.map((image, i) => {
              const upscaledImage = image.replace("128/128", "720/720");
              return (
                <CarouselItem key={i}>
                  <div className="p-1">
                    <div className="flex items-center justify-center aspect-square relative p-2">
                      <Image
                        src={upscaledImage}
                        alt={result.name + " " + i}
                        layout="fill"
                        className="rounded-sm"
                      />
                    </div>
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        <div className="space-x-2 px-2">
          <Button>Buy Now</Button>
          <AddToCart product={result} productURL={url} />
        </div>
      </div>

      <div className="flex-1 border w-full rounded-md p-5 space-y-2 bg-white overflow-auto h-screen">
        <h1 className="text-3xl font-bold">{result?.name}</h1>

        <ul className="text-slate-600 font-aria">
          <h3 className="font-semibold">Features</h3>
          {result?.highlights.map((features, i) => (
            <li key={i}>{features}</li>
          ))}
        </ul>

        {result?.rating && (
          <div className="flex text-yellow-400 items-center">
            <p>{result.rating}</p>
            <p>⭑</p>
          </div>
        )}

        <div>
          <p className="font-semibold">₹ {result?.current_price}</p>
          {result?.discounted && (
            <div>
              <p className="line-through font-semibold text-slate-500 text-xs">
                ₹ {result.original_price}
              </p>
              <p>{result.discount_percent}%</p>
            </div>
          )}
        </div>

        <hr />

        {!!result.specs.length && (
          <h3 className="font-semibold text-slate-600 font-aria">
            Specifications
          </h3>
        )}
        <Table>
          <TableBody>
            {result.specs.map((specs, key) => (
              <TableRow key={key}>
                <TableCell className="font-bold">{specs.title}</TableCell>
                <TableCell className="">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="">Specification</TableHead>
                        <TableHead>Value</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {specs.details.map((spec, index) => (
                        <TableRow key={index}>
                          <TableCell>{spec.property}</TableCell>
                          <TableCell>{spec.value}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
export default ProductPage;
