import { createContext, useContext, useState } from "react";

const loginStatusContext = createContext();

export function useLoginStatus() {
    return useContext(loginStatusContext);
}