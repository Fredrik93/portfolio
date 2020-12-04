import { Button } from 'react-bootstrap'

function CardItem(props) {
    const styling = {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        padding: "16px",
        textAlign: "center",
        backgroundColor: "#f1f1f1",
    }
    const imgStyle = {
        width: "100%",
        borderRadius: "3px",
        height: "18rem"

    }
    const anchorlink = {
        color: "white",
        textDecoration: "none"
    }
    return (
        <div style={styling} >
            <img style={imgStyle} src={props.projectImg} alt="project" />
            <h3>{props.projectName}</h3>
            <Button variant="success" to={props.projectLink} > <a
                style={anchorlink}
                href={props.projectUrl}
                target="_blank" rel="noreferrer"
            > View </a> </Button>
        </div>
    )
}
export default CardItem