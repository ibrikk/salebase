import React, { lazy, useState, useEffect } from "react";
import axios from "axios";

import {
  CCard,
  CCardBody,
  CRow,
  CSpinner,
  // CNavbar,
  // CToggler,
  // CCollapse,
  // CNavbarNav,
  // CForm,
  // CInput,
  CButton,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
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

const InventoryAssignmentEdit = (props) => {
  const [addAssignment, setAddAssignment] = useState([{
    assigned_quantity: "",
    price: "",
    order_date: "",
    item_id: "",
    vendor_id: "",
    id: null,
  }
  ]);



  useEffect(() => {
    axios.get("http://localhost:3002/items").then((res) => {
      setAddAssignment(res.data.items);
    });
  }, []);


  return (
    <div>
      
      <CCard>
        <CCardBody>
          <h1>InventoryAssignmentAdd</h1>
          <CContainer fluid>
            <CRow>
              <CCol sm="12">
                <CForm>
                  <CFormGroup>
                    <CLabel htmlFor="assigned_quantity">
                      Assigned Quantity
                    </CLabel>
                    <CInput
                      type="text"
                      id="assigned_quantity"
                      name="assigned_quantity"
                      placeholder="assigned_quantity"
                    />
                  </CFormGroup>
                  <CFormGroup>
                    <CLabel htmlFor="price">Price</CLabel>
                    <CInput
                      type="text"
                      id="price"
                      name="price"
                      placeholder="Price"
                    />
                  </CFormGroup>

                  <CFormGroup>
                    <CLabel htmlFor="order_date">order_date</CLabel>
                    <CInput
                      type="text"
                      id="order_date"
                      name="order_date"
                      placeholder="order_date"
                    />
                  </CFormGroup>
                  <select >
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>

                 <select>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                  </select>
                </CForm>
              </CCol>
            </CRow>
            <CButton color="primary" style={{ float: "right" }}>
              <strong>SAVE</strong>
            </CButton>
          </CContainer>
        </CCardBody>
      </CCard>

      <CCard>
        <CCardBody></CCardBody>
      </CCard>
    </div>
  );
};

export default InventoryAssignmentEdit;
