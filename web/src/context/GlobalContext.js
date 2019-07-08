import React, { useState } from "react";

export const GlobalContext = React.createContext({
  annual: false,
  showMenu: false
});

export const GlobalProvider = props => {
  const [annual, setAnnual] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <GlobalContext.Provider value={[annual, setAnnual, showMenu, setShowMenu]}>
      {props.children}
    </GlobalContext.Provider>
  );
};
