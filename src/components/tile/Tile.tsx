import "./Tile.css";
interface TileProps {
    tileImg: string
    tileLink: string
    tileDescription: string
}

function Tile(props: TileProps) {
    return (
        <div className="tile">
            <img src={props.tileImg} alt="tile-image" />
            <div className="tile-content">
                <p className="tile-description">{props.tileDescription}</p>
                <a href={props.tileLink} target="_blank">[PDF]</a>
            </div>
        </div>
    )
}

export default Tile;