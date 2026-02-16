import { Job } from '@/data/jobs';
import styles from './JobCard.module.css';

interface JobCardProps {
    job: Job;
}

export default function JobCard({ job }: JobCardProps) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <img src={job.logo} alt={`${job.company} logo`} className={styles.logo} />
                <div className={styles.info}>
                    <h3 className={styles.title}>{job.title}</h3>
                    <p className={styles.company}>{job.company}</p>
                </div>
                <span className={styles.posted}>{job.postedAt}</span>
            </div>

            <div className={styles.meta}>
                <span className={styles.type}>{job.location}</span>
                <span className={styles.salary}>{job.salary}</span>
            </div>

            <div className={styles.tags}>
                {job.tags.map(tag => (
                    <span key={tag} className={styles.tag}>{tag}</span>
                ))}
            </div>

            <button className={styles.applyBtn}>Apply Now</button>
        </div>
    );
}
