import React, { Suspense, lazy } from 'react'
import CircularProgress from '@mui/material/CircularProgress';
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PublicRoute from "../Routes/Public";
import PrivateRoute from "../Routes/Private"

const Login = lazy(() => import('../Components/Login'))
const Profile = lazy(() => import('../Components/Profile'))
const SignUpComponent = lazy(() => import('../Components/SignUp'))
const RecoverComponent = lazy(() => import('../Components/Login/RecoverPassword'))
const Home = lazy(() => import('../Components/Home'))
const ConfirmPassword = lazy(() => import('../Components/Login/ConfirmPassword'))

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
                    <Route path='/' element={<PrivateRoute component={<Home />} />}></Route>
                </Routes>
            </Suspense>
            <ToastContainer />
        </div>
    )
}
export default masterComponent;