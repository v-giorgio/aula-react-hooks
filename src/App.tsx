import React from "react";

import { GlobalStyle } from "./styles/global";

import LightToggle from "./components/LightToggle";
import GithubUser from "./components/GithubUser";
import RandomUser from "./components/RandomUser";
import { TitleProvider } from "./contexts/title";
import { LocationProvider } from "./contexts/location";

const App: React.FC = () => {
  return (
    <>
      <LocationProvider>
        <TitleProvider>
          <GlobalStyle />
          <LightToggle />
          <GithubUser />
          <RandomUser />
        </TitleProvider>
      </LocationProvider>
    </>
  );
};

export default App;
