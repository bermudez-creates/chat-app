import React from 'react';
import { useState } from 'react';
import { toast } from 'react-hot-toast';
import { TbEyeSearch } from 'react-icons/tb';
import useGetConversations from '../../hooks/useGetConversations';
import useConversation from '../../zustand/useConversation';

const SearchInput = () => {
  const [search, setSearch] = useState('');
  const { setSelectedConversation } = useConversation();
  const { conversations } = useGetConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
    if (search.length < 2) {
      return toast.error('Name must be longer than one character.');
    }

    const conversation = conversations.find((c) =>
      c.fullName.toLowerCase().includes(search.toLowerCase())
    );

    if (conversation) {
      setSelectedConversation(conversation);
      setSearch('');
    } else toast.error('No users exist with this name');
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        className="input input-bordered rounded-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
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
