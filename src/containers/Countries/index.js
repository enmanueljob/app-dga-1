import React, { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";

const API = "https://restcountries.eu/rest/v2";

export default () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState();

  useEffect(() => {
    // se va ejucutar al montar el componente
    const getCountries = async () => {
      const res = await axios.get(`${API}/all`);
      const data = res.data.map(item => ({
        label: item.name,
        value: item.alpha2Code
      }));
      setCountries(data);
    };

    getCountries();
  }, []);

  const handleChange = async selectedOption => {
    console.log(selectedOption);
    const res = await axios.get(`${API}/alpha/${selectedOption.value}`);

    setSelectedCountry({
      // label: selectedCountry.label,
      // value: selectedCountry.value
      ...selectedCountry,
      flag: res.data.flag
    });
  };

  return (
    <div>
      <Select options={countries} onChange={handleChange} />
      {selectedCountry && (
        <div>
          <img src={selectedCountry.flag} height="200" />
        </div>
      )}
    </div>
  );
};
