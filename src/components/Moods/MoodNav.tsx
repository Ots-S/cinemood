import { moods } from "../../data/moods";
import MoodCard from "./MoodCard";

export default function MoodNav() {
    return (
        <ul className="flex flex-wrap justify-center gap-4">
            {moods.map((mood) => <li key={mood.slug}>
                <MoodCard mood={mood} />
                </li> 
            )}
        </ul>
    )
}

