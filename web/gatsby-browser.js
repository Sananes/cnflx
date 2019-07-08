"use strict";

import React from "react";
import { PricingProvider } from "./src/context/PricingContext";

require("./src/assets/scss/init.scss");

export const wrapRootElement = ({ element }) => (
  <PricingProvider>{element}</PricingProvider>
);
