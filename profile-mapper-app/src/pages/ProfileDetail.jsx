export default function ProfileDetails({ profile }) {
    return (
      <div className="bg-white shadow rounded-2xl p-4">
        <h2 className="text-2xl font-semibold mb-2">{profile.name}</h2>
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-32 h-32 rounded-full object-cover mb-2"
        />
        <p className="text-gray-700">{profile.description}</p>
        <p className="text-sm text-gray-500">📍 {profile.address}</p>
        <p className="text-sm text-gray-500">✉ {profile.email}</p>
        <p className="mt-2">Interests: {profile.interests.join(", ")}</p>
      </div>
    );
  }