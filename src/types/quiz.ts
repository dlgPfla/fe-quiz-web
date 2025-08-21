// src/types/quiz.ts
export type QuizQuestion = {
  id: number;
  category: string;
  question: string;
  options: string[];
  correctAnswer: number; // options 배열의 인덱스
};
