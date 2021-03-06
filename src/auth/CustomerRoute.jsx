// import necessary object from rrd
import { Outlet, Navigate } from "react-router-dom";

const CustomerRoute = ({ element: Component, ...rest }) => {
    // assume that user is not login yet
    const isSignin = true;

    return (
        isSignin ? <Outlet /> : <Navigate to="/" />
    );
};

export default CustomerRoute;