import React, { ReactNode } from 'react';
import ReactDOM from "react-dom";
import '../App.css';

type GlassTooltipProps = {
    show: boolean;
    children: ReactNode;
};

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

export default GlassTooltip;
