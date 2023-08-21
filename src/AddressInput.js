import { useState  } from "react";
import { useController } from "react-hook-form";
import { AddressSuggestions } from 'react-dadata';

const AddressInput = ({control, name}) => {
    const { field } = useController({ control, name, rules: {required: 'это поле нужно заполнить'} });
    const [valueFio, setValueFio] = useState('');
    
    return (<div>
        <label className="label-inputs label-address">Адрес: город, улица, дом, квартира</label>
        <div className="address-input">
            <AddressSuggestions
            token="57ee03534661408f78ed9dfcc4924dc7cc403a67"
            value={valueFio}
            onChange={(e) => {
            setValueFio(e)
            field.onChange(e)
            }}/>
        </div>
    </div>)
}

export default AddressInput;