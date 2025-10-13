'use client'

import {ChangeEvent, useState,} from "react";

const ExpTime = () => {
    const [currency, setCurrency] = useState('TON');
    const [amount, setAmount] = useState('200.7500');

    const handleAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        if (/^\d*\.?\d*$/.test(value)) {
            setAmount(value);
        }
    };

    const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setCurrency(e.target.value);
    }

    return (
        <div className="w-full flex gap-3 text-t-input">
            <select
                value={currency}
                onChange={handleChange}
                defaultValue='TON'
                className="bg-input py-4 pl-6 pr-3 rounded-md focus:outline-none"
            >
                {
                    [
                        {value: 'TON', label: 'TON'},
                        {value: 'USDT', label: 'USDT'},
                        {value: 'BTC', label: 'BTC'},
                        {value: 'ETH', label: 'ETH'},
                    ].map((item) => (
                        <option key={item.value} value={item.value}>{
                            item.label
                        }</option>
                    ))
                }
            </select>

            <div className="flex-1 bg-input px-6 py-4 rounded-md">
                <input
                    type="text"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="0.0000"
                    className="w-full bg-transparent border-none outline-none"
                />
            </div>
        </div>
    );
};

export default ExpTime;
