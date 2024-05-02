import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", { class: "heading" }, "Hello World")
const root = ReactDOM.createRoot(document.getElementById('root'));
//reaact is placing heading in div tag which is root.
const parent = React.createElement('div', { id: "parent" },
                [React.createElement('div', { id: "child1" },
                    [React.createElement('h1', {}, "Nested Heading 1"), React.createElement('h2', {}, "Nested Heading 2")]),
                React.createElement('div', { id: "child1" },
                    [React.createElement('h1', {}, "Nested Heading 1"), React.createElement('h2', {}, "Nested Heading 2")])])
root.render(parent)
console.log(parent)