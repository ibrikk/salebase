import React from 'react';

const InventoryList = React.lazy(() => import('./views/InventoryList/InventoryList.js'));
const InventoryAssignment = React.lazy(() => import('./views/InventoryAssignment/InventoryAssignment.js'));
const BusinessIntelligence = React.lazy(() => import('./views/BusinessIntelligence/BusinessIntelligence.js'));
const AboutUs = React.lazy(() => import('./views/AboutUs/AboutUs.js'));
const InventoryListEdit = React.lazy(() => import('./views/InventoryListEdit/InventoryListEdit.js'));
const InventoryAssignmentEdit = React.lazy(() => import('./views/InventoryAssignmentEdit/InventoryAssignmentEdit.js'));
const Login = React.lazy(() => import('./views/login/Login.js'));


const routes = [

  { path: '/inventoryList', name: 'Inventory Management Dashboard', component: InventoryList },
  { path: '/InventoryAssignment', name: 'InventoryAssignemnt Dashboard', component: InventoryAssignment },
  { path: '/BusinessIntelligence', name: 'Business Intelligence', component: BusinessIntelligence },
  { path: '/AboutUs', name: 'About Us', component: AboutUs },
  { path: '/InventoryListEdit', name: 'InventoryList Edit ', component: InventoryListEdit },
  { path: '/InventoryAssignmentEdit', name: 'InventoryAssignment Edit ', component: InventoryAssignmentEdit },
  { path: '/login', name: 'Login ', component: Login },

];

export default routes;
