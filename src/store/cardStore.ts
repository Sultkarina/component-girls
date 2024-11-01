import { defineStore } from "pinia";
import { CardStoreState } from "@/types";

export const useCardStore = defineStore("cardStore", {
  state: (): CardStoreState => ({
    card: {
      image: "/images/girls1.png",
      name: "Сонечка",
      city: "Санкт-Петербург",
      verified: true,
      rating: 5.0,
      age: 21,
      chest: 3,
      weight: 60,
      height: 166,
      description:
        "Привет! Я София — стильная, красивая и умная спутница для незабываемых встреч.",
      prices: {
        oneHour: "50 000",
        twoHours: "100 000",
        night: "150 000",
        express: "25 000",
      },
      phone: "+7 (927) 032-00-00",
      telegram: "username",
      whatsapp: "+79270320000",
    },
  }),
});
