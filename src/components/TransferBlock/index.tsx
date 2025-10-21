import GoalSection from "@/components/TransferBlock/GoalSection";
import BuySection from "@/components/TransferBlock/BuySection";
import Button from "@/components/shared/Button";

const TransferBlock = () => {
    return (
        <div className="p-3 pt-6 border-1 border-border-transfer rounded-xl mt-5">
            <GoalSection />
            <BuySection />
            <Button className="w-full mt-[15px]">
                Get drop points!
            </Button>
        </div>
    );
};

export default TransferBlock;
