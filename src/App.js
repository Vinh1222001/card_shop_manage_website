import { RouterProvider } from "react-router-dom";
import rootRoutes from "./routes/rootRoutes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchAllProducts } from "./stores/slices/productSlide";
import { getAuthenticatedAdminSelector } from "./stores/selectors/adminSelector";

function App() {

  const dispatch = useDispatch()

  useEffect(()=>{
    dispatch(fetchAllProducts())
  }, [dispatch])

  const admin = useSelector(getAuthenticatedAdminSelector)

  console.log(admin);
  

  return (
    <RouterProvider router={rootRoutes}/>
  );
}

export default App;
