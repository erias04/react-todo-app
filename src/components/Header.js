
const Header = (props) => {
    return (
        <header className='header'>
            <h1 className="header">{props.title}</h1>
            <button className="add_button">Add</button>
        </header>
    )
}

Header.defaultProps = {
    title: 'erias ToDo App',
  }

export default Header
 