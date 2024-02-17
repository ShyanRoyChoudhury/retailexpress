export interface Product {
    "name": string | null,
    "current_price": number | null,
    "original_price": number | null,
    "discounted": boolean,
    "discount_percent": number | null,
    "rating": number | null,
    "in_stock": boolean,
    "f-assured": boolean,
    "share_url": string,
    "seller": {
      "seller_name": string,
      "seller_rating": number | null
    } | null,
    "thumbnails": [ string ],
    "highlights": [ string ],
    "offers": [
      {
        "offer_type": string | null,
        "description": string
      }
    ]
    "specs": [
      {
        "title": String
        "details": [
          {
            "property": String,
            "value": String
          }
        ]
      }
    ]
}