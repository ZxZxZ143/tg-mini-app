'use client'

import {useState} from "react";
import {Button, InputNumber} from "antd";
import {MinusOutlined, PlusOutlined} from "@ant-design/icons";

const Input = () => {
    const [value, setValue] = useState(2000.75);
    const minValue = 100;

    const handleDecrease = () => {
        if (value > minValue) {
            setValue(prev => Math.max(minValue, prev - 100));
        }
    };

    const handleIncrease = () => {
        setValue(prev => prev + 100);
    };

    return (
            <div className="bg-input rounded-md py-4 w-full px-16">
                <div className="flex items-center justify-between gap-0.5">
                    <button
                        onClick={handleDecrease}
                        disabled={value <= minValue}
                        className="w-6 h-6 bg-icon-input rounded-full flex items-center justify-center"
                    >
                        <MinusOutlined className="[&_*]:fill-input"  />
                    </button>

                    <input
                        value={value}
                        type="number"
                        onChange={(val) => setValue(Number(val.target.value) || minValue)}
                        min={minValue}
                        className="text-center text-3xl font-bold bg-transparent max-w-30 focus:outline-none"
                    />

                    <button
                        onClick={handleIncrease}
                        className="w-6 h-6 bg-icon-input rounded-full flex items-center justify-center"
                    >
                        <PlusOutlined className="[&_*]:fill-input"/>
                    </button>
                </div>
            </div>
    );
};

export default Input;
