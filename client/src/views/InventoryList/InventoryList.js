import React, { lazy, useState } from "react";
import {
  CCard,
  CCardBody,
  CRow,
  CNavbar,
  CToggler,
  CCollapse,
  CNavbarNav,
  CForm,
  CInput,
  CButton,
  CDropdown,
  CDropdownToggle,
  CDropdownMenu,
  CDropdownItem,
  CNavbarBrand,
  CBadge,
  CDataTable,



  // CButtonGroup,
  // CCardFooter,
  // CCardHeader,
  // CCol,
  // CProgress,
  // CCallout
} from "@coreui/react";


const WidgetsDropdown = lazy(() => import("../widgets/WidgetsDropdown.js"));





const InventoryList = () => {
  const [isOpen, setIsOpen] = useState(false);

  const usersData = [
    {id: 0, name: 'John Doe', price: '2018/01/01', quantity: 'Guest', cost: 'Pending'},
    {id: 1, name: 'Samppa Nori', price: '2018/01/01', quantity: 'Member', cost: 'Active'},
    {id: 2, name: 'Estavan Lykos', price: '2018/02/01', quantity: 'Staff', cost: 'Banned'},
    {id: 3, name: 'Chetan Mohamed', price: '2018/02/01', quantity: 'Admin', cost: 'Inactive'},
    {id: 4, name: 'Derick Maximinus', price: '2018/03/01', quantity: 'Member', cost: 'Pending'},
    {id: 5, name: 'Friderik Dávid', price: '2018/01/21', quantity: 'Staff', cost: 'Active'},
    {id: 6, name: 'Yiorgos Avraamu', price: '2018/01/01', quantity: 'Member', cost: 'Active'},
    {id: 7, name: 'Avram Tarasios', price: '2018/02/01', quantity: 'Staff', cost: 'Banned'},
    {id: 8, name: 'Quintin Ed', price: '2018/02/01', quantity: 'Admin', cost: 'Inactive'},
    {id: 9, name: 'Enéas Kwadwo', price: '2018/03/01', quantity: 'Member', cost: 'Pending'},
    {id: 10, name: 'Agapetus Tadeáš', price: '2018/01/21', quantity: 'Staff', cost: 'Active'},
    {id: 11, name: 'Carwyn Fachtna', price: '2018/01/01', quantity: 'Member', cost: 'Active'},
    {id: 12, name: 'Nehemiah Tatius', price: '2018/02/01', quantity: 'Staff', cost: 'Banned'},
    {id: 13, name: 'Ebbe Gemariah', price: '2018/02/01', quantity: 'Admin', cost: 'Inactive'},
    {id: 14, name: 'Eustorgios Amulius', price: '2018/03/01', quantity: 'Member', cost: 'Pending'},
    {id: 15, name: 'Leopold Gáspár', price: '2018/01/21', quantity: 'Staff', cost: 'Active'},
    {id: 16, name: 'Pompeius René', price: '2018/01/01', quantity: 'Member', cost: 'Active'},
    {id: 17, name: 'Paĉjo Jadon', price: '2018/02/01', quantity: 'Staff', cost: 'Banned'},
    {id: 18, name: 'Micheal Mercurius', price: '2018/02/01', quantity: 'Admin', cost: 'Inactive'},
    {id: 19, name: 'Ganesha Dubhghall', price: '2018/03/01', quantity: 'Member', cost: 'Pending'},
    {id: 20, name: 'Hiroto Šimun', price: '2018/01/21', quantity: 'Staff', cost: 'Active'},
    {id: 21, name: 'Vishnu Serghei', price: '2018/01/01', quantity: 'Member', cost: 'Active'},
    {id: 22, name: 'Zbyněk Phoibos', price: '2018/02/01', quantity: 'Staff', cost: 'Banned'},
    {id: 23, name: 'Aulus Agmundr', price: '2018/01/01', quantity: 'Member', cost: 'Pending'},
    {id: 42, name: 'Ford Prefect', price: '2001/05/25', quantity: 'Alien', cost: 'Don\'t panic!'}
  ]

  const [details, setDetails] = useState([])
  // const [items, setItems] = useState(usersData)

  const toggleDetails = (index) => {
    const position = details.indexOf(index)
    let newDetails = details.slice()
    if (position !== -1) {
      newDetails.splice(position, 1)
    } else {
      newDetails = [...details, index]
    }
    setDetails(newDetails)
  }


  const fields = [
    { key: 'name', _style: { width: '40%'} },
    'price',
    { key: 'quantity', _style: { width: '20%'} },
    { key: 'cost', _style: { width: '20%'} },
    {
      key: 'show_details',
      label: '',
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }
  ]

  const getBadge = (cost)=>{
    switch (cost) {
      case 'Active': return 'success'
      case 'Inactive': return 'secondary'
      case 'Pending': return 'warning'
      case 'Banned': return 'danger'
      default: return 'primary'
    }
  }

  return (
    <>
      <WidgetsDropdown />
      <CCard>
        <CCardBody>
        <div>


        <CNavbar expandable="sm" color="info" >
          <CToggler inNavbar onClick={() => setIsOpen(!isOpen)}/>
          <CNavbarBrand>
          Inventory List
        </CNavbarBrand>
          <CCollapse show={isOpen} navbar>
            <CNavbarNav className="ml-auto">
              <CForm inline>
                <CInput
                  className="mr-sm-2"
                  placeholder="Search"
                  size="sm"
                />
                <CButton color="light" className="my-2 my-sm-0" type="submit">Search</CButton>
              </CForm>
              <CDropdown
                inNav
              >
                <CDropdownToggle color="primary">
                  Price
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Low-High</CDropdownItem>
                  <CDropdownItem>High-Low</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
              <CDropdown
                inNav
              >
                <CDropdownToggle color="primary">
                  Quantity
                </CDropdownToggle>
                <CDropdownMenu>
                  <CDropdownItem>Low-High</CDropdownItem>
                  <CDropdownItem>High-Low</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </CNavbarNav>
          </CCollapse>
        </CNavbar>
      </div>
      <CDataTable
      items={usersData}
      fields={fields}
      columnFilter
      tableFilter
      footer
      itemsPerPageSelect
      itemsPerPage={5}
      hover
      sorter
      pagination
      scopedSlots = {{
        'cost':
          (item)=>(
            <td>
              <CBadge color={getBadge(item.cost)}>
                {item.cost}
              </CBadge>
            </td>
          ),
        'show_details':
          (item, index)=>{
            return (
              <td className="py-2">
                <CButton
                  color="primary"
                  variant="outline"
                  shape="square"
                  size="sm"
                  onClick={()=>{toggleDetails(index)}}
                >
                  {details.includes(index) ? 'Hide' : 'Show'}
                </CButton>
              </td>
              )
          },
        'details':
            (item, index)=>{
              return (
              <CCollapse show={details.includes(index)}>
                <CCardBody>
                  <h4>
                    {item.username}
                  </h4>
                  <p className="text-muted">User since: {item.price}</p>
                  <CButton size="sm" color="info">
                    User Settings
                  </CButton>
                  <CButton size="sm" color="danger" className="ml-1">
                    Delete
                  </CButton>
                </CCardBody>
              </CCollapse>
            )
          }
      }}
    />

          <CRow>

          </CRow>
        </CCardBody>
      </CCard>

    </>
  );
};
export default InventoryList;
