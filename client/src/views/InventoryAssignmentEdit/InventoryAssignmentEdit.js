import React, { lazy, useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
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

const InventoryAssignmentEdit = (props) => {
  const [inputValues, setInputValues] = useState({
    assigned_quantity: "",
    price: "",
    order_date: "",
    item_id: "",
    vendor_id: "",
    id: null,
  });

  const save = () => {
    axios
      .post(`http://localhost:3002/items/items-assign`, inputValues)
      .then((res) => {
        console.log(res.data);
      });
  };


  const updateState = (inputFieldName, newValue) => {
    const newState = _.clone(inputValues);
    switch (inputFieldName) {
      case "assigned_quantity":
        newState.assigned_quantity = newValue;
        break;
      case "price":
        newState.price = newValue;
        break;
      case "order_date":
        newState.order_date = newValue;
        break;
      case "item_id":
        newState.item_id = newValue;
        break;
      case "vendor_id":
        newState.vendor_id = newValue;
        break;
      default:
    }
    setInputValues(newState);
  };

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
                    <div className="row">
                      <div className="col-12">
                        <CLabel htmlFor="assigned_quantity">
                          Assigned Quantity
                        </CLabel>
                        <CInput
                          id="assigned_quantity"
                          type="text"
                          name="assigned_quantity"
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <CLabel htmlFor="price">Price</CLabel>
                        <CInput type="text" id="price" name="price" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <CLabel htmlFor="order_date">Order Date</CLabel>
                        <CInput type="text" id="order_date" name="order_date" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-6">
                        <CLabel htmlFor="item">Item</CLabel>
                        <select
                          value={inputValues.item_id}
                          onChange={(e) =>
                            updateState("item_id", e.target.value)
                          }
                          name="item"
                          id="item"
                        >
                          {props.myState.itemList.map((item) => {
                            return (
                              <option key={item.id} value={item.id}>{item.item_name}</option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="col-6">
                        <CLabel htmlFor="vendor">Vendor</CLabel>
                        <select
                          value={inputValues.vendor_id}
                          onChange={(e) =>
                            updateState("vendor_id", e.target.value)
                          }
                          name="item"
                          id="item"
                        >
                          {props.myState.vendorList.map((vendor) => {
                            return (
                              <option key={vendor.id} 
                              value={vendor.id}>
                                {vendor.vendor_name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                  </CFormGroup>
                </CForm>
              </CCol>
            </CRow>
            <CButton
              color="primary"
              style={{ float: "right" }}
              onClick={() => {
                save();
              }}
            >
              <strong>SAVE</strong>
            </CButton>
          </CContainer>
        </CCardBody>
      </CCard>

      <CCard>
        <CCardBody>
        </CCardBody>
      </CCard>
    </div>
  );
};

export default InventoryAssignmentEdit;
