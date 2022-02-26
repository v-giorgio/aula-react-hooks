import React from "react";

export const TitleContext = React.createContext("");

export const TitleProvider = ({ children }: any) => {
  const title = "Buscar usuários";

  return (
    <TitleContext.Provider value={title}>{children}</TitleContext.Provider>
  );
};
