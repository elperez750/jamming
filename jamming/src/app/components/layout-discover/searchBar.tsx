import React, { useState } from "react";
import { Search } from "lucide-react";

export function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(searchTerm);
  };
  

  return (
    <form onSubmit={handleSearch} className="w-full max-w-3xl mx-auto">
      <div className="relative group">
        <input
          type="text"
          placeholder="Search for songs, artists, or albums..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full py-3 pl-12 pr-16 text-base bg-blue-800 bg-opacity-50 text-white placeholder-blue-300 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-300 group-hover:bg-opacity-70"
        />
        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-blue-300 group-hover:text-cyan-400 transition-colors duration-300" />
        <button
          type="submit"
          className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-cyan-500 text-blue-900 px-4 py-1 rounded-full hover:bg-cyan-400 transition-colors duration-300"
        >
          Search
        </button>
        <button
          type="button"
          className="absolute right-24 top-1/2 transform -translate-y-1/2 text-blue-300 hover:text-cyan-400 transition-colors duration-300"
          aria-label="Voice search"
        >
        </button>
      </div>
    </form>
  );
}
