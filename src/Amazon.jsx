import React from "react";
import sdata from './sdata';
import Card from './Card';

const Amazon = () => {
        return (
                <Card
                        key={sdata[1].id}
                        imgsrc={sdata[1].imgscr}
                        title={sdata[1].title}
                        sname={sdata[1].sname}
                        slink={sdata[1].slink}
                />
        );
};
export default Amazon;