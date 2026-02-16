import Link from 'next/link';
import styles from './RecommendationPanel.module.css';

const recommendations = [
    { id: '101', title: 'React Developer', company: 'WebSolutions', salary: '$90k' },
    { id: '102', title: 'UI Engineer', company: 'CreativeMinds', salary: '$110k' },
    { id: '103', title: 'Frontend Lead', company: 'EnterpriseCorp', salary: '$140k' },
];

export default function RecommendationPanel() {
    return (
        <aside className={styles.panel}>
            <h3 className={styles.heading}>Recommended for You</h3>
            <div className={styles.list}>
                {recommendations.map(job => (
                    <div key={job.id} className={styles.item}>
                        <h4 className={styles.title}>{job.title}</h4>
                        <div className={styles.meta}>
                            <span className={styles.company}>{job.company}</span>
                            <span className={styles.salary}>{job.salary}</span>
                        </div>
                        <button className={styles.viewBtn}>View</button>
                    </div>
                ))}
            </div>
            <div className={styles.promo}>
                <h4>Upgrade to Pro</h4>
                <p>Get instant access to exclusive job listings.</p>
                <Link href="#" className={styles.upgradeLink}>Upgrade Now</Link>
            </div>
        </aside>
    );
}
