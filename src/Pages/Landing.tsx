import React, { useState, useEffect, ReactNode } from 'react';
import ReactDOM from "react-dom";
import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck, faDiagramProject, faEnvelope, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons';
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

//import IconButton from '@mui/material/IconButton';
//import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Collapse from '@mui/material/Collapse';

import Contact from './Contact';
import Resume from './Resume';
import Skills from './Skills';
import Projects from './Projects';
//import About from './Pages/About';

import { Modal, Tooltip } from "antd";

import {
    //aboutContent,
    productListGenXys,
    productListCentra
} from '../../src/data/data';

type TechStackItem = {
    src: string;
    alt: string;
    desc: string;
};

type GlassTooltipProps = {
    show: boolean;
    children: ReactNode;
};

type AnchorLinkProps = {
    href: string;
    label: string;
    selected: string | null;
    setSelected: (val: string) => void;
    onClick?: () => void;
    children: ReactNode;
};

// GLASS TOOLTIP (PORTAL RENDERED)
const GlassTooltip: React.FC<GlassTooltipProps> = ({ show, children }) => {
    return ReactDOM.createPortal(
        <div
            style={{
                position: "fixed",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)", // Center horizontally and vertically
                zIndex: 9999,
                pointerEvents: show ? "auto" : "none",
            }}
            className={`
        bg-white/20 backdrop-blur-xl shadow-xl rounded-lg
        px-4 py-3 min-w-[1060px] text-white text-center min-h-[500px]
        flex flex-col items-center justify-center
        transition-opacity duration-700
        ${show ? "opacity-100" : "opacity-0"}
      `}
        >
            {children}
        </div>,
        document.body
    );
};

const AnchorLink: React.FC<AnchorLinkProps> = (props) => {
    const { href, label, selected, setSelected, onClick, children } = props;
    return (
        <a
            href={href}
            className={`border-b-2 border-transparent hover:cursor-pointer hover:border-white ${selected === label ? "border-b-2 border-white" : ""} pl-2 pr-2 transition transform duration-500 ease-in-out flex items-center`}
            onClick={() => { setSelected(label); onClick?.() }}
        >
            {children}
        </a>
    );
};

const NavBar: React.FC<{
    selected: string | null;
    setSelected: (val: string) => void;
    setShowResume: (val: boolean) => void;
    onDownload: () => void;
}> = ({ selected, setSelected, setShowResume, onDownload }) => (
    <div
        className="
      flex justify-center text-white fixed bottom-0 xl:sticky xl:top-0
      bg-white/10 backdrop-blur-md
      pt-3 pb-3 z-[50] w-full shadow-lg
      xl:rounded-b-2xl
    "
    >
        <div className="text-xl flex flex-row justify-between border-box w-full xl:w-[40%] pl-4 pr-4">
            {/* Uncomment if you want Skills */}
            {false &&
                <AnchorLink href={"#skills"} label={"Skills"} selected={selected} setSelected={setSelected}>
                    <div className="flex flex-col xl:flex-row">
                        <FontAwesomeIcon icon={faListCheck} className="xl:mt-1" />
                        <span className="pl-2 text-sm xl:text-lg">Skills</span>
                    </div>
                </AnchorLink>
            }
            <AnchorLink href={"#projects"} label={"Projects"} selected={selected} setSelected={setSelected}>
                <div className="flex flex-col xl:flex-row">
                    <FontAwesomeIcon icon={faDiagramProject} className="xl:mt-1" />
                    <span className="pl-2 text-sm xl:text-lg">Portfolio</span>
                </div>
            </AnchorLink>
            <AnchorLink href={"#contact"} label={"Contact"} selected={selected} setSelected={setSelected}>
                <div className="flex flex-col xl:flex-row">
                    <FontAwesomeIcon icon={faEnvelope} className="xl:mt-1" />
                    <span className="pl-2 text-sm xl:text-lg">Contact</span>
                </div>
            </AnchorLink>
            <div className="flex flex-col xl:flex-row">
                <Tooltip title="Download My Resume">
                    <div className="flex justify-center">
                        <i className="fa-solid fa-file-arrow-down text-white hover:text-blue-200 xl:mt-1" onClick={() => onDownload()} />
                    </div>
                </Tooltip>
                <Tooltip title="View my Resume">
                    <span
                        className="text-white pl-0 xl:pl-2 text-sm xl:text-lg hover:cursor-pointer hover:text-blue-200"
                        onClick={() => setShowResume(true)}
                    >
                        My Resume
                    </span>
                </Tooltip>
            </div>
            {/* Uncomment if you want About */}
            {false && <AnchorLink href={"#about"} label={"About"} selected={selected} setSelected={setSelected}>About</AnchorLink>}
        </div>
    </div>
);

