import React from "react";
import {
  CCard,
  CCardBody,
  CRow,
  // CBadge,
  // CButton,
  // CButtonGroup,
  // CCardFooter,
  // CCardHeader,
  // CCol,
  // CProgress,
  // CCallout
} from "@coreui/react";

import { CChart } from "@coreui/react-chartjs";

const pie = {
  labels: ["Cafe Olimpico", "Le Cafe Creme", "Cafe Vito"],
  datasets: [
    {
      data: [5000, 3400, 6000],
      backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
    },
  ],
};
const bar = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgba(255,99,132,0.2)",
      borderColor: "rgba(255,99,132,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(255,99,132,0.4)",
      hoverBorderColor: "rgba(255,99,132,1)",
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};
const line = {
  labels: ["January", "February", "March", "April", "May", "June", "July"],
  datasets: [
    {
      label: "Inventory assignments over time",
      fill: false,
      lineTension: 0.1,
      backgroundColor: "rgba(75,192,192,0.4)",
      borderColor: "rgba(75,192,192,1)",
      borderCapStyle: "butt",
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: "miter",
      pointBorderColor: "rgba(75,192,192,1)",
      pointBackgroundColor: "#fff",
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: "rgba(75,192,192,1)",
      pointHoverBorderColor: "rgba(220,220,220,1)",
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65, 59, 80, 81, 56, 55, 40],
    },
  ],
};

const BusinessIntelligence = () => {
  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <div className="col-md-6">
              <h4>Line</h4>
              <div className="chart-wrapper">
                <CChart
                  type="line"
                  datasets={pie.datasets}
                  labels={pie.labels}
                  //options={options}
                />
              </div>
            </div>

            <div className="col-md-6">
              <h4>Line</h4>
              <div className="chart-wrapper">
                <CChart
                  type="line"
                  datasets={pie.datasets}
                  labels={pie.labels}
                  //options={options}
                />
              </div>
            </div>
            <div className="col-md-6">
              <div className="chart-wrapper">
                <CChart
                  type="pie"
                  datasets={pie.datasets}
                  labels={pie.labels}
                />
              </div>
            </div>

            <div className="col-md-6">
              <h4>Line</h4>
              <div className="bar-wrapper">
                <CChart
                  type="bar"
                  datasets={bar.datasets}
                  labels={bar.labels}
                  //options={options}
                />
              </div>
            </div>
            <div className="col-md-6">
              <h4>Line</h4>
              <div className="bar-wrapper">
                <CChart
                  type="bar"
                  datasets={line.datasets}
                  labels={pie.labels}
                  //options={options}
                />
              </div>
            </div>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};
export default BusinessIntelligence;
