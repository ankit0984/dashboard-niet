import React from 'react';

const ECommerceMenu = () => {
    const [isDropdownOpen, setDropdownOpen] = React.useState(false);

    const toggleDropdown = () => {
        setDropdownOpen(!isDropdownOpen);
    };

    return (
        <li>
            <button
                type="button"
                className="flex items-center w-full p-2 text-base text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-example"
                aria-expanded={isDropdownOpen}
                onClick={toggleDropdown}
            >
                <svg
                    className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 18 21"
                >
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path
                        d="M13 13v8h8v-8h-8zM3 21h8v-8H3v8zM3 3v8h8V3H3zm13.66-1.31L11 7.34 16.66 13l5.66-5.66-5.66-5.65z"/>
                </svg>
                <span className="flex-1 ms-3 text-left rtl:text-right whitespace-nowrap">Projects</span>
                <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>
            <ul
                id="dropdown-example"
                className={`${isDropdownOpen ? 'block' : 'hidden'} py-2 space-y-2`}
            >
                <li>
                    <a
                        href="/total-projects"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                        Total Projects
                    </a>
                </li>
                <li>
                    <a
                        href="/maintenance"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                        Active Projects
                    </a>
                </li>
                <li>
                    <a
                        href="/maintenance"
                        className="flex items-center w-full p-2 text-gray-900 transition duration-75 rounded-lg pl-11 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >
                        Manage Projects
                    </a>
                </li>
            </ul>
        </li>
    );
};

export default ECommerceMenu;
