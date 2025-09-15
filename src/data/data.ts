import { SkillCategory, Skill } from "../components/Skills";

export const aboutContent: string[] = [
    'I am a passionate software developer based in beautiful Vancouver, British Columbia. I moved to Canada in 2016, and in 2019, I made a significant career transition into the world of software development. I thrive on the challenge of bringing ideas to life through code, and I take great pride in my ability to deliver high-quality work.',
    'I had the incredible opportunity to further enhance my skills as a full-stack software developer during my time at GenXys. As part of a dynamic team of four, we collaborated closely to create a comprehensive suite of applications that revolutionized the way healthcare professionals interact with patient data. I learned the value of effective teamwork, agile development methodologies, and delivering high-quality solutions.',
    'If you\'re in need of a dedicated software developer, I would be thrilled to discuss how I can contribute to your company. I am confident in my ability to tackle any challenge and provide innovative solutions tailored to your specific needs.'
];

export const contactSubText: string = 'If you\'re in need of a skilled and dedicated software developer, I would be thrilled to chat with you. Please don\'t hesitate to reach out and get in touch.';

export const productListGenXys = [
    {
        title: 'GenXys Portal', 
        description: 'https://cdn.portal.genxys.com for Canada and https://us.portal.genxys.com for the United States. This is the portal for Healthcare providers where they can purchase licenses and also manage their user account and preferences.',
        isCritical: true,
        isLead: false,
        index: 1
    },
    {
        title: 'TreatGx', 
        description: 'TreatGx generates medication options that are safe and effective for you by combining your genetics with up-to-date clinical evidence and information that you enter.',
        isCritical: true,
        isLead: false,
        index: 2
    },                
    {
        title: 'ReviewGx', 
        description: 'A medication Therapy Management tool that looks at evidence-based pharmacogenomics, deprescribing insights and clinical lab data to help you perform comprehensive medication reviews.',
        isCritical: false,
        isLead: false,
        index: 3
    },
    {
        title: 'Alogogen', 
        description: 'An internal application used by the algorithm developers to create complex pharmacogenetic algorithms.',
        isCritical: false,
        isLead: false,
        index: 4
    },
    {
        title: 'TrackGx', 
        description: 'A mobile first application which allows patients to effortlessly monitor the efficacy of their prescriptions.',
        isCritical: false,
        isLead: false,
        index: 5
    },
    {
        title: 'LabGx', 
        description: 'This laboratory application enables uploading genetic data from laboratory results.',
        isCritical: false,
        isLead: false,
        index: 6
    },         
    {
        title: 'Patient Dashboard', 
        description: 'User portal where patients can see their lab reports and medication reviews.',
        isCritical: false,
        isLead: false,
        index: 7
    }
];

export const productListCentra = [
    {
        title: 'Scheduling Software for Cross-Departmental Workflow Management',
        description: 'A calendar based scheduling software solution, designed to streamline operations across multiple departments, including manufacturing, installation, and shipping. This tool enables real-time tracking and scheduling of work orders, improving workflow visibility and coordination. The software integrates seamlessly with departmental needs, ensuring that each team stays informed and synchronized, ultimately reducing downtime and enhancing productivity.',
        isCritical: true,
        isLead: true,
        index: 1
    },
    {
        title: 'Manufacturing Tracking Software',
        description: 'This application is tailored for the window and door manufacturing process. This tool provides comprehensive, real-time insights into each stage of production, ensuring transparency and control from start to finish. Used by the manufacturing team, it captures and displays live production stats, enabling teams to monitor progress, optimize workflow, and address bottlenecks quickly. This solution empowers teams to maintain high standards of efficiency and quality throughout the manufacturing lifecycle.',
        isCritical: true,
        isLead: true,
        index: 2
    },
    {
        title: 'Business Performance Dashboard',
        description: 'A streamlined platform for managing essential company tasks, allowing employees to fill and submit forms for share purchases, vacation requests, staff onboarding, terminations, and more. This application centralizes administrative workflows, making it easier for teams to handle routine processes efficiently.',
        isCritical: true,
        isLead: false,
        index: 3
    },
    {
        title: 'Employee Services Portal',
        description: 'This application is tailored for the window and door manufacturing process. This tool provides comprehensive, real-time insights into each stage of production, ensuring transparency and control from start to finish. Used by the manufacturing team, it captures and displays live production stats, enabling teams to monitor progress, optimize workflow, and address bottlenecks quickly. This solution empowers teams to maintain high standards of efficiency and quality throughout the manufacturing lifecycle.',
        isCritical: false,
        isLead: false,
        index: 4
    },
];

