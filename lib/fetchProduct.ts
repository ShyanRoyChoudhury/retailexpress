import { Product } from "@/types/productPageTypes";

function fetchProduct(query: string): Promise<Product | undefined>{
    const newURL = new URL(`${process.env.BACKEND_CRAWLER_URL}/product/${query}`);
    const response = fetch(newURL, {
        method: 'get',
        headers: {
            "Content-Type": 'application/json'
        },
        next:{
            revalidate: 60*60
        }
    })
    .then(res => res.json())
    .then(data => {
            if(data.length === 0) return;
            return data;
        })
    .catch((err) => console.error(err))
    return response;
}
export default fetchProduct;