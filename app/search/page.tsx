import fetchSearch from "@/lib/fetchSearch"
import { Result, searchResult } from "@/types/searchTypes";
import Product from "@/components/ui/Product";

type Props = {
  searchParams: {
    q: string
  }
}
async function pages({ searchParams: {q} }: Props) {
  
  const results: searchResult | undefined = await fetchSearch(q);
  console.log(results);
  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-2">Results for {q}</h1>
      <h2 className="text-gray-400 md:text-xs mb-1">x
        ({results?.total_result} results)
      </h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
        {results?.result.map((product: Result, index: number)=>(
          <li key={index}>
            <Product product={product} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default pages