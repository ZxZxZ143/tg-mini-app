'use client'

import {FC, PropsWithChildren, useEffect} from "react";
import {init, retrieveLaunchParams} from "@telegram-apps/sdk";

const TelegramInit: FC<PropsWithChildren> = ({children}) => {
    useEffect(() => {
        try {
            init();
            console.log('Telegram SDK initialized successfully');
        } catch (error) {
            console.warn('App not launched inside Telegram WebView:', error);
        }
    }, []);

    return <>{children}</>;
};

export default TelegramInit;
