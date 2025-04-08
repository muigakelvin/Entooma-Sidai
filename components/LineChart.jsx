// src/components/LineChart.jsx
import React, { useState, useRef } from "react";
import { LoadScript, GoogleMap, Polyline } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "100%",
};

const defaultCenter = { lat: 0, lng: 0 };

const LineChart = () => {
  const [trackPoints, setTrackPoints] = useState([]);
  const [mapCenter, setMapCenter] = useState(defaultCenter);
  const mapRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => parseGPX(e.target.result);
      reader.readAsText(file);
    }
  };

  const parseGPX = (text) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(text, "application/xml");

    const trackPointsData = Array.from(
      xmlDoc.getElementsByTagName("trkpt")
    ).map((point) => ({
      lat: parseFloat(point.getAttribute("lat")),
      lng: parseFloat(point.getAttribute("lon")),
    }));

    setTrackPoints(trackPointsData);

    if (trackPointsData.length > 0) {
      setMapCenter(trackPointsData[0]);
      adjustMapBounds(trackPointsData);
    }
  };

  const adjustMapBounds = (trackPointsData) => {
    if (!mapRef.current) return;
    const bounds = new window.google.maps.LatLngBounds();
    trackPointsData.forEach((point) => bounds.extend(point));
    mapRef.current.fitBounds(bounds);
    mapRef.current.setZoom(mapRef.current.getZoom() - 1);
  };

  const onLoad = (mapInstance) => {
    mapRef.current = mapInstance;
  };

  return (
    <div className="map-container">
      <input
        type="file"
        accept=".gpx"
        onChange={handleFileUpload}
        className="file-input"
      />
      <LoadScript googleMapsApiKey="AIzaSyD3er79jHsbfyl_okJYlzlbxRi552w9-1c">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={mapCenter}
          zoom={10}
          onLoad={onLoad}
          className="gMaps"
        >
          {trackPoints.length > 1 && (
            <Polyline
              path={trackPoints}
              options={{
                strokeColor: "#FF0000",
                strokeOpacity: 1,
                strokeWeight: 2,
              }}
            />
          )}
        </GoogleMap>
      </LoadScript>
    </div>
  );
};

export default LineChart;
