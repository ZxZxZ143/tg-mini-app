import {IUser} from "@/types/User";
import {User} from "@/mocks/user";

export async function getUser(): Promise<IUser> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(User);
        }, 1000);
    });
}
