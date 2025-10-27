import React from "react";
import { Toaster } from "react-hot-toast";
import ReactQueryProvider from "./react-query-provider";

function Provider({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <ReactQueryProvider>
            {children}
            <Toaster
                containerStyle={{
                    textAlign: "center",
                    textTransform: "capitalize",
                }}
            />
        </ReactQueryProvider>
    );
}

export default Provider;
