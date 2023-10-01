/**
=========================================================
* Soft UI Dashboard React - v4.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Soft UI Dashboard React examples
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import MiniStatisticsCard from "examples/Cards/StatisticsCards/MiniStatisticsCard";
import ReportsBarChart from "examples/Charts/BarCharts/ReportsBarChart";
import GradientLineChart from "examples/Charts/LineCharts/GradientLineChart";

// Soft UI Dashboard React base styles
import typography from "assets/theme/base/typography";

// Basic layout components
import BuildByDevelopers from "layouts/basic/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/basic/components/WorkWithTheRockets";
import Projects from "layouts/basic/components/Projects";
import OrderOverview from "layouts/basic/components/OrderOverview";

// Data
import reportsBarChartData from "layouts/basic/data/reportsBarChartData";
import gradientLineChartData from "layouts/basic/data/gradientLineChartData";

import semicolon from "assets/images/logos/favicon.png";

function Dashboard() {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
     
    
        <p>Hi there! My name is Cathleen Corr. I write, create, and work as a software engineer. I once survived near death (by my own hand) but I’ve come back with the mission to be the best person I can be. This site includes free notes on how I organize my life which you might like to take inspiration from.
      </p>
      <br />
      <p>Share your email now if you’d like to get notified when I create new content: </p>
      <p>TODO COLLECT EMAIL HERE</p>
        <br />
        <p>Email TODO for business inquiries.</p>
       
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Dashboard;
