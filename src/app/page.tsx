import {UserProvider} from "@/context/UserContext";
import ContentWrapper from "@/components/ContentsWrapper";
import {CurrencyProvider} from "@/context/CurrencyContext";

export default function Home() {
    return (
        <div className="px-8 my-5">
            <CurrencyProvider>
                <UserProvider>
                    <ContentWrapper/>
                </UserProvider>
            </CurrencyProvider>
        </div>
    );
}
