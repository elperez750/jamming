'use client'

import React from "react";
import { SearchBar } from "../components/layout-search/searchBar";

export default function Page() {
    return (
        <div className="bg-gradient-to-br from-blue-900 to-indigo-950 min-h-screen flex flex-col">
            <main className="flex-grow">
                <SearchBar />
            </main>
        </div>
    )
}