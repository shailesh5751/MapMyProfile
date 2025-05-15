import { Link } from "react-router-dom";

export default function ProfileCard({ profile, onShowMap }) {
  return (
    <div className="bg-white shadow rounded-2xl p-4 flex flex-col items-center text-center">
      <img
        src={profile.photo}
        alt={profile.name}
        className="w-24 h-24 rounded-full object-cover mb-2"
      />
      <h2 className="text-xl font-semibold">{profile.name}</h2>
      <p className="text-gray-500 mb-2">{profile.description}</p>
      <div className="flex gap-2">
        <button
          onClick={() => onShowMap(profile)}
          className="px-3 py-1 bg-blue-500 text-white rounded-xl text-sm hover:bg-blue-600"
        >
          Summary
        </button>
        <Link
          to={`/profile/${profile.id}`}
          className="px-3 py-1 bg-gray-200 text-sm rounded-xl hover:bg-gray-300"
        >
          Details
        </Link>
      </div>
    </div>
  );
}