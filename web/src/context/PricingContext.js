import React, { useState } from "react";

export const PricingContext = React.createContext({
  annual: false
});

export const PricingProvider = props => {
  const [annual, setAnnual] = useState(false);

  return (
    <PricingContext.Provider value={[annual, setAnnual]}>
      {props.children}
    </PricingContext.Provider>
  );
};
