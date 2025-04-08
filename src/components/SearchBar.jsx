export default function SearchBar({ value, onChange, onSearch }) {
    return (
      <div className="flex gap-2 mt-4">
        <input
        type="text"
        placeholder="Enter city"
        value={value}
        onChange={onChange}
        className="px-4 py-2 rounded-md bg-black bg-opacity-40 text-white placeholder-white border border-white focus:outline-none"
/>

        <button
          onClick={onSearch}
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Search
        </button>
      </div>
    );
  }
  