import React, { lazy, useState, useEffect } from "react";
import axios from "axios";

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

  // CButtonGroup,
  // CCardFooter,
  // CCardHeader,
  // CCol,
  // CProgress,
  // CCallout
} from "@coreui/react";

const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));

const InventoryList = () => {
  // const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/items").then((res) => {
      console.log(res.data.items);
      setData(res.data.items);
    });
  }, []);

  const [details] = useState([]);
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
    { key: "item_name", _style: { width: "40%" } },

    { key: "item_type", _style: { width: "20%" } },

    { key: "cost", label: "Cost/lbs", _style: { width: "20%" } },
    { key: "total_quantity", _style: { width: "20%" } },
    {
      key: "show_details",
      label: "Edit",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
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
      <WidgetsDropdown />

      <CButton color="success"
      onClick={event =>
        window.location.href='/#/InventoryListEdit'
      }
      >ADD+</CButton>

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
                      onClick={event =>
                        window.location.href='/#/InventoryListEdit'
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
export default InventoryList;
