import React from 'react';
import { TbEyeSearch } from 'react-icons/tb';

const SearchInput = () => {
  return (
    <form className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
      />
      <button
        type="submit"
        className="btn btn-circle bg-indigo-800 text-purple-100"
      >
        <TbEyeSearch />
      </button>
    </form>
  );
};

export default SearchInput;
