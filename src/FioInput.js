import { useState  } from "react";
import { useController } from "react-hook-form";
import { FioSuggestions } from 'react-dadata';

const FioInput = ({control, name}) => {
    const { field } = useController({ control, name, rules: {required: 'это поле нужно заполнить', pattern: {value: /[a-za-я]/}} });
    const [valueFio, setValueFio] = useState('');

    return (
        <div>
            <label className="label-fio label-inputs">Фамилия Имя Отчество</label>
            <div className="fio-input">
            <FioSuggestions
             token="57ee03534661408f78ed9dfcc4924dc7cc403a67"
             value={valueFio}
             onChange={(e) => {
              setValueFio(e)
              field.onChange(e);
              }}
            />
            </div>
        </div>
        )
    }

export default FioInput;