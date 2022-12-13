import React from "react";
import "./styles.css";

function Data({ data }) {
  if (data) {
    return (
      <div>
        <h1 className="subz">Image List</h1>

        {data &&
          data.map((item, id) => (
            <div key={item.id}>
              <img className="img" src={item.img1.value} alt="sa" />
              <img className="img" src={item.img2.value} alt="a" />
              <img className="img" src={item.img3.value} alt="a" />
            </div>
          ))}
      </div>
    );
  }
}

export default Data;
