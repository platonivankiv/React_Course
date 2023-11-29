import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes, privateRoutes} from "../router";
import Posts from "../pages/Posts";
import Login from "../pages/Login";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext);

    if (isLoading) {
        return <Loader />
    }
    return (
        isAuth
            ? (
                <Routes>
                    {privateRoutes.map(route => (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
                    <Route path='*' element={<Navigate to="/posts" element={<Posts />}/>}/>
                </Routes>
                //

            )
            : (
                <Routes>
                    {publicRoutes.map(route => (
                        <Route
                            key={route.id}
                            path={route.path}
                            element={<route.component />}
                        />
                    ))}
                    <Route path='*' element={<Navigate to="/login" element={<Login />}/>}/>
                </Routes>
            )

    );

};

export default AppRouter;
