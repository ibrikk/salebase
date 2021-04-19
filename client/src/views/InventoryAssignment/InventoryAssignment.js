import React, { useState, useEffect } from "react";

import {
  CCard,
  CCardBody,
  CRow,
  CButton,
  CDataTable,
  CProgress,
  CCardFooter,
} from "@coreui/react";

import axios from "axios";

const InventoryAssignment = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/items-assign").then((res) => {
      setData(res.data.items);
      props.dispatchAction("updateItemAssignment", res.data.items);
    });
    axios.get("http://localhost:3002/items").then((res) => {
      props.dispatchAction("updateItemList", res.data.items);
    });
    axios.get("http://localhost:3002/vendors").then((res) => {
      props.dispatchAction("updateVendorList", res.data.vendors);
    });
  }, []);

  const fields = [
    { key: "item_name", label: "Item Name", _style: { width: "30%" } },

    { key: "progress", label: "", _style: { width: "50%" } },

    { key: "sum", label: "Assigned Quantity", _style: { width: "10%" } },

    {
      key: "total_quantity",
      label: "Total Quantity",
      _style: { width: "10%" },
    },
  ];

  const takeMeToAssignment = () => {
    props.dispatchAction("assignmentBeingAdded");
  };

  let counter = 86;

  return (
    <>
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
              progress: (item) => {
                const counter =
                  (100 * parseInt(item.sum)) / parseInt(item.total_quantity);
                return (
                  <td>
                    <CProgress
                      showPercentage="true"
                      striped
                      color="warning"
                      value={counter}
                      className="mb-1 bg-white"
                    />
                  </td>
                );
              },
            }}
          />

          <CRow></CRow>
        </CCardBody>
        <CCardFooter>
          <CButton
            style={{ float: "right" }}
            color="success"
            onClick={(event) => {
              takeMeToAssignment();
            }}
          >
            <strong>ADD+</strong>
          </CButton>
        </CCardFooter>
      </CCard>
    </>
  );
};
export default InventoryAssignment;
