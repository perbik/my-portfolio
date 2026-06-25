import { ExperienceCard } from "@/components/cards/ExperienceCard";
import { experiences } from "@/data/experiences";


export function ExperienceSection() {
    return (
        <section>
            <h2 className="text-2xl font-sans font-semibold mb-8">
                Experience
            </h2>

            <div className="space-y-12">
                {experiences.map((experience) => (
                    <ExperienceCard
                        key={experience.title}
                        {...experience}
                    />
                ))}
            </div>
        </section>
    );
}