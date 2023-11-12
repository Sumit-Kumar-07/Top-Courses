import React from "react";
// import "./spinner.css"

const Spinner = () => {
    return (
        <div className="flex flex-col items-center space-y-2">
            <div className="spinner pt-10">
            </div>
            <p className="text-white text-lg font-semibold pt-10">Loading...</p>
        </div>
    )
}

export default Spinner;