import React from "react";
import EventHandling from "./EventHandling";
import SecondComponent from "./SecondComponent";
import ListRendering from "./ListRendering";
import IfElse from "./IfElse"


function Firstcomponent() {

    const LogData = (name) => console.log(name);

    const WithoutPara = () => console.log("Harisankar");


    return ( 
        <div>

            {/* <h2>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloribus delectus enim, saepe impedit dolorem quasi eligendi perferendis in vero dicta labore et nobis incidunt debitis, ipsam necessitatibus dignissimos a! Doloremque!</h2> */}
            {/* <EventHandling LogData={LogData} WithoutPara={WithoutPara}></EventHandling> */}
            {/* <SecondComponent></SecondComponent> */}
            {/* <IfElse></IfElse> */}
            <ListRendering></ListRendering>
            
        </div>
    )
}

export default Firstcomponent