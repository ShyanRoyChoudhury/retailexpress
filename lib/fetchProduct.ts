import { Product } from "@/types/productPageTypes";

export interface FetchProductProps{
    result: Product,
    url: string
}
async function fetchProduct(query: string): Promise<FetchProductProps | undefined>{
    const newURL = new URL(`${process.env.BACKEND_CRAWLER_URL}/product/${query}`);
    console.log('inside fetchProduct, url:', newURL)
    try{
        const response = await fetch(newURL, {
        method: 'get',
        headers: {
            "Content-Type": 'application/json'
        },
        next:{
            revalidate: 60*60
        }
        })
        const data = await response.json();
        if(data.length === 0) return;
        
        return {result:data, url:newURL.href};
    }catch(err){
         console.error(err)
    }
}
export default fetchProduct;