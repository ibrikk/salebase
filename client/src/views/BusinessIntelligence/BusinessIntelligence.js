import React, { useEffect, useState } from "react";
import "../../scss/style.scss";
import {
  CCard,
  CCardBody,
  CRow,
  // CBadge,
  // CButton,
  // CButtonGroup,
  // CCardFooter,
  // CCardHeader,
  // CProgress,
  // CCallout
} from "@coreui/react";

import { CChart } from "@coreui/react-chartjs";
import axios from "axios";

const BusinessIntelligence = () => {
  const [products, setProducts] = useState([]);

  const topItemsMap = (products) => {
    let arr = [];
    for (const item of products) {
      arr.push(item.item_name);
    }
    return arr;
  };

  const topSumMap = (products) => {
    let array = [];
    for (const sum of products) {
      array.push(sum.sum);
    }
    return array;
  };

  useEffect(() => {
    axios.get("http://localhost:3002/bi").then((res) => {
      // console.log("response", res.data.items);
      setProducts(res.data.items);
    });
    axios.get("http://localhost:3002/bi/neighbourhood").then((res) => {
      console.log("response", res.data.items);
      //setProducts(res.data.items);
    });
  }, []);

  const pie = {
    labels: ["Ahuntsic", "Rosemont", "Villeray", "Little Italy", "NDG"],
    datasets: [
      {
        data: [789, 468, 382, 344, 322],
        backgroundColor: [
          "#E64040",
          "#E67d40",
          "#E6d540",
          "#82E640",
          "#40C2E6",
        ],
        hoverBackgroundColor: [
          "#E64040",
          "#E67d40",
          "#E6d540",
          "#82E640",
          "#40C2E6",
        ],
        label: "Top Neighborhood",
      },
    ],
  };

  const bar = {
    labels: topItemsMap(products),
    datasets: [
      {
        label: "Top Selling Product",
        backgroundColor: [
          "#E64040",
          "#E67d40",
          "#E6d540",
          "#82E640",
          "#40C2E6",
        ],
        borderColor: ["#EBf5f7"],
        borderWidth: 1,
        hoverBackgroundColor: [
          "#E64040",
          "#E67d40",
          "#E6d540",
          "#82E640",
          "#40C2E6",
        ],
        hoverBorderColor: "rgba(255,99,132,1)",
        data: topSumMap(products),
      },
    ],
  };
  const line = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Top Products By Month",
        fill: false,
        lineTension: 0.1,
        backgroundColor: "#E64040",
        borderColor: "#E64040",
        borderCapStyle: "butt",
        borderDash: [],
        borderDashOffset: 0.0,
        borderJoinStyle: "miter",
        pointBorderColor: "#E64040",
        pointBackgroundColor: "#E64040",
        pointBorderWidth: 1,
        pointHoverRadius: 5,
        pointHoverBackgroundColor: "#E64040",
        pointHoverBorderColor: [
          "#E64040",
          "#E67d40",
          "#E6d540",
          "#82E640",
          "#40C2E6",
        ],
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [65, 59, 80, 81, 56, 55, 40],
      },
    ],
  };

  const [itemName, setItemName] = useState("");

  useEffect(() => {
    axios.get("http://localhost:3002/bi").then((res) => {
      console.log("response", res.data.items);
      setItemName(res.data.items);
      console.log("itemName", itemName);
    });
  }, []);

  return (
    <>
      <CCard>
        <CCardBody>
          <div className="charts">
            <CRow>
              <div className="col-md-8">
                <div className="chart-wrapper">
                  <CChart
                    type="line"
                    datasets={line.datasets}
                    labels={line.labels}
                  />
                </div>
              </div>

              <div className="col-lg-8">
                <div className="chart-wrapper">
                  <CChart
                    type="pie"
                    datasets={pie.datasets}
                    labels={pie.labels}
                  />
                </div>
              </div>

              <div className="col-lg-8">
                <div className="bar-wrapper">
                  <CChart
                    type="bar"
                    datasets={bar.datasets}
                    labels={bar.labels}
                    //options={options}
                  />
                </div>
              </div>
            </CRow>
          </div>
        </CCardBody>
      </CCard>
    </>
  );
};
export default BusinessIntelligence;
