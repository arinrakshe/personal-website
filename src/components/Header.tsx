import Link from 'next/link';
import styles from './Header.module.css';

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <Link href="/">JobFindr</Link>
                </div>
                <nav className={styles.nav}>
                    <Link href="/" className={styles.navLink}>Find Jobs</Link>
                    <Link href="/companies" className={styles.navLink}>Companies</Link>
                    <Link href="/avatar" className={styles.navLink}>Digital Human</Link>
                </nav>
                <div className={styles.auth}>
                    <button className={styles.loginBtn}>Login</button>
                    <button className={styles.signupBtn}>Sign Up</button>
                </div>
            </div>
        </header>
    );
}
