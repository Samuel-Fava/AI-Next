"use client"

import { useState } from "react";
import Sidebar from "./Sidebar"

interface LayoutProps {
    children?: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    const [collapseSidebar, setCollapseSidebar] = useState(false);

    return (
        <div className='bg-[#202323] w-full flex overflow-hidden'>
            <div
                className={`w-[230px] h-screen hidden  ${collapseSidebar ? 'hidden' : 'md:block'
                    }`}
            >
                <Sidebar setCollapseSidebar={setCollapseSidebar} />
            </div>
            <div className="w-full"> {children}</div>
        </div>
    )
}

export default Layout