//const skillsByCategory = {
//  Frontend: [
//    { name: "React", image: "/images/react.png" },
//    { name: "Next.js", image: "/images/nextjs.png" },
//  ],
//  Backend: [
//    { name: "C#", image: "/images/csharp.png" },
//    { name: ".NET", image: "/images/dotnet.png" },
//  ],
//};

export const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/; // eslint-disable-line

            /* -------------------------------------
                Service Id: service_0cl4yjf
                Template Id: template_c2ne7jm
                 Public key: ajonPi_KH7jk3zPCW
            ------------------------------------- */

export const serviceId = 'service_0cl4yjf';
export const templateId = 'template_c2ne7jm';
export const publicKey = 'ajonPi_KH7jk3zPCW';

export const skills: Record<SkillCategory, Skill[]> = {
    "UI / Front-End": [
        { id: "html", name: "HTML", category: "UI / Front-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML" } },
        { id: "css", name: "CSS", category: "UI / Front-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS" } },
        { id: "js", name: "JavaScript", category: "UI / Front-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" } },
        { id: "ts", name: "TypeScript", category: "UI / Front-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", alt: "TypeScript" } },
        { id: "react", name: "ReactJS", category: "UI / Front-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", alt: "ReactJS" } },
        { id: "next", name: "NextJS", category: "UI / Front-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", alt: "NextJS" } },
        { id: "tailwind", name: "Tailwind CSS", category: "UI / Front-End", image: { src: "./tech_logos/tailwindcss.svg", alt: "Tailwind CSS" } },
        { id: "redux", name: "Redux", category: "UI / Front-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg", alt: "Redux" } },        
        { id: "antd", name: "Ant Design", category: "UI / Front-End", image: { src: "./tech_logos/antdesign.svg", alt: "Ant Design" } },        
        { id: "mui", name: "MaterialUI", category: "UI / Front-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg", alt: "MaterialUI" } },
        { id: "fa", name: "FontAwesome", category: "UI / Front-End", image: { src: "./tech_logos/fontawesome.svg", alt: "FontAwesome" } },
    ],
    "API & Back-End": [
        { id: "csharp", name: "C#", category: "API & Back-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg", alt: "C#" } },
        { id: "dotnet", name: ".Net", category: "API & Back-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg", alt: ".Net" } },
        { id: "ef", name: "Entity Framework", category: "API & Back-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/entityframeworkcore/entityframeworkcore-original.svg", alt: "Entity Framework" } },
        { id: "node", name: "NodeJS", category: "API & Back-End", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "NodeJS" } },
        { id: "supabase", name: "Supabase", category: "API & Back-End", image: { src: "./tech_logos/supabase.svg", alt: "Supabase" } },
    ],
    Database: [
        { id: "sqlserver", name: "SQL Server", category: "Database", image: { src: "./tech_logos/sql_server.svg", alt: "SQL Server" } },
    ],
    "DevOps & Cloud": [
        { id: "azure-devops", name: "Azure DevOps", category: "DevOps & Cloud", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg", alt: "Azure DevOps" } },
        { id: "aws", name: "AWS", category: "DevOps & Cloud", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg", alt: "AWS" } },
        { id: "git", name: "Git", category: "DevOps & Cloud", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" } },
        { id: "iis", name: "IIS", category: "DevOps & Cloud", image: { src: "./tech_logos/iis.jpg", alt: "IIS" } },
        { id: "apache", name: "Apache", category: "DevOps & Cloud", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg", alt: "Apache" } },
        { id: "netlify", name: "Netlify", category: "DevOps & Cloud", image: { src: "./tech_logos/netlify.svg", alt: "Netlify" } },
    ],
    "Testing & Automation": [
        { id: "selenium", name: "Selenium", category: "Testing & Automation", image: { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg", alt: "Selenium" } },
        { id: "playwright", name: "Playwright", category: "Testing & Automation", image: { src: "https://playwright.dev/img/playwright-logo.svg", alt: "Playwright" } },
    ],
    "Other Tools & Integration": [
        { id: "i18next", name: "i18next (localization)", category: "Other Tools & Integration", image: { src: "./tech_logos/i18next.svg", alt: "i18next" } },
        { id: "sendgrid", name: "SendGrid", category: "Other Tools & Integration", image: { src: "./tech_logos/sendgrid.svg", alt: "SendGrid" } },
        { id: "gmap", name: "Google Maps API", category: "Other Tools & Integration", image: { src: "./tech_logos/google-maps.svg", alt: "Google Maps API" } },
        { id: "openai", name: "OpenAI API", category: "Other Tools & Integration", image: { src: "./tech_logos/openai.svg", alt: "OpenAI" } },
    ],
};
