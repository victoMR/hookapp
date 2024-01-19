import React from "react";
import ReactDOM from "react-dom/client";
import { Counter } from "./components/counter";
import { Text } from "./components/text";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Counter />
    <Text />
  </>
);
