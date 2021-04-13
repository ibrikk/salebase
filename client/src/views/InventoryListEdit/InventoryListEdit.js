import React, { lazy, useState, useEffect } from "react";
import axios from "axios";

import {
  // CCard,
  // CCardBody,
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
  // CBadge,
  // CDataTable,
  CCol,
  CContainer,
  CInput,
  CLabel,
  CForm,
  CFormGroup,
  // CFormText,

  // CButtonGroup,
  // CCardFooter,
  // CCardHeader,
  // CCol,
  // CProgress,
  // CCallout
} from "@coreui/react";

const InventoryListEdit = (props) => {

console.log('props.myState')
console.log(props.myState)


  return (
    <div>
      <h1>InventoryListEdit</h1>
      <CContainer fluid>
        <CRow>
          <CCol sm="12">
            <CForm action="" method="post">
              <CFormGroup>
                <CLabel htmlFor="nf-email">Item Name</CLabel>
                <CInput
                  type="text"
                  id="nf-email"
                  name="nf-email"
                  placeholder="Enter Item Name"
                  autoComplete="email"
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="nf-password">Item Type</CLabel>
                <CInput
                  type="text"
                  id="nf-password"
                  name="nf-password"
                  placeholder="Enter Item Type"
                  autoComplete="current-password"
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="nf-password">Quantity</CLabel>
                <CInput
                  type="text"
                  id="nf-password"
                  name="nf-password"
                  placeholder="Enter Quantity"
                  autoComplete="current-password"
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="nf-password">Cost/lbs</CLabel>
                <CInput
                  type="text"
                  id="nf-password"
                  name="nf-password"
                  placeholder="Enter Cost per Pound"
                  autoComplete="current-password"
                />
              </CFormGroup>
            </CForm>
          </CCol>
        </CRow>
        <CButton
          color="primary"
          style={{ float: "right" }}
         /* onClick={(event) => (Post to DB  )}  */
        >
          <strong>SAVE</strong>
        </CButton>
      </CContainer>
    </div>
  );
};

export default InventoryListEdit;
