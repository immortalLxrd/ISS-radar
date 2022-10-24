import React from "react";
import { useSelector } from "react-redux";
import { MemberCard } from "./MemberCard/MemberCard";
import cl from "./Members.module.scss";

export const Members = ({ loading, error }) => {
  const data = useSelector((state) => state.members);

  if (loading) return <div>Loadind...</div>;
  if (error) return <div>Error: {error}</div>;

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
