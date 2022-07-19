import "./MemberTile.css";

export interface MemberTileProps {
    avatar: string
    fullName: string
    role: string
    descriptions: Array<string>
}
function MemberTile(props: MemberTileProps) {

    return (
        <div className="member-tile flex-wrap">
            <div className="row align-start">
                
                {
                props.avatar ?
                <div className="avatar-container">
                    <img 
                    className="avatar"
                    src={props.avatar} alt="avatar" />
                </div>
                : null}
                <div className="description">
                    <h4
                    className="member-name"
                    >{props.fullName}</h4>
                    <p>
                        <b>{props.role}</b>
                    </p>
                    {
                        props.descriptions.map((item: string) => <p><i>{item}</i></p>)
                    }
                </div>
                
            </div>
        </div>
    );
}

export default MemberTile;
