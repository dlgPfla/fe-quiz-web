// src/layouts/MainLayout.tsx 
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './MainLayout.module.css';

export default function MainLayout() {
  const [hideTopbar, setHideTopbar] = useState(false);

  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => {
      const cur = window.scrollY;
      setHideTopbar(cur > 8 && cur >= last);
      last = cur;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className={styles.wrap}>
      <div className={`${styles.topbar} ${hideTopbar ? styles.topbarHidden : ''}`}>
        <div className={styles.topbarInner}>
          {/* 🔥 로고 클릭 시 새로고침 */}
          <div
            className={styles.brand}
            onClick={() => window.location.reload()}
            style={{ cursor: 'pointer' }}
          >
            H<span className={styles.dot}></span>FE
          </div>

          <nav className={styles.menu}>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
            <a href="#"></a>
          </nav>

          <a className={styles.login} href="#">로그인</a>
        </div>
      </div>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}
