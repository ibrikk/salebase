import React, { useEffect, useState } from "react";
import '../../scss/style.scss';
import {
  CCard,
  CCardBody,
  CRow,
  // CBadge,
  // CButton,
  // CButtonGroup,
  // CCardFooter,
  CCardHeader,
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
        label: "Top Neighbourhoods",
        data: [789, 468, 382, 344, 322],
        backgroundColor: ["#E64040", "#E67d40", "#E6d540", "#82E640", "#40C2E6",],
        hoverBackgroundColor: ["#E64040", "#E67d40", "#E6d540", "#82E640", "#40C2E6"],
        label: "Top Neighborhood",
      },
    ],
  };

  const bar = {
    labels: topItemsMap(products),
    datasets: [
      {
        label: "Top Selling Products",
        backgroundColor: ["#E64040", "#E67d40", "#E6d540", "#82E640", "#40C2E6",],
        borderColor: ["#EBf5f7"],
        borderWidth: 1,
        hoverBackgroundColor: ["#E64040", "#E67d40", "#E6d540", "#82E640", "#40C2E6",],
        hoverBorderColor: "rgba(255,99,132,1)",
        data: topSumMap(products),
      },
    ],
  };

  const bar2 = {
    labels: ['Cafe Vito', 'Cafe Pista', 'Paolino', 'Cafe Noir', 'Le Bruloir',],
    datasets: [
      {
        label: "Top Vendors",
        backgroundColor: ["#82E640", "#0C6E0E", "#40C2E6", "#406fE6", "#7a1091"],
        borderColor: ["#EBf5f7"],
        borderWidth: 1,
        hoverBackgroundColor: ["#E67d40", "#E6d540", "#82E640", "#0C6E0E", "#40C2E6", "#406fE6", "#7a1091"],
        hoverBorderColor: "rgba(255,99,132,1)",
        data: [23, 26, 18, 53, 8, 2, 3],
      },
    ],
  };

  const line = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "",
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
        pointHoverBorderColor: ["#E64040", "#E67d40", "#E6d540", "#82E640", "#40C2E6",],
        pointHoverBorderWidth: 2,
        pointRadius: 1,
        pointHitRadius: 10,
        data: [23, 26, 18, 53, 67, 84, 93],
      },
    ],
  };

  //console.log("itemName", itemName);
// console.log(topItemsMap(products))

  return (
    <>
     <div className="row">
        <div className="col-6">
          <CCard>
          <CCardHeader>Sales by Month</CCardHeader>
            <CCardBody>
              <div className="chart-wrapper">
                <CChart
                  type="line"
                  datasets={line.datasets}
                  labels={line.labels}
                />
              </div>{" "}
            </CCardBody>
          </CCard>
        </div>
        <div className="col-6">
          <CCard>
          <CCardHeader>Top Neighbourhoods</CCardHeader>
            <CCardBody>
              <div className="chart-wrapper">
                <CChart
                  type="pie"
                  datasets={pie.datasets}
                  labels={pie.labels}
                />
              </div>{" "}
            </CCardBody>
          </CCard>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <CCard>
          <CCardHeader>Top Selling Products</CCardHeader>
            <CCardBody>
              <div className="bar-wrapper">
                <CChart
                  type="bar"
                  datasets={bar.datasets}
                  labels={bar.labels}
                  //options={options}
                />
              </div>{" "}
            </CCardBody>
          </CCard>
        </div>


      {/* <div className="row"> */}
         <div className="col-6">
          <CCard>
          <CCardHeader>Top Vendors</CCardHeader>
            <CCardBody>
              <div className="bar-wrapper">
                <CChart
                  type="bar"
                  datasets={bar2.datasets}
                  labels={bar2.labels}
                  //options={options}
                />
              </div>{" "}
            </CCardBody>
          </CCard>
         </div>
         </div>
      {/* </div> */}
    </>
  );
};
export default BusinessIntelligence;
