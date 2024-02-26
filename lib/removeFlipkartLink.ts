function removeFlipkartURL(link: string): string{
    const flipkartLink = 'https://flipkart.com/'
    if(link.startsWith(flipkartLink)){
      return link.substring(flipkartLink.length)
    }
    return link
}

export default removeFlipkartURL;