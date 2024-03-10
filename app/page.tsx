import Image from "next/image";
import GridOption from "@/components/ui/GridOption";
export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 grid-flow-row-dense md:grid-cols-4 gap-2 m-5">
        <GridOption
          title="Shop Home"
          className="text-black bg-pink-100 row-span-3 col-span-2"
          image="https://media.istockphoto.com/id/533833660/photo/clothing-on-hanger-at-the-modern-shop-boutique.jpg?s=1024x1024&w=is&k=20&c=JYOF5ivB_HbAOCRlhmRoKWOPqM2FB1KkGIj6q6RdyE4="
        />
        <GridOption
          title="shop wardrobe"
          className="text-black bg-blue-200 h-full md:h-32 row-span-2"
          image="https://media.istockphoto.com/id/533833660/photo/clothing-on-hanger-at-the-modern-shop-boutique.jpg?s=1024x1024&w=is&k=20&c=JYOF5ivB_HbAOCRlhmRoKWOPqM2FB1KkGIj6q6RdyE4="
        />
        <GridOption
          title="grid option 3"
          className="text-black bg-yellow-100 row-span-2"
          image="https://media.istockphoto.com/id/533833660/photo/clothing-on-hanger-at-the-modern-shop-boutique.jpg?s=1024x1024&w=is&k=20&c=JYOF5ivB_HbAOCRlhmRoKWOPqM2FB1KkGIj6q6RdyE4="
        />
        <GridOption
          title="Sports Apparel"
          className="text-black bg-pink-200 row-span-3"
          image="https://images.unsplash.com/photo-1626248801379-51a0748a5f96?q=80&w=2370&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
        <GridOption
          title="Shop toys"
          className="text-black bg-green-100 "
          image="https://media.istockphoto.com/id/533833660/photo/clothing-on-hanger-at-the-modern-shop-boutique.jpg?s=1024x1024&w=is&k=20&c=JYOF5ivB_HbAOCRlhmRoKWOPqM2FB1KkGIj6q6RdyE4="
        />
        <GridOption
          title="Shop Electronics"
          className="text-Black bg-gray-300 md:col-span-2"
          image="https://media.istockphoto.com/id/533833660/photo/clothing-on-hanger-at-the-modern-shop-boutique.jpg?s=1024x1024&w=is&k=20&c=JYOF5ivB_HbAOCRlhmRoKWOPqM2FB1KkGIj6q6RdyE4="
        />
        <GridOption
          title="Shop Beauty"
          className="text-Black bg-pink-200"
          image="https://media.istockphoto.com/id/533833660/photo/clothing-on-hanger-at-the-modern-shop-boutique.jpg?s=1024x1024&w=is&k=20&c=JYOF5ivB_HbAOCRlhmRoKWOPqM2FB1KkGIj6q6RdyE4="
        />
      </div>
    </main>
  );
}
