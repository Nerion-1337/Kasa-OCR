import React, { useState } from "react";
import arc from "../media/arc.svg";

export const Collaps = (data) => {
  const [active, setActive] = useState(false);
  const classToggle = () => {
    setActive(!active);
  };

  return (
    <article>
      <div className="collaps" onClick={classToggle}>
        <span>{data.title}</span>
        <img
          src={arc}
          alt="un icon en forme de pointe de flèche"
          className={`${active ? "active" : ""}`}
        />
      </div>
      <div className={`collapsContent ${active ? "active" : ""}`}>
        {data.data}
      </div>
    </article>
  );
};
