import React, { lazy, useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";

import {
  CCard,
  CCardBody,
  CButton,
  CBadge,
  CDataTable,
  CCardFooter,
} from "@coreui/react";

const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));

const InventoryList = (props) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (
      _.get(props, "location.state.isLoggedIn", false) ||
      _.get(props, "myState.isLoggedIn", false)
    ) {
      props.dispatchAction("isLoggedIn");
      axios.get("/items").then((res) => {
        setData(res.data.items);
        props.dispatchAction("updateItemList", res.data.items);
      });
    }
  }, [props]);

  const fields = [
    { key: "item_name", _style: { width: "40%" } },

    { key: "cost", label: "Cost/lbs", _style: { width: "20%" } },
    { key: "total_quantity", _style: { width: "20%" } },
    {
      key: "show_details",
      label: "Edit",
      _style: { width: "1%" },
      sorter: false,
      filter: false,
    },
  ];



  const getBadge = (cost) => {
    switch (cost) {
      case cost > 20: //
        return "success";
      case "Inactive":
        return "secondary";
      case "Pending":
        return "warning";
      case "Banned":
        return "danger";
      default:
        return "primary";
    }
  };

  //Acton dispatch whenever Edit or Add buttons are clicked
  const editOrAddButtonPressed = (data) => {
    props.dispatchAction("dataForInventoryBeingEdited", data);
  };

  return (
    <>
      <WidgetsDropdown />

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
              cost: (item) => (
                <td>
                  <CBadge color={getBadge(item.cost)}>{item.cost}</CBadge>
                </td>
              ),

              show_details: (item, index) => {
                return (
                  <td className="py-2">
                    {
                      <CButton
                        color="primary"
                        variant="outline"
                        shape="square"
                        size="sm"
                        onClick={(event) => {
                          editOrAddButtonPressed(item);
                        }}
                      >
                        Edit
                      </CButton>
                    }
                  </td>
                );
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CButton
            style={{ float: "right" }}
            color="success"
            onClick={(event) => {
              editOrAddButtonPressed();
            }}
          >
            <strong>ADD+</strong>
          </CButton>
        </CCardFooter>
      </CCard>
    </>
  );
};
export default InventoryList;
