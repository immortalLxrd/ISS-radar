import React from "react";
import cl from "./MemberCard.module.scss";
import avatar from "../../../assets/imgs/avatar.png";

export const MemberCard = ({ name }) => {
  return (
    <li className={cl.member}>
      <img className={cl.member__avatar} src={avatar} alt="" />
      <p>{name}</p>
    </li>
  );
};
