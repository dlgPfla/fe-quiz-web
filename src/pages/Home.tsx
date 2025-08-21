// src/pages/Home.tsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import hero from "../assets/hero.svg";
import { motion } from "framer-motion";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { quizData } from "../data/quizData";
import QuizModal from "../components/QuizModal";

export default function Home() {
  const nav = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories = [
    { title: "HTML", desc: "태그와 구조 마스터하기", icon: <FaHtml5 size={40} color="#E44D26" /> },
    { title: "CSS", desc: "스타일링과 레이아웃 정복", icon: <FaCss3Alt size={40} color="#1572B6" /> },
    { title: "JavaScript", desc: "언어 기본기와 동작 원리", icon: <FaJs size={40} color="#F7DF1E" /> },
    { title: "React", desc: "컴포넌트와 훅 다루기", icon: <FaReact size={40} color="#61DAFB" /> },
  ];

  return (
    <main>
      {/* Hero Section */}
      <section className={styles.hero} style={{ backgroundImage: `url(${hero})` }}>
        <div className={styles.overlay} />
        <div className={styles.inner}>
          <h1 className={styles.title}>프론트엔드 개발자를 위한 퀴즈</h1>
          <p className={styles.subtitle}>
            까먹기 쉬운 핵심 개념들을<br className={styles.br} />
            빠르게 복습하고 머릿속에 꽂아 넣자.
          </p>
          <button
            className={styles.cta}
            onClick={() => setSelectedCategory("HTML")} // 기본 진입
            aria-label="일일 퀴즈 풀러 가기"
          >
            일일 퀴즈 풀러 가기
          </button>
        </div>
      </section>

      {/* 분야별 퀴즈 카드 Section */}
      <section className={styles.quizCategory}>
        <h2>분야별 퀴즈</h2>
        <div className={styles.cardGrid}>
          {categories.map((quiz, idx) => (
            <motion.div
              key={quiz.title}
              className={styles.card}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
            >
              {quiz.icon}
              <h3>{quiz.title}</h3>
              <p>{quiz.desc}</p>
              <button
                className={styles.cardBtn}
                onClick={() => setSelectedCategory(quiz.title)}
              >
                바로 풀기
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 선택된 카테고리 퀴즈 모달 표시 */}
      {selectedCategory && (
        <QuizModal
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </main>
  );
}
