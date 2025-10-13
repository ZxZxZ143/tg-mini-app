'use client'

import {FC, PropsWithChildren, useEffect} from "react";
import {init} from "@telegram-apps/sdk";

const TelegramInit: FC<PropsWithChildren> = ({children}) => {
    useEffect(() => {
        const isInTelegram = typeof window !== 'undefined' && window.Telegram?.WebApp;

        if (isInTelegram) {
            init();
        } else {
            console.warn('App not launched inside Telegram WebView — skipping init()');
        }
    }, [])

    return (
        <>
            {children}
        </>
    )
};

export default TelegramInit;
