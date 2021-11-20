import Button from './Button';
import { useLocation } from 'react-router-dom'

const Header = ({ title, onAdd, showAdd }) => {

    const location = useLocation()


    return (
        <header className='header'>
            <h1 className="header">{title}</h1>
            {location.pathname === '/' && (
            <Button color="black" text={showAdd ? 'Close' : 'Add'} onClick={onAdd} /> )}
        </header>
    )
}

Header.defaultTitle = {
    title: 'erias ToDo App',
  }

export default Header
 