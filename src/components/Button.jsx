export default function Button({text = 'Click Me'}) {
    const buttonStyle = {
        text: text
    }
    return (
        <button>{text}</button>
    )
}