import React from "react";
import sdata from './sdata';
import Card from './Card';

const Netflix = () => {
        return (
                <Card
                        key={sdata[0].id}
                        imgsrc={sdata[0].imgscr}
                        title={sdata[0].title}
                        sname={sdata[0].sname}
                        slink={sdata[0].slink}
                />
        );
};
export default Netflix;