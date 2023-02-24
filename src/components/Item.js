import PropTypes from 'prop-types';
import "./item.css"
const Item=(props)=>{
    const {titel,amount} = props
    const status = amount<0 ? "expense":"income"
    const symbol = amount<0 ? "-":"+"
    return(
        <li className={status}>{titel} <span>{symbol} {Math.abs(amount) }</span></li>
    )
}

Item.propTypes={
    titel:PropTypes.string.isRequired,
    amount:PropTypes.number.isRequired
}
export default Item