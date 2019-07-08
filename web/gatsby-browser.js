"use strict";

import React from "react";
import { GlobalProvider } from "./src/context/GlobalContext";

require("./src/assets/scss/init.scss");

export const wrapRootElement = ({ element }) => (
  <GlobalProvider>{element}</GlobalProvider>
);
