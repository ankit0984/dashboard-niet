import React from 'react'

function DashboardCard() {
    return (
        <>
            <h3 className="p-6 text-2xl font-semibold dark:text-white">Ongoing Projects:-</h3>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Category
                        </th>
                        <th scope="col" className="px-6 py-3">
                            End date
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Price
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            plants gene-study
                        </th>
                        <td className="px-6 py-4">
                            Agriculture
                        </td>
                        <td className="px-6 py-4">
                            06/09/24
                        </td>
                        <td className="px-6 py-4">
                            $2999
                        </td>
                    </tr>
                    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Gene-synthesis
                        </th>
                        <td className="px-6 py-4">
                            Bio-chemistry
                        </td>
                        <td className="px-6 py-4">
                            24/11/24
                        </td>
                        <td className="px-6 py-4">
                            $1999
                        </td>

                    </tr>
                    <tr className="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row"
                            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            Cloud-Security
                        </th>
                        <td className="px-6 py-4">
                            Cloud
                        </td>
                        <td className="px-6 py-4">
                            16/12/24
                        </td>
                        <td className="px-6 py-4">
                            $1299
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default DashboardCard
