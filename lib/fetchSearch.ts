import { searchResult } from "@/types/searchTypes";

function fetchSearch(query: string): Promise<searchResult | undefined> {
const newUrl = new URL(`${process.env.BACKEND_CRAWLER_URL}}/search/${query}`);

const response = fetch(newUrl, { 
    method: "get" , 
    headers: {
        "Content-Type": "application/json"
    },
    next:{
        revalidate: 60*30,
    },
}).then((res)=> res.json())
    .then((data)=>{
        if(data.result.length === 0) return;
        const result = data;

        return result;
    })
    .catch((err)=> console.log(err));

    return response;

}
export default fetchSearch;