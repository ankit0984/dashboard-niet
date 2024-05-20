import React from 'react'
import Sidebar from "@/app/(dashboard)/Sidebar/Sidebar";
import {project_details} from "@/app/(dashboard)/data";

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
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Description
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Amount
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Organization
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Duration
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Status
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            project_details.map((list) => (
                                <tr key={list.id}
                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                                    <th key={list.grant_id} scope="row"
                                        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                        {list.title}
                                    </th>
                                    <td className="px-6 py-4">
                                        {list.description}
                                    </td>
                                    <td className="px-6 py-4">
                                        {list.amount}
                                    </td>
                                    <td className="px-6 py-4">
                                        {list.grantor_organization}
                                    </td>
                                    <td className="px-6 py-4 ">
                                        {list.grant_date}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        {list.duration}
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        {list.status}
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
