import {UserProvider} from "@/context/UserContext";
import ContentWrapper from "@/components/ContentsWrapper";
import {CurrencyProvider} from "@/context/CurrencyContext";

export default function Home() {
    return (
        <>
            <CurrencyProvider>
                <UserProvider>
                    <ContentWrapper/>
                </UserProvider>
            </CurrencyProvider>
        </>
    );
}
