export default function SearchBar({ query, setQuery }) {
    return (
      <input
        type="text"
        placeholder="Search by name or location..."
        className="w-full p-2 border rounded-xl shadow"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    );
  }
  