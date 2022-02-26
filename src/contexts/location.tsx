import React, { useState, useEffect, useContext } from "react";

interface Location {
  latitude: any;
  longitude: any;
}

export const LocationContext = React.createContext<Location>({} as Location);

export const LocationProvider = ({ children }: any) => {
  const [location, setLocation] = useState<Location>();

  const handleLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      });
    }
  };

  useEffect(() => {
    handleLocation();
  });

  return (
    <LocationContext.Provider
      value={{
        latitude: location?.latitude,
        longitude: location?.longitude,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export default function useLocation() {
  const context = useContext(LocationContext);

  return context;
}
