import type { Product } from "../types/product";

export const products: Product[] = [
    {
        id: "p001",
        categoryId: "indoor",
        productName: "Monstera Deliciosa",
        description:
            "A beautiful tropical plant with large split leaves. Perfect for indoor spaces.",
        price: 899,
        imageUrl:
            "https://images.unsplash.com/photo-1614594975525-e45190c55d0b",
        status: "active",
        stock: 12,
    },
    {
        id: "p002",
        categoryId: "succulent",
        productName: "Aloe Vera",
        description:
            "An easy-to-care-for succulent that thrives in bright indoor spaces.",
        price: 399,
        imageUrl:
            "https://images.unsplash.com/photo-1596547609652-9cf5d8b5a4f4",
        status: "active",
        stock: 20,
    },
    {
        id: "p003",
        categoryId: "indoor",
        productName: "Snake Plant",
        description:
            "A hardy indoor plant known for its striking upright leaves.",
        price: 599,
        imageUrl:
            "https://images.unsplash.com/photo-1593482892290-f54927ae2c88",
        status: "active",
        stock: 15,
    },
    {
        id: "p004",
        categoryId: "flowering",
        productName: "Peace Lily",
        description:
            "Elegant white flowers and lush green leaves make this a great home plant.",
        price: 699,
        imageUrl:
            "https://images.unsplash.com/photo-1593691509543-c55fb32e5cee",
        status: "active",
        stock: 8,
    },
];
