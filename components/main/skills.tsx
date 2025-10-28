import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.95)" }}
      className="flex flex-col items-center justify-center gap-6 relative overflow-hidden py-10"
    >
      {/* Header Text */}
      <SkillText />

      {/* All Skills */}
      {[SKILL_DATA, FRONTEND_SKILL, BACKEND_SKILL, FULLSTACK_SKILL, OTHER_SKILL].map(
        (skillGroup, groupIndex) => (
          <div
            key={groupIndex}
            className="flex flex-row justify-center flex-wrap gap-5 mt-4 items-center"
          >
            {skillGroup.map((skill, i) => (
              <SkillDataProvider
                key={skill.skill_name}
                src={skill.image}
                name={skill.skill_name}
                width={skill.width}
                height={skill.height}
                index={i}
              />
            ))}
          </div>
        )
      )}

      {/* Subtle clean background (no orange tint) */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <video
          className="w-full h-full object-cover"
          preload="false"
          playsInline
          loop
          muted
          autoPlay
        >
          <source src="/videos/skills-bg.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};
