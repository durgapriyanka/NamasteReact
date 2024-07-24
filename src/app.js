import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
  return (
    <div className="appLayout">
      <Header />
      <Body />
    </div>
  );
};

root.render(<AppLayout />);
