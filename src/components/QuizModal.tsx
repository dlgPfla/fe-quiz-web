// src/components/QuizModal.tsx
import { useState } from "react";
import { quizData } from "@/data/quizData";
import { QuizQuestion } from "@/types/quiz";
import styles from "./QuizModal.module.css";

type Props = {
  category: string;
  onClose: () => void;
};

export default function QuizModal({ category, onClose }: Props) {
  const questions = quizData.filter((q) => q.category === category);
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  const q: QuizQuestion = questions[current];

  const handleAnswer = (idx: number) => {
    if (answered) return;
    if (idx === q.correctAnswer) setScore(score + 1);
    setAnswered(true);
    setTimeout(() => {
      if (current < questions.length - 1) {
        setCurrent(current + 1);
        setAnswered(false);
      } else {
        alert(`퀴즈 종료! 점수: ${score + (idx === q.correctAnswer ? 1 : 0)}/${questions.length}`);
        onClose();
      }
    }, 1000);
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <button className={styles.close} onClick={onClose}>✖</button>
        <h2>{q.category} 퀴즈</h2>
        <p className={styles.question}>{q.question}</p>
        <ul>
          {q.options.map((opt, i) => (
            <li key={i}>
              <button
                className={`${styles.option} ${
                  answered
                    ? i === q.correctAnswer
                      ? styles.correct
                      : i === q.correctAnswer
                      ? styles.correct
                      : styles.wrong
                    : ""
                }`}
                onClick={() => handleAnswer(i)}
              >
                {opt}
              </button>
            </li>
          ))}
        </ul>
        <p className={styles.progress}>
          {current + 1}/{questions.length}
        </p>
      </div>
    </div>
  );
}
