import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from './Card'

function CardItem(props) {
    const styling = {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        padding: "16px",
        textAlign: "center",
        backgroundColor: "#f1f1f1"
    }
    const imgStyle = {
        width: "100%"
    }
    return (
        <div style={styling} >
            <img style={imgStyle} src={props.projectImg} />
            <h3>{props.projectName}</h3>
            <Link><Button variant="success" >View</Button></Link>
        </div>
    )
}
export default CardItem