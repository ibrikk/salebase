import React, { useEffect, useState } from "react";

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
import axios from "axios";

const BusinessIntelligence = () => {

  const [products, setProducts] = useState([]);



  const topItemsMap = products => {
    let arr = [];
   for (const item of products) {
      arr.push(item.item_name)

   }
    return arr;
  }

const topSumMap = products => {
  let array = [];
for (const sum of products) {
  array.push(sum.sum)
}
return array;
}


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
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB",],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56", "#FF6384", "#36A2EB"],
        label: "Top Neighborhood",
      },
    ],
  };

  const bar = {
    labels: topItemsMap(products),
    datasets: [
      {
        label: "Top Selling Product",
        backgroundColor: "rgba(255,99,132,0.2)",
        borderColor: "rgba(255,99,132,1)",
        borderWidth: 1,
        hoverBackgroundColor: "rgba(255,99,132,0.4)",
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

  //console.log("itemName", itemName);
// console.log(topItemsMap(products))

  return (
    <>
      <CCard>
        <CCardBody>
          <CRow>
            <div className="col-md-6">
              <div className="chart-wrapper">
                <CChart
                  type="line"
                  datasets={bar.datasets}
                  labels={bar.labels}
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


            <div className="col-lg-12">
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
        </CCardBody>
      </CCard>
    </>
  );
};
export default BusinessIntelligence;
