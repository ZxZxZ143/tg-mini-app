import {Currency} from "@/mocks/Currency";
import {ICurrency} from "@/types/Curency";

export async function getCurrency(): Promise<ICurrency> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(Currency);
        }, 1000);
    });
}
