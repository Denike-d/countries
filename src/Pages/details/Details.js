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
        <Link to="/">
          <button>Back</button>
        </Link>
        {countryDetails.map((item) => (
          <div className="country-details">
            <img src={item.flags.png} width={500} />
            <div>
              <h2>{item.name.common}</h2>
              <div className="description">
                <div className="left">
                  <p>
                    <strong>Native name: </strong>
                    {item.name.nativeName.official}
                  </p>
                  <p>
                    <strong>Population: </strong>
                    {item.population}
                  </p>
                  <p>
                    <strong>Region: </strong>
                    {item.region}
                  </p>
                  <p>
                    <strong>Sub-region: </strong>
                    {item.subregion}
                  </p>
                  <p>
                    <strong>Capital: </strong>
                    {item.capital}
                  </p>
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
