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
  const [inputValues, setInputValues] = useState(
    {
      assigned_quantity: "",
      price: "",
      order_date: "",
      item_id: "",
      vendor_id: "",
      id: null,
    },
  );

const [itemDropdown, setItemDropdown] = useState([]);
const [vendorDropdown, setVendorDropdown] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/items").then((res) => {
      //console.log(res.data.items);
      setItemDropdown(res.data.items);
      props.dispatchAction('getAssignItemList', res.data.items)
    });
  }, []);


  useEffect(() => {
    axios.get("http://localhost:3002/vendors").then((res) => {
     // console.log(res.data);
     setVendorDropdown(res.data.vendors);
      props.dispatchAction('assignVendorDropdown', res.data.vendors)
    });
  }, []);


  useEffect(() => {
    if (_.get(props, "myState.assignmentBeingAdded", false)) {
      setInputValues({
        assigned_quantity: _.get(props, "myState.assignmentBeingAdded.assigned_quantity", ""),
        price: _.get(props, "myState.assignmentBeingAdded.price", ""),
        order_date: _.get(
          props,
          "myState.assignmentBeingAdded.order_date",
          ""
        ),
        item_id: _.get(props, "myState.assignmentBeingAdded.item_id", ""),
        vendor_id: _.get(props, "myState.assignmentBeingAdded.vendor_id", ""),
        id: _.get(props, "myState.assignmentBeingAdded.id", null),
      });
    }
  }, []);

  
  const save = () => {
    axios
    .post(`http://localhost:3002/items/items-assign`, inputValues)
    .then((res) => {
      console.log(res.data)
    })
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
                      value={inputValues.item_id}
                      onChange={(e) => setInputValues("item_id", e.target.value)}
                      name="item"
                      id="item"
                    >
                     {itemDropdown.map((item) => {
                        return (
                          <option value={item.id}>{item.item_name}</option>
                        );
                      })}
                    
                    </select>
                  </CFormGroup>
                  {console.log(vendorDropdown)}

                   <CFormGroup>
                    <CLabel htmlFor="vendor">Vendor</CLabel>
                    <select
                      value={vendorDropdown.vendor_name}
                      onChange={(e) => setInputValues("vendor_name", e.target.value)}
                      name="item"
                      id="item"
                    >
                      {vendorDropdown.map((vendor) => {
                        return (
                          <option value={vendor}>
                            {vendor.vendor_name}
                          </option>
                        );
                      })}
                    </select>
                    </CFormGroup> 
                </CForm>
              </CCol>
            </CRow>
            <CButton color="primary" style={{ float: "right" }}
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
        <CCardBody></CCardBody>
      </CCard>
    </div>
  );
};

export default InventoryAssignmentEdit;
