import React from "react";
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "./react-query-provider";

function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <ReactQueryProvider>
            {children}
            <Toaster />
        </ReactQueryProvider>
    );
}

export default Provider;
