const inputEl = document.getElementById("input-text");
const outputEl = document.getElementById("output-text");
const warningEl = document.getElementById("warning");
const translateBtn = document.getElementById("translate-btn");
const clearBtn = document.getElementById("clear-btn");

let lastTranslatedInput = null;

function translateToEmoji(text) {
  return text.replace(/[A-Za-z0-9]+/g, (word) => {
    const emoji = EMOJI_DICTIONARY[word.toLowerCase()];
    return emoji || word;
  });
}

function showWarning() {
  warningEl.hidden = false;
}

function hideWarning() {
  warningEl.hidden = true;
}

function handleTranslate() {
  const currentInput = inputEl.value;

  if (currentInput.trim() === "" || currentInput === lastTranslatedInput) {
    showWarning();
    return;
  }

  outputEl.value = translateToEmoji(currentInput);
  lastTranslatedInput = currentInput;
  hideWarning();
}

function handleClear() {
  inputEl.value = "";
  outputEl.value = "";
  lastTranslatedInput = null;
  hideWarning();
  inputEl.focus();
}

translateBtn.addEventListener("click", handleTranslate);
clearBtn.addEventListener("click", handleClear);
