import { useState  } from "react";
import { useController } from "react-hook-form";
import InputMask from "react-input-mask";


const PassportCodInput = ({control, name, watch, errors}) => {
    const { field } = useController({ control, name, watch, errors, rules: {
        required: 'это поле нужно заполнить',
        minLength: {
            value: 7,
            message: 'поле заполнено не до конца'
        }
    } });
    const [value, setValue] = useState('');

    const passportCodInput = watch('PassportCod');

    return(
        <div>
            <label className="label-passport-cod label-inputs">Код подразделения</label>
            <InputMask
            className={passportCodInput ? 
                errors.PassportCod ? 
                'inputs passport-cod-input input-error' 
                : 'inputs passport-cod-input input-success'
                : errors.PassportCod ? 'inputs passport-cod-input input-error' 
                : 'inputs passport-cod-input input-state'}
            value={value}
            onChange={(e) => {
                setValue(e.target.value);
                field.onChange(e.target.value)    
            }}
            maskPlaceholder={null}
            placeholder="000 - 000"
            mask="999 999"
            />

           <div className=
           {passportCodInput ? 
           errors.PassportCod ? 
           'check-none' 
           : 'check-all check-cod'
           : 'check-none'}>
            <span className="icon-check">🗸︎</span>
           </div>
        </div>
    )
}
export default PassportCodInput;