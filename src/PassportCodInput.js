import { useState  } from "react";
import { useController } from "react-hook-form";
import InputMask from "react-input-mask";


const PassportCodInput = ({control, name}) => {
    const { field } = useController({ control, name, rules: {
        required: 'это поле нужно заполнить',
        minLength: {
            value: 7,
            message: 'поле заполнено не до конца'
        }
    } });
    const [value, setValue] = useState('');

    return(
        <div>
            <label className="label-passport-cod label-inputs">Код подразделения</label>
            <InputMask
            className="passport-cod-input"
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
                field.onChange(e.target.value)    
            }}
            maskPlaceholder={null}
            placeholder="000 - 000"
            mask="999 999"
            />
        </div>
    )
}
export default PassportCodInput;