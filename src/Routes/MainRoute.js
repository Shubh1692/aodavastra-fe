import React, {Suspense, lazy } from 'react'
import { Routes, Route } from "react-router-dom";
import PublicRoute from "../Routes/Public";
import CircularProgress from '@mui/material/CircularProgress';
import { Login } from '../Components/Login';
import { Profile } from '../Components/Profile';

export const MainRoute = () => {
    return (
        <div>
            <Suspense fallback={<CircularProgress color="secondary" size={200} thickness={1} />}>
                <Routes>
                    <Route path='/' element={<PublicRoute component={<Login />} />}></Route>
                    <Route path='/profile' element={<PublicRoute component={<Profile />} />}></Route>
                </Routes>
            </Suspense>
        </div>
    )
}