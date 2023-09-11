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
// todo resume by following this https://www.learnbestcoding.com/post/72/call-parent-function-from-child-component-react#google_vignette
// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";

// Soft UI Dashboard React components
import SoftBox from "components/SoftBox";
import SoftTypography from "components/SoftTypography";

// Images
import wavesWhite from "assets/images/shapes/waves-white.svg";
import rocketWhite from "assets/images/illustrations/pen-shadow-spaced.png";

function BuildByDevelopers() {
  return (
    <Card>
      <SoftBox p={2}>
        <Grid container spacing={3}>
          <Grid item xs={12} lg={6}>
            <SoftBox display="flex" flexDirection="column" height="100%">
              <SoftBox pt={1} mb={0.5}>
                <SoftTypography variant="body2" color="text" fontWeight="medium">
                  Click For Next Poem
                </SoftTypography>
              </SoftBox>
              <SoftTypography variant="h5" fontWeight="bold" gutterBottom>
                Works
              </SoftTypography>
              <SoftBox mb={6}>
                <SoftTypography variant="body2" color="text">
                  todo put 3 poems here and end with email collection
                  <br />
                  <i>Selected Poetry</i><br />
                  <br />
                  <b>Live!</b><br /><br />
                  You have soles on your feet<br />
You have feet in your shoes<br />
You have shoes as can bear you <br />
To which place you choose<br />
<br />
You have orange leaves to crunch<br />
You have winters to brave<br />
You have spring bees to feed<br />
And ripe fruits to crave<br />
<br />
You’ll be tempted to blame<br />
Or succumb to the easy<br />
(Pathways to greatness<br />
Were never all breezy)<br />
<br />
As dry hillsides swelter<br />
And swallow you up<br />
You’ll look at your feet<br />
And chin right back up<br />
<br />
You’ll see a glass pathway<br />
Burnt into the sand<br />
And then you must choose<br />
If you’ll sink or you’ll stand<br />

                </SoftTypography>
              </SoftBox>
              <SoftTypography onClick={() => props.newPage(2)}
                component="a"
                href="#"
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
                Next Poem
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
              <SoftBox component="img" src={rocketWhite} alt="rocket" width="100%" pt={3} />
            </SoftBox>
          </Grid>
        </Grid>
      </SoftBox>
    </Card>
  );
}

export default BuildByDevelopers;
