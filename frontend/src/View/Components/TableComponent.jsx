import React from "react";

let isSelected = [];
const TableComponent = (props) => {
  const datas = [
    {
      id: 1,
      name: "Jane Doe",
      email: "jane.doe@example.com",
      age: 28,
      isActive: true,
      company: "Tech Solutions Inc.",
      position: "Software Engineer",
      startDate: "2020-05-15",
      salary: 95000,
      skills: ["JavaScript", "React", "Node.js"],
    },
    {
      id: 2,
      name: "John Smith",
      email: "john.smith@example.com",
      age: 34,
      isActive: false,
      company: "Innovate LLC",
      position: "Project Manager",
      startDate: "2018-09-01",
      salary: 110000,
      skills: ["Agile", "Scrum", "JIRA"],
    },
    {
      id: 3,
      name: "Emily White",
      email: "emily.white@example.com",
      age: 45,
      isActive: true,
      company: "Global Connect",
      position: "Marketing Director",
      startDate: "2015-03-22",
      salary: 150000,
      skills: ["SEO", "Content Strategy", "Analytics"],
    },
    {
      id: 4,
      name: "Michael Brown",
      email: "michael.brown@example.com",
      age: 22,
      isActive: true,
      company: "Data Insights Co.",
      position: "Data Analyst",
      startDate: "2022-11-10",
      salary: 75000,
      skills: ["Python", "SQL", "Tableau"],
    },
    {
      id: 5,
      name: "Sarah Miller",
      email: "sarah.miller@example.com",
      age: 31,
      isActive: true,
      company: "Design Hub",
      position: "UX/UI Designer",
      startDate: "2019-07-30",
      salary: 85000,
      skills: ["Figma", "Sketch", "User Research"],
    },
    {
      id: 6,
      name: "David Garcia",
      email: "david.garcia@example.com",
      age: 50,
      isActive: false,
      company: "Future Systems Inc.",
      position: "CTO",
      startDate: "2010-01-05",
      salary: 250000,
      skills: ["Cloud Computing", "Architecture", "Cybersecurity"],
    },
    {
      id: 7,
      name: "Laura Wilson",
      email: "laura.wilson@example.com",
      age: 29,
      isActive: true,
      company: "Green Energy Solutions",
      position: "Environmental Engineer",
      startDate: "2021-02-14",
      salary: 90000,
      skills: ["AutoCAD", "Sustainability", "GIS"],
    },
    {
      id: 8,
      name: "James Taylor",
      email: "james.taylor@example.com",
      age: 38,
      isActive: true,
      company: "Financial Pros",
      position: "Accountant",
      startDate: "2017-06-20",
      salary: 105000,
      skills: ["QuickBooks", "SAP", "Tax Law"],
    },
    {
      id: 9,
      name: "Jessica Moore",
      email: "jessica.moore@example.com",
      age: 26,
      isActive: false,
      company: "Healthcare Innovations",
      position: "Nurse",
      startDate: "2023-01-10",
      salary: 70000,
      skills: ["Patient Care", "EMR", "First Aid"],
    },
    {
      id: 10,
      name: "Daniel Anderson",
      email: "daniel.anderson@example.com",
      age: 41,
      isActive: true,
      company: "Retail Dynamics",
      position: "Operations Manager",
      startDate: "2016-08-08",
      salary: 120000,
      skills: ["Supply Chain", "Logistics", "Lean Six Sigma"],
    },
  ];
  const keys = Object.keys(datas[0]);

  const generateHeader = () => {
    console.log(keys);
    const handleSelectAll = () =>
      document
        .querySelectorAll('[name="isSelected"]')
        .forEach(
          (v) =>
            (v.checked = document.querySelector(
              '[name="isSelectedAll"'
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
      // let res = [];
      return datas.map((v, i) => {
        return (
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
          </tr>
        );
      });
    };
    return <tbody>{generateTableContent()}</tbody>;
  };

  const handleInit = () => {
    const res = [];
    document
      .querySelectorAll('input[name="isSelected"]:checked')
      .forEach((v) => {
        res.push(datas[v.value]);
      });
    isSelected = res;
    console.log(isSelected)
  };

  const handleCreate = () => {
    handleInit();
  };
  const handleSubmit = () => {
    handleInit();
  };
  const handleDelete = () => {
    handleInit();
  };

  return (
    <div className="flex flex-col h-full">
      <div
        className={"flex flex-row h-1/12 w-full items-center justify-between"}
      >
        <div className="pl-2">
          <div className="btn btn-success mr-2" onClick={handleCreate}>
            Create
          </div>
        </div>
        <div>
          <div className="btn btn-success mr-2" onClick={handleSubmit}>
            Submit
          </div>
          <div className="btn btn-error mr-2" onClick={handleDelete}>
            Delete
          </div>
        </div>
      </div>
      <div className="flex h-max-11/12 overflow-x-auto">
        <table className="table table-xs table-pin-rows table-pin-cols">
          {generateHeader()}
          {generateContent()}
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
