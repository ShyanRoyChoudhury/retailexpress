import { Product } from "@/types/productPageTypes";

export function getCartTotal(products: Product[]): string{
    const total = products.reduce((accumulator: number, currentProduct: Product)=> {
        if(currentProduct.current_price){
            return accumulator + currentProduct.current_price
        }else{
            return accumulator
        }
    }, 0)

    return `₹ ${total.toFixed(2)}`;
}