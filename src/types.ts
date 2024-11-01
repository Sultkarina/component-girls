// types.ts
export interface Card {
    image: string;
    name: string;
    city: string;
    verified: boolean;
    rating: number;
    age: number | null;
    chest: number | null;
    weight: number | null;
    height: number | null;
    description: string;
    prices: Prices;
    phone: string;
    telegram: string;
    whatsapp: string;
  }
  
  export interface Prices {
    oneHour: string | null;
    twoHours: string | null;
    night: string | null;
    express: string | null;
  }
  
  export interface CardStoreState {
    card: Card;
  }
  