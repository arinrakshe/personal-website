import { jobs } from '@/data/jobs';
import JobCard from './JobCard';
import styles from './JobList.module.css';

export default function JobList() {
    return (
        <div className={styles.grid}>
            {jobs.map(job => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
}
