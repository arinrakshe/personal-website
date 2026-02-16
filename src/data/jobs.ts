export interface Job {
    id: string;
    title: string;
    company: string;
    location: string;
    salary: string;
    tags: string[];
    logo: string; // URL to logo placeholder
    postedAt: string;
    description: string;
}

export const jobs: Job[] = [
    {
        id: '1',
        title: 'Senior Frontend Developer',
        company: 'TechCorp',
        location: 'Remote',
        salary: '$120k - $150k',
        tags: ['React', 'TypeScript', 'Next.js'],
        logo: 'https://placehold.co/50x50/0070f3/ffffff?text=TC',
        postedAt: '2h ago',
        description: 'We are looking for a Senior Frontend Developer to join our team...'
    },
    {
        id: '2',
        title: 'Full Stack Engineer',
        company: 'StartupX',
        location: 'New York, NY',
        salary: '$100k - $140k',
        tags: ['Node.js', 'React', 'LiveKit'],
        logo: 'https://placehold.co/50x50/ff4081/ffffff?text=SX',
        postedAt: '5h ago',
        description: 'Join our fast-paced startup building the future of video AI...'
    },
    {
        id: '3',
        title: 'Product Designer',
        company: 'DesignStudio',
        location: 'San Francisco, CA',
        salary: '$90k - $130k',
        tags: ['Figma', 'UI/UX', 'Mobile'],
        logo: 'https://placehold.co/50x50/4caf50/ffffff?text=DS',
        postedAt: '1d ago',
        description: 'We need a talented Product Designer to create amazing experiences...'
    },
    {
        id: '4',
        title: 'Backend Engineer',
        company: 'CloudSystems',
        location: 'Austin, TX',
        salary: '$130k - $160k',
        tags: ['Go', 'Kubernetes', 'AWS'],
        logo: 'https://placehold.co/50x50/4caf50/ffffff?text=CS',
        postedAt: '2d ago',
        description: 'Build scalable backend systems...'
    }
];
