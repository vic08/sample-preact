import {FunctionalComponent, h} from "preact";

interface IProps {
    embedId: string;
}

const Login: FunctionalComponent<IProps> = (props) => {
    const {embedId} = props;

    return <div>Login page. embedId: {embedId}</div>;
}

export default Login;
