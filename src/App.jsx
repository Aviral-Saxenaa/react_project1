import React from "react";
import Card from "./Card";
import sdata from "./sdata";

function App(){
        return(<>
                <h1 className="heading">
                        LIST OF TOP 5 NETFLIX SERIES IN 2023
                </h1>

                {sdata.map((val) => {
                        return (
                                <Card
                                        key={val.id}
                                        imgsrc={val.imgscr}
                                        title={val.title}
                                        sname={val.sname}
                                        slink={val.slink}
                                />
                        );
                })}
        </>)
        
}

export default App;
