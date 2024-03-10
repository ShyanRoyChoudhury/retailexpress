function removeBaseURL(link: string, baseURL: string): string{
    //const flipkartLink = 'https://flipkart.com/'
    if(link.startsWith(baseURL)){
      return link.substring(baseURL.length)
    }
    return link
}

export default removeBaseURL;