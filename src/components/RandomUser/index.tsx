import React, { useContext, useEffect, useState } from "react";

import { Container, Text, ShortText } from "./styles";

// import { LocationContext, LocationProvider } from "../../contexts/location";

import useLocation from "../../contexts/location";

import { TitleContext } from "../../contexts/title";

import { Button } from "@mui/material";

interface UserInfo {
  gender: string;
  name: string;
  email: string;
}

const RandomUser = () => {
  const [user, setUser] = useState<UserInfo>();
  const title = useContext(TitleContext);
  const { latitude, longitude } = useLocation();

  const handleUser = async () => {
    const response = await fetch(`https://randomuser.me/api/`);
    const data = await response.json();
    const userData = [
      data.results[0].gender,
      data.results[0].name.first + " " + data.results[0].name.last,
      data.results[0].email,
    ];

    setUser({ gender: userData[0], name: userData[1], email: userData[2] });
  };

  return (
    <>
      <Container>
        <Text>{title} aleatórios</Text>
        <ShortText>Name: {user?.name}</ShortText>
        <ShortText>Gender: {user?.gender}</ShortText>
        <ShortText>E-mail: {user?.email}</ShortText>
        <ShortText>
          Location: {latitude} - {longitude}
        </ShortText>
        <Button
          onClick={handleUser}
          style={{ margin: "1%" }}
          variant="outlined"
        >
          Procurar
        </Button>
      </Container>
    </>
  );
};

export default RandomUser;
