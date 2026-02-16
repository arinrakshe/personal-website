import "./job-board.css";

export default function JobBoardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="job-board-layout">
            {children}
        </div>
    );
}
