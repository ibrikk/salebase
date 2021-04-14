import React, { lazy, useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";

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
  const [state, setState] = useState({
    cost: "",
    item_name: "",
    item_type: "",
    total_quantity: "",
    id: null,
  });

  useEffect(() => {
    if (_.get(props, "myState.inventoryBeingEdited", false)) {
      setState({
        cost: _.get(props, "myState.inventoryBeingEdited.cost", ""),
        item_name: _.get(props, "myState.inventoryBeingEdited.item_name", ""),
        item_type: _.get(props, "myState.inventoryBeingEdited.item_type", ""),
        total_quantity: _.get(
          props,
          "myState.inventoryBeingEdited.total_quantity",
          ""
        ),
        id: _.get(props, "myState.inventoryBeingEdited.id", null),
      });
    }
  }, [props]);

  const save = () => {
    if (state.id !== null) {
      axios.put(`http://localhost:3002/items/${state.id}`, state).then((res) => {
        console.log("put");
        console.log(res.data);
      });
    } else {
      axios.post("http://localhost:3002/items", state).then((res) => {
        console.log("post");
        console.log(res.data);
      });
    }
  };

  const updateState = (inputFieldName, newValue) => {
    const newState = _.clone(state);
    switch (inputFieldName) {
      case "name":
        newState.item_name = newValue;
        break;
      case "type":
        newState.item_type = newValue;
        break;
      case "quantity":
        newState.total_quantity= newValue;
        break;
      case "cost":
        newState.cost = newValue;
        break;
      default:
    }
    setState(newState);
  };

  return (
    <div>
      <h1>InventoryListEdit</h1>
      <CContainer fluid>
        <CRow>
          <CCol sm="12">
            <CForm>
              <CFormGroup>
                <CLabel htmlFor="name">Item Name</CLabel>
                <CInput
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Item Name"
                  value={state.item_name || ""}
                  onChange={(e) => {
                    updateState('name', e.target.value)
                  }}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="nf-password">Item Type</CLabel>
                <CInput
                  type="text"
                  id="type"
                  name="type"
                  placeholder="Enter Item Type"
                  value={state.item_type || ""}
                  onChange={(e) => {
                    updateState('type', e.target.value)
                  }}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="quantity">Quantity</CLabel>
                <CInput
                  type="text"
                  id="quantity"
                  name="quantity"
                  placeholder="Enter Quantity"
                  value={state.total_quantity || ""}
                  onChange={(e) => {
                    updateState('quantity', e.target.value)
                  }}
                />
              </CFormGroup>
              <CFormGroup>
                <CLabel htmlFor="cost">Cost/lbs</CLabel>
                <CInput
                  type="text"
                  id="cost"
                  name="cost"
                  placeholder="Enter Cost per Pound"
                  value={state.cost || ""}
                  onChange={(e) => {
                    updateState('cost', e.target.value)
                  }}
                />
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
    </div>
  );
};

export default InventoryListEdit;
