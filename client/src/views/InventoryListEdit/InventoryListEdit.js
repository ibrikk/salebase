import React, { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";

import {
  CCard,
  CCardBody,
  CRow,
  CSpinner,
  CButton,
  CCol,
  CContainer,
  CInput,
  CLabel,
  CForm,
  CFormGroup,
} from "@coreui/react";

const InventoryListEdit = (props) => {
  const [inputValues, setInputValues] = useState({
    cost: "",
    item_name: "",
    total_quantity: "",
    id: null,
  });

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (_.get(props, "myState.inventoryBeingEdited", false)) {
      setInputValues({
        cost: _.get(props, "myState.inventoryBeingEdited.cost", ""),
        item_name: _.get(props, "myState.inventoryBeingEdited.item_name", ""),
        total_quantity: _.get(
          props,
          "myState.inventoryBeingEdited.total_quantity",
          ""
        ),
        id: _.get(props, "myState.inventoryBeingEdited.id", null),
      });
    }
  }, []);

  function sleeper(ms) {
    return function (x) {
      return new Promise((resolve) => setTimeout(() => resolve(x), ms));
    };
  }

  const save = () => {
    setIsLoading(true);
    if (inputValues.id !== null) {
      axios
        .put(`/items/${inputValues.id}`, inputValues)
        .then(sleeper(1000))
        .then((res) => {
          props.dispatchAction("goToInventoryList");
          setIsLoading(false);
        });
    } else {
      axios
        .post("/items", inputValues)
        .then(sleeper(1000))
        .then((res) => {
          props.dispatchAction("goToInventoryList");
          setIsLoading(false);
        });
    }
  };

  const updateState = (inputFieldName, newValue) => {
    const newState = _.clone(inputValues);
    switch (inputFieldName) {
      case "name":
        newState.item_name = newValue;
        break;
      case "quantity":
        newState.total_quantity = newValue;
        break;
      case "cost":
        newState.cost = newValue;
        break;
      default:
    }
    setInputValues(newState);
  };

  return (
    <div>
      {isLoading && (
        <div className="d-flex justify-content-center">
          <div>
            <CSpinner color="success" size="lg" />
          </div>
        </div>
      )}

      {isLoading === false && (
        <div>
          <CCard>
            <CCardBody>
              <h1>Inventory Management</h1>
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
                          value={inputValues.item_name || ""}
                          onChange={(e) => {
                            updateState("name", e.target.value);
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
                          value={inputValues.total_quantity || ""}
                          onChange={(e) => {
                            updateState("quantity", e.target.value);
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
                          value={inputValues.cost || ""}
                          onChange={(e) => {
                            updateState("cost", e.target.value);
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
            </CCardBody>
          </CCard>

          <CCard>
            <CCardBody></CCardBody>
          </CCard>
        </div>
      )}
    </div>
  );
};

export default InventoryListEdit;
