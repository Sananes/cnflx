import React, { useState } from "react";

export const GlobalContext = React.createContext([{}, () => {}]);

export const GlobalProvider = props => {
  const [state, setState] = useState({
    annual: false,
    email: ""
  });

  return (
    <GlobalContext.Provider value={[state, setState]}>
      {props.children}
    </GlobalContext.Provider>
  );
};
