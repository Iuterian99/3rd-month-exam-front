import { useEffect, useState } from "react";
function Buildings() {
  const [buildings, setBuildings] = useState([]);
  const [complex, setComplex] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/companies")
      .then((res) => res.json())
      .then((data) => setBuildings(data));
  }, []);

  const handlyCompany = (e) => {
    fetch("http://localhost:9000/buildings", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        company_id: e.target.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => setComplex(data))
      .catch((err) => console.log(err));
  };

  const handleCompklex = (e) => {
    e.preventDefault();
    fetch("http://localhost:9000/complexes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ value: e.target.value }),
    })
      .then((res) => res.json())
      .then((data) => setBuildings(data))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div>
        <select
          className="form-select"
          aria-label="Default select example"
          name="building_companies"
          onChange={handlyCompany}
        >
          {buildings &&
            buildings.map((building) => (
              <option key={building.company_id} value={building.company_id}>
                {building.company_name}
              </option>
            ))}
        </select>
      </div>
      <div>
        <select
          className="form-select"
          aria-label="Default select example"
          name="building_companies"
          onChange={handleCompklex}
        >
          {complex &&
            complex.map((building) => (
              <option key={building.complex_id} value={building.complex_id}>
                {building.complex_name}
              </option>
            ))}
        </select>
      </div>
    </>
  );
}

export default Buildings;
