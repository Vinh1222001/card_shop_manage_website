import { Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { getAllProductsSelector } from "../../stores/selectors/productSelectors";

export default function SideNavigateBar() {

    const products = useSelector(getAllProductsSelector)
    // console.log(products);
    
    return(
        <Stack>
            <Typography variant="h4">
                Side Navigate Bar
                {products.products.length}
            </Typography>
        </Stack>
    )
}