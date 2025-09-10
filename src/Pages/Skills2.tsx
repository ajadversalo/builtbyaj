import React from 'react';
import PageContainer from '../Pages/PageContainer';

type ProductCardProps = {
    title: string,
    description: string,
    isCritical: boolean,
    isLead: boolean,
    index: number
}

type ProjectsProps = {
    productList: Array<ProductCardProps>
    productListCentra: Array<ProductCardProps>
}

function Skills() {
    return (
        <PageContainer title="Skills" className="w-full">
            <div className="flex flex-col gap-6">
                <div className={""}>
                    Front End
                </div>
                <div className="flex flex-row gap-2 ml-4">
                    <div className={"border rounded-sm p-2"}>
                        Javascript
                    </div>
                    <div className={"border rounded-sm p-2"}>
                        CSS
                    </div>
                </div>
                <div className={""}>
                    Back End
                </div>
                <div className="flex flex-row gap-2 ml-4">
                    <div className={"border rounded-sm p-2"}>
                        Javascript
                    </div>
                    <div className={"border rounded-sm p-2"}>
                        CSS
                    </div>
                    <div className={"border rounded-sm p-2"}>
                        Tailwind
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}

export default Skills;
