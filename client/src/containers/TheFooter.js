import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <a href="../views/AboutUs/AboutUs.js#AboutUs" target="_blank" rel="noopener noreferrer">Salebase</a>
        <span className="ml-1">&copy; 2021 Lighthouse Labs Grads</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href='../views/AboutUs/AboutUs.js#AboutUs'>Salebase</a>
      </div>
    </CFooter>
  )
}

export default React.memo(TheFooter)
