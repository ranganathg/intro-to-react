"use strict";

const
    React = require("react"),
    ReactDOM = require("react-dom"),
    ItemList = require("./components/item-list");

let items = [
    "item 1", "item 2", "item 3"
];

ReactDOM.render(<ItemList header="Item List" items={items} />,
    document.querySelector("[class='container']"));