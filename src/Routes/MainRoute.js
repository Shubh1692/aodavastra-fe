import React, { Suspense, lazy } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PublicRoute from "../Routes/Public";
import PrivateRoute from "../Routes/Private"

const SignUpComponent = lazy(() => import('../Components/SignUp'))
const Login = lazy(() => import('../Components/Login'))
const RecoverComponent = lazy(() => import('../Components/Login/RecoverPassword'))
const ConfirmPassword = lazy(() => import('../Components/Login/ConfirmPassword'))
const Home = lazy(() => import('../Components/Home'))
const Profile = lazy(() => import('../Components/Profile'))
const Orders = lazy(() => import('../Components/Orders'));
const UpdatePassword = lazy(() => import('../Components/Profile/updatePassword'));
const Addresses = lazy(() => import('../Components/Addresses'));
const Wishlist = lazy(() => import('../Components/Wishlist'));

const masterComponent = () => {
    return (
        <div>
            {/* <ErrorSnackbar ref={r => ToasterService._ref = r} /> */}
            <Suspense fallback={<CircularProgress color="secondary" size={200} thickness={1} />}>
                <Routes>
                    <Route path='/register' element={<PublicRoute component={<SignUpComponent />} />}></Route>
                    <Route path='/login' element={<PublicRoute component={<Login />} />}></Route>
                    <Route path='/recover-password' element={<PublicRoute component={<RecoverComponent />} />}></Route>
                    <Route path='/password-reset-confirm/:token' element={<PublicRoute component={<ConfirmPassword />} />}></Route>
                    <Route path='/profile' element={<PublicRoute component={<Profile />} />}></Route>
                    <Route path='/orders' element={<PublicRoute component={<Orders />} />}></Route>
                    <Route path='/wishlist' element={<PublicRoute component={<Wishlist />} />}></Route>
                    <Route path='/addresses' element={<PublicRoute component={<Addresses />} />}></Route>
                    <Route path='/change-password' element={<PublicRoute component={<UpdatePassword />} />}></Route>
                    <Route path='/' element={<PrivateRoute component={<Home />} />}></Route>
                </Routes>
            </Suspense>
            <ToastContainer />
        </div>
    )
}
export default masterComponent;