"use strict";
const inputEl = document.getElementById("input-el");
const outputEl = document.getElementById("output-el");
const clipboardIcon = document.getElementById("clipboard-icon");
const btnCopyEl = document.getElementById("btn-copy");
const toBeshyFormat = () => {
    outputEl.textContent = inputEl.value.replace(/ /g, " 🤸‍♀️ ");
};
const copy = () => {
    navigator.clipboard.writeText(outputEl.textContent).then(() => {
        btnCopyEl.textContent = "Na-copy 🤸‍♀️ na 🤸‍♀️ ng 🤸‍♀️ beshy 🤸‍♀️ ko.";
        btnCopyEl.disabled = true;
        setTimeout(() => {
            btnCopyEl.textContent = "Copy 📋";
            btnCopyEl.disabled = false;
        }, 3000);
    });
};
