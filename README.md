# 📌 FE-Quiz-Web  


**진행 기간**: 2025.08.04 ~ 2025.08.15  
**참여 프로그램**: UNIS Summer Upskill (Frontend Part)  
**배포 링크**: [https://fe-quiz-web.vercel.app/](https://fe-quiz-web.vercel.app/)  


---

## 🚀 프로젝트 소개  

프론트엔드 개발자를 위한 **인터랙티브 퀴즈 웹사이트**.  
HTML, CSS, JavaScript, React 기초 문법을 복습하고 실전 프로젝트에 적용하는 데 목적을 두었음.  

- 상단 네비게이션 바(Navigation Bar)  
  - **좌측 로고 클릭 시 새로고침 가능** (SPA 환경에서 `window.location.reload()` 적용)  
  - **우측 로그인 탭** 배치  

- 메인 배너 영역  
  - **"일일 퀴즈 풀러가기" 버튼 클릭 시 인터랙션 발생**  
  - 버튼 클릭 시 퀴즈 모달(Popup Modal) 등장  

- 퀴즈 기능  
  - 각 퀴즈는 **객체 배열 형태의 JSON 데이터**로 관리 (`map()`으로 반복 렌더링)  
  - 보기 4개 중 정답 선택 → `onClick` 이벤트 핸들링  
  - 정답/오답 시 **조건부 렌더링(Conditional Rendering)**을 통해 색상 변환  
  - 퀴즈 2개 종료 후, **최종 점수 팝업(Alert/Modal)**으로 결과 출력  

- 스크롤 애니메이션  
  - 하단 카드 4개가 **Intersection Observer API + CSS transition**을 활용해 뾰잉 튀어나오는 애니메이션 제공  

- React Hook 활용  
  - `useState`로 현재 문제 인덱스, 점수, 선택 상태 관리  
  - `useEffect`로 모달 등장/종료 시 애니메이션 상태 제어  
  - `props`를 통한 컴포넌트 간 데이터 전달  

---

## 🛠 기술 스택  

| 분야        | 사용 기술 |
|-------------|-----------|
| Language    | HTML, CSS, Typtscript) |
| Frontend    | React |
| Build Tool  | Vite |
| Styling     | CSS Modules + 반응형 레이아웃 구현 |
| Deployment  | Vercel |

---

## 📂 파일 구조  
```
fe-quiz-web/
├── public/ # 정적 리소스
├── src/
│ ├── components/ # QuizCard, Navbar, Modal 등 공용 컴포넌트
│ ├── pages/ # 메인 페이지, 퀴즈 실행 페이지
│ ├── styles/ # CSS Module 스타일 정의
│ ├── App.jsx # 전체 라우팅 및 상태 관리
│ └── main.jsx # 엔트리 포인트
├── package.json
└── vite.config.js
```


---

## 📑 페이지 설계  

| 구분          | 설명 |
|---------------|------|
| **상단 바(Navbar)** | 좌측 로고(클릭 시 새로고침), 우측 로그인 버튼 |
| **배너 영역** | "일일 퀴즈 풀러가기" 버튼 → 클릭 시 퀴즈 모달 팝업 |
| **퀴즈 모달** | HTML 관련 퀴즈, 4지선다 구조 <br> - 정답 시 초록색 표시 <br> - 오답 시 빨간색 표시 |
| **결과 팝업** | 퀴즈 2개 종료 후 최종 점수 출력 |
| **스크롤 카드** | Intersection Observer + CSS transition → 카드 4개가 뾰잉 애니메이션 |
| **바로풀기 버튼** | 퀴즈 모달 즉시 실행 |

---

## 🚀 배포 방법  

1. GitHub 저장소 연결  
2. Vercel 프로젝트 생성 및 GitHub 연동  
3. `main` 브랜치 push 시 자동 빌드 & 배포  

👉 [배포 링크](https://fe-quiz-web.vercel.app/)  

---

## 💡 느낀점  

- **상태 관리(useState)와 이벤트 핸들링(onClick)**을 실제 프로젝트에 적용하면서 React의 기본기를 확실히 다졌다.  
- **조건부 렌더링(Conditional Rendering)**을 활용해 정답/오답 시 UI 피드백을 구현한 경험이 인상 깊었다.  
- **Intersection Observer API**와 **CSS transition**으로 스크롤 애니메이션을 직접 구현하면서, 단순한 정적 페이지가 아닌 **동적인 UI/UX**를 만드는 방법을 익혔다.  
- 짧은 2주간의 Upskill 기간 동안, **기획 → 구현 → 배포**까지의 흐름을 경험하며 프론트엔드 역량을 확실히 강화할 수 있었다.  
