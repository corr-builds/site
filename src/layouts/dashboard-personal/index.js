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

// Dashboard layout components
import BuildByDevelopers from "layouts/dashboard/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard/components/WorkWithTheRockets";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";

// Data
import reportsBarChartData from "layouts/dashboard/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard/data/gradientLineChartData";

import { useState, useEffect } from "react";

const Dashboard = () => {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("title 1");
  const [text, setText] = useState("text 1");
  const [buttonText, setButtonText] = useState("Next Poem");
  const [buttonHref, setButtonHref] = useState("#")
  const nextPage = () => {
    setPage(page + 1);
  };
  useEffect(
    function onChange() {
      if (page === 2) {
        setTitle("title 2");
        setText("text 2");
      } else if (page === 3) {
        setTitle("title 3");
        setText("text 3");
      } else if (page === 4) {
        setTitle("title 4");
        setText("maybe this is eventually an add for the poetry collection?");
        setButtonText("Subscribe");
        setButtonHref("/about")
      }
    },
    [page]
  );

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <SoftBox py={3}>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <BuildByDevelopers
                nextPage={nextPage}
                title={title}
                text={text}
                buttonText={buttonText}
                buttonHref={buttonHref}
              />
            </Grid>
            <Grid item xs={12} lg={5}>
              <WorkWithTheRockets />
            </Grid>
          </Grid>
        </SoftBox>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
};

export default DashboardPersonal;
