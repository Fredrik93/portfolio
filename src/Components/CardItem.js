import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function CardItem(props) {
    const styling = {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        padding: "16px",
        textAlign: "center",
        backgroundColor: "#f1f1f1",
    }
    const imgStyle = {
        width: "100%",
        borderRadius: "3px"
    }
    const anchorlink = {
        color: "white",
        textDecoration: "none"
    }
    return (
        <div style={styling} >
            <img style={imgStyle} src={props.projectImg} />
            <h3>{props.projectName}</h3>
            <Button variant="success"> <a
                style={anchorlink}
                href={props.projectUrl}
                target="_blank"
            > View </a> </Button>
        </div>
    )
}
export default CardItem