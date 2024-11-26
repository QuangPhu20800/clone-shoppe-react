import { useRoutes } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import ProductList from "./pages/ProductList";
import RegisterLayout from "./layouts/RegisterLayout";
function App() {
  const routeElements = useRoutes([
    {
      path: '/',
      element: <ProductList />
    },
    {
      path: '/register',
      element: <RegisterLayout> <Register /> </RegisterLayout>
    },
    {
      path: '/login',
      element: <RegisterLayout> <Login /> </RegisterLayout>
    }
  ])
  return routeElements
}

export default App
