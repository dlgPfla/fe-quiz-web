// src/data/quizData.ts
import { QuizQuestion } from '@/types/quiz';

export const quizData: QuizQuestion[] = [
  // HTML
  {
    id: 1,
    category: 'HTML',
    question: '시맨틱 태그의 주요 목적은 무엇인가?',
    options: ['레이아웃을 쉽게', '의미 전달과 접근성 향상', '스타일 분리', '브라우저 캐시 개선'],
    correctAnswer: 1,
  },
  {
    id: 2,
    category: 'HTML',
    question: '이미지에 대체 텍스트가 필요한 이유로 적절하지 않은 것은?',
    options: ['스크린리더 지원', 'SEO 향상', '네트워크 속도 향상', '이미지 로딩 실패 시 정보 제공'],
    correctAnswer: 2,
  },

  // CSS
  {
    id: 3,
    category: 'CSS',
    question: 'Flexbox에서 주축 정렬을 담당하는 속성은?',
    options: ['align-items', 'justify-content', 'align-content', 'place-items'],
    correctAnswer: 1,
  },
  {
    id: 4,
    category: 'CSS',
    question: 'position: sticky가 동작하려면 필요한 전제는?',
    options: ['부모에 overflow: hidden', 'top/bottom 등 오프셋 지정', 'z-index: 999', 'display: block'],
    correctAnswer: 1,
  },

  // JavaScript
  {
    id: 5,
    category: 'JavaScript',
    question: '`const`로 선언한 변수에 대해 옳은 설명은?',
    options: ['재할당 가능', '스코프는 함수 레벨', '참조 자체 재할당 불가', '값이 항상 불변'],
    correctAnswer: 2,
  },
  {
    id: 6,
    category: 'JavaScript',
    question: '다음 중 고차함수는?',
    options: ['parseInt', 'setTimeout', 'map', 'JSON.stringify'],
    correctAnswer: 2,
  },

  // React
  {
    id: 7,
    category: 'React',
    question: '리스트 렌더링에서 key prop의 주된 목적은?',
    options: ['스타일링', '성능 최적화 및 변경 감지', '이벤트 위임', '메모리 관리'],
    correctAnswer: 1,
  },
  {
    id: 8,
    category: 'React',
    question: '`useEffect`의 의존성 배열이 빈 배열일 때 의미는?',
    options: ['매 렌더마다 실행', '언마운트 때만 실행', '마운트 시 1회 실행', '의미 없음'],
    correctAnswer: 2,
  },
];
