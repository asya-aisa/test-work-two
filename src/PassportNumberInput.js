import { useState  } from "react";
import { useController } from "react-hook-form";
import InputMask from "react-input-mask";


const PassportNumberInput = ({control, name}) => {
    const { field } = useController({ control, name, rules: {
        required: 'это поле нужно заполнить',
        minLength: {
            value: 11,
            message: 'поле заполнено не до конца'
        }
    } });
    const [value, setValue] = useState('');

    return(
        <div>
            <label className="label-passport-number label-inputs">Серия и номер </label>
            <label className="label-passport-number-onlyRF">только паспорт РФ</label>
            <InputMask
            className="passport-number-input"
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
                field.onChange(e.target.value)    
            }}
            maskPlaceholder={null}
            placeholder="0000 - 000000"
            mask="9999 999999"
            />
        </div>
    )
}
export default PassportNumberInput;