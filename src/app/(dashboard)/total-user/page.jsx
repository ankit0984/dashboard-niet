import React from 'react'
import Sidebar from "@/app/(dashboard)/Sidebar/Sidebar";
import {faculty_details} from "@/app/(dashboard)/data";

function Page() {
    return (
        <>
            <Sidebar/>
            <div className="p-8 sm:ml-64 ">
                <div className="pt-6 mt-14 relative overflow-x-auto shadow-md sm:rounded-lg">
                    <table className="w-auto text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <thead
                            className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Faculty Name
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Employee id
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Branch
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Qualification
                            </th>
                            <th scope="col" className="px-6 py-3">
                                total research-paper
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Experience
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            faculty_details.map((list, index) => (
                                <tr key={list.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th key={list.id} scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {list.id}
                                    </th>
                                    <td className="px-6 py-4">
                                        {list.name}
                                    </td>
                                    <td className="px-6 py-4">
                                        {list.employee_id}
                                    </td>
                                    <td className="px-6 py-4">
                                        {list.branch}
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        {list.qualification}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        {list.total_research_papers}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        {list.experience}
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>

    )
}

export default Page
