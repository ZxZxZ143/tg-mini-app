'use client'

import {NavigationConfig} from "@/components/Navigation/config";
import NavigationItem from "@/components/Navigation/NavigationItem";
import {useState} from "react";

const Navigation = () => {
    const [active, setActive] = useState<number>(0);

    const setActiveHandler = (active: number) => {
        setActive(active);
    }

    return (
        <div className="sticky bg-bg-navigation bottom-0 left-0 w-full py-5 px-12 flex justify-between items-center">
            {
                NavigationConfig.map((item) => (
                    <NavigationItem key={item.id} isActive={active === item.id} Icon={item.Icon} onClick={() => setActiveHandler(item.id)} />
                ))
            }
        </div>
    );
};

export default Navigation;
