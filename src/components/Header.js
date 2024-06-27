import React, { useContext } from 'react'
import { FaMobile, FaTablet , FaDesktop} from "react-icons/fa";
import DataContext from '../context/DataContext';

const Header = ({title}) => {

const {width} = useContext(DataContext)

  return (
    <div className='header'>
      <h1>{title}</h1>
      <span className='icon'>{width < 768 ? <FaMobile /> : width <= 998 ? <FaTablet />: <FaDesktop />}</span>
     
    </div>
  )
}

export default Header