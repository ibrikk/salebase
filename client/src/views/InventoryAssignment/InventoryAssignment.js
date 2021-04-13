import React, { useState, useEffect } from "react";
import {CChart} from '@coreui/react-chartjs';
import {
  CCard,
  CCardBody,
  CRow,
  // CNavbar,
  // CToggler,
  // CCollapse,
  // CNavbarNav,
  // CForm,
  // CInput,
  CButton,
  // CDropdown,
  // CDropdownToggle,
  // CDropdownMenu,
  // CDropdownItem,
  // CNavbarBrand,
  CBadge,
  CDataTable,
  CProgress,
  CProgressBar,

  // CButtonGroup,
  // CCardFooter,
  // CCardHeader,
  // CCol,
  // CProgress,
  // CCallout
} from "@coreui/react";



import axios from "axios";

const InventoryAssignment = () => {

  const doughnut = {
    labels: [
      'Red',
      'Green',
      'Yellow',
    ],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
        ],
      }],
    };


  let counter = 86;

  //const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/items-assign").then((res) => {
      console.log(res.data.items);
      setData(res.data.items);
    });
  }, []);

  /* const mapData = data => {
    let arr = [];
    for (const )
  } */
  const [details, setDetails] = useState([]);
  // const [items, setItems] = useState(usersData)

  // const toggleDetails = (index) => {
  //   const position = details.indexOf(index);
  //   let newDetails = details.slice();
  //   if (position !== -1) {
  //     newDetails.splice(position, 1);
  //   } else {
  //     newDetails = [...details, index];
  //   }
  //   setDetails(newDetails);
  // };

  const fields = [
    { key: "id", _style: { width: "40%" } },

    { key: "assigned_quantity", _style: { width: "20%" } },


    { key: "total_quantity", _style: { width: "20%" } },

  ];

  const getBadge = (cost) => {
    switch (cost) {
      case "Active":
        return "success";
      case "Inactive":
        return "secondary";
      case "Pending":
        return "warning";
      case "Banned":
        return "danger";
      default:
        return "primary";
    }
  };

  return (
    <>
    <div className="col-md-6">
      <h4>Doughnut</h4>
        <div className="chart-wrapper">
          <CChart type="doughnut" datasets={doughnut.datasets} labels={doughnut.labels}/>
        </div>
        <hr />
      </div>


      <div className="col-md-6"></div>
      <div className={"mt-2"}>
        <CProgress className="mb-1 bg-white">
          <CProgressBar
            showValue
            value={counter * (6 / 10) + 3}
            color="success"
            height="30px"
          />
          <CProgressBar
            showValue
            value={counter * (2.5 / 10) + 3}
            color="warning"
          />
          <CProgressBar
            showValue
            value={counter * (1.5 / 10) + 3}
            color="danger"
          />
        </CProgress>
        <hr/>
      </div>

      <CButton
        color="success"
        onClick={(event) => (window.location.href = "/#/InventoryListEdit")}
      >
        <strong>ADD+</strong>
      </CButton>

      <CCard>
        <CCardBody>
          <CDataTable
            items={data}
            fields={fields}
            columnFilter
            tableFilter
            footer
            itemsPerPageSelect
            itemsPerPage={5}
            hover
            sorter
            pagination
            scopedSlots={{
              cost: (item) => (
                <td>
                  <CBadge color={getBadge(item.cost)}>{item.cost}</CBadge>
                </td>
              ),

              show_details: (item, index) => {
                return (
                  <td className="py-2">
                    <CButton
                      color="primary"
                      variant="outline"
                      shape="square"
                      size="sm"
                      onClick={(event) =>
                        (window.location.href = "/#/InventoryListEdit")
                      }
                    >
                      {details.includes(index) ? "Hide" : "Edit"}
                    </CButton>
                  </td>
                );
              },
            }}
          />

          <CRow></CRow>
        </CCardBody>
      </CCard>
    </>
  );
};
export default InventoryAssignment;
