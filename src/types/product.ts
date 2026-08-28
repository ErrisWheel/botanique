export interface Product {
    id: string;
    categoryId: string;
    productName: string;
    description: string;
    price: number;
    imageUrl: string;
    status: "active" | "inactive";
    stock: number;
}