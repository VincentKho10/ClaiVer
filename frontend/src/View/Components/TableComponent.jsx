import React from "react";

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
  
  const generateHeader = () => {
    return (
      <thead>
        <tr>
          <th></th>
          <td>Name</td>
          <td>Job</td>
          <td>company</td>
          <td>location</td>
          <td>Last Login</td>
          <td>Favorite Color</td>
          <th></th>
        </tr>
      </thead>
    );
  };
  const generateContent = () => {
    const generateTableContent = () => {
      let res = [];
      for (let i = 0; i < 100; i++) {
        res.push(
          <tr>
            <th>1</th>
            <td>Cy Ganderton</td>
            <td>Quality Control Specialist</td>
            <td>Littel, Schaden and Vandervort</td>
            <td>Canada</td>
            <td>12/16/2020</td>
            <td>Blue</td>
            <th>1</th>
          </tr>
        );
      }
      return res;
    };
    return <tbody>{generateTableContent()}</tbody>;
  };
  const generateFooter = () => {
    return (
      <tfoot>
        <tr>
          <th></th>
          <td>Name</td>
          <td>Job</td>
          <td>company</td>
          <td>location</td>
          <td>Last Login</td>
          <td>Favorite Color</td>
          <th></th>
        </tr>
      </tfoot>
    );
  };
  return (
    <div className="overflow-x-auto">
      <table className="table table-xs table-pin-rows table-pin-cols">
        {generateHeader()}
        {generateContent()}
        {generateFooter()}
      </table>
    </div>
  );
};

export default TableComponent;
