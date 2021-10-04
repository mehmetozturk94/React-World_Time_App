import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import moment from "moment";
export default function Time({ match }) {
  const [time, setTime] = useState("");
  const [week, setWeek] = useState("");
  const [day, setDay] = useState("")

  useEffect(() => {
    getTime();
  }, []);

  const getTime = () => {
    axios
      .get(
        `http://worldtimeapi.org/api/timezone/${match.params.continent}/${match.params.place}`
      )
      .then((res) => {
        setTime(res.data.datetime);
        setWeek(res.data.week_number);
        setDay(res.data.day_of_year);
      });
  };
  return (
    <div className="container">
      <div className="card">
        <Link
          className="btn-floating halfway-fab waves-light waves-effect deep-orange"
          to={"/"}
        >
          <i className="material-icons">undo</i>
        </Link>
        <div className="card-content">
          <h4 className="center deep-orange-text">{match.params.place}</h4>
          <h1 className="center blue-grey-text">{moment(time).calendar()}</h1>
          <h6 className="center brown-text">{week}.Week of the Year</h6>
          <h6 className="center brown-text">{day}.Day of the Year</h6>
        </div>
      </div>
    </div>
  );
}
