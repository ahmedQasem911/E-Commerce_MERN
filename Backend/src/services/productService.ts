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
        price: 1200,
        stock: 23,
      },
      {
        title: "ASUS Laptop",
        image:
          "https://www.asus.com/media/Odin/Websites/global/ProductLine/20200824120814.jpg",
        price: 3500,
        stock: 8,
      },
      {
        title: "Huawei Laptop",
        image:
          "https://consumer.huawei.com/dam/content/dam/huawei-cbg-site/me-africa/common/mkt/plp/laptops-new/matebook-x-series.jpg",
        price: 900,
        stock: 14,
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
