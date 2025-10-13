'use client'

import UserHeader from "@/components/UserHeader";
import UserInfo from "@/components/UserInfo";
import TransferBlock from "@/components/TransferBlock";
import TransferInfo from "@/components/TransferInfo";
import {useUser} from "@/context/UserContext";
import {useCurrency} from "@/context/CurrencyContext";

const ContentWrapper = () => {
    const {isLoading} = useUser()
    const {isLoading: isLoadingCurrency} = useCurrency()

    const renderContent = () => {
        if (isLoading && isLoadingCurrency) {
            return <div className="absolute w-10 h-10 rounded-full border-3 border-border-spinner border-t-transparent animate-spin top-1/2 left-1/2 -translate-1/2"/>
        } else {
            return (
                <div>
                    <UserHeader/>
                    <UserInfo/>
                    <TransferBlock/>
                    <TransferInfo/>
                </div>
            )
        }
    }

    return (
        <>
            {
                renderContent()
            }
        </>
    )
};

export default ContentWrapper;
