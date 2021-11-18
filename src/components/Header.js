import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {


    return (
        <header className='header'>
            <h1 className="header">{title}</h1>
            <Button color="black" text={showAdd ? 'Close' : 'Add'} onClick={onAdd} />
        </header>
    )
}

Header.defaultTitle = {
    title: 'erias ToDo App',
  }

export default Header
 