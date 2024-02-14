import React from 'react'

const EventHandling = ({LogData,WithoutPara}) => {

    // const LogData = (name) => console.log(name);

    // const WithoutPara = () => console.log("Harisankar");

    // We can enter function in parent component then we can use it for child component like mentioned above

  return (
    <div>
        <button onClick={() => LogData("Harish")}>Log</button>
        
        <button onClick={WithoutPara}>Click</button>

    </div>
  )
}

export default EventHandling