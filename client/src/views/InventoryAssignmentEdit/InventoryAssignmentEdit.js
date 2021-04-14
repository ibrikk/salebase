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

const InventoryAssignmentEdit = () => {

const [edit, setEdit] = useState([]);

useEffect(() => {
  axios.put('http://localhost:3002/items-assign').then((res) => {
    setEdit(res.data.items)
  })
}, []);

  return (
    <div>
      <h1>InventoryAssignmentEdit</h1>
    </div>
  );
  };


  export default InventoryAssignmentEdit;
