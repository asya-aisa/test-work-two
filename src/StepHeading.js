const StepHeading = (props) => {
    return <div>
        <p className={props.classNameText}>{props.text}</p>
        <hr className={props.classNameHr}></hr>
    </div>
}

export default StepHeading;