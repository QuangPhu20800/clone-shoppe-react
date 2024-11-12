import RegisterHeader from "../components/RegisterHeader";
import Footer from "../components/Footer";
import React from "react";

interface Props {
    children?: React.ReactNode
}
function RegisterLayout({children}: Props) {
    return (
        <>
            <RegisterHeader />
            {children}
            <Footer />
        </>
    );
}

export default RegisterLayout;