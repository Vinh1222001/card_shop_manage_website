import instance from "./configServices";

export const getAllProductService = async () => {
    const products = await instance.get(
        'products', 
        {
            params:{
                select: "*"
            }
        }
    )

    // console.log(products);
    
    return products
}