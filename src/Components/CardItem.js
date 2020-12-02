import Card from './Card'

function CardItem(props) {
    const styling = {
        border: "2px solid black",
        width: "20%",
        textAlign: "center",
        margin: "2rem",
        height: "10rem"
    }
    return (
        <div style={styling} >

            <h3>{props.projectName}</h3>
        </div>
    )
}
export default CardItem