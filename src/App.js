import { RouterProvider } from "react-router-dom";
import rootRoutes from "./routes/rootRoutes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllProducts } from "./stores/slices/productSlide";

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchAllProducts())
  }, [dispatch])

  return (
    <RouterProvider router={rootRoutes}/>
  );
}

export default App;
