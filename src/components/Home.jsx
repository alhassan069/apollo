import { data } from "../data/data";
import { useState } from "react";

export const Home = () => {
  const [doctorData, setDoctorData] = useState(data);
  return (
    <>
      <h1>Book Appointment</h1>
      {doctorData.map((e) => (
        <div>{e.name}</div>
      ))}
    </>
  );
};
