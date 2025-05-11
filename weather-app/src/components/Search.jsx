import React from "react";

function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="flex items-center justify-center">
      <div className="flex gap-4">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search any city"
          className="w-[40vw] md:w-[30vw] px-4 py-2 bg-neutral-50 rounded-lg text-neutral-600 focus:border-sky-500 focus-outline focus:outline-none "
        />
        <button
          onClick={handleSearch}
          className="bg-white/40 hover:bg-white/20 text-neutral-700 backdrop-blur px-4 py-2 rounded-lg shadow-blue-800/40 transition duration-200 cursor-pointer border-2 border-neutral-300"
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Search;
