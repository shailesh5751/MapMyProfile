import { useState } from "react";

export default function AdminDashboard() {
  const [profiles, setProfiles] = useState([]);
  const [form, setForm] = useState({ name: "", photo: "", description: "", address: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleAdd = () => {
    setProfiles([...profiles, { ...form, id: Date.now() }]);
    setForm({ name: "", photo: "", description: "", address: "" });
  };

  const handleDelete = (id) => setProfiles(profiles.filter((p) => p.id !== id));

  return (
    <div className="p-4 space-y-4">
      <h1 className="text-2xl font-bold">Admin Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          className="p-2 border rounded-xl"
        />
        <input
          name="photo"
          placeholder="Photo URL"
          value={form.photo}
          onChange={handleChange}
          className="p-2 border rounded-xl"
        />
        <input
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="p-2 border rounded-xl"
        />
        <input
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          className="p-2 border rounded-xl"
        />
      </div>
      <button
        onClick={handleAdd}
        className="bg-blue-500 text-white px-4 py-2 rounded-xl"
      >
        Add Profile
      </button>

      <ul className="space-y-2">
        {profiles.map((profile) => (
          <li
            key={profile.id}
            className="flex justify-between items-center bg-white p-2 shadow rounded-xl"
          >
            <span>{profile.name}</span>
            <button
              onClick={() => handleDelete(profile.id)}
              className="text-red-500 hover:text-red-700"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
