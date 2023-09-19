import React from 'react'

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Routers from "../../router/Routers";

const Layout = () => {
    return (
        <React.Fragment>
            <Header />
            <Routers />
            <Footer />
        </React.Fragment>
    );
}

export default Layout;