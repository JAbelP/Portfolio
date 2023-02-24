import React from "react"
import Sidebar from './component/sidebar'
import {personalData} from "../data/page-data"
import '../app/global.css'
export default function Rootlayout({
    children,}:{
        children: React.ReactNode
    }) {
        return (
            <html>
                <head />
                    <body className="flex flex-col sm:flex-row">
                        <Sidebar data={personalData}/>
                        {/* grow-full p-8 sm:p-16 w-full sm:basis-2/3  ml-auto */}
                        <main className="grow-full p-8 sm:p-16 w-full sm:basis-2/3  ml-auto">
                            {children}
                        </main>
                    </body>
                
            </html>
        )
    }