import { arabicAlphabet } from "./languages/arabic.js";
import { englishAlphabet } from "./languages/english.js";
import { frenchLetters } from "./languages/french.js";
import { russianAlphabet } from "./languages/russian.js";

/**
 * The main class export
 * @param language - The specified value will determine the alphabet that will be returned 
 * @returns The letters of the specified alphabet
 * @example
 * import { Alphabet } from "words-global";
 * const alphabet = new Alphabet("english");
 * console.log(alphabet.getLetters()); // Outputs the English alphabet letters
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
      case "french":
        return frenchLetters;
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
