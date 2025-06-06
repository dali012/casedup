//bg-blue-950 border-blue-950
//bg-rose-950 border-rose-950
//bg-zinc-900 border-zinc-900

import { PRODUCT_PRICES } from "@/config/products";

export const COLORS = [
  {
    label: "Black",
    value: "black",
    tw: "zinc-900",
  },
  {
    label: "Blue",
    value: "blue",
    tw: "blue-950",
  },
  {
    label: "Rose",
    value: "rose",
    tw: "rose-950",
  },
] as const;

export const MODELS = {
  name: "models",
  options: [
    {
      label: "iPhone X",
      value: "iphonex",
    },
    {
      label: "iPhone 11",
      value: "iphone11",
    },
    {
      label: "iPhone 12",
      value: "iphone12",
    },
    {
      label: "iPhone 13",
      value: "iphone13",
    },
    {
      label: "iPhone 14",
      value: "iphone14",
    },
    {
      label: "iPhone 15",
      value: "iphone15",
    },
  ],
} as const;

export const MATERIALS = {
  name: "material",
  options: [
    {
      label: "Silicone",
      value: "silicone",
      description: "Provides a good grip.",
      price: PRODUCT_PRICES.material.silicone,
    },
    {
      label: "Polycarbonate",
      value: "polycarbonate",
      description: "Lightweight and strong",
      price: PRODUCT_PRICES.material.polycarbonate,
    },
    {
      label: "Leather",
      value: "leather",
      description: "Premium look and feel",
      price: PRODUCT_PRICES.material.leather,
    },
  ],
} as const;

export const FINISHES = {
  name: "finish",
  options: [
    {
      label: "Matte",
      value: "matte",
      description: "Smooth and non-reflective",
      price: PRODUCT_PRICES.finish.matte,
    },
    {
      label: "Glossy",
      value: "glossy",
      description: "Shiny and reflective",
      price: PRODUCT_PRICES.finish.glossy,
    },
    {
      label: "Textured",
      value: "textured",
      description: "Offers a unique appearance.",
      price: PRODUCT_PRICES.finish.textured,
    },
  ],
} as const;
