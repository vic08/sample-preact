import {FunctionalComponent, h} from "preact";

interface IProps {
    embedId: string;
}

const LoginCallback: FunctionalComponent<IProps> = (props) => {
    const {embedId} = props;

    return <div>Login callback page. embedId: {embedId}</div>;
}

export default LoginCallback;
