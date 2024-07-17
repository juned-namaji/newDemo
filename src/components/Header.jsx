import React from "react"

const Header = (props) => {
    return (
        <div>
            <header className="flex justify-between p-5 bg-blue-500 text-white">
                <label className="text-xl bg-blue-600 p-2">Total Investment</label>
                <label className="text-xl bg-blue-600 p-2">Current Value</label>
            </header>
        </div>
    )
};

export default Header;
