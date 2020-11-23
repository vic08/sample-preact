import { FunctionalComponent, h} from "preact";

interface IProps {
    embedId: string;
}

const EmbedIndex: FunctionalComponent<IProps> = (props) => {
    const {embedId} = props;

    return (
        <div>Embed Index page. EmbedId: {embedId}</div>
    )
}

export default EmbedIndex;