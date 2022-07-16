import "./Card.css"
interface CardProps {
    cardImg: string
    cardTitle: string
    cardLink: string
}
function Card(props: CardProps) {
    return (
            <div className="card">
                <a href={props.cardLink} target="_blank">
                    <img alt="card-img" src={props.cardImg} className="card-img"/>
                    <h4 className="card-title"> { props.cardTitle }</h4>
                </a>
            </div>  
        
    )
}
 
export default Card