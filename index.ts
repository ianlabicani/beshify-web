const inputEl = document.getElementById("input-el");
const outputEl = document.getElementById("output-el");

const toBeshyFormat = (): void => {
	outputEl!.textContent = (inputEl as HTMLInputElement).value.replace(
		/ /g,
		" 🤸‍♀️ "
	);
};

const copy = (): void => {
	navigator.clipboard.writeText(outputEl!.textContent!);
};
