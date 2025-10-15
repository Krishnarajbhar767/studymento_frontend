import React from "react";
import { Toaster } from "react-hot-toast";

function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <>
            {children}
            <Toaster />
        </>
    );
}

export default Provider;
