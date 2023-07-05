const inputEl = document.getElementById("input-el");
const outputEl = document.getElementById("output-el");
const clipboardIcon = document.getElementById("clipboard-icon");
const btnCopyEl = document.getElementById("btn-copy");

const toBeshyFormat = (): void => {
	outputEl!.textContent = (inputEl as HTMLTextAreaElement).value.replace(
		/ /g,
		" 🤸‍♀️ "
	);
};

const copy = (): void => {
	navigator.clipboard.writeText(outputEl!.textContent!).then(() => {
		btnCopyEl!.textContent = "Na-copy 🤸‍♀️ na 🤸‍♀️ ng 🤸‍♀️ beshy 🤸‍♀️ ko.";
		(btnCopyEl as HTMLButtonElement).disabled = true;
		setTimeout(() => {
			btnCopyEl!.textContent = "Copy 📋";
			(btnCopyEl as HTMLButtonElement).disabled = false;
		}, 3000);
	});
};
