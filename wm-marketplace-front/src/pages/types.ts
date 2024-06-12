export interface I_ProductDetails {
  id: number;
  slug?: string;
  imgSrc: string;
  title: string;
  priceRegular: number;
  priceDiscounted?: number;
  top?: boolean;
  desc: string;
}
