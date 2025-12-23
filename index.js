import { arabicAlphabet } from "./languages/arabic.js";
import { englishAlphabet } from "./languages/english.js";
import { russianAlphabet } from "./languages/russian.js";

/**
 * The main class export
 * @param language - The specified value will determine the returned alphabet
 */
export class Alphabet {
  constructor(language) {
    this.language = language;
  }

  preferredLanguage(language) {
    switch (language) {
      case "english":
        return englishAlphabet;
      case "russian":
        return russianAlphabet;
      case "arabic":
        return arabicAlphabet;
      default:
        return "Language not found";
    }
  }

  getLetters() {
    if (this.language) {
      return this.preferredLanguage(this.language);
    } else {
      throw new Error("No language provided");
    }
  }
}
