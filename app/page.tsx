import Image from "next/image";
import GridOption from "@/components/ui/GridOption";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Home() {
  const carouselImages = [
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/8403a0f8d48613a5.png?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/270/image/67bdb22c1fd23512.jpg?q=20",
    "https://rukminim2.flixcart.com/fk-p-flap/1600/470/image/a4a8dbe8961ad8d0.png?q=20",
  ];
  return (
    <main>
      <div className="p-4">
        <Carousel
          opts={{ loop: true }}
          className="flex w-6/6 mx-auto items-center justify-center relative bg-white"
        >
          <CarouselContent>
            {carouselImages.map((image, i) => {
              return (
                <CarouselItem key={i}>
                  <div className="p-2 w-full flex items-center justify-center rounded-md hover:border-blue-400 border-2">
                    <Image
                      src={image}
                      alt="image of ad"
                      width={0}
                      height={0}
                      sizes="100vw"
                      className="rounded-sm w-full object-contain opacity-80 hover:opacity-90 "
                    />
                  </div>
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious className="hover:border-blue-400 left-3" />
          <CarouselNext className="hover:border-blue-400 right-3" />
        </Carousel>
      </div>
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-2 m-5">
        <GridOption
          title="Shop Home"
          className="text-black row-span-3 col-span-2 md:col-span-3"
          image="https://images.unsplash.com/photo-1617103996702-96ff29b1c467?q=80&w=2532&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <GridOption
          title="shop wardrobe"
          className="text-black bg-blue-200 h-full md:h-32 row-span-2"
          image="https://media.istockphoto.com/id/533833660/photo/clothing-on-hanger-at-the-modern-shop-boutique.jpg?s=1024x1024&w=is&k=20&c=JYOF5ivB_HbAOCRlhmRoKWOPqM2FB1KkGIj6q6RdyE4="
        />

        <GridOption
          title="Sports Apparel"
          className="text-black bg-pink-200 row-span-3 md:row-span-4"
          image="https://images.unsplash.com/photo-1626248801379-51a0748a5f96?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <GridOption
          title="Shop toys"
          className="text-black bg-green-100 "
          image="https://images.unsplash.com/photo-1599623560574-39d485900c95?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <GridOption
          title="Shop Electronics"
          className="text-Black bg-gray-300 md:col-span-2 md:row-span-3"
          image="https://plus.unsplash.com/premium_photo-1684512989514-f0e4db5cc44d?q=80&w=2530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <GridOption
          title="Shop Beauty"
          className="text-Black bg-pink-100"
          image="https://plus.unsplash.com/premium_photo-1661320931285-5aa9e782a833?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <GridOption
          title="grid option 3"
          className="text-black bg-yellow-100 col-span-2 md:col-span-1"
          image="https://media.istockphoto.com/id/533833660/photo/clothing-on-hanger-at-the-modern-shop-boutique.jpg?s=1024x1024&w=is&k=20&c=JYOF5ivB_HbAOCRlhmRoKWOPqM2FB1KkGIj6q6RdyE4="
        />
      </div>
    </main>
  );
}
