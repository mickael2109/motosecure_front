import React from 'react'
import { NavLink } from 'react-router-dom'
import Icons from '../atoms/Icon'
import { RiHome3Line } from "react-icons/ri";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaRegUserCircle } from "react-icons/fa";

type Props = {
  to: string
  path: 'home' | 'carte' | 'profile' | 'history'
  onClick?: () => void
}

const NavlinkIcons: React.FC<Props> = ({ to, path, onClick }) => {
  const getIcon = () => {
    switch (path) {
      case 'home':
        return <RiHome3Line />
      case 'profile':
        return <FaRegUserCircle />
      case 'carte':
      default:
        return <FaMapLocationDot />
    }
  }

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${isActive ? 'dock-active text-white' : ''} rounded-full p-4`
      }
      onClick={onClick}
    >
      <Icons className="text-3xl h-md:break_md_power3">{getIcon()}</Icons>
    </NavLink>
  )
}

export default NavlinkIcons

