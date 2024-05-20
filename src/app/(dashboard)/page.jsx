import React from 'react'
import Sidebar from "@/app/(dashboard)/Sidebar/Sidebar";
import Charts from "@/app/(dashboard)/Dashboard/Charts";
function Page() {
    return (
        <main>
            <Sidebar/>
            <Charts/>
        </main>
    )
}

export default Page
