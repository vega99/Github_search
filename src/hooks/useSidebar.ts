import React, { useContext } from 'react'
import { SidebarContext } from '../context/SidebarContext'


const useSidebar = () => {
  return useContext(SidebarContext);
}

export default useSidebar
