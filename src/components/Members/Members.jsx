import React, { useEffect, useState } from "react";
import { useFetchWithInterval } from "../../hooks/useFetchWithInterval";
import { MemberCard } from "./MemberCard/MemberCard";
import cl from "./Members.module.scss";

const URL = "http://api.open-notify.org/astros.json";

export const Members = () => {
  const [data, loading, error] = useFetchWithInterval(URL);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    if (data) {
      let filteredData = data.people.filter((item) => {
        if (item.craft === "ISS") {
          return item;
        }
      });
      setFilteredData(filteredData);
    }
  }, [data]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className={cl.members}>
      <ul>
        {filteredData &&
          filteredData.map((item, idx) => {
            return <MemberCard name={item.name} key={idx} />;
          })}
      </ul>
      <p className={cl.members__amount}>
        Total amount: {filteredData.length} people on ISS
      </p>
    </div>
  );
};
