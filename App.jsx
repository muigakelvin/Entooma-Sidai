import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/SideBar";
import CardComponent from "./components/Card";
import LineChart from "./components/LineChart";
import BarChart from "./components/BarChart";
import DataTable from "./components/DataTable";
import { Box, IconButton } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import "./index.css";

const App = () => {
  const [selectedMember, setSelectedMember] = useState(null);

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

  const lineChartData = {
    labels: ["Apr 5", "Apr 10", "Apr 15", "Apr 20", "Apr 25", "Apr 30"],
    data: [2000, 5000, 8000, 12000, 15000, 18000],
  };

  const barChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    data: [8000, 10000, 7000, 9000, 11000, 8500, 7500],
  };

  const tableColumns = [
    { field: "fullName", headerName: "Full Name", width: 250 },
    { field: "phoneNumber", headerName: "Phone Number", width: 200 },
    { field: "idNumber", headerName: "ID Number", width: 150 },
    { field: "status", headerName: "Status", width: 120 },
    {
      field: "actions",
      headerName: "",
      sortable: false,
      disableColumnMenu: true,
      renderCell: (params) => (
        <Box sx={{ display: "flex", gap: 1 }}>
          <IconButton onClick={() => setSelectedMember(params.row)}>
            <VisibilityIcon sx={{ color: "#fff" }} />
          </IconButton>
          <IconButton>
            <EditIcon sx={{ color: "#fff" }} />
          </IconButton>
          <IconButton>
            <DeleteIcon sx={{ color: "#fff" }} />
          </IconButton>
        </Box>
      ),
      width: 100,
    },
  ];

  const tableRows = [
    {
      id: 1,
      fullName: "JOHNSON NG'ANG'A KAMAU",
      phoneNumber: "+254729916580",
      idNumber: "10881819",
      status: "Pending",
      gender: "Male",
      communityGroup: "KIBUI UNITED SHG",
      fieldOfficer: "JANE DOE",
      ambassador: "MARY SMITH",
      cookstoveSerialNumber: "CS-2023-001",
    },
    {
      id: 2,
      fullName: "GRACE WANJIKU MUMITA",
      phoneNumber: "+254725134576",
      idNumber: "5170197",
      status: "Approved",
      gender: "Female",
      communityGroup: "MAUA WENDANI SHG",
      fieldOfficer: "JOHN DOE",
      ambassador: "ROBERT KARIUKI",
      cookstoveSerialNumber: "CS-2023-002",
    },
  ];

  return (
    <div className="app-container">
      <Sidebar />
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
            <div className="chart-wrapper">
              <LineChart
                labels={lineChartData.labels}
                data={lineChartData.data}
                options={{
                  scales: { y: { beginAtZero: true } },
                }}
              />
            </div>
            <div className="chart-wrapper">
              <BarChart
                labels={barChartData.labels}
                data={barChartData.data}
                options={{
                  scales: { y: { beginAtZero: true } },
                }}
              />
            </div>
          </div>
        </section>
        <section className="details-section">
          <h2 className="section-title">Members</h2>
          <DataTable
            columns={tableColumns}
            rows={tableRows}
            selectedMember={selectedMember}
          />
        </section>
      </div>
    </div>
  );
};

export default App;
