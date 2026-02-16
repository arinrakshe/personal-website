import { render, screen, fireEvent } from '@testing-library/react';
import JobCard from '@/components/JobCard';
import { Job } from '@/data/jobs';

const mockJob: Job = {
    id: '1',
    title: 'Test Job Title',
    company: 'Test Company',
    location: 'Remote',
    salary: '$100k',
    tags: ['React'],
    logo: '/logo.png',
    postedAt: '1h ago',
    description: 'Test description'
};

describe('JobCard', () => {
    it('renders job details correctly', () => {
        render(<JobCard job={mockJob} />);

        expect(screen.getByText('Test Job Title')).toBeInTheDocument();
        expect(screen.getByText('Test Company')).toBeInTheDocument();
        expect(screen.getByText('Remote')).toBeInTheDocument();
        expect(screen.getByText('$100k')).toBeInTheDocument();
    });

    it('renders tags correctly', () => {
        render(<JobCard job={mockJob} />);
        expect(screen.getByText('React')).toBeInTheDocument();
    });

    it('has an apply button', () => {
        render(<JobCard job={mockJob} />);
        const button = screen.getByRole('button', { name: /apply now/i });
        expect(button).toBeInTheDocument();
    });
});
