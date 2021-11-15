import './message.css';

export default function Message(props) {
    const { nick = "Testov123", render = () => {} } = props;
    return <span id={ nick }>{ props.author }: { props.text }</span>;
}