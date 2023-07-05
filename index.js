"use strict";
const inputEl = document.getElementById("input-el");
const outputEl = document.getElementById("output-el");
const toBeshyFormat = () => {
    outputEl.textContent = inputEl.value.replace(/ /g, "🏃‍♂️");
};
const copy = () => {
    navigator.clipboard.writeText(outputEl.textContent);
};
