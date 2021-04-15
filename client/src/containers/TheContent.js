import React, { Suspense } from "react";
import { useHistory } from "react-router-dom";
import { Redirect, Route, Switch } from "react-router-dom";
import { CContainer, CFade } from "@coreui/react";

// routes config
import routes from "../routes";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const TheContent = () => {
  const history = useHistory();

  //
  //
  // Redux replacement (Shared state)
  const myState = {
    inventoryBeingEdited: null,
    itemList: [],
    vendorList: [],
    itemAssignment: [],
    //assignmentBeingAdded: null,
    // assignItemDropdown: [],
    // assignVendorDropdown: [],
  };

  // This function is used by all child views to be able to talk to the parent
  const viewCallbackFunction = (action, data) => {
    if (action === "dataForInventoryBeingEdited") {
      myState.inventoryBeingEdited = data;
      history.push("/InventoryListEdit");
    }
    if (action === "updateVendorList") {
      myState.vendorList = data;
    }
    if (action === "updateItemList") {
      myState.itemList = data;
    }
    if (action === "updateItemAssignment") {
      myState.itemAssignment = data;
    }
    if (action === "assignmentBeingAdded") {
      // myState.assignmentBeingAdded = data;
      history.push("/InventoryAssignmentEdit")
    }
    if (action === "goToInventoryAssignment") {
      // myState.assignmentBeingAdded = data;
      history.push("/InventoryAssignment")
    }
    if (action === "goToInventoryList") {
      // myState.assignmentBeingAdded = data;
      history.push("/InventoryList")
    }
    
    // if (action === "assignItemDropdown") {
    //   myState.assignItemDropdown = data;
    // }
    // if (action === "assignVendorDropdown") {
    //   myState.assignVendorDropdown = data;
    // }

    // if statement here for InvAssignment
  };
  //
  //
  // End: Redux replacement (Shared state)

  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return (
                route.component && (
                  <Route
                    key={idx}
                    path={route.path}
                    exact={route.exact}
                    name={route.name}
                    render={(props) => (
                      <CFade>
                        <route.component
                          {...props}
                          myState={myState}
                          dispatchAction={viewCallbackFunction}
                        />
                      </CFade>
                    )}
                  />
                )
              );
            })}
            <Redirect from="/" to="/inventoryList" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  );
};

export default React.memo(TheContent);
