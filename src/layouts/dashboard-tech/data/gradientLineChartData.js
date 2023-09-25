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

const gradientLineChartData = {
  labels: ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023"],
  // possible values: 0, 1, 2, 3, 5, 8
  /* color options:
   "primary",
    "secondary",
    "info",
    "success",
    "warning",
    "error",
    "light",
    "dark",
  */
  // list relational database design, dynamodb, aws, java, python, c++, javascript, react
  datasets: [
    {
      label: "Relational Database Design",
      color: "secondary",
      data: [0, 0, 5, 8, 0, 0, 0, 0, 0],
    },
    {
      label: "DynamoDB",
      color: "success",
      data: [0, 0, 0, 0, 0, 0, 0, 0, 8],
    },
    {
      label: "AWS",
      color: "warning",
      data: [0, 0, 0, 0, 0, 0, 0, 5, 8],
    },
    {
      label: "Python",
      color: "info",
      data: [2, 1, 0, 0, 0, 0, 0, 2, 2],
    },
    {
      label: "Java",
      color: "dark",
      data: [0, 0, 0, 0, 0, 5, 8, 8, 5],
    },
    {
      label: "C++",
      color: "error",
      data: [0, 5, 3, 0, 0, 0, 0, 0, 0],
    },
    {
      label: "Javascript",
      color: "light",
      data: [0, 0, 0, 0, 0, 2, 1, 2, 5],
    },
    {
      label: "React",
      color: "primary",
      data: [0, 0, 0, 0, 0, 2, 1, 2, 2],
    },
  ],
};

export default gradientLineChartData;
