import React from "react"

const Suggestions = (props) => {
    const investments = [
        { name: 'Mutual Fund A', invested: 5000, currentValue: 5500, returns: '10%' },
        { name: 'Mutual Fund B', invested: 10000, currentValue: 11000, returns: '10%' },
        { name: 'Mutual Fund C', invested: 15000, currentValue: 16500, returns: '10%' },
        { name: 'Mutual Fund D', invested: 20000, currentValue: 22000, returns: '10%' },
    ];
    return (
        <div>
            <div className="flex flex-col items-center my-8 w-11/12 md:w-2/3 lg:w-1/2 mx-auto">
                {investments.map((investment, index) => (
                    <div className="border border-gray-300 p-5 my-5 w-full shadow-lg flex flex-col items-start" key={index}>
                        <p className="font-bold text-lg">{investment.name}</p>
                        <p>Invested = {investment.invested}</p>
                        <p>Current Value = {investment.currentValue}</p>
                        <p>Returns = {investment.returns}</p>
                        <div className="flex justify-between w-full mt-3">
                            <button className="bg-blue-500 text-white py-2 px-4 rounded">Add</button>
                            <button className="bg-blue-500 text-white py-2 px-4 rounded">Withdraw</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
};

export default Suggestions;
