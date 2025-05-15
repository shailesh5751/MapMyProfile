import { useState } from "react";
import ProfileCard from "../components/ProfileCard";
import MapView from "../components/MapView";
import SearchBar from "../components/SearchBar";

const mockProfiles = [
  {
    id: 1,
    name: "Riya Sharma",
    photo: "https://randomuser.me/api/portraits/women/1.jpg",
    description: "Frontend Developer from Pune",
    address: "FC Road, Pune, Maharashtra",
    email: "riya@example.com",
    interests: ["React", "Tailwind", "UI/UX"]
  },
  {
    id: 2,
    name: "Amit Patel",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    description: "Backend Engineer from Ahmedabad",
    address: "SG Highway, Ahmedabad, Gujarat",
    email: "amit@example.com",
    interests: ["Node.js", "MongoDB", "APIs"]
  }
];

export default function Home() {
  const [query, setQuery] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);

  const filteredProfiles = mockProfiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(query.toLowerCase()) ||
      profile.address.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4 space-y-4">
      <SearchBar query={query} setQuery={setQuery} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredProfiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onShowMap={setSelectedProfile}
          />
        ))}
      </div>
      {selectedProfile && <MapView address={selectedProfile.address} />}
    </div>
  );
}
