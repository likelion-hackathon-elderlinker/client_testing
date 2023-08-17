import React from "react";

import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import FloatingButton from "./FloatingButton";

function MainLayout() {
    return (
        <>
            <Header />
            <Outlet />
            <FloatingButton />
            <Footer />
        </>
    );
}

export default MainLayout;
