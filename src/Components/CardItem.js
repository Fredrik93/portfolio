import Card from './Card'

function CardItem(props) {
    const styling = {
        boxShadow: "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
        padding: "16px",
        textAlign: "center",
        backgroundColor: "#f1f1f1"

    }
    return (
        <div style={styling} >

            <h3>{props.projectName}</h3>
        </div>
    )
}
export default CardItem