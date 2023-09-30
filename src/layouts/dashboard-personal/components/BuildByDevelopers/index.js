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
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images
import wavesWhite from "assets/images/shapes/waves-white.svg";
import rocketWhite from "assets/images/illustrations/hike.svg";

function BuildByDevelopers() {
  return (
    <Card>
      <SoftBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <SoftBox display="flex" flexDirection="column" height="100%">
              <SoftBox pt={1} mb={0.5}>
                <SoftTypography variant="body2" color="text" fontWeight="medium">
                  Personal Contributions
                </SoftTypography>
              </SoftBox>
              <SoftTypography variant="h5" fontWeight="bold" gutterBottom>
                Works
              </SoftTypography>
              <div style={{ height: "80vh" }}>
              <SoftTypography variant="h6" fontWeight="bold" gutterBottom>
                Song Recommendations
              </SoftTypography>
              <SoftBox mb={4}>
                <SoftTypography variant="body2" color="text">
                 <li>Float On by Modest Mouse</li>
    <li>What About Us by P!nk</li>
    <li>Mi Lugar en Ti by Carol Rovira</li>
                </SoftTypography>
              </SoftBox>
              <SoftTypography variant="h6" fontWeight="bold" gutterBottom>
                Movie Recommendations
              </SoftTypography> 
              <SoftBox mb={4}>
                <SoftTypography variant="body2" color="text">
                 <li>Arsenic and Old Lace</li>
  <li>All About Eve</li>
    <li>Tar</li>
                </SoftTypography>
                </SoftBox>  
                <SoftTypography variant="h6" fontWeight="bold" gutterBottom>
                Book Recommendations
              </SoftTypography> 
              <SoftBox mb={4}>
                <SoftTypography variant="body2" color="text">
                 <li>Man’s Search for Meaning by Victor Frankl</li>
    <li>Atomic Habits by James Clear</li>
    <li>Subliminal by Leonard Mlodinow</li>
                </SoftTypography>
                </SoftBox>  
                <SoftTypography variant="h6" fontWeight="bold" gutterBottom>
                Poem Recommendations
              </SoftTypography> 
              <SoftBox mb={4}>
                <SoftTypography variant="body2" color="text">
                 <li>Invictus by William Ernest Henley</li>
    <li>If by Rudyard Kipling</li>
    <li>Dinosauria We by Charles Bukowski</li>
                </SoftTypography>
                </SoftBox>  
                </div>
              <SoftTypography
                component="a"
                href="/about"
                variant="button"
                color="text"
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
                Subscribe 
                <Icon sx={{ fontWeight: "bold" }}>arrow_forward</Icon>
              </SoftTypography>
            </SoftBox>
          </Grid>
          <Grid item xs={12} lg={5} sx={{ position: "relative", ml: "auto" }}>
            <SoftBox
              height="100%"
              display="grid"
              justifyContent="center"
              alignItems="center"
              bgColor="info"
              borderRadius="lg"
              variant="gradient"
            >
              <SoftBox
                component="img"
                src={wavesWhite}
                alt="waves"
                display="block"
                position="absolute"
                left={0}
                width="100%"
                height="100%"
              />
              <SoftBox style={{fill: "#ffffff"}} component="img" src={rocketWhite} alt="rocket" width="100%" pt={3} />
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default BuildByDevelopers;