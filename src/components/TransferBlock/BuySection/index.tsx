'use client'

import Image from "next/image";
import Button from "@/components/shared/Button";
import {useCurrency} from "@/context/CurrencyContext";
import Link from "next/link";
import { numberFormatterWithK} from "@/utils/formatter";

const BuySection = () => {
    const {currency} = useCurrency()

    return (
        <div className="p-3 bg-bg-buy-section rounded-md">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                    <Image src="/images/buySection.png" alt="drop points" width={50} height={50} className="w-10 h-10 rounded-full" />
                    <div className="flex flex-col gap-1">
                        <p className="text-xs text-t-secondary-buy-section">
                            Drop Points price:
                        </p>
                        <p>
                            {`${currency?.price} TON`}
                        </p>
                    </div>
                </div>
                <Link href="/buy-currency">
                    <Button className="w-fit px-5" variant="secondary">
                        Buy
                    </Button>
                </Link>
            </div>
            <p className="pt-4 mt-4 border-t-1 border-t-border-buy-section text-xxs">
                {`🔥 ${numberFormatterWithK.format(currency?.members || 0)} members & ${numberFormatterWithK.format(currency?.purchased || 0)} purchased`}
            </p>
        </div>
    );
};

export default BuySection;
