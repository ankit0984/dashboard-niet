import { Inter } from "next/font/google";
import Sidebar from "@/app/(dashboard)/Sidebar/Sidebar";
import React from "react";
import Navbar from "@/app/(dashboard)/Navbar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <Navbar/>
        {children}
        </body>
        </html>
    );
}
