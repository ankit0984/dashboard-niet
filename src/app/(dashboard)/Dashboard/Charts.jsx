import React from 'react'
import DashboardCard from "@/app/(dashboard)/Dashboard/DashboardCard";

function Charts() {
    return (
        <div className="p-8 sm:ml-64 ">
            <div className="pt-6 rounded-lg dark:border-gray-700 mt-14">
                <section className="bg-white dark:bg-gray-900">
                    <div className=" px-4 mx-auto max-w-screen-xl lg:px-6 ">
                        <div className="grid gap-2 mb-6 lg:mb-16 md:grid-cols-4">
                            {/*card 1*/}
                            <div
                                className="items-center bg-gray-50 rounded-lg w-auto shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                                         width="24px" fill="#3276f1">
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                        <path
                                            d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
                                    </svg>
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href="/total-user">Total users</a>
                                    </h3>
                                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">100k+</p>

                                </div>
                            </div>
                            {/*card 2*/}
                            <div
                                className="items-center bg-gray-50 w-auto rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
                                         height="24px" viewBox="0 0 24 24" width="24px" fill="#3276f1">
                                        <g>
                                            <rect fill="none" height="24" width="24"/>
                                        </g>
                                        <g>
                                            <path
                                                d="M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M9,17H7V7h2V17z M13,12h-2V7h2V12z M17,15h-2V7h2V15z"/>
                                        </g>
                                    </svg>
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href="/total-projects">Total Projects</a>
                                    </h3>
                                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">700+</p>
                                </div>
                            </div>
                            {/*card 3*/}
                            <div
                                className="items-center bg-gray-50 w-auto rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                                         width="24px" fill="#3276f1">
                                        <path d="M0 0h24v24H0z" fill="none"/>
                                        <path
                                            d="M11 9.16V2c-5 .5-9 4.79-9 10s4 9.5 9 10v-7.16c-1-.41-2-1.52-2-2.84s1-2.43 2-2.84zM14.86 11H22c-.48-4.75-4-8.53-9-9v7.16c1 .3 1.52.98 1.86 1.84zM13 14.84V22c5-.47 8.52-4.25 9-9h-7.14c-.34.86-.86 1.54-1.86 1.84z"/>
                                    </svg>
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href="/maintenance">active projects</a>
                                    </h3>
                                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">350+</p>
                                </div>
                            </div>
                            {/*card 4*/}
                            <div
                                className="items-center bg-gray-50 w-auto rounded-lg shadow sm:flex dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5">
                                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24"
                                         height="24px" viewBox="0 0 24 24" width="24px" fill="#3276f1">
                                        <rect fill="none" height="24" width="24"/>
                                        <path
                                            d="M17.66,9.53l-7.07,7.07l-4.24-4.24l1.41-1.41l2.83,2.83l5.66-5.66L17.66,9.53z M4,12c0-2.33,1.02-4.42,2.62-5.88L9,8.5v-6H3 l2.2,2.2C3.24,6.52,2,9.11,2,12c0,5.19,3.95,9.45,9,9.95v-2.02C7.06,19.44,4,16.07,4,12z M22,12c0-5.19-3.95-9.45-9-9.95v2.02 c3.94,0.49,7,3.86,7,7.93c0,2.33-1.02,4.42-2.62,5.88L15,15.5v6h6l-2.2-2.2C20.76,17.48,22,14.89,22,12z"/>
                                    </svg>
                                    <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        <a href="/maintenance">Past Projects</a>
                                    </h3>
                                    <p className="mt-3 mb-4 font-light text-gray-500 dark:text-gray-400">450+</p>

                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <DashboardCard/>

            </div>
        </div>
    )
}

export default Charts
