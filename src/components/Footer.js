import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <footer>
            <p>Copyright &copy; Elias Cerne 2021</p>
            <Link to="/about">About</Link>
        </footer>
    )
}

export default Footer