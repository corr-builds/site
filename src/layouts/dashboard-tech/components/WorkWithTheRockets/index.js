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
import ivancik from "assets/images/book-armchair.jpeg";

import PropTypes from 'prop-types';

const WorkWithTheRockets = (
  {nextPage, title, text, buttonText, buttonHref}
) => {
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
              Feats
            </SoftTypography>
          </SoftBox>
          <div style={{ height: "25vh", overflowY: "auto"}}>
          <SoftBox mb={2}>
          <SoftTypography variant="h6" color="white" fontWeight="bold">
              {title}
            </SoftTypography>
            <SoftTypography variant="body2" color="white">
                {text}
            </SoftTypography>
          </SoftBox>
          </div>
          <SoftTypography
            component="a"
            href={buttonHref}
            onClick={nextPage}
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
            {buttonText} 
            <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
          </SoftTypography>
        </SoftBox>
      </SoftBox>
    </Card>
  );
}

WorkWithTheRockets.propTypes = {
  nextPage: PropTypes.string,
  title: PropTypes.node,
  text: PropTypes.node,
  buttonText: PropTypes.node,
  buttonHref: PropTypes.node
};

export default WorkWithTheRockets;
