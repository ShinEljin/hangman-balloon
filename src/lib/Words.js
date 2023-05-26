import QuestionCategories from "../assets/QuestionsAndAnswers/QuestionCategories";

export function randWord(Category) {
  let marked = [];
  const generateIndex = Math.floor(
    Math.random() * QuestionCategories[Category].length
  );

  while (marked.includes(generateIndex)) {
    generateIndex = Math.floor(
      Math.random() * QuestionCategories[Category].length
    );
  }
  return QuestionCategories[Category][generateIndex];
}
