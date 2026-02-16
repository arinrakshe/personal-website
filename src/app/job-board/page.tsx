import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JobList from '@/components/JobList';
import RecommendationPanel from '@/components/RecommendationPanel';
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <Header />
      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.hero}>
            <h1>Find Your Dream Job</h1>
            <p>Browse thousands of job openings from top companies.</p>
          </div>
          <JobList />
        </div>
        <div className={styles.sidebar}>
          <RecommendationPanel />
        </div>
      </main>
      <Footer />
    </div>
  );
}
