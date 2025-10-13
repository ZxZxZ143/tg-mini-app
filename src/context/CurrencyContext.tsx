'use client';

import React, {
    createContext,
    useContext,
    useState,
    ReactNode, useEffect,
} from "react";
import {IUser} from "@/types/User";
import {useFetch} from "@/hooks/useFetch";
import {getUser} from "@/api/getUserInfo";
import {ICurrency} from "@/types/Curency";
import {getCurrency} from "@/api/getCurency";

interface CurrencyContextValue {
    currency: ICurrency | null;
    setCurrency: (user: ICurrency | null) => void;
    isLoading: boolean;
}

const CurrencyContext = createContext<CurrencyContextValue | undefined>(undefined);

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
    const [currency, setCurrency] = useState<ICurrency | null>(null);
    const {data, loading} = useFetch(getCurrency);

    useEffect(() => {
        setCurrency(data);
    }, [data])

    const value: CurrencyContextValue = {
        currency: currency,
        setCurrency: setCurrency,
        isLoading: loading,
    };

    return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>;
};

export const useCurrency = () => {
    const context = useContext(CurrencyContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
