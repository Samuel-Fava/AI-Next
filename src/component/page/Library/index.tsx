"use client"

import { useState } from "react"
import { ButtonExt } from "@/component/common-component/button-ext"
import { Popover, PopoverContent, PopoverTrigger } from "@/component/common-component/popover"
import { LibraryIcon } from "@/component/common/icons"
import Header from "@/component/layout/Header"
import { Check, Ellipsis, Plus, Trash, Waves } from "lucide-react"
import { Dialog, DialogContent } from "@/component/common-component/dialog"
import Link from "next/link"

const Library = () => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [del, setDel] = useState("all")

    const delFunc = (e: string) => {
        setDel(e)
    }

    return (
        <div className="flex-col justify-center">

            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
                <DialogContent className="px-0 max-w-lg">
                    <div className="px-4 text-3xl font-bold">Delete Threads</div>
                    <div className='w-full h-[0.5px] bg-gray-200 '></div>
                    <div className="px-4 flex gap-1 flex-col">
                        <div className=" hover:bg-gray-200 p-2 rounded-xs cursor-pointer flex items-center justify-between" onClick={() => delFunc("all")}>
                            <div>
                                <span className={`font-bold ${del === "all" && "text-[#308995]"}`}>All Threads</span>
                                <p className="text-xs text-gray-500">All your threads will be deleted</p>
                            </div>
                            {del === "all" && <Check />}
                        </div>
                        <div className=" hover:bg-gray-200 p-2 rounded-xs cursor- flex items-center justify-between" onClick={() => delFunc("standalone")}>
                            <div>
                                <span className={`font-bold ${del === "standalone" && "text-[#308995]"}`}>Standalone Threads</span>
                                <p className="text-xs text-gray-500">Only your threads which are not part of a space will be deleted</p>
                            </div>
                            {del === "standalone" && <Check />}
                        </div>
                    </div>
                    <div className='w-full h-[0.5px] bg-gray-200 '></div>
                    <div className="px-4">
                        <div className="flex justify-end gap-3">
                            <button
                                onClick={() => setDialogOpen(false)}
                                className="bg-gray-300 px-6 p-2 rounded text-lg h-fit hover:text-gray-400 cursor-pointer"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={() => setDialogOpen(false)}
                                className="bg-red-500 px-6 py-2 rounded text-lg h-fit text-white hover:bg-red-300 cursor-pointer"
                            >
                                Delete Threads
                            </button>
                        </div>
                    </div>
                </DialogContent>
            </Dialog>

            <div className="text-white w-full max-w-4xl m-auto">
                <Header header={"Library"} Icon={LibraryIcon} />
            </div>

            <div className='w-full h-[1px] bg-[#303131] '></div>

            <div className="text-white w-full max-w-4xl m-auto p-12 flex justify-between">
                <span className="text-white font-medium text-lg flex gap-2 items-center"><Waves /> Threads</span>
                <div className="flex items-center gap-4">
                    <Popover>
                        <PopoverTrigger asChild>
                            <button className="bg-gray-700 px-2 py-4 text-white hover:bg-gray-600 !border-none rounded-sm cursor-pointer">
                                <div className="overflow-hidden text-left px-2">
                                    <Ellipsis className="h-4 w-4" />
                                </div>
                            </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-full p-0 bg-gray-700" align="start">
                            <div className="m-1">
                                <ButtonExt
                                    className="w-full bg-transparent hover:bg-gray-600 text-white justify-between !border-none"
                                    variant={"outline"}
                                    value="Delete"
                                    onClick={() => setDialogOpen(true)}
                                >
                                    <div className="flex items-center gap-2">
                                        <Trash />
                                        Delete Threads...
                                    </div>
                                </ButtonExt>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <Link href={"/"}>
                        <button className="text-white hover:bg-gray-700 py-4 px-2 rounded-sm cursor-pointer">
                            <div className="overflow-hidden text-left px-2">
                                <Plus className="h-4 w-4" />
                            </div>
                        </button>
                    </Link>
                </div>
            </div>

            <div className='h-[1px] bg-[#303131] max-w-4xl m-auto'></div>

            <div className="max-w-4xl p-4 bg-gray-600 rounded-sm m-auto text-gray-300 text-center py-12 mt-4">No threads yet </div>
        </div>
    )
}

export default Library
