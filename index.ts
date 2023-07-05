const inputEl = document.getElementById("input-el");
const outputEl = document.getElementById("output-el");
const clipboardIcon = document.getElementById("clipboard-icon");

const toBeshyFormat = (): void => {
	outputEl!.textContent = (inputEl as HTMLTextAreaElement).value.replace(
		/ /g,
		" 🤸‍♀️ "
	);
};

const copy = (): void => {
	navigator.clipboard.writeText(outputEl!.textContent!);
};
