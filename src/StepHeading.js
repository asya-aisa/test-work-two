export default function StepHeading(props) {
    return <div>
        <p className={props.classNameText}>{props.text}</p>
        <hr className={props.classNameHr}></hr>
        </div>
}