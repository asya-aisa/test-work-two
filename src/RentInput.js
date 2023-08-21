import { useState  } from "react";
import { useController } from "react-hook-form";

const RentInput = ({ control, name, price, setPrice }) => {
    const { field } = useController({ control, name, rules: {required: true,
    min: {
        value: 20000
    },
    max: {
        value: 100000
    }}
});
    const [value, setValue] = useState("");
    const [showInsurance, setShowInsurance] = useState(false);


    const getInsurance = (e) => {
        setValue(e.target.value);
        field.onChange(e.target.value);

        let startNumber = e.target.value;

        if(startNumber.length >= 4) {setShowInsurance(true)}
        else {setShowInsurance(false)}
        


        if(startNumber > 45000) {
            let priceIns = Math.floor((654 + (startNumber * 1.5 * 0.05) / 11 + startNumber * 0.0097) / 10) * 10;
            setPrice(priceIns)            
        }
        else {
            let priceIns = Math.ceil((454 + (startNumber * 1.5 * 0.05) / 11 + startNumber * 0.0097) / 10) * 10;
            setPrice(priceIns)
        }
    }


    return (<div>
      <input
      className="input-rentPrice"
        value={value}
        onChange={(e) => {
getInsurance(e)
        }}
      />

      <p className={!showInsurance ? 'none' : 'show'}>Стоимость<br />страховки<br />
      <span style={{fontWeight: 'bold'}}>{price}₽/мес</span>
      <br />(платит арендатор)</p>
      </div>
    );
  };

  export default RentInput;