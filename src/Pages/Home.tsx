import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import { skills } from "../data/data";

import { Skill } from "../components/Skills";

import Marquee from "react-fast-marquee";

import MuiAlert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';

//import IconButton from '@mui/material/IconButton';
//import LinkedInIcon from '@mui/icons-material/LinkedIn';

import Contact from '../components/Contact';
import Resume from '../components/Resume';
import Projects from '../components/Projects';
//import About from './Pages/About';
import Skills from '../components/Skills';
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

import { Modal } from "antd";

import {
    //aboutContent,
    productListGenXys,
    productListCentra,
    productListPersonal
} from '../../src/data/data';

type TechStackItem = {
    src: string;
    alt: string;
    desc: string;
};

const SubNavBar: React.FC<{ onDownload: () => void; setShowResume: (val: boolean) => void }> = ({ onDownload, setShowResume }) => (
    <div className="flex justify-center text-white fixed xl:bottom-0 z-[50] w-full xl:mt-0">
        <div className="text-lg flex flex-row justify-between border-box w-full xl:w-[50%] pl-4 pr-4">

        </div>
    </div>
);

const techStackData: TechStackItem[] = Object.values(skills)
    .flat()
    .map((skill: Skill): TechStackItem => ({
        src: skill.image?.src ?? "",
        alt: skill.image?.alt ?? skill.name,
        desc: `${skill.name}${skill.category ? `: ${skill.category}` : ""}`,
    }));

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
                    style={{ minHeight: 40 }}
                    title={desc}
                >
                    <img
                        src={src}
                        alt={alt}
                        className="h-[20px] sm:h-[30px] md:h-[40px] object-contain transition-transform duration-200 hover:scale-110"
                    />
                </div>
            ))}
        </div>
    );
};

const Home: React.FC = () => {
    const [popupMsg, setPopupMsg] = useState<string>('');
    const [openPopup, setOpenPopup] = useState<boolean>(false);
    const [showResume, setShowResume] = useState<boolean>(false);
    const [selected, setSelected] = useState<string | null>(null);
    const [isAtTop, setIsAtTop] = useState<boolean>(true);
    const [tooltip, setTooltip] = useState<{ show: boolean }>({
        show: false
    });

    const skillsRef = useRef(null);
    const portfolioRef = useRef(null);
    const contactRef = useRef(null);

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

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                // Find the entry that's most visible
                const visibleEntry = entries.reduce((max, entry) => {
                    if (entry.intersectionRatio > (max?.intersectionRatio ?? 0)) {
                        return entry;
                    }
                    return max;
                }, null as IntersectionObserverEntry | null);

                if (visibleEntry?.isIntersecting) {
                    const id = visibleEntry.target.getAttribute("id");
                    if (id) {
                        setSelected(id);
                        window.history.replaceState(null, "", "#" + id);
                    }
                }
            },
            {
                threshold: 0,
                rootMargin: "0px 0px -50% 0px"
            }
        );

        const elements = [
            skillsRef.current,
            portfolioRef.current,
            contactRef.current,
        ];

        elements.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => {
            elements.forEach((el) => {
                if (el) observer.unobserve(el);
            });
        };
    }, []);

    return (
        <div className="relative bg-[#000]" id="top">
            <Navbar selected={selected} setSelected={setSelected} setShowResume={setShowResume} onDownload={onDownload} />
            {true && <SubNavBar onDownload={onDownload} setShowResume={setShowResume} />}
            <div className="flex justify-center">
                
                    <div className="h-screen flex flex-col-reverse justify-between md:flex-col md:justify-around md:mt-0 mt-4 pl-2 pr-2">
                        <div className="h-0"></div>
                        <div className={"text-white p-2 flex flex-col"}>
                            <div className={"text-5xl sm:text-6xl flex flex-row justify-between mt-[-6rem]"}>
                                <section className="bg-black text-left">
                                    <Hero />
                                    <div
                                        className="mx-auto mt-12 overflow-y-hidden max-w-[50rem] w-[20rem] sm:w-[30rem] md:w-[40rem] lg:w-[50rem]"
                                        onMouseEnter={e => handleMouseEnter()}
                                        onMouseLeave={handleMouseLeave}
                                        onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
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
                            
                            {!isAtTop && false &&
                                <a href={"#top"}>
                                    <i title="Back to top" className="fa-solid fa-house text-2xl fixed bottom-[90px] right-5 rounded-full h-[3rem] w-[3rem] opacity-30 hover:cursor-pointer"></i>
                                </a>
                            }
                        </div>
                        <div className="text-xl font-bold flex flex-col justify-center rounded-sm">
                            <div className="flex flex-row justify-between">
                                <div className="pr-4 opacity-50">
                                    <div className="text-white text-xs w-full text-center pb-1 border-b">
                                        Launched
                                    </div>
                                    <div className="flex flex-row justify-center pt-[3px]">
                                        <a
                                            href="https://www.linkedin.com/in/ajadversalo"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block"
                                        >
                                            <i
                                                title="Visit my LinkedIn profile"
                                                className="fa-brands fa-linkedin hover:cursor-pointer opacity-50 hover:opacity-100 text-white"
                                            ></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="w-[10rem] opacity-50">
                                    <div className="text-white text-xs w-full text-center pb-1 border-b">
                                        Connect
                                    </div>
                                    <div className="flex flex-row justify-between pt-[3px]">
                                        <a
                                            href="https://www.linkedin.com/in/ajadversalo"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block"
                                        >
                                            <i
                                                title="Visit my LinkedIn profile"
                                                className="fa-brands fa-linkedin hover:cursor-pointer opacity-50 hover:opacity-100 text-white"
                                            ></i>
                                        </a>

                                        <a
                                            href="https://github.com/ajadversalo"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            <i
                                                title="View my Github"
                                                className="fa-brands fa-github text-white hover:cursor-pointer opacity-50 hover:opacity-100"
                                            ></i>
                                        </a>
                                        <div>
                                            <i
                                                title="Download my resume"
                                                className="fa-solid fa-file-arrow-down hover:opacity-100 opacity-50 hover:cursor-pointer text-white"
                                                onClick={() => onDownload()}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
           
            </div>
            <Skills
                id="skills"
                innerRef={skillsRef}
            />

            <Projects
                id="portfolio"
                innerRef={portfolioRef}
                productList={productListGenXys}
                productListCentra={productListCentra}
                productListPersonal={productListPersonal}
            />

            {false &&
                <Contact
                    id="contact"
                    innerRef={contactRef}
                    setOpenPopup={setOpenPopup}
                    setPopupMsg={setPopupMsg}
                    setOpen={() => { }}
                />
            }
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
        </div>
    );
};

export default Home;
