import React, {forwardRef, useImperativeHandle} from 'react';

const InputField = forwardRef((props, ref) => {

    const [value, setValue] = React.useState("");

    const handleChange = (event) => {
        setValue(event.target.value)
        props.onChange(event.target.name, event.target.value)
    }


    useImperativeHandle(ref, () => {
        return{
            validate: () => validate()
        }
    })

    return(
        <div className="inputDec">
            {props.label && (
                <label>{props.label}</label>
            )}
            <input
                placeholder={props.placeholder}
                name={props.name}
                onChange={(event) => handleChange(event)}
                type={props.type}
                value={props.value ? props.value : value}
                autoComplete = {props.autoComplete}
            />
        </div>
    )
})
InputField.defaultProps = {
    placeholder: "",
    name: "",
    type: "text",
    value: "",
    autoComplete: "off"
}

export default InputField;