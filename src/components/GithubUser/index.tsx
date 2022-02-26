import React, { useState, useContext } from "react";

import { Container, Text, ShortText } from "./styles";

import useLocation from "../../contexts/location";

import { TextField, Button } from "@mui/material";
import { TitleContext } from "../../contexts/title";

interface UserInfo {
  login: string;
  name: string;
  public_repos: number;
}

const GithubUser = () => {
  const [user, setUser] = useState<UserInfo>();
  const [userNick, setUserNick] = useState("");
  const title = useContext(TitleContext);
  const { latitude, longitude } = useLocation();

  const handleUser = async () => {
    const response = await fetch(`http://api.github.com/users/${userNick}`);
    const userData = await response.json();

    setUser(userData);
  };

  return (
    <>
      <Container>
        <Text>{title} do Github</Text>
        <TextField
          value={userNick}
          type={"text"}
          onChange={(event) => setUserNick(event.target.value)}
          onBlur={(event) => setUserNick(event.target.value)}
          variant="outlined"
        ></TextField>
        <Button
          onClick={handleUser}
          style={{ margin: "1%" }}
          variant="outlined"
        >
          Procurar
        </Button>
        <ShortText>Login: {user?.login}</ShortText>
        <ShortText>Name: {user?.name}</ShortText>
        <ShortText>Public repositories: {user?.public_repos}</ShortText>
        <ShortText>
          Location: {latitude} - {longitude}
        </ShortText>
      </Container>
    </>
  );
};

export default GithubUser;
