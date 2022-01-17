import React from "react";
import ReactDOM from "react-dom";
import reactToWebComponent from "react-to-webcomponent";

import Counter from "./components/Counter";

customElements.define(
  "react-counter",
  reactToWebComponent(Counter, React, ReactDOM)
);