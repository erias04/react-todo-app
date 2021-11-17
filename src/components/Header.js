import Button from './Button';

const Header = (props) => {
    return (
        <header className='header'>
            <h1 className="header">{props.title}</h1>
            <Button />
        </header>
    )
}

Header.defaultProps = {
    title: 'erias ToDo App',
  }

export default Header
 