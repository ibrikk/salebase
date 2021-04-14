import React, { Suspense, } from 'react'
import { useHistory } from "react-router-dom";
import {
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import { CContainer, CFade } from '@coreui/react'

// routes config
import routes from '../routes'

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)


const TheContent = () => {

  const history = useHistory();

const myState = {
  inventoryBeingEdited: null,

}

  const viewCallbackFunction = (viewName, data) => {
    if (viewName === 'inventoryList') {
      console.log(data);
      myState.inventoryBeingEdited = data;
      history.push('/InventoryListEdit')
    }
}

  return (
    <main className="c-main">
      <CContainer fluid>
        <Suspense fallback={loading}>
          <Switch>
            {routes.map((route, idx) => {
              return route.component && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  render={props => (
                    <CFade>

                      <route.component {...props}
                      myState={myState}
                      callbackFromParents= {viewCallbackFunction}/>
                    </CFade>
                  )} />
              )
            })}
            <Redirect from="/" to="/inventoryList" />
          </Switch>
        </Suspense>
      </CContainer>
    </main>
  )
}

export default React.memo(TheContent)
