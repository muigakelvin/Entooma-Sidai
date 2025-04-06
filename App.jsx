// src/App.jsx
import React from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/SideBar.jsx";
import CardComponent from "./components/Card.jsx";
import LineChart from "./components/LineChart.jsx";
import BarChart from "./components/BarChart.jsx";
import DataTable from "./components/DataTable"; // Import the new DataTable component
import "./index.css";

const App = () => {
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
    { title: "Counties", value: "", change: "", subtitle: "" },
  ];

  const lineChartData = {
    labels: ["Apr 5", "Apr 10", "Apr 15", "Apr 20", "Apr 25", "Apr 30"],
    data: [2000, 5000, 8000, 12000, 15000, 18000],
  };

  const barChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    data: [8000, 10000, 7000, 9000, 11000, 8500, 7500],
  };

  // Columns for the DataGrid
  const tableColumns = [
    { field: "id", headerName: "ID", width: 90 },
    { field: "pageTitle", headerName: "Page Title", width: 200 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "users", headerName: "Users", width: 120 },
    { field: "eventCount", headerName: "Event Count", width: 150 },
    { field: "viewsPerUser", headerName: "Views Per User", width: 150 },
    { field: "averageTime", headerName: "Average Time", width: 150 },
    { field: "dailyConversions", headerName: "Daily Conversions", width: 180 },
  ];

  // Rows for the DataGrid
  const tableRows = [
    {
      id: 1,
      pageTitle: "Homepage Overview",
      status: "Online",
      users: "212,423",
      eventCount: "8345",
      viewsPerUser: "18.5",
      averageTime: "2m 15s",
      dailyConversions: "",
    },
    {
      id: 2,
      pageTitle: "Product Details - Gadgets",
      status: "Online",
      users: "172,240",
      eventCount: "5653",
      viewsPerUser: "9.7",
      averageTime: "2m 30s",
      dailyConversions: "",
    },
  ];

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div
        style={{
          flex: 1,
          padding: "20px",
          backgroundColor: "#1E1E1E",
          color: "#fff",
        }}
      >
        <Header />
        <h2>Overview</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
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
        <div style={{ display: "flex", gap: "20px", marginTop: "20px" }}>
          <div style={{ flex: 1 }}>
            <LineChart
              labels={lineChartData.labels}
              data={lineChartData.data}
              options={{
                scales: {
                  y: { beginAtZero: true },
                },
              }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <BarChart
              labels={barChartData.labels}
              data={barChartData.data}
              options={{
                scales: {
                  y: { beginAtZero: true },
                },
              }}
            />
          </div>
        </div>
        <h2>Details</h2>
        {/* Use the DataTable component */}
        <DataTable columns={tableColumns} rows={tableRows} />
      </div>
    </div>
  );
};

export default App;
