import React, { useState } from "react";

export const GlobalContext = React.createContext({
  annual: false
});

export const GlobalProvider = props => {
  const [annual, setAnnual] = useState(false);

  return (
    <GlobalContext.Provider value={[annual, setAnnual]}>
      {props.children}
    </GlobalContext.Provider>
  );
};
