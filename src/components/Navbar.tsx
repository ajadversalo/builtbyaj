import React, { ReactNode } from 'react';
import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck, faDiagramProject, faEnvelope } from '@fortawesome/free-solid-svg-icons';

type AnchorLinkProps = {
    href: string;
    label: string;
    selected: string | null;
    setSelected: (val: string) => void;
    onClick?: () => void;
    children: ReactNode;
};

const AnchorLink: React.FC<AnchorLinkProps> = (props) => {
    const { href, label, selected, setSelected, onClick, children } = props;

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent default anchor behavior

        setSelected(label); // Update selected state
        onClick?.(); // Call any external onClick handler

        // Manually scroll to the target section
        const targetElement = document.getElementById(href.substring(1)); // Strip the '#' from the href
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <a
            href={href}
            className={`border-2 border-transparent hover:cursor-pointer hover:border-white text-white ${selected === label?.toLowerCase() ? "border-gray-400 border-[1px]" : ""} pl-2 pr-2 transition transform duration-500 ease-in-out flex items-center`}
            onClick={handleClick}
        >
            {children}
        </a>
    );
}

const Navbar: React.FC<{ selected: string | null; setSelected: (val: string) => void; setShowResume: (val: boolean) => void; onDownload: () => void; }> = ({ selected, setSelected, setShowResume, onDownload }) => (
    <div
        className="
      flex justify-center text-white fixed bottom-0 xl:sticky xl:top-0
      
      pt-3 pb-3 z-[50] w-full shadow-lg
      xl:rounded-b-2xl
    "
    >
        <div className="text-xl flex flex-row justify-between border-box w-full xl:w-[50%] pl-4 pr-4 bg-white/10 backdrop-blur-md p-2 rounded ml-4 mr-4 relative">
            {false &&
                <img
                    src="./aj_logo_tight.png"
                    alt="aj-logo"
                    className="
                    w-16 object-cover rounded-md
                    cursor-pointer
                    border-black    
                    border-[0.5px] hover:border-white/20
                    hover:border-white
                    transition-all duration-700
                  "
                />
            }
            <AnchorLink href={"#skills"} label={"Skills"} selected={selected} setSelected={setSelected}>
                <div className="flex flex-col xl:flex-row">
                    <FontAwesomeIcon icon={faListCheck} className="xl:mt-1" />
                    <span className="pl-2 text-sm xl:text-lg">Skills</span>
                </div>
            </AnchorLink>
            <AnchorLink href={"#portfolio"} label={"Portfolio"} selected={selected} setSelected={setSelected}>
                <div className="flex flex-col xl:flex-row">
                    <FontAwesomeIcon icon={faDiagramProject} className="xl:mt-1" />
                    <span className="pl-2 text-sm xl:text-lg">Portfolio</span>
                </div>
            </AnchorLink>
            {false &&
                <AnchorLink href={"#contact"} label={"Contact"} selected={selected} setSelected={setSelected}>
                    <div className="flex flex-col xl:flex-row">
                        <FontAwesomeIcon icon={faEnvelope} className="xl:mt-1" />
                        <span className="pl-2 text-sm xl:text-lg">Contact</span>
                    </div>
                </AnchorLink>
            }
            {false && <AnchorLink href={"#about"} label={"About"} selected={selected} setSelected={setSelected}>About</AnchorLink>}

            <div title="Visit my LinkedIn profile" className="text-xl tracking-tight font-bold flex flex-col justify-between mr-2 rounded-sm absolute top-16 -right-3 h-[7rem] p-1 ml-4" >
                <a
                    href="https://www.linkedin.com/in/ajadversalo"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                >
                    <i className="fa-brands fa-linkedin hover:cursor-pointer opacity-50 hover:opacity-100"></i>
                </a>
                
                <a href="https://github.com/ajadversalo" target="_blank" rel="noopener noreferrer">
                    <i title="View my Github" className="fa-brands fa-github text-white hover:cursor-pointer opacity-50 hover:opacity-100"></i>
                </a>                                                            
                <i title="Download my resume" className="fa-solid fa-file-arrow-down hover:opacity-100 ml-[2px] mt-[5px] opacity-50 hover:cursor-pointer" onClick={() => onDownload()} />                                                            
            </div>
        </div>         
    </div>
);

export default Navbar;
