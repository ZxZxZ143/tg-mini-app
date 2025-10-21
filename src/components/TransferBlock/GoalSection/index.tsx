'use client'

import ProgressBar from "@/components/TransferBlock/GoalSection/ProgressBar";
import {useUser} from "@/context/UserContext";
import {floatFormater} from "@/utils/formatter";

const GoalSection = () => {
    const {user} = useUser();

    return (
        <div className="mb-4">
            <div className="flex items-center gap-0.5">
                <p className="text-xs text-t-transfer">
                    {`💎 Total funds raised ${floatFormater.format(user?.currentValue || 0)} TON`}
                </p>
            </div>
            <ProgressBar progress={user?.currentValue && user.goal ? (user?.currentValue / user?.goal) * 100 : 0} className="mt-4"/>
            <p className="text-xs text-t-transfer mt-4">
                {`First round goal ${floatFormater.format(user?.goal || 0)} TON`}
            </p>
        </div>
    );
};

export default GoalSection;
