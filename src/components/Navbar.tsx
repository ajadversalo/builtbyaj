import React, { ReactNode } from 'react';
import '../App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faListCheck, faDiagramProject, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Tooltip } from "antd";

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
    return (
        <a
            href={href}
            className={`border-2 border-transparent hover:cursor-pointer hover:border-white text-white ${selected === label?.toLowerCase() ? "border-white rounded" : ""} pl-2 pr-2 transition transform duration-500 ease-in-out flex items-center`}
            onClick={() => { setSelected(label); onClick?.() }}
        >
            {children}
        </a>
    );
};

const Navbar: React.FC<{ selected: string | null; setSelected: (val: string) => void; setShowResume: (val: boolean) => void; onDownload: () => void; }> = ({ selected, setSelected, setShowResume, onDownload }) => (
    <div
        className="
      flex justify-center text-white fixed bottom-0 xl:sticky xl:top-0
      
      pt-3 pb-3 z-[50] w-full shadow-lg
      xl:rounded-b-2xl
    "
    >
        <div className="text-xl flex flex-row justify-between border-box w-full xl:w-[50%] pl-4 pr-4 bg-white/10 backdrop-blur-md p-2 rounded ml-4 mr-4">
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
            <AnchorLink href={"#contact"} label={"Contact"} selected={selected} setSelected={setSelected}>
                <div className="flex flex-col xl:flex-row">
                    <FontAwesomeIcon icon={faEnvelope} className="xl:mt-1" />
                    <span className="pl-2 text-sm xl:text-lg">Contact</span>
                </div>
            </AnchorLink>
            {false &&
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
            }
            {false && <AnchorLink href={"#about"} label={"About"} selected={selected} setSelected={setSelected}>About</AnchorLink>}
        </div>
    </div>
);

export default Navbar;
