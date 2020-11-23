import {FunctionalComponent, h} from "preact";

interface IProps {
    embedId: string;
}

const EmbedPlayer: FunctionalComponent<IProps> = (props) => {
    const {embedId} = props;

    return <div>Embed player page. embedId: {embedId}</div>;
}

export default EmbedPlayer;
