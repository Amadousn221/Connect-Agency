"use client";
import FeatureV3Data from "@/assets/jsonData/feature/FeatureV3Data.json"
import SingleFeatureV3 from "./SingleFeatureV3";
import { useState } from "react";

interface DataType {
    sectionClass?: string
}

const FeatureV3 = ({ sectionClass }: DataType) => {

    const [activeFeatureId, setActiveFeatureId] = useState(FeatureV3Data[0]?.id || null);

    const handleMouseEnter = (id: number) => {
        setActiveFeatureId(id);
    };

    const handleMouseLeave = () => {
        // Do nothing on mouse leave to keep the active item
    };


    return (
        <>
            <div className={`faeture-style-three-area ${sectionClass ? sectionClass : ""}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="feature-style-three-items">
                                {FeatureV3Data.map(feature =>
                                    <div className={`feature-style-three hover-active-item ${activeFeatureId === feature.id ? 'active' : ''}`}
                                        key={feature.id}
                                        onMouseEnter={() => handleMouseEnter(feature.id)}
                                        onMouseLeave={handleMouseLeave}

                                    >
                                        <SingleFeatureV3 feature={feature} />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FeatureV3;