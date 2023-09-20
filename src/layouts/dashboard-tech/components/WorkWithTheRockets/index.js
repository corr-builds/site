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
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images
import ivancik from "assets/images/stairs.jpg";

function WorkWithTheRockets({ nextPage, title, text, buttonText, buttonHref } ) {
  return (
    <Card sx={{ height: "100%" }}>
      <SoftBox position="relative" height="100%" p={2}>
        <SoftBox
          display="flex"
          flexDirection="column"
          height="100%"
          py={2}
          px={2}
          borderRadius="lg"
          sx={{
            backgroundImage: ({ functions: { linearGradient, rgba }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.dark.main, 0.8),
                rgba(gradients.dark.state, 0.8)
              )}, url(${ivancik})`,
            backgroundSize: "cover",
          }}
        >
          <SoftBox mb={3} pt={1}>
            <SoftTypography variant="h5" color="white" fontWeight="bold">
              Feats todo make vertically scrollable - or - collapsible? no, that would make the git
              icon look weired. vertically scrollable 
            </SoftTypography>
          </SoftBox>
          <div style={{ height: "25vh", overflowY: "auto"}}>
          <SoftBox mb={2}>
          <SoftTypography variant="h6" color="white" fontWeight="bold">
              Technologies
            </SoftTypography>
            <SoftTypography variant="body2" color="white">
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
            </SoftTypography>
            <SoftTypography variant="h6" color="white" fontWeight="bold">
              Projects
            </SoftTypography>
            <SoftTypography variant="body2" color="white">
              <li>AWS</li>
            </SoftTypography>
            <SoftTypography variant="h6" color="white" fontWeight="bold">
              Books & Courses
            </SoftTypography>
            <SoftTypography variant="body2" color="white">
              <li>AWS</li>
            </SoftTypography>
          </SoftBox>
          </div>
          <SoftTypography
            component="a"
            href="/about"
            variant="button"
            color="white"
            fontWeight="medium"
            sx={{
              mt: "auto",
              mr: "auto",
              display: "inline-flex",
              alignItems: "center",
              cursor: "pointer",

              "& .material-icons-round": {
                fontSize: "1.125rem",
                transform: `translate(2px, -0.5px)`,
                transition: "transform 0.2s cubic-bezier(0.34,1.61,0.7,1.3)",
              },

              "&:hover .material-icons-round, &:focus  .material-icons-round": {
                transform: `translate(6px, -0.5px)`,
              },
            }}
          >
            Inquire 
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

WorkWithTheRockets.propTypes = {
  nextPage: PropTypes.node,
  title: PropTypes.node,
  text: PropTypes.node,
  buttonText: PropTypes.node,
  buttonHref: PropTypes.node
};


export default WorkWithTheRockets;
