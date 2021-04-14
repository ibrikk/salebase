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
  const [itemInput, setItemInput] = useState([
    {
      assigned_quantity: "",
      price: "",
      order_date: "",
      item_id: "",
      vendor_id: "",
      id: null,
    },
  ]);

  const [vendorInput, setVendorInput] = useState([
    {
      assigned_quantity: "",
      price: "",
      order_date: "",
      item_id: "",
      vendor_id: "",
      id: null,
    },
  ]);

  useEffect(() => {
    axios.get("http://localhost:3002/items").then((res) => {
      setItemInput(res.data.items);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:3002/vendors").then((res) => {
      setVendorInput(res.data.vendors);
    });
  }, []);

  // {console.log(vendorInput)}

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
                      id="assigned_quantity"
                      type="text"
                      key="assigned_quantity"
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

                  <CFormGroup>
                    <CLabel htmlFor="item">Item</CLabel>
                    <select
                      value={itemInput.item_name}
                      onChange={(e) => setItemInput("item_id", e.target.value)}
                      name="item"
                      id="item"
                    >
                      {itemInput.map((item) => {
                        return (
                          <option value={item.id}>{item.item_name}</option>
                        );
                      })}
                    </select>
                  </CFormGroup>

                  <CFormGroup>
                    <CLabel htmlFor="vendor">Vendor</CLabel>
                    <select
                      value={vendorInput.vendor_name}
                      onChange={(e) => setItemInput("item_id", e.target.value)}
                      name="item"
                      id="item"
                    >
                      {vendorInput.map((vendor) => {
                        return (
                          <option value={vendor.id}>
                            {vendor.vendor_name}
                          </option>
                        );
                      })}
                    </select>
                  </CFormGroup>
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
