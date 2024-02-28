import { Product } from "@/types/productPageTypes";

export function groupByProductId(products: Product[]):Record<string, Product[]> {
    return products.reduce((accumulator: Record<string, Product[]>, currentProduct: Product)=>{
        const id = currentProduct.product_id;
        if(!accumulator[id]){
            accumulator[id] = []
        }
        accumulator[id].push(currentProduct)
        return accumulator
    }, {})
}