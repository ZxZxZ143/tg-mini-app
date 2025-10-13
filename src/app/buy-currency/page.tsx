import Input from "@/components/Input";
import ExpTime from "@/components/ExpTime";
import Button from "@/components/shared/Button";

const BuyCurrency = () => {
    return (
        <div className="relative w-full h-screen">
            <div className="px-8 left-0 absolute top-1/2 -translate-y-1/2 h-fit w-full flex flex-col gap-5">
                <div>
                    <Input />
                    <p className="text-xs text-t-input mt-2 block text-center">You must buy at least 100 points</p>
                </div>
                <ExpTime />
                <Button>Buy</Button>
            </div>
        </div>

    );
};

export default BuyCurrency;