const SubNavBar: React.FC<{ onDownload: () => void; setShowResume: (val: boolean) => void }> = ({ onDownload, setShowResume }) => (
    <div className="flex justify-center text-white fixed xl:bottom-0 pt-3 pb-3 z-[50] w-full mt-4 xl:mt-0">
        <div className="text-lg flex flex-row justify-between border-box w-full xl:w-[50%] pl-4 pr-4">
            {/* Put your SubNavBar content here if needed */}
        </div>
    </div>
);

const techStackData: TechStackItem[] = [
    { src: "./techstack/html5.svg", alt: "HTML5", desc: "HTML5: Markup language" },
    { src: "./techstack/javascript.svg", alt: "JavaScript", desc: "JS: Programming language" },
    { src: "./techstack/css.svg", alt: "CSS", desc: "CSS: Styling" },    
    { src: "./techstack/typescript.svg", alt: "TypeScript", desc: "Type safety" },
    { src: "./techstack/redux.svg", alt: "Redux", desc: "Redux: State management" },
    { src: "./techstack/tailwindcss.svg", alt: "TailwindCSS", desc: "Utility-first CSS" },
    { src: "./techstack/mui.svg", alt: "MUI", desc: "Material UI" },
    { src: "./techstack/antdesign.svg", alt: "Ant Design", desc: "Ant Design" },
    { src: "./techstack/react.svg", alt: "React", desc: "React: UI library" },
    { src: "./techstack/nextdotjs.svg", alt: "Next.js", desc: "Next.js: SSR/SSG" },
    { src: "./techstack/nodedotjs.svg", alt: "Node.js", desc: "Node.js: Backend" },
    { src: "./techstack/c_sharp.svg", alt: "C#", desc: "C#: OOP Language" },
    { src: "./techstack/sql_server.svg", alt: "SQL Server", desc: "Database" },
];

const TechStack: React.FC = () => {
    return (       
        <div
            className="flex flex-row gap-2"
            draggable={false}
        >
            {techStackData.map(({ src, alt, desc }) => (
                <div
                    key={alt}
                    className="mx-2"
                    style={{  minHeight: 50 }}
                >
                    <img
                        src={src}
                        alt={alt}
                        className="h-[30px] sm:h-[40px] md:h-[50px] object-contain transition-transform duration-200 hover:scale-110"
                    />
                </div>
            ))}
        </div>        
    );
};

