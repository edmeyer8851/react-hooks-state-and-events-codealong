import React, { useState} from "react";

function Toggle() {
  const [isOn, setIsOn] = useState(false)

  function toggle(){
    setIsOn(isON => !isOn)
  }


  return (
    <button onClick={toggle} style={{ background: isOn ? "red" : "white"}}>
      {isOn ? "On" : "Off"}
    </button>
  )
}

export default Toggle;
