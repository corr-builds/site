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
import BuildByDevelopers from "layouts/dashboard-tech/components/BuildByDevelopers";
import WorkWithTheRockets from "layouts/dashboard-tech/components/WorkWithTheRockets";
import Projects from "layouts/dashboard/components/Projects";
import OrderOverview from "layouts/dashboard/components/OrderOverview";

// Data
import reportsBarChartData from "layouts/dashboard-tech/data/reportsBarChartData";
import gradientLineChartData from "layouts/dashboard-tech/data/gradientLineChartData";

import { useState, useEffect, useRef } from "react";

const DashboardTech = () => {
  const { size } = typography;
  const { chart, items } = reportsBarChartData;
  const ref = useRef();
  function getYearsWorked() { // birthday is a date
    let startDate = new Date();
    startDate.setFullYear(2020);
    startDate.setMonth(6);
    var ageDifMs = Date.now() - startDate;
    var ageDate = new Date(ageDifMs); // miliseconds from epoch
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("Technologies");
  const [text, setText] = useState(
    <>
     <li>AWS Lambda</li>
              <li>AWS API Gateway</li>
              <li>AWS DynamoDB</li>
              <li>AWS Cloudwatch</li>
              <li>AWS Step Functions</li>
              <li>AWS EKS</li>
              <li>AWS IAM</li>
              <li>Terraform</li>
              <li>Java</li>
              <li>Spring Boot</li>
              <li>Hibernate</li>
              <li>Spring Data JPA</li>
              <li>REST APIs</li>
              <li>Postman</li>
              <li>JWT</li>
              <li>NodeJS</li>
              <li>Javascript</li>
              <li>Python</li>
              <li>React</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>Git</li>
              <li>Gitlab CI</li>
              <li>Jenkins</li>
              <li>Apache Kafka</li>
              <li>Drools</li>
              <li>SQL</li>
              <li>Oracle</li>
              <li>Taurus</li>
              <li>OpenAPI (Swagger)</li>
              <li>Docker</li>
              <li>Openshift</li>
              <li>Log4J</li>
              <li>Kibana</li>
              <li>Prometheus</li>
              <li>Artifactory</li>
    </>
  );
  const [buttonText, setButtonText] = useState("Projects");
  const [buttonHref, setButtonHref] = useState("#")
  const nextPage = () => {
    setPage(page + 1);
  };
  useEffect(
    function onChange() {
      console.log(ref.current && Object.values(ref.current.children).length)
      if (page === 2) {
        setTitle("Projects");
        setText( <>
          <li>Developed an enterprise web application flow to facilitate signing of virtual documents using Java and Springboot</li>
          <li>Developed a high-throughput application to support trading of international funds using Java and Springboot</li>
          <li>Developed an event-driven enterprise web flow to facilitate account opening using NodeJS and AWS Serverless technologies.</li>
        </>);
        setButtonText("Books & Courses")
      } else if (page === 3) {
        setTitle("Books & Courses");
        setText(
          <div ref={ref}>
            
            <li>2023 - The DynamoDB Book</li>
            <li>2023 - Other Professional Development</li>
            <li>2022 - Effective Javascript</li>
            <li>2022 - Ultimate AWS Certified Cloud Developer, course by Stephane Maarek</li>
            <li>2021 - React with Redux, course by Steven Grider</li>
              <li>2021 - Effective Java</li>
              
          </div>
        );
        setButtonText("Inquire");
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
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Years Experience" }}
                count={getYearsWorked()}
                // percentage={{ color: "success", text: "+55%" }}
                icon={{ color: "info", component: "paid" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Companies" }}
                count="2"
                // percentage={{ color: "success", text: "+3%" }}
                icon={{ color: "info", component: "public" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Books & Courses" }}
                count="6"
                // percentage={{ color: "error", text: "-2%" }}
                icon={{ color: "info", component: "emoji_events" }}
              />
            </Grid>
            <Grid item xs={12} sm={6} xl={3}>
              <MiniStatisticsCard
                title={{ text: "Technologies" }}
                count="36"
                // percentage={{ color: "success", text: "+5%" }}
                icon={{
                  color: "info",
                  component: "shopping_cart",
                }}
              />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={7}>
              <BuildByDevelopers />
            </Grid>
            <Grid item xs={12} lg={5}>
              <WorkWithTheRockets
               nextPage={nextPage}
               title={title}
               text={text}
               buttonText={buttonText}
               buttonHref={buttonHref}
              />
            </Grid>
          </Grid>
        </SoftBox>
        <SoftBox mb={3}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={12}>
              <GradientLineChart
                title="Sales Overview"
                description={
                  <SoftBox display="flex" alignItems="center">
                    <SoftBox fontSize={size.lg} color="success" mb={0.3} mr={0.5} lineHeight={0}>
                      <Icon className="font-bold">arrow_upward</Icon>
                    </SoftBox>
                    <SoftTypography variant="button" color="text" fontWeight="medium">
                      4% more{" "}
                      <SoftTypography variant="button" color="text" fontWeight="regular">
                        in 2021
                      </SoftTypography>
                    </SoftTypography>
                  </SoftBox>
                }
                height="30.25rem"
                chart={gradientLineChartData}
                />
                
            </Grid>
          </Grid>
        </SoftBox>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <Projects />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <OrderOverview />
          </Grid>
        </Grid>
      </SoftBox>
      <Footer />
    </DashboardLayout>
  );
}

export default DashboardTech;
