
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  category: string;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface BuildingDimension {
  width: number;
  height: number;
  length?: number;
  unit: 'meters' | 'feet' | 'inches';
  confidence: number;
}

export interface ImageAnalysisResult {
  dimensions?: BuildingDimension;
  error?: string;
}
