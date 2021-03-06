import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    return (
        <button onClick={onClick} style={{ backgroundColor: color }} className="add_button">{text}</button>
    )
}

Button.defaultProps = {
    color: 'black',
    text: 'Add',
}

Button.propType = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}

export default Button
