import React from "react";
import { useSelector } from "react-redux";
import { MemberCard } from "./MemberCard/MemberCard";
import cl from "./Members.module.scss";

export const Members = () => {
  const data = useSelector((state) => state.members);

  return (
    <div className={cl.members}>
      <ul>
        {data &&
          data.map((item, idx) => {
            return <MemberCard name={item.name} key={idx} />;
          })}
      </ul>
      <p className={cl.members__amount}>
        Total amount: {data.length} people on ISS
      </p>
    </div>
  );
};
