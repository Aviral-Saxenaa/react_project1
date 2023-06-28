import React from "react";
import Card from "./Card";
import sdata from "./sdata";
// import Netflix from "./Netflix";
// import Amazon from "./Amazon";

// const favseries = "amazon";

// const FavS = () => {
//         if (favseries === "netflix") {
//               return <Netflix />;
//         }
//         else{
//                 return <Amazon />;
//         }
// };

function App() {
        return (
                <>
                        <h1 className="heading">
                                LIST OF TOP 5 NETFLIX SERIES IN 2023
                        </h1>
                        {/* <FavS /> */}
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
                </>
        );
}

export default App;
