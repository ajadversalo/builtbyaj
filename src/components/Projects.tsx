import React, { useState } from 'react';
import PageContainer from '../components/PageContainer';

import { Divider, Tooltip } from "antd";

type ProductCardProps = {
    title: string,
    description: string,
    isCritical: boolean,
    isLead: boolean,
    index: number
}

type ProjectsProps = {
    id: string
    productList: Array<ProductCardProps>
    productListCentra: Array<ProductCardProps>
    productListPersonal: Array<ProductCardProps>
    innerRef?: React.Ref<HTMLDivElement>
}

function Projects(props: ProjectsProps) {
    const { id, productList, productListCentra, productListPersonal, innerRef } = props;
    const [activeIndex, setActiveIndex] = useState(0);

    const menuItems = [
        { icon: "♬", label: "Featured Projects" },
        { icon: "✈", label: "Personal Projects" },
        { icon: "★", label: "Other Projects " }
    ];

    const ProductCard = (props: ProductCardProps) => {
        return (
            <div className="pt-2 flex flex-col justify-between mt-1">
                <div className="w-100 text-indigo-100 font-semibold">
                    <span className="pr-1">{props.index + 1}.</span>
                    {props.title}
                    {props.isCritical &&
                        <Tooltip title="This is a critical application">
                            <i className="fa-solid fa-shield pl-2 text-green-500"></i>
                        </Tooltip>
                    }

                    {props.isLead &&
                        <Tooltip title="I led this project">
                            <i className="pl-2 fa-solid fa-certificate text-yellow-300" />
                        </Tooltip>
                    }

                    {!props.isLead &&
                        <Tooltip title="I contributed to this project">
                            <i className="pl-2 fa-solid fa-puzzle-piece text-blue-300" />
                        </Tooltip>
                    }
                </div>
                <div className="w-100 text-sm mt-1 text-gray-300">
                    {props.description}
                </div>
            </div>
        );
    }

    return (
        <PageContainer title="" hideDivider={true}>
            <div id={id} ref={innerRef}>
                <div className="flex flex-row justify-between mb-8 mt-[-3rem]">
                    <nav className="mx-auto mt-12 overflow-hidden font-sans w-full">
                        <div className="flex">
                            {menuItems.map((item, index) => (
                                <div
                                    key={index}
                                    className="w-1/3 text-center cursor-pointer opacity-30 hover:opacity-60 transition-opacity duration-500"
                                    onClick={() => setActiveIndex(index)}
                                    style={{ opacity: activeIndex === index ? 1 : undefined }}
                                >
                                    <div className="text-2xl border-2 border-gray-800 rounded-full h-12 w-12 mx-auto flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <span className="block py-2">{item.label}</span>
                                </div>
                            ))}
                        </div>

                        {/* Slider bar */}
                        <div className="w-full h-1 bg-gray-800 rounded mt-2 relative">
                            <div
                                className="h-1 bg-gray-300 rounded transition-all duration-500"
                                style={{ width: "33.3%", marginLeft: `${activeIndex * 33}%` }}
                            />
                        </div>
                    </nav>
                </div>

                <div className="flex flex-col 2xl:flex-row" >
                    <div className={"w-[20%]"}>
                        <img
                            src={`./centra-logo.png`}
                            alt='centra-logo'
                            style={{ width: '7rem', paddingTop: '1.5rem', paddingBottom: '0.5rem' }} />
                    </div>
                    <div className={"w-[100%] mt-6 2xl:pl-1"}>
                        <div className="text-md text-[#FFDD44] font-semibold hover:underline">
                            <a href="https://www.centrawindows.com" target="_blank" rel="noreferrer">Centra Windows</a>
                        </div>
                        <div className="text-sm mt-1">
                            Centra Windows specializes in energy-efficient window and door replacements, offering customized products and installation services to improve home comfort and energy savings.
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="">
                        {productListCentra.map((p: ProductCardProps, index: number) => {
                            return (
                                <ProductCard
                                    key={p.title}
                                    title={p.title}
                                    description={p.description}
                                    isCritical={p.isCritical}
                                    isLead={p.isLead}
                                    index={index}
                                />)
                        })}
                    </div>
                </div>
                <Divider className="bg-white mt-12" />
                <div className="flex flex-col 2xl:flex-row">
                    <div className={"w-[20%]"}>
                        <img src={`./genxys-logo-square.png`} alt='genxys-logo' style={{ width: '7rem', paddingTop: '1.5rem', paddingBottom: '0.5rem' }} />
                    </div>
                    <div className={"w-[100%] mt-6 2xl:pl-1"}>
                        <div className="text-md text-[#FFDD44] font-semibold hover:underline">
                            <a href="https://www.genxys.com" target="_blank" rel="noreferrer">GenXys Healthcare Systems</a>
                        </div>
                        <div className="text-sm mt-1">
                            GenXys provides precision prescribing software that integrates pharmacogenetics and clinical data to help healthcare providers personalize medication choices, improving patient safety and reducing healthcare costs.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col 2xl:flex-row mt-6">
                    <div className="w-100">
                        {productList.map((p: ProductCardProps, index: number) => {
                            return (
                                <ProductCard
                                    key={p.title}
                                    title={p.title}
                                    description={p.description}
                                    isCritical={p.isCritical}
                                    isLead={p.isLead}
                                    index={index}
                                />)
                        })}
                    </div>
                </div>
                <Divider className="bg-white mt-12" />
                <div className="flex flex-col 2xl:flex-row">
                    <div className={"w-[20%]"}>
                        <img src={`./genxys-logo-square.png`} alt='genxys-logo' style={{ width: '7rem', paddingTop: '1.5rem', paddingBottom: '0.5rem' }} />
                    </div>
                    <div className={"w-[100%] mt-6 2xl:pl-1"}>
                        <div className="text-md text-[#FFDD44] font-semibold hover:underline">
                            <a href="https://www.genxys.com" target="_blank" rel="noreferrer">Personal Projects</a>
                        </div>
                        <div className="text-sm mt-1">
                            GenXys provides precision prescribing software that integrates pharmacogenetics and clinical data to help healthcare providers personalize medication choices, improving patient safety and reducing healthcare costs.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col 2xl:flex-row mt-6">
                    <div className="w-100">
                        {productListPersonal.map((p: ProductCardProps, index: number) => {
                            return (
                                <ProductCard
                                    key={p.title}
                                    title={p.title}
                                    description={p.description}
                                    isCritical={p.isCritical}
                                    isLead={p.isLead}
                                    index={index}
                                />)
                        })}
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}

export default Projects;
