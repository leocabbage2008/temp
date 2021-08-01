import React from "react";
import Card from "../../components/Card";

export default function Grid({ content }) {
  return (
    <div className="grid">
      {content.map((obj) => (
        <Card job={obj.job} gender={obj.gender} />
      ))}
    </div>
  );
}
