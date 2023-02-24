import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getCountries } from "../../axios";
import "./Details.scss";

export default function Details() {
  const { index } = useParams();
  const [countryDetails, setCountryDetails] = useState([]);

  // const item = countries.find((item) => item.index === index);

  useEffect(() => {
    getCountries.get(`name/` + index).then((response) => {
      setCountryDetails(response.data);
      console.log(response.data);
    });
  }, []);

  // handleBackButtonClick(){

  // }

  return (
    <>
      <div className="details">
        <button>Back</button>
        {countryDetails.map((item) => (
          <div className="country-details">
            <img src={item.flags.png} width={500} />
            <div>
              <h3>{item.name.common}</h3>
              <div className="description">
                <div className="left">
                  <p>Native name: {item.name.nativeName.official}</p>
                  <p>Population: {item.population}</p>
                  <p>Region: {item.region}</p>
                  <p>Sub-region: {item.subregion}</p>
                  <p>Capital: {item.capital}</p>
                </div>
                <div className="right">
                  <p>Top level domain</p>
                  {/* <p>Languages {item.languages}</p> */}
                  <p>Top level domain</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
