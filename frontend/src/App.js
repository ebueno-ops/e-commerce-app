import {BrowserRouter, Route, Routes} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from "./components/NavBar";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import ProductsPage from "./components/ProductsPage";
import ProtectedRoute from "./components/ProtectedRoute";
import AdminDashboard from "./components/AdminDashboard";
import SellerDashboard from "./components/SellerDashboard";
import AddProduct from "./components/AddProduct";

function App() {
  return (
    <BrowserRouter>
        <NavBar />
        <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/home" element={<HomePage />}/>
            <Route path="/products" element={<ProductsPage />}/>
            <Route path="/login" element={<LoginPage />}/>

            {/*admin routes*/}
            <Route element={<ProtectedRoute authRole="admin" />}>
                <Route path={"/admin-dashboard"} element={<AdminDashboard/>}/>
                <Route path={"/products/add"} element={<AddProduct/>}/>
            </Route>
            {/*seller routes*/}
            <Route element={<ProtectedRoute authRole="seller" />}>
                <Route path={"/seller-dashboard"} element={<SellerDashboard/>}/>
            </Route>

        </Routes>
    </BrowserRouter>
  );
}

export default App;