const Landing: React.FC = () => {
    const [popupMsg, setPopupMsg] = useState<string>('');
    const [openPopup, setOpenPopup] = useState<boolean>(false);
    const [showResume, setShowResume] = useState<boolean>(false);
    const [selected, setSelected] = useState<string | null>(null);
    const [isAtTop, setIsAtTop] = useState<boolean>(true);
    const [showTechnicalSkills, setShowTechnicalSkills] = useState<boolean>(false);
    const [tooltip, setTooltip] = useState<{ show: boolean }>({
        show: false
    });

    useEffect(() => {
        document.title = 'Adversalo';
    }, []);

    useEffect(() => {
        const resizeListener = () => {
            //setHeight(getHeight());
        };
        window.addEventListener('resize', resizeListener);
        return () => {
            window.removeEventListener('resize', resizeListener);
        };
    }, []);

    useEffect(() => {
        const onScroll = () => {
            function isScrolledToTop() {
                return window?.pageYOffset === 0;
            }
            if (isScrolledToTop()) {
                setIsAtTop(true);
            } else {
                setIsAtTop(false);
            }
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const handleClosePopup = () => setOpenPopup(false);

    const onDownload = () => {
        const link = document.createElement('a');
        link.download = 'ajadversalo-resume.pdf';
        link.href = 'resume.pdf';
        link.click();
    };

    const handleMouseEnter = () => {
        setTooltip({ show: true });
    };

    const handleMouseLeave = () =>
        setTooltip({ show: false });

    return (
        <div className="relative bg-[#000] pt-4" id="top">
            <NavBar selected={selected} setSelected={setSelected} setShowResume={setShowResume} onDownload={onDownload} />
            {isAtTop && <SubNavBar onDownload={onDownload} setShowResume={setShowResume} />}

            <div className="h-screen">
                <div className="h-full flex items-center justify-center pl-2 pr-2 mt-[-1rem]">
                    <div className={"text-white p-2 mt-[-3rem] h-[25rem]"}>
                        <div className={"text-5xl sm:text-6xl"}>
                            <section className="bg-black text-left">
                                <div className="relative w-fit mx-auto leading-none">
                                    {/*
                                    <div className="flex items-center gap-4">
                                        <span
                                            className="
                                                font-bold 
                                                text-[clamp(3rem,12vw,190px)] 
                                                leading-[1] tracking-[-0.02em]
                                                text-transparent bg-clip-text 
                                                bg-gradient-to-b from-white to-gray-400
                                                opacity-90
                                                drop-shadow-[0_6px_28px_rgba(0,0,0,0.55)]
                                                blur-[0.3px]
                                                select-none
                                              "
                                        >
                                            {`AJ`}
                                        </span>
                                        <img
                                            src="./phonelaptop.png"
                                            alt="Skyline"
                                            className="h-[200px] sm:h-[300px] object-contain mt-[-7rem] ml-4"
                                        />
                                    </div>
                                    */}
                                    <div
                                        className="
                                                font-bold 
                                                text-[clamp(3rem,12vw,190px)] 
                                                leading-[1] tracking-[-0.02em]
                                                text-transparent bg-clip-text 
                                                bg-gradient-to-b from-white to-gray-400
                                                opacity-90
                                                drop-shadow-[0_6px_28px_rgba(0,0,0,0.55)]
                                                blur-[0.3px]
                                                select-none
                                              "
                                    >
                                        {`AJ`}
                                    </div>
                                    <div
                                        className="
                                          block relative z-10
                                          -mt-[0.15em]
                                          font-bold 
                                          text-[clamp(3rem,12vw,170px)]
                                          leading-[1] tracking-[-0.02em]
                                          text-white
                                          drop-shadow-[0_4px_16px_rgba(0,0,0,0.45)]
                                        "
                                    >
                                        {`Adversalo`}
                                    </div>
                                    <div className="mt-2 text-[#ECEFF1] text-xl tracking-tight font-bold" >
                                        Full Stack Software Developer
                                    </div>
                                </div>
                                
                                <div
                                    className="mt-12 overflow-y-hidden max-w-[50rem] w-[28rem] w-full sm:w-[42rem] md:w-[50rem]"
                                    onMouseEnter={e => handleMouseEnter()}
                                    onMouseLeave={handleMouseLeave}
                                    title="View My Skills"
                                >
                                    <Marquee
                                        gradient={true}
                                        gradientColor="#000"
                                        speed={20}
                                        className="overflow-y-hidden hover:cursor-pointer"
                                        play={!tooltip.show}
                                    >
                                        <TechStack />
                                        <TechStack />
                                    </Marquee>
                                </div>
                            </section>
                        </div>

                        <Collapse in={!showTechnicalSkills}>
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1 }}
                            >
                            </motion.div>
                        </Collapse>
                        {!isAtTop &&
                            <a href={"#top"}>
                                <FontAwesomeIcon icon={faCircleChevronUp} size="2xl" className="fixed bottom-[90px] right-5 rounded-full h-[3rem] w-[3rem] opacity-30 hover:cursor-pointer" />
                            </a>
                        }

                        {!showTechnicalSkills && false &&
                            <div className="mt-8 hover:cursor-pointer hover:underline text-[#FFDD44]" onClick={() => setShowTechnicalSkills(true)}>View My Techical Skills <i className="fa-solid fa-chevron-right"></i></div>
                        }
                        <Collapse in={showTechnicalSkills}>
                            <div className="">
                                <Skills />
                            </div>
                        </Collapse>
                    </div>
                </div>
            </div>

            <div className="flex justify-center">
                <div id="projects" className=""></div>
                <Projects
                    productList={productListGenXys}
                    productListCentra={productListCentra}
                />
            </div>

            <div className="flex justify-center">
                <div id="contact" className=""></div>
                <Contact
                    setOpenPopup={setOpenPopup}
                    setPopupMsg={setPopupMsg}
                    setOpen={() => { }}
                />
            </div>

            <Modal
                open={showResume}
                width={1000}
                footer={null}
                onCancel={() => setShowResume(false)}
                style={{ marginTop: "-5rem" }}
            >
                <Resume />
            </Modal>
            <Snackbar
                anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
                open={openPopup}
                autoHideDuration={5000}
                onClose={handleClosePopup}>
                <MuiAlert
                    severity={'info'}
                    variant='filled'
                    onClose={handleClosePopup}>
                    {popupMsg}
                </MuiAlert>
            </Snackbar>
            <GlassTooltip show={false}>
                <h1>Hello, I'm Centered!</h1>
            </GlassTooltip>
        </div>
    );
};

export default Landing;
