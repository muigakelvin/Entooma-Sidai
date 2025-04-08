// src/App.jsx
import React, { useState } from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/SideBar.jsx";
import CardComponent from "./components/Card.jsx";
import LineChart from "./components/LineChart.jsx";
import BarChart from "./components/BarChart.jsx";
import DataTable from "./components/DataTable";
import "./index.css";

const App = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const handleRowClick = (member) => {
    setSelectedMember(member);
  };

  // Updated card data with proper values
  const cardsData = [
    { title: "LandOwners", value: "14k", change: 25, subtitle: "Last 30 days" },
    {
      title: "Registered LandSize",
      value: "325",
      change: -25,
      subtitle: "Last 30 days",
    },
    {
      title: "Subcounties",
      value: "200k",
      change: 5,
      subtitle: "Last 30 days",
    },
    { title: "Counties", value: "45", change: 2, subtitle: "Active regions" },
  ];

  // Updated table columns matching the image
  const tableColumns = [
    { field: "fullName", headerName: "Full Name", width: 250 },
    { field: "phoneNumber", headerName: "Phone Number", width: 200 },
    { field: "idNumber", headerName: "ID Number", width: 150 },
    { field: "status", headerName: "Status", width: 150 },
    {
      field: "actions",
      headerName: "",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <div className="action-buttons">
          <button onClick={() => handleRowClick(params.row)}>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" />
            </svg>
          </button>
          <button>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </svg>
          </button>
          <button>
            <svg viewBox="0 0 24 24" width="24" height="24">
              <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z" />
            </svg>
          </button>
        </div>
      ),
      width: 120,
    },
  ];

  // Updated table rows with status field
  const tableRows = [
    {
      id: 1,
      fullName: "JOHNSON NG'ANG'A KAMAU",
      phoneNumber: "+254729916580",
      idNumber: "10881819",
      status: "Pending",
    },
    {
      id: 2,
      fullName: "GRACE WANJIKU MUMITA",
      phoneNumber: "+254725134576",
      idNumber: "5170197",
      status: "Pending",
    },
  ];

  return (
    <div className="app-container">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="main-content">
        <Header />

        {/* Overview Section */}
        <section className="overview-section">
          <h2 className="section-title">Overview</h2>
          <div className="cards-grid">
            {cardsData.map((card, index) => (
              <CardComponent
                key={index}
                title={card.title}
                value={card.value}
                change={card.change}
                subtitle={card.subtitle}
              />
            ))}
          </div>
        </section>

        {/* Analytics Section */}
        <section className="charts-section">
          <h2 className="section-title">Analytics</h2>
          <div className="charts-container">
            <div className="chart-wrapper">
              <LineChart
                labels={[
                  "Apr 5",
                  "Apr 10",
                  "Apr 15",
                  "Apr 20",
                  "Apr 25",
                  "Apr 30",
                ]}
                data={[2000, 5000, 8000, 12000, 15000, 18000]}
                options={{
                  scales: { y: { beginAtZero: true } },
                }}
              />
            </div>
            <div className="chart-wrapper">
              <BarChart
                labels={["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]}
                data={[8000, 10000, 7000, 9000, 11000, 8500, 7500]}
                options={{
                  scales: { y: { beginAtZero: true } },
                }}
              />
            </div>
          </div>
        </section>

        {/* Members Section */}
        <section className="details-section">
          <h2 className="section-title">Members</h2>
          <DataTable
            columns={tableColumns}
            rows={tableRows}
            onRowClick={handleRowClick}
            selectedMember={selectedMember}
          />
        </section>
      </div>
    </div>
  );
};

export default App;
