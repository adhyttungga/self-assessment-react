import React from 'react'
import { CSidebarBrand } from '@coreui/react'

import TalentMapping from 'src/assets/images/talent-mapping.svg'

const TheSidebar = () => {
  return (
    <div className="sidebar sidebar-fixed sidebar-xl sidebar-root sidebar-end align-items-center justify-content-center">
      <CSidebarBrand className="d-none d-md-flex bg-transparent flex-column m-4">
        <h1>Talent Mapping Divisi APP</h1>
        <img className="d-block w-100" src={TalentMapping} alt="Image Talent Mapping" />
      </CSidebarBrand>
    </div>
  )
}

export default React.memo(TheSidebar)
