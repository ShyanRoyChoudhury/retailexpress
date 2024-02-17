export interface searchResult {
    total_result: number,
    query: string,
    fetch_from: string,
    result: Result[]
}

export interface Result{
    name: string,
    link: string,
    current_price: number | null,
    original_price: number | null,
    discounted: boolean,
    thumbnail: string,
    query_url: string,
}