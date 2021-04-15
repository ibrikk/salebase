import React, { useState, useEffect } from "react";
// import { CChart } from "@coreui/react-chartjs";
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
  // CProgress,
  // CProgressBar,

  // CButtonGroup,
  // CCardFooter,
  // CCardHeader,
  // CCol,
  // CProgress,
  // CCallout
} from "@coreui/react";

import axios from "axios";

const InventoryAssignment = (props) => {
  // const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/items-assign").then((res) => {
      setData(res.data.items)
      props.dispatchAction('updateItemAssignment', res.data.items)
    });
    axios.get("http://localhost:3002/items").then((res) => {
      props.dispatchAction('updateItemList', res.data.items)
    });
    axios.get("http://localhost:3002/vendors").then((res) => {
      props.dispatchAction('updateVendorList', res.data.vendors)
    });
  }, []);


  

  

  const fields = [
    { key: "item_name", label: "Item Name", _style: { width: "40%" } },

    { key: "sum", label: "Assigned Quantity", _style: { width: "20%" } },

    {
      key: "total_quantity",
      label: "Total Quantity",
      _style: { width: "20%" },
    },
  ];

  // const getBadge = (cost) => {
  //   switch (cost) {
  //     case "Active":
  //       return "success";
  //     case "Inactive":
  //       return "secondary";
  //     case "Pending":
  //       return "warning";
  //     case "Banned":
  //       return "danger";
  //     default:
  //       return "primary";
  //   }
  // };

  const takeMeToAssignment = () => {
    props.dispatchAction("assignmentBeingAdded")
  }

  return (
    <>
      

      <CButton
        color="success"
        onClick={ event =>{
          takeMeToAssignment()}
        }
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
          />

          <CRow></CRow>
        </CCardBody>
      </CCard>
    </>
  );
};
export default InventoryAssignment;
