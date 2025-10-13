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

interface UserContextValue {
    user: IUser | null;
    setUser: (user: IUser | null) => void;
    isLoading: boolean;
}

const UserContext = createContext<UserContextValue | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<IUser | null>(null);
    const {data, loading} = useFetch(getUser);

    useEffect(() => {
        setUser(data);
    }, [data])

    const value: UserContextValue = {
        user,
        setUser,
        isLoading: loading,
    };

    return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error("useUser must be used within a UserProvider");
    }
    return context;
};
