import Button from './Button';

const Header = (props) => {

    const onClick = () => {
        console.log('Button clicked');
    }

    return (
        <header className='header'>
            <h1 className="header">{props.title}</h1>
            <Button color="black" text='Add' onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title: 'erias ToDo App',
  }

export default Header
 