import { html, render } from "lit-html";

import React from "react";
import ReactDOM from "react-dom";
import App from "team/App";

import "./index.scss";

const myTemplate = html`<div class="mt-10 text-3xl mx-auto max-w-6xl">
  <div>Name: host</div>
  <div>Framework: lit-html</div>
  <div>Language: JavaScript</div>
  <div>CSS: Tailwind</div>
</div>`;

render(myTemplate, document.getElementById("app"));

ReactDOM.render(React.createElement('App'), document.getElementById("app2"));
