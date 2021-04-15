import React, { useState, useEffect } from "react";
import { CChart } from "@coreui/react-chartjs";
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

const InventoryAssignment = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/items-assign").then((res) => {
      //console.log(res.data.items);
      setData(res.data.items);
      
    });
  }, []);


  useEffect(() => {
    axios.get("http://localhost:3002/items").then((res) => {
      //console.log(res.data.items);
      setData(res.data.items);
      props.dispatchAction('getAssignItemList', res.data.items)
    });
  }, []);


  useEffect(() => {
    axios.get("http://localhost:3002/vendors").then((res) => {
      //console.log(res.data.items);
      setData(res.data.items);
      props.dispatchAction('assignVendorDropdown', res.data.items)
    });
  }, []);



  const [details, setDetails] = useState([]);
  // const [items, setItems] = useState(usersData)

  const toggleDetails = (index) => {
    const position = details.indexOf(index);
    let newDetails = details.slice();
    if (position !== -1) {
      newDetails.splice(position, 1);
    } else {
      newDetails = [...details, index];
    }
    setDetails(newDetails);
  };

  const fields = [
    { key: "item_name", label: "Item Name", _style: { width: "40%" } },

    { key: "sum", label: "Assigned Quantity", _style: { width: "20%" } },

    {
      key: "total_quantity",
      label: "Total Quantity",
      _style: { width: "20%" },
    },
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
      

      <CButton
        color="success"
        onClick={(event) => (window.location.href = "/#/InventoryAssignmentEdit")}
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
