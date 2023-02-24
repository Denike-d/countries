import React, { useState, useEffect } from "react";
import Nav from "../nav/Nav";
import { getCountries } from "../../axios";
import Pagination from "@mui/material/Pagination";
import "./Home.scss";

import { useNavigate } from "react-router-dom";
import MenuDropdown from "../menu/Menu";
import { Link } from "react-router-dom";
import Details from "../../Pages/details/Details";

export default function Home() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    getCountries.get("all").then((response) => {
      setCountries(response.data);
      console.log(response.data);
    });
  }, []);

  return (
    <>
      <div className="home">
        <div className="top">
          <form>
            <input
              type="text"
              required
              placeholder="search for a country"
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
          <MenuDropdown data={countries} />
        </div>

        <div>
          <ul className="countries">
            {countries
              .filter((item) =>
                search === ""
                  ? item
                  : item.name.common.toLowerCase().includes(search)
              )
              .map((country, index) => (
                <li key={index}>
                  <Link
                    to={`/country-details/` + country.name.common}
                    className="link"
                  >
                    <div className="country">
                      <div className="image-container">
                        <img src={country.flags.png} className="image" />
                      </div>
                      <div className="countries-details">
                        <p style={{ fontSize: "1.1rem" }}>
                          <strong>{country.name.common}</strong>
                        </p>

                        <p>
                          <p></p>Populaion: {country.population}
                        </p>
                        <p>
                          <strong>Region: </strong>
                          {country.region}
                        </p>
                        <p>
                          <strong>Capital: </strong>
                          {country.capital}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              ))}
          </ul>
        </div>
        {/* <Pagination
          count={5}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "1rem",
          }}
        /> */}
      </div>
    </>
  );
}
