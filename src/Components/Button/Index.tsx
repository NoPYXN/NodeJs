const ButtonComponents = (props: {
    title: string;
    style: any;
}) => {
    return <button style={props.style}>{props.title}</button>
}

export default ButtonComponents