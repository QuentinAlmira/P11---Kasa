import React, { useState } from "react";
import Chevron from "../assets/img/arrow_down.png";

const Collapse = ({ title, content }) => {
  const [deploy, setDeploy] = useState();

  return (
    <div className="collapse">
      <div className="collapse_title" onClick={() => setDeploy(!deploy)}>
        <h2>{title}</h2>
        <img
          className={deploy ? "chevron_up" : "chevron_down"}
          src={Chevron}
          alt="deployed content"
        />
      </div>

      <div className={deploy ? "content" : "content_hidden"}>
        {Array.isArray(content)
          ? content.map((item, index) => {
              return <div key={index}>{item}</div>;
            })
          : content}
      </div>
    </div>
  );
};

export default Collapse;
