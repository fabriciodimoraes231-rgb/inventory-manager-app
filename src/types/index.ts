export interface InventoryItem {
  id: string;
  name: string;
  description: string;
  category: string;
  location: string;
  quantity: number;
  tags: string[];
  photos: string[];
  manuals: Document[];
  documents: Document[];
  trainings: Document[];
  createdAt: Date;
  updatedAt: Date;
  barcode?: string;
  serialNumber?: string;
  purchaseDate?: Date;
  warrantyExpiry?: Date;
  supplier?: string;
  cost?: number;
}

export interface Document {
  id: string;
  name: string;
  type: 'pdf' | 'image' | 'video' | 'audio' | 'other';
  uri: string;
  size: number;
  createdAt: Date;
}

export interface Category {
  id: string;
  name: string;
  color: string;
  icon: string;
}

export interface SearchFilters {
  category?: string;
  location?: string;
  tags?: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
}

export type RootStackParamList = {
  Home: undefined;
  ItemList: undefined;
  ItemDetail: { itemId: string };
  AddItem: undefined;
  EditItem: { itemId: string };
  Search: undefined;
  Categories: undefined;
  Settings: undefined;
};