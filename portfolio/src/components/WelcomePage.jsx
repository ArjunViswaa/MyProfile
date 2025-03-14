import React from 'react';
import Confetti from "react-confetti";

function WelcomePage() {
    const name = localStorage.getItem("Username");
    const onClose = () => {
        
    }
    const onProceed = () => {
        console.log("Proceed to Dashboard");
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="bg-[#181818] text-white p-6 rounded-lg shadow-lg w-[400px]">
                <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold">
                        <span className="mr-2">👋</span>Hi {name}
                    </h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-200">✖</button>
                    </div>
                    <p className="mt-4 text-gray-300">
                        Thanks for stopping by! I’m really excited to share my work with you.
                    </p>
                    <p className="mt-2 text-gray-300">
                        Just click on any card to dive deeper into the project details and see
                        what I’ve been up to. Take your time, explore, and have fun!
                    </p>
                    <div className="flex justify-end mt-6 space-x-4">
                    <button
                        onClick={onProceed}
                        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
                    >
                        Proceed to Dashboard
                    </button>
                </div>
            </div>
        </div>
    )
}

export default WelcomePage