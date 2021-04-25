//import React from 'react'
// import CIcon from '@coreui/icons-react'

const _nav = [
  {
    _tag: "CSidebarNavTitle",
    _children: ["Components"],
  },
  {
    _tag: "CSidebarNavItem",
    name: "Inventory Management",
    to: "/inventoryList",
    icon: "cil-star",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Inventory Assignment",
    to: "/InventoryAssignment",
    icon: "cil-pencil",
  },
  {
    _tag: "CSidebarNavItem",
    name: "Business Intelligence",
    to: "/BusinessIntelligence",
    icon: "cil-chart-pie",
  },
  {
    _tag: "CSidebarNavItem",
    name: "About Us",
    to: "/AboutUs",
    icon: "cil-star",
  },
];

export default _nav;
