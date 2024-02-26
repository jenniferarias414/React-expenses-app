import React from 'react';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import AuthScreen from './screens/AuthScreen';

const Router = () => {
    const router = createBrowserRouter([
        {
            index: true,
            element: <AuthScreen />
        },
        {
            path: '/app',
            element: <App />
        }
    ])
    return (
        <RouterProvider router={router} />
    )
}

export default Router