import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function Cities() {
  const [cities, setCities] = useState([]);
  const [currCity, setCurrCities] = useState(null);

  useEffect(() => {
    getCities();
  }, []);

  const getCities = () => {
    axios.get("http://worldtimeapi.org/api/timezone").then((res) => {
      setCities(res.data);
    });
  };

  const cityFilter = (e) => {
    var input = e.target.value;
    setCurrCities((latestCities) => {
      return cities.filter((s) => {
        return s.toLowerCase().includes(input.toLowerCase());
      });
    });
  };
  return (
    <div className="row container">
      <form className="col s12 m12 l12">
        <div className="input-field col s12">
          <input
            id="city"
            className="input-field"
            type="text"
            onChange={cityFilter}
          ></input>
          <label htmlFor="city" className="deep-orange-text">
            Search City
          </label>
        </div>
      </form>
      <div className="row">
        {currCity != null
          ? currCity.map((s) => (
              <Link key={s} to={`/${s}`}>
                <div className="col l3 m4 s6 ">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <p>{s}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))
          : cities.map((s) => (
              <Link key={s} to={`/${s}`}>
                <div className="col l3 m4 s6 ">
                  <div className="card blue-grey darken-1">
                    <div className="card-content white-text">
                      <p>{s}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
      </div>
    </div>
  );
}
