import { useState  } from "react";
import { useController } from "react-hook-form";
import InputMask from "react-input-mask";


const PassportNumberInput = ({control, name, watch, errors}) => {
    const { field } = useController({ control, name, watch, errors, rules: {
        required: 'это поле нужно заполнить',
        minLength: {
            value: 11,
            message: 'поле заполнено не до конца'
        }
    } });
    const [value, setValue] = useState('');
    const passportNumberInput = watch('PassportNumber');

    return(
        <div>
            <label className="label-passport-number label-inputs">Серия и номер </label>
            <label className=" label-inputs-two label-passport-number-onlyRF">только паспорт РФ</label>



            <InputMask
            className={passportNumberInput ? 
                errors.PassportNumber ? 
                'inputs passport-number-input input-error' 
                : 'inputs passport-number-input input-success'
                : errors.PassportNumber ? 'inputs passport-number-input input-error' 
                : 'inputs passport-number-input input-state'}
            
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
                field.onChange(e.target.value)    
            }}
            maskPlaceholder={null}
            placeholder="0000 - 000000"
            mask="9999 999999"
            />

            <div className=
             {passportNumberInput ? 
             errors.PassportNumber ? 
            'check-none' 
            : 'check-all check-number'
            : 'check-none'}>
            <span className="icon-check">🗸︎</span>
            </div>
        </div>
    )
}
export default PassportNumberInput;