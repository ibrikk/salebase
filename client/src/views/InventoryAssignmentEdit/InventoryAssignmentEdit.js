import React, { lazy, useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import {
  CCard,
  CCardBody,
  CRow,
  CButton,
  CCol,
  CContainer,
  CInput,
  CLabel,
  CForm,
  CFormGroup,
  CCardFooter,
  CCardHeader,
} from "@coreui/react";

const InventoryAssignmentEdit = (props) => {
  const [inputValues, setInputValues] = useState({
    assigned_quantity: "",
    price: "",
    order_date: "",
    item_id: "",
    vendor_id: "",
  });

  useEffect(() => {
    const vendorList = _.get(props, "myState.vendorList", []);
    const itemList = _.get(props, "myState.itemList", []);
    const itemAssignment = _.get(props, "myState.itemAssignment", []);
    if (
      vendorList.length === 0 ||
      itemList.length === 0 ||
      itemAssignment.length === 0
    ) {
      props.dispatchAction("goToInventoryAssignment");
    }
  }, []);

  const save = () => {
    axios
      .post(`http://localhost:3002/items-assign`, inputValues)
      .then((res) => {
        props.dispatchAction("goToInventoryAssignment");
      });
  };

  const getAvailableQuantityByItemId = (itemId) => {
    const itemList = _.get(props, "myState.itemList", []);
    const itemAssignment = _.get(props, "myState.itemAssignment", []);
    let parsedItemId = parseInt(itemId);
    let availableQuantity = 0;
    for (let item of itemList) {
      if (item.id === parsedItemId) {
        availableQuantity = parseInt(item.total_quantity);
      }
    }
    for (let assignment of itemAssignment) {
      if (assignment.item_id === parsedItemId) {
        availableQuantity = availableQuantity - parseInt(assignment.sum);
      }
    }
    return availableQuantity;
  };

  const getTotalQuantityByItemId = (itemId) => {
    const itemList = _.get(props, "myState.itemList", []);
    let parsedItemId = parseInt(itemId);
    for (let item of itemList) {
      if (item.id === parsedItemId) {
        return parseInt(item.total_quantity);
      }
    }
    return 0;
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
        <CCardHeader>Inventory Assignment Addition</CCardHeader>
        <CCardBody>
          <CContainer fluid>
            <CRow>
              <CCol sm="12">
                <CForm>
                  <CFormGroup>
                    <div className="row">
                      <div className="col-6">
                        <label htmlFor="item">Item</label>
                        <select
                          className="custom-select"
                          value={inputValues.item_id}
                          onChange={(e) =>
                            updateState("item_id", e.target.value)
                          }
                          name="item"
                          id="item"
                        >
                          <option value={""} key="blank">
                            Select
                          </option>
                          {props.myState.itemList.map((item) => {
                            return (
                              <option key={item.id} value={item.id}>
                                {item.item_name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div className="col-6">
                        <label htmlFor="vendor">Vendor</label>

                        <select
                          className="custom-select"
                          value={inputValues.vendor_id}
                          onChange={(e) =>
                            updateState("vendor_id", e.target.value)
                          }
                          name="item"
                          id="item"
                        >
                          <option value={""} key="blank">
                            Select
                          </option>
                          {props.myState.vendorList.map((vendor) => {
                            return (
                              <option key={vendor.id} value={vendor.id}>
                                {vendor.vendor_name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                    </div>
                    {inputValues.item_id !== "" && (
                      <div className="row">
                        <div className="col-6">
                          <CLabel>Total Quantity</CLabel>
                          <p>{getTotalQuantityByItemId(inputValues.item_id)}</p>
                        </div>
                        <div className="col-6">
                          <CLabel>Available Quantity</CLabel>
                          <p>
                            {getAvailableQuantityByItemId(inputValues.item_id)}
                          </p>
                        </div>
                      </div>
                    )}
                    <div className="row">
                      <div className="col-12">
                        <CLabel htmlFor="assigned_quantity">
                          Assigned Quantity
                        </CLabel>
                        <CInput
                          id="assigned_quantity"
                          type="text"
                          name="assigned_quantity"
                          value={inputValues.assigned_quantity}
                          onChange={(e) => {
                            updateState("assigned_quantity", e.target.value);
                          }}
                        />
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-12">
                        <CLabel htmlFor="price">Price</CLabel>
                        <CInput
                          type="text"
                          id="price"
                          name="price"
                          value={inputValues.price}
                          onChange={(e) => {
                            updateState("price", e.target.value);
                          }}
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-12">
                        <CLabel htmlFor="order_date">Order Date</CLabel>
                        <CInput
                          type="date"
                          id="order_date"
                          name="order_date"
                          value={inputValues.order_date}
                          onChange={(e) => {
                            updateState("order_date", e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </CFormGroup>
                </CForm>
              </CCol>
            </CRow>
          </CContainer>
        </CCardBody>
        <CCardFooter>
          <CButton
            color="primary"
            style={{ float: "right" }}
            onClick={() => {
              save();
            }}
          >
            <strong>SAVE</strong>
          </CButton>
        </CCardFooter>
      </CCard>

      <CCard>
        <CCardBody></CCardBody>
      </CCard>
    </div>
  );
};

export default InventoryAssignmentEdit;
