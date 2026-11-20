import { Link } from "react-router"
import type { Mood } from "../../data/moods"

type Props = {
    mood: Mood
}

const tones: Record<string, string> = {
    melancholic: "from-slate-950/80",
    romantic: "from-rose-950/80",
    revengful: "from-red-950/85",
}

export default function MoodCard({ mood }: Props) {
    const tone = tones[mood.slug] ?? "from-black/70"

    return (
        <Link
            to={`/moods/${mood.slug}`}
            className={`flex h-56 w-64 items-end rounded-2xl bg-linear-to-t ${tone} to-white/5 p-5 shadow-lg ring-1 ring-white/15 backdrop-blur-md transition hover:-translate-y-1 hover:ring-white/40`}
        >
            <span className="text-2xl font-medium tracking-wide">{mood.label}</span>
        </Link>
    )
}
