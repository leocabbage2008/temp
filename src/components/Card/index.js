import React from "react";

export default function Card({ job, gender }) {
  return (
    <div className="card">
      <img
        className="img"
        src={
          gender === "m"
            ? "https://i.ibb.co/nk7Cs1g/male.png"
            : "https://i.ibb.co/n0yGh7k/female.png"
        }
        alt={gender === "m" ? "male" : "female"}
      />
      <div className="container">
        <h4>
          <b>{gender === "m" ? "John doe" : "Jane doe"}</b>
        </h4>
        <p>{job}</p>
      </div>
    </div>
  );
}
