import { useFormContext } from "react-hook-form";

const InputBirthday = () => {
    const {register, formState: {errors}, watch} = useFormContext();

    const birthdayInput = watch('birthday');
    
    return(<div>
                    <label className="label-inputs label-birthday">Дата рождения</label>
       <input className= {birthdayInput ? 
    errors.birthday ? 
    'inputs input-birthday input-error' 
    : 'inputs input-birthday input-success'
    : errors.birthday ? 'inputs input-birthday input-error' 
    : 'inputs input-birthday input-state'}
       
        type="date" {...register('birthday',{
        required: 'это поле нужно заполнить',
        validate: (fieldValue) => {
            return (
                new Date(fieldValue) < new Date().setFullYear(new Date().getFullYear() - 18) || 'нельзя подписать договор, если вам меньше 18 лет'
            )
        }
        })}
       />
                   {errors?.birthday && (
            <div className="errors error-birthday">{errors.birthday.message}</div>
             )}
               <div className= 
        {birthdayInput ? 
        errors.birthday ? 
        'check-none' 
        : 'check-all check-birthday'
        : 'check-none'}>
            <span className="icon-check">🗸︎</span>
        </div>
    </div>)
}
export default InputBirthday;