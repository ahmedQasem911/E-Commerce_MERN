import productModel from "../models/productModel";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts = async () => {
  try {
    const products = [
      {
        title: "MSI Laptop",
        image:
          "https://storage-asset.msi.com/global/picture/image/feature/nb/GT/GT77-13V/images/kv-laptop.png",
        price: 1000,
        stock: 23,
      },
    ];

    const existingProducts = await getAllProducts();

    if (existingProducts.length === 0) {
      await productModel.insertMany(products);
    }
  } catch (err) {
    console.error("Cannot see database!", err);
  }
};
