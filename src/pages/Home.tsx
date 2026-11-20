import MoodNav from "../components/Moods/MoodNav";

export default function Home() {
    return (
        <div>
            <video
                className="fixed inset-0 h-full w-full object-cover"
                src="/melancholic.mp4"
                autoPlay
                loop
                muted
                playsInline
            />
            <h1 className="relative">Cinemood.</h1>
            <div className="fixed inset-0 z-10 flex items-center justify-center">
                <MoodNav />
            </div>
        </div>
    )
}