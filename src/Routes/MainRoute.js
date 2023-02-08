import React, { Suspense, lazy, useState, useEffect } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import { Route, Routes, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { Grid } from "@mui/material";
import EmptyBag from "../Components/EmptyBag";
import "react-toastify/dist/ReactToastify.css";
import { withCookies } from "react-cookie";
import AuthService from "../Services/Auth.service";

const SignUpComponent = lazy(() => import("../Components/SignUp"));
const Login = lazy(() => import("../Components/Login"));
const RecoverComponent = lazy(() =>
  import("../Components/Login/recoverPassword")
);
const ConfirmPassword = lazy(() =>
  import("../Components/Login/confirmPassword")
);
const Home = lazy(() => import("../Components/Home"));
const Feed = lazy(() => import("../Components/Feed"));
const Profile = lazy(() => import("../Components/Profile"));
const Orders = lazy(() => import("../Components/Orders"));
const OrdersDetails = lazy(() => import("../Components/Orders/ordersDetails"));
const UpdatePassword = lazy(() =>
  import("../Components/Profile/updatePassword")
);
const AddressAction = lazy(() =>
  import("../Components/Addresses/addressAction")
);
const Wishlist = lazy(() => import("../Components/Wishlist"));
const Address = lazy(() => import("../Components/Addresses"));
const Dashboard = lazy(() => import("../Components/Home/dashboard"));
const CreatorDashboard = lazy(() => import("../Components/CreatorDashboard"));
const Checkout = lazy(() => import("../Components/Checkout"));
const ProductByCategory = lazy(() =>
  import("../Components/Products/ProductsByCategory")
);
const ProductsById = lazy(() => import("../Components/Products/ProductsById"));
const JewelleryProduct = lazy(() => import("../Components/JewelleryProducts"));
const SearchComponent = lazy(() => import("../Utils/Common/searchComponent"));

const MasterComponent = ({ cookies }) => {
  const [authenticateLoading, setAuthLoading] = useState(true);
  const [user, setUser] = useState(null);
  const token = cookies.get("token");
  useEffect(() => {
    const validateUser = async () => {
      try {
        if (!token) {
          return setAuthLoading(false);
        }
        const response = await AuthService.userGet();
        console.log('response?.data?.token', response?.data?.token)
        if (response?.data?.token) {
          cookies.set("token", response.data.token);
          setUser(response.user);
        } else {
          cookies.remove("token");
        }
        setAuthLoading(false);
      } catch (error) {
        console.log('called ======== error ')
        cookies.remove("token");
        setAuthLoading(false);
      }
    };
    validateUser();
  }, []);
  if (authenticateLoading) {
    return (
      <>
        <CircularProgress color="secondary" size={200} thickness={1} />
      </>
    );
  }
  return (
    <>
      <Suspense
        fallback={
          <Grid
            sx={{
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress color="secondary" size={200} thickness={1} />
          </Grid>
        }
      >
        {token ? (
          <main className="private-main">
            <div className="private-container">
              <Routes>
                <Route path="/profile" element={<Profile />}></Route>
                <Route path="/orders" element={<Orders />}></Route>
                <Route path="/wishlist" element={<Wishlist />}></Route>
                <Route
                  path="/change-password"
                  element={<UpdatePassword />}
                ></Route>
                <Route path="/address" element={<Address />}></Route>
                <Route path="/address/add" element={<AddressAction />}></Route>
                <Route
                  path="/address/edit/:id"
                  element={<AddressAction />}
                ></Route>
                <Route path="/feed" element={<Feed />}></Route>
                <Route path="/dashboard" element={<Dashboard />}></Route>
                <Route path="/search" element={<SearchComponent />}></Route>
                <Route
                  path="/dashboard/clothes"
                  element={<ProductByCategory />}
                ></Route>
                <Route
                  path="/dashboard/clothes/:id"
                  element={<ProductsById />}
                ></Route>
                {/* Product by category end  */}

                {/* bag start */}
                <Route path="/emptybag" element={<EmptyBag />}></Route>
                <Route path="/jewellery" element={<JewelleryProduct />}></Route>
                <Route
                  path="/orders/:orderId"
                  element={<OrdersDetails />}
                ></Route>
                <Route path="/checkout" element={<Checkout />}></Route>
                {/* bag end */}

                <Route path="/creator" element={<CreatorDashboard />}></Route>
                <Route path="/" element={<Home />}></Route>
                <Route path="*" element={<Navigate replace to="/" />} />
              </Routes>
            </div>
          </main>
        ) : (
          <main className="public-main">
            <div className="public-container">
              <Routes>
                <Route path="/register" element={<SignUpComponent />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route
                  path="/recover-password"
                  element={<RecoverComponent />}
                ></Route>
                <Route
                  path="/password-reset-confirm/:token"
                  element={<ConfirmPassword />}
                ></Route>
                <Route path="*" element={<Navigate replace to="/login" />} />
              </Routes>
            </div>
          </main>
        )}
      </Suspense>
      <ToastContainer />
    </>
  );
};
export default withCookies(MasterComponent);
