import React from 'react'
import { icDashboard, icKeju, logo } from '../../../assets';
import { Logo } from '../../atoms'
import { Icons, NavItem, NavLinks, NavMenu, SidebarBackground, SidebarElement } from './SidebarElement'

const Sidebar = () => {
  return (
    <SidebarElement>
        <Logo logoUrl={logo} />
        <NavMenu>
          <NavItem>
            <NavLinks to="dashboard">
              <Icons src={icDashboard} alt="icon-dashboard" />
              Dashboard
            </NavLinks>
          </NavItem>
          <NavItem>
            <NavLinks to="make-cheese">
              <Icons src={icKeju} alt="icon-kategori" />
              Make Cheese
            </NavLinks>
          </NavItem>
        </NavMenu>
    </SidebarElement>
  );
}

export default Sidebar