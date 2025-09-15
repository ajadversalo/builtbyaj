import React from 'react';
import PageContainer from 'components/PageContainer';
import { skills } from "../data/data";

export type SkillCategory =
    | "UI / Front-End"
    | "API & Back-End"
    | "Database"
    | "DevOps & Cloud"
    | "Testing & Automation"
    | "Other Tools & Integration";

export type Skill = {
    id: string;
    name: string;
    category: SkillCategory;
    image?: {
        src: string | null;
        alt: string;
    };
};

type SkillsProps = {
    id: string    
}
function Skills(props: SkillsProps) {
    const { id } = props;

    return (
        <PageContainer title="Skills" className="w-full" id={id}>
            <div className="flex flex-col gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                    <div key={category} className="mb-6">
                        <h2 className="text-xl font-bold mb-3">{category}</h2>
                        <div className="flex flex-wrap gap-3 ml-8">
                            {skillList.map(skill => (
                                <div key={skill.id} className="flex flex-row items-center gap-2 border rounded pl-2 pr-2 pt-[2px] pb-[2px]">
                                    {skill.image?.src && (
                                        <img
                                            src={skill.image.src}
                                            alt={skill.image.alt}
                                            className="w-6 h-6"
                                        />
                                    )}
                                    {skill.name}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </PageContainer>
    );
}

export default Skills;
