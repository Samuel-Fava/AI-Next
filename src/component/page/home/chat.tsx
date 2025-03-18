"use client"

import { Atom, Lightbulb, LoaderPinwheel, Shuffle } from "lucide-react";
import { FaGlobe, FaPaperclip, FaArrowRight } from "react-icons/fa";
import ComboboxExt from "../../common-component/combobox";


const ChatText = () => {
    const onValueChange = () => {

    }
    const options = [
        {
            title: "Auto",
            icon: Shuffle,
            description: "Adapts to each query"
        },
        {
            title: "Pro",
            icon: LoaderPinwheel,
            description: "3x more sources and detailed answers"
        },
        {
            title: "Reasoning",
            icon: Lightbulb,
            description: "Advanced problem solving"
        },
        {
            title: "Deep Research",
            icon: Atom,
            description: "In-depth reports on complex topics"
        }
    ]
    return (
        <div className="relative w-full border border-gray-600 max-w-4xl mb-4 bg-gray-800 rounded-xl block items-center p-4">
            <input
                type="text"
                placeholder="Ask anything..."
                className="flex-1 bg-transparent text-white focus:outline-none placeholder-gray-400"
            />

            <div className="w-full justify-between mt-8 flex items-center rounded-lg">
                <ComboboxExt
                    onFilterChange={() => onValueChange()}
                    options={options}
                    value="Auto"
                />
                <div className="flex">
                    <button className="mx-2 text-gray-400 hover:text-white">
                        <FaGlobe />
                    </button>
                    <button className="mx-2 text-gray-400 hover:text-white">
                        <FaPaperclip />
                    </button>
                    <button className="bg-gray-700 p-2 rounded-3xl text-gray-400 hover:bg-gray-600">
                        <FaArrowRight />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ChatText