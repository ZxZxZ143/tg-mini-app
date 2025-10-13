import GoalSection from "@/components/TransferBlock/GoalSection";
import BuySection from "@/components/TransferBlock/BuySection";

const TransferBlock = () => {
    return (
        <div className="p-3 pt-6 border-1 border-border-transfer rounded-xl mt-5">
            <GoalSection />
            <BuySection />
        </div>
    );
};

export default TransferBlock;
