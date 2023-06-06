import QuestionCategories from "../assets/QuestionsAndAnswers/QuestionCategories";
let marked = [];
export function randWord(Category) {
  let generateIndex = Math.floor(
    Math.random() * QuestionCategories[Category].length
  );

  while (marked.includes(generateIndex)) {
    generateIndex = Math.floor(
      Math.random() * QuestionCategories[Category].length
    );
  }

  marked.push(generateIndex);
  console.log(marked);
  return QuestionCategories[Category][generateIndex];
}
