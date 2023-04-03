import React, { useEffect, useState } from "react";
import data from "../data";

const TableView = () => {
  const [columnZero, setColumn] = useState([]);

  useEffect(() => {
    const row = {};
    data.forEach((item) => {
      const { specs } = item;
      Object.keys(specs).map((item) => {
        if (!row.hasOwnProperty(item)) {
          row[item] = item;
        }
      });
    });
    setColumn(Object.keys(row));
  }, []);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <td>Specification</td>
            {data.map((item) => (
              <td>Product {item.name}</td>
            ))}
          </tr>
        </thead>
        <tbody>
          {columnZero.map((item) => (
            <>
              <tr>
                <td>{item}</td>
                {data.map((value) => (
                  <td>{value.specs?.[item]}</td>
                ))}
              </tr>
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default TableView;
