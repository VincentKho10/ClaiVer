import React, { useState } from "react";

const TableComponent = (props) => {
  const { datas, keys } = props;

  const generateHeader = () => {
    const handleSelectAll = () =>
      document
        .querySelectorAll('[name="isSelected"]')
        .forEach(
          (v) =>
            (v.checked = document.querySelector(
              '[name="isSelectedAll"]'
            ).checked)
        );
    return (
      <thead>
        <tr>
          <th>
            <input
              type="checkbox"
              name="isSelectedAll"
              className="checkbox checkbox-sm"
              onChange={handleSelectAll}
            />
          </th>
          {keys.map((v, i) => (
            <td key={i}>{v}</td>
          ))}
          <th></th>
        </tr>
      </thead>
    );
  };

  const generateContent = () => {
    const generateTableContent = () => {
      let res = [];
      for (const [i, v] of datas.entries()) {
        res.push(
          <tr key={i}>
            <th>
              <input
                type="checkbox"
                name="isSelected"
                className="checkbox checkbox-sm"
                value={i}
              />
            </th>
            {keys.map((v1) => {
              if (typeof v[v1] == "boolean") {
                return (
                  <td>
                    <input
                      type="radio"
                      defaultChecked
                      className={
                        v[v1] ? "radio radio-success" : "radio radio-error"
                      }
                    />
                  </td>
                );
              } else {
                return <td>{v[v1]}</td>;
              }
            })}
            <th>

            </th>
          </tr>
        );
      }
      return res;
    };
    return <tbody>{generateTableContent()}</tbody>;
  };

  return (
    <>
      <table className="table table-xs table-pin-rows table-pin-cols h-fit">
        {generateHeader()}
        {generateContent()}
      </table>
    </>
  );
};

export default TableComponent;
