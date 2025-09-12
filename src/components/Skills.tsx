import React from 'react';
import PageContainer from 'components/PageContainer';

type SkillCategory =
    | "UI / Front-End"
    | "API & Back-End"
    | "Database"
    | "DevOps & Cloud"
    | "Testing & Automation"
    | "Other Tools & Integration";

type Skill = {
    id: string;
    name: string;
    category: SkillCategory;
    image?: {
        src: string | null;
        alt: string;
    };
};

const skills: Record<SkillCategory, Skill[]> = {
    "UI / Front-End": [
        { id: "html", name: "HTML", category: "UI / Front-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML" } },
        { id: "css", name: "CSS", category: "UI / Front-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS" } },
        { id: "js", name: "JavaScript", category: "UI / Front-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" } },
        { id: "ts", name: "TypeScript", category: "UI / Front-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" } },
        { id: "react", name: "ReactJS", category: "UI / Front-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "ReactJS" } },
        { id: "next", name: "NextJS", category: "UI / Front-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "NextJS" } },
        { id: "redux", name: "Redux", category: "UI / Front-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", alt: "Redux" } },
        { id: "mui", name: "MaterialUI", category: "UI / Front-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", alt: "MaterialUI" } },
        { id: "antd", name: "Ant Design", category: "UI / Front-End", image: { src: "./techstack/antdesign.svg", alt: "Ant Design" } },
        { id: "tailwind", name: "Tailwind CSS", category: "UI / Front-End", image: { src: "./techstack/tailwindcss.svg", alt: "Tailwind CSS" } },
        { id: "fa", name: "FontAwesome", category: "UI / Front-End", image: { src: "https://upload.wikimedia.org/wikipedia/commons/2/20/Font_Awesome_5_logo.svg", alt: "FontAwesome" } },
    ],
    "API & Back-End": [
        { id: "csharp", name: "C#", category: "API & Back-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", alt: "C#" } },
        { id: "dotnet", name: ".Net", category: "API & Back-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", alt: ".Net" } },
        { id: "ef", name: "Entity Framework", category: "API & Back-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/entityframeworkcore/entityframeworkcore-original.svg", alt: "Entity Framework" } },
        { id: "node", name: "NodeJS", category: "API & Back-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "NodeJS" } },
        { id: "supabase", name: "Supabase", category: "API & Back-End", image: { src: "https://seeklogo.com/images/S/supabase-logo-DCC676FFE2-seeklogo.com.png", alt: "Supabase" } },
    ],
    Database: [
        { id: "sqlserver", name: "SQL Server", category: "Database", image: { src: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg", alt: "SQL Server" } },
    ],
    "DevOps & Cloud": [
        { id: "azure-devops", name: "Azure DevOps", category: "DevOps & Cloud", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg", alt: "Azure DevOps" } },
        { id: "aws", name: "AWS", category: "DevOps & Cloud", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", alt: "AWS" } },
        { id: "git", name: "Git", category: "DevOps & Cloud", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" } },
        { id: "iis", name: "IIS", category: "DevOps & Cloud", image: { src: "https://upload.wikimedia.org/wikipedia/commons/2/27/Internet_Information_Services_logo.svg", alt: "IIS" } },
        { id: "apache", name: "Apache", category: "DevOps & Cloud", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg", alt: "Apache" } },
        { id: "netlify", name: "Netlify", category: "DevOps & Cloud", image: { src: "https://seeklogo.com/images/N/netlify-logo-758722CDF4-seeklogo.com.png", alt: "Netlify" } },
    ],
    "Testing & Automation": [
        { id: "selenium", name: "Selenium", category: "Testing & Automation", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg", alt: "Selenium" } },
        { id: "playwright", name: "Playwright", category: "Testing & Automation", image: { src: "https://playwright.dev/img/playwright-logo.svg", alt: "Playwright" } },
    ],
    "Other Tools & Integration": [
        { id: "i18next", name: "i18next (localization)", category: "Other Tools & Integration", image: { src: null, alt: "i18next" } },
        { id: "sendgrid", name: "SendGrid", category: "Other Tools & Integration", image: { src: null, alt: "SendGrid" } },
        { id: "gmap", name: "Google Maps API", category: "Other Tools & Integration", image: { src: "https://seeklogo.com/images/G/google-maps-2020-icon-logo-4C72927A81-seeklogo.com.png", alt: "Google Maps API" } },
        { id: "openai", name: "OpenAI API", category: "Other Tools & Integration", image: { src: "https://seeklogo.com/images/O/openai-logo-8B9BFEDC26-seeklogo.com.png", alt: "OpenAI" } },
    ],
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
