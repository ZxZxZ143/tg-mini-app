'use client'

import Image from "next/image";
import {useUser} from "@/context/UserContext";

const UserHeader = () => {
    const {user} = useUser()

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <Image src="/images/user.jpg" alt="user image" width={48} height={48} className="w-12 h-12 rounded-full" />
                <div className="flex flex-col gap-1">
                    <p className="text-t-username">
                        {user?.username}
                    </p>
                    <p className="text-t-rank text-xs">
                        {`Your rank #${user?.rank}`}
                    </p>
                </div>
            </div>
            <div className="py-2 px-6 border-1 border-border-points rounded-md relative">
                <p className="font-bold text-s ">
                    {user?.points}
                </p>
                <p className="absolute left-1/2 -translate-x-1/2 -bottom-1/3 px-3 block bg-background text-xxs rounded-2xl">
                    Points
                </p>
            </div>
        </div>
    );
};

export default UserHeader;
