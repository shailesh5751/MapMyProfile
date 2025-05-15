import { useEffect } from "react";

export default function MapView({ address }) {
  useEffect(() => {
    const map = new window.google.maps.Map(document.getElementById("map"), {
      center: { lat: 18.5204, lng: 73.8567 },
      zoom: 12,
    });

    const geocoder = new window.google.maps.Geocoder();
    geocoder.geocode({ address }, (results, status) => {
      if (status === "OK") {
        map.setCenter(results[0].geometry.location);
        new window.google.maps.Marker({
          map,
          position: results[0].geometry.location,
        });
      } else {
        alert("Geocode error: " + status);
      }
    });
  }, [address]);

  return <div id="map" className="w-full h-96 rounded-2xl mt-4" />;
}
