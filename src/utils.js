import {words} from "./lists";

  export const getSolution = () => {
    const currentTime = new Date();
    const currentYear =  currentTime.getFullYear();
    const startTimeOfYear = new Date(currentYear, 0, 0)
    const diff = Number(currentTime) - Number(startTimeOfYear)
    let day = Math.floor(diff / (1000 * 60 * 60 * 24))
    while (day > words.length) {
      day -= words.length
    }
    return words[day]
  }
export const validWord =(guessedWord) =>{
  return words.includes(guessedWord);

}