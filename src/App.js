import React, { useEffect } from "react";
import "./styles/App.scss";
import { Time } from "./components/Time/Time";
import { Map } from "./components/Map/Map";
import { PositionInfo } from "./components//PositionInfo/PositionInfo";
import { Members } from "./components/Members/Members";
import { useDispatch } from "react-redux";
import allActions from "./actions";
import { useFetchWithInterval } from "./hooks/useFetchWithInterval";

const GOOGLE_MAPS_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
const POSITION_URL = "http://api.open-notify.org/iss-now.json";
const MEMBERS_URL = "http://api.open-notify.org/astros.json";

function App() {
  const [positionData] = useFetchWithInterval(POSITION_URL);
  const [membersData] = useFetchWithInterval(MEMBERS_URL);
  const dispatch = useDispatch();

  useEffect(() => {
    const position = positionData
      ? {
          lat: Number(positionData.iss_position.latitude),
          lng: Number(positionData.iss_position.longitude),
        }
      : { lat: 0, lng: 0 };
    const members = membersData
      ? membersData.people.filter((item) => {
          if (item.craft === "ISS") {
            return item;
          }
        })
      : [];

    dispatch(allActions.positionActions.setPosition(position));
    dispatch(allActions.membersActions.setMembers(members));
  }, [positionData, membersData]);

  return (
    <div className="_container">
      <div className="App">
        <div className="wrapper">
          <PositionInfo />
        </div>
        <div className="wrapper">
          <Time />
        </div>
        <Map apiKey={GOOGLE_MAPS_API_KEY} />
        <div className="wrapper">
          <Members />
        </div>
      </div>
    </div>
  );
}

export default App;
