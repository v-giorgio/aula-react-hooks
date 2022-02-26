import React, { useEffect, useState } from "react";

import { Container, Text } from "./styles";

import { Switch } from "@mui/material";

const LightToggle = () => {
  const [lightsOff, setLightsOff] = useState(false);
  const [message, setMessage] = useState("off");

  const handleLights = () => {
    setLightsOff(() => !lightsOff);
    setMessage(() => (message === "on" ? "off" : "on"));
  };

  /*   useEffect(() => {
    setTimeout(() => {
      handleLights();
    }, 1000);
  }, [lightsOff, message, handleLights]); */

  return (
    <>
      <div
        style={
          lightsOff
            ? { backgroundColor: "#356eaf" }
            : { backgroundColor: "#010513" }
        }
      >
        <Container>
          <Text>Lights {message}!</Text>
          <Switch color="secondary" onChange={handleLights} />
        </Container>
      </div>
    </>
  );
};

export default LightToggle;
