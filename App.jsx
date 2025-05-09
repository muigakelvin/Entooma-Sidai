// src/App.jsx
import React from "react";
import Header from "./components/Header.jsx";
import Sidebar from "./components/SideBar.jsx";
import CardComponent from "./components/Card.jsx";
import Map from "./components/Map.jsx";
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
      value: "200",
      change: 5,
      subtitle: "Last 30 days",
    },
    { title: "Counties", value: "50", change: "20", subtitle: "Last 30 days" },
  ];

  const MapData = {
    labels: [
      "region 5",
      "region 10",
      "region 15",
      "region 20",
      "region 25",
      "region 30",
    ],
    data: [2000, 5000, 8000, 12000, 15000, 18000],
  };

  const barChartData = {
    labels: [
      "region 1",
      "region 2",
      "Region 3",
      "Region 4",
      "Region 5",
      "Region 6",
      "Region 7",
    ],
    data: [8000, 10000, 7000, 9000, 11000, 8500, 7500],
  };

  // Columns for the DataGrid
  const tableColumns = [
    { field: "communityMember", headerName: "Community Member", width: 150 },
    { field: "idNumber", headerName: "ID Number", width: 120 },
    { field: "phoneNumber", headerName: "Phone Number", width: 150 },
    { field: "landSize", headerName: "Land Size (acres)", width: 150 },
    { field: "sublocation", headerName: "Sublocation", width: 150 },
    { field: "location", headerName: "Location", width: 150 },
    { field: "fieldCoordinator", headerName: "Field Coordinator", width: 150 },
    { field: "dateSigned", headerName: "Date Signed", width: 150 },
    { field: "communityName", headerName: "Community Name", width: 150 },
    {
      field: "signedLocal",
      headerName: "Signed On Behalf Of Local",
      width: 200,
    },
    {
      field: "signedOrg",
      headerName: "Signed On Behalf Of Organisation",
      width: 250,
    },
    { field: "witnessLocal", headerName: "Witness For Local", width: 150 },
    { field: "loiDocument", headerName: "LOI Document", width: 150 },
    { field: "gisDetails", headerName: "GIS Details", width: 150 },
    { field: "mouDocument", headerName: "MOU Document", width: 150 },
  ];

  // Rows for the DataGrid
  const tableRows = [
    {
      id: 1,
      communityMember: "John Doe",
      idNumber: "123456789",
      phoneNumber: "+1234567890",
      landSize: "50",
      sublocation: "Subloc A",
      location: "Loc A",
      fieldCoordinator: "Jane Smith",
      dateSigned: "2023-10-01",
      communityName: "Community A",
      signedLocal: "Yes",
      signedOrg: "No",
      witnessLocal: "Witness A",
      loiDocument: "Uploaded",
      gisDetails: "Available",
      mouDocument: "Not Uploaded",
    },
    {
      id: 2,
      communityMember: "Jane Roe",
      idNumber: "987654321",
      phoneNumber: "+0987654321",
      landSize: "30",
      sublocation: "Subloc B",
      location: "Loc B",
      fieldCoordinator: "John Doe",
      dateSigned: "2023-10-02",
      communityName: "Community B",
      signedLocal: "No",
      signedOrg: "Yes",
      witnessLocal: "Witness B",
      loiDocument: "Not Uploaded",
      gisDetails: "Not Available",
      mouDocument: "Uploaded",
    },
  ];

  return (
    <div className="app-container">
      {/* Sidebar */}
      {<Sidebar />}

      {/* Main Content */}
      <div className="main-content">
        <Header />
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

        <section className="charts-section">
          <h2 className="section-title">Analytics</h2>
          <div className="charts-container">
            {/* Line Chart */}
            <div className="chart-wrapper">
              <Map
                labels={MapData.labels}
                data={MapData.data}
                options={{
                  scales: {
                    y: { beginAtZero: true },
                  },
                }}
              />
            </div>

            {/* Bar Chart */}
            <div className="chart-wrapper">
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
        </section>

        <section className="details-section">
          <h2 className="section-title">Details</h2>
          {/* Use the DataTable component */}
          <DataTable columns={tableColumns} rows={tableRows} />
        </section>
      </div>
    </div>
  );
};

export default App;
