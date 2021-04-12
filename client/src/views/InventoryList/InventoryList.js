import React, { lazy } from "react";
import {
  CCard,
  CCardBody,
  CRow,
  // CBadge,
  // CButton,
  // CButtonGroup,
  // CCardFooter,
  // CCardHeader,
  // CCol,
  // CProgress,
  // CCallout
} from "@coreui/react";

const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));


const InventoryList = () => {
  return (
    <>
      <WidgetsDropdown />
      <CCard>
        <CCardBody>
          <CRow>
            <h3>Inventory List</h3>
          </CRow>
        </CCardBody>
      </CCard>
    </>
  );
};
export default InventoryList;
