import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";

const rootRoutes = createBrowserRouter([
    {
        element: <RootLayout/>,
        path: "/",
        children:[

        ]
    }
])

export default rootRoutes