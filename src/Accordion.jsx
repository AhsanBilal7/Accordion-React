import React, { useState } from "react";
import "./Accordion.css";
import Question from "./api";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import CancelIcon from "@mui/icons-material/Cancel";
function Accordion() {
  // var items = false ;
  const [DD, setdd] = useState([
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ]);
  console.log(DD);

  const cutit = (i) => {
    if (DD[i] == true) {
      const DD_ = [...DD];
      DD_[i] = false;
      setdd(DD_);
    } else {
      const DD_ = [...DD];
      DD_[i] = true;
      setdd(DD_);
    }
  };

  return (
    <div className="maindiv">
      <div className="centerdiv">
        <div className="heading">
          <h3 style={{textAlign : "center"}}>Welcome to My First Accordion</h3>
        </div>
        <div>
          <ol className="list">
            {Question.map((values, index) => {
              return (
                <>
                  <li className="listitem">
                    <span
                      style={{ display: DD[index] ? "none" : "block" }}
                      onClick={() => cutit(index)}
                    >
                      <ControlPointIcon className="Button" />
                    </span>
                    <span
                      style={{ display: DD[index] ? "block" : "none" }}
                      onClick={() => cutit(index)}
                    >
                      <CancelIcon className="Button"  />
                    </span>
                    <span>
                      <p>{values.question}</p>
                    </span>
                  </li>
                  <p
                    className="answer"
                    style={{ display: DD[index] ? "block" : "none" }}
                  >
                    {values.answer}
                  </p>
                </>
              );
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}

export default Accordion;
