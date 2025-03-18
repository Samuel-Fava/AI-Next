"use client"

import { useState } from "react"
import { ChartLine, EllipsisVertical, FileBadge2, FileText, GraduationCap, Info, LibraryBig, MessageSquareText, PanelLeft, Plus, SendHorizontal, SquareMenu, Upload } from "lucide-react"
import NotebookUpload from "./upload"

const Notebook = () => {
    const [dialogOpen, setDialogOpen] = useState(false)
    const [video, setVideo] = useState(null);

    const handleFileChange = (e: any) => {
        setVideo(e.target.files[0]);
    };
    return (
        <>
            <NotebookUpload open={dialogOpen} setOpen={setDialogOpen} />
            <div className="p-4 flex gap-8 items-center">
                <div className="bg-white p-2 rounded-full">
                    <LibraryBig className="h-8 w-8" />
                </div>
                <h1 className="text-white text-3xl">Untitled notebook</h1>
            </div>
            <div className="text-white flex gap-2 w-full p-4 h-[90%]">

                <div className="w-1/4 bg-gray-700 rounded-xl">
                    <div className="flex justify-between p-4">
                        <span>Source</span>
                        <PanelLeft />
                    </div>
                    <div className='w-full h-[1px] bg-[#727575] '></div>
                    <div className="p-4 h-full">
                        <button className="w-full p-2 border border-[#727575] rounded-3xl flex justify-center items-center gap-1 hover:bg-gray-600" onClick={() => setDialogOpen(true)}>
                            <Plus className="mt-[-2px]" />
                            Add source
                        </button>
                        <div className="flex flex-col justify-center items-center text-center h-full">
                            <FileText className="h-15 w-15" />
                            <div>Saved sources will appear here</div>
                            <div>Click Add above to add PDFs, websites, text, videos, or audio files, Or import a file directly from Google Drive.</div>
                        </div>
                    </div>
                </div>

                <div className="w-3/8 bg-gray-700 rounded-xl flex flex-col justify-between">
                    <div>
                        <div className="p-4">
                            <span>Chat</span>
                        </div>
                        <div className='w-full h-[1px] bg-[#727575]'></div>
                    </div>
                    <div className="p-4 flex flex-col items-center justify-center gap-2 relative">
                        <input type="file" className="text-blue-500 w-14 h-14 absolute top-1 opacity-0 cursor-pointer" onChange={(e) => handleFileChange(e)} />
                        <button className="text-blue-600 bg-[#35394b] rounded-full p-3"><Upload className="h-5 w-5" /></button>
                        <span className="text-xl">Add a source to get started</span>
                        <button className="p-2 px-6 border border-[#727575] rounded-3xl flex justify-center items-center gap-1 hover:bg-gray-600 text-xs">
                            Upload a source
                        </button>
                    </div>
                    <div className="p-4 relative">
                        <input type="text" placeholder="Upload a sourcfe to get started" className="border border-[#727575] w-full p-3 rounded-2xl" />
                        <div className="absolute right-6 top-5.5 flex items-center gap-3">
                            <span className="text-gray-400">0 sources</span>
                            <button className="p-2 rounded-full bg-blue-600">
                                <SendHorizontal className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-3/8 bg-gray-700 rounded-xl">
                    <div className="flex justify-between p-4">
                        <span>Studio</span>
                        <PanelLeft />
                    </div>
                    <div className='w-full h-[1px] bg-[#727575] '></div>

                    <div className="p-4">
                        <div className="flex justify-between pb-4">
                            <span>Audio Overview</span>
                            <Info className="h-5 w-5" />
                        </div>

                        <div className=" border border-[#727575] rounded-xl p-3">
                            <div className="flex items-center gap-4">
                                <button className="bg-gray-500 rounded-full p-3">
                                    <FileBadge2 className="h-5 w-5" />
                                </button>
                                <div>
                                    <div>Deep Drive conversation</div>
                                    <div className="text-xs text-gray-400">Two hosts (English only)</div>
                                </div>
                            </div>

                            <div className="flex gap-4 mt-3">
                                <div className="border-[#727575] border rounded-full text-center p-2 w-full hover:bg-gray-500 cursor-pointer">Customize</div>
                                <div className="border-[#727575] border rounded-full text-center p-2 w-full hover:bg-gray-500 cursor-pointer">Generate</div>
                            </div>
                        </div>
                    </div>
                    <div className='w-full h-[1px] bg-[#727575] my-1'></div>

                    <div className="p-4">
                        <div className=" flex justify-between items-center">
                            <span>Notes</span>
                            <button className="hover:bg-gray-500 rounded-full p-3 cursor-pointer">
                                <EllipsisVertical className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="mt-5">
                            <div className="border-[#727575] border rounded-full text-center p-2 w-full hover:bg-gray-500 cursor-pointer flex justify-center gap-2">
                                <Plus /> Add note
                            </div>
                            <div className="mt-2 flex gap-2">
                                <div className="border-[#727575] border rounded-full text-center p-2 w-1/2 hover:bg-gray-500 cursor-pointer flex gap-2 justify-center"><GraduationCap />Study guide</div>
                                <div className="border-[#727575] border rounded-full text-center p-2 w-1/2 hover:bg-gray-500 cursor-pointer flex gap-2 justify-center"><FileText />Briefing doc</div>
                            </div>
                            <div className="mt-2 flex gap-2">
                                <div className="border-[#727575] border rounded-full text-center p-2 w-1/2 hover:bg-gray-500 cursor-pointer flex gap-2 justify-center"><MessageSquareText />FAQ</div>
                                <div className="border-[#727575] border rounded-full text-center p-2 w-1/2 hover:bg-gray-500 cursor-pointer flex gap-2 justify-center"><ChartLine />Timeline</div>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col justify-center h-1/3 items-center">
                        <div><SquareMenu className="h-15 w-15 m-auto" /></div>
                        <div className="text-center">Saved notes will appear here</div>
                        <div className="text-center">Save a chat message to create a new note, or click Add notes above.</div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Notebook
