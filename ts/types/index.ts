
export interface CartItem {
    productId: string,
    quantity: number,
    deliveryOptionId: string,
}

export type Cart = CartItem[]


export interface ProductRating {
    stars: number 
    count: number 
}

export interface ProductBase {
    id: string
    image: string
    name: string
    rating: ProductRating
    priceCents: number
    keywords: string[]
}

export interface Product extends ProductBase {
  getURL(): string;
  getFormattedPrices(): string;
  extraInfo(): string;
}

export interface ClothingProduct extends Product {
  type: string;
  sizeChartLink: string;
}

export interface ApplianceProduct extends Product {
  instructionLink: string;
  warrantyLink: string;
}

export interface DeliveryOption {
  id: string;
  deliveryDays: number;
  priceCents: number;
}

export interface Order {
  id: string;
  timestamp: number;
  cart: CartItem[];
  
}


