'use client'

import Image from "next/image";
import {useUser} from "@/context/UserContext";
import {intFormater} from "@/utils/formatter";

const UserHeader = () => {
    const {user} = useUser()

    return (
        <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
                <Image src="/images/user.jpg" alt="user image" width={45} height={45} className="w-[45px] h-[45px] rounded-full" />
                <div className="flex flex-col gap-1 min-w-0">
                    <p className="text-t-username break-all block truncate">
                        {user?.username}
                    </p>
                    <p className="text-t-rank text-xxs">
                        {`Your rank #${user?.rank}`}
                    </p>
                </div>
            </div>
            <div className="py-2 px-6 border-1 border-border-points rounded-md relative shrink-0">
                <p className="font-bold text-s ">
                    {intFormater.format(user?.points || 0)}
                </p>
                <p className="absolute left-1/2 -translate-x-1/2 -bottom-1/3 px-3 block bg-background text-xxs rounded-2xl">
                    Points
                </p>
            </div>
        </div>
    );
};

export default UserHeader;
