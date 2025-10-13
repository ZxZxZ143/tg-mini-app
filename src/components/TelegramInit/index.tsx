'use client'

import { FC, PropsWithChildren, useEffect } from "react";
import { init, retrieveLaunchParams } from "@telegram-apps/sdk";

const TelegramInit: FC<PropsWithChildren> = ({ children }) => {
    useEffect(() => {
        if (typeof window === 'undefined') {
            return;
        }

        try {
            const launchParams = retrieveLaunchParams();

            if (launchParams) {
                init();
                console.log('Telegram SDK initialized successfully');

                if (window.Telegram?.WebApp) {
                    window.Telegram.WebApp.ready();
                    window.Telegram.WebApp.expand();
                }
            }
        } catch (error) {
            console.warn('App not launched inside Telegram WebView:', error);
        }
    }, []);

    return <>{children}</>;
};

export default TelegramInit;
