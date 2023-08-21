import { useState } from "react";
import { useForm, useController } from "react-hook-form";
import StepHeading from "./StepHeading";
import AddressInput from "./AddressInput";
import RentInput from "./RentInput";
import FileInput from "./FileInput";

function PageTwo() {
const {
register,
handleSubmit,
formState: { errors, isValid },
control
}  = useForm({
mode: 'onChange'
});
const [price, setPrice] = useState(null);
const onSubmit = (data) => {
console.log(data, 'страховка:', price)
};
return (
<div>
   <StepHeading classNameText='step-heading-text-two' text='Шаг 2 из 2 | О квартире' classNameHr='step-heading-hr-two'/>
   <p className="heading-text-step-two">Мы составим договор аренды: в нем не будет<br />  упоминания залога, но будет пункт o страховке</p>
   <form onSubmit={handleSubmit(onSubmit)}>
      <AddressInput name='address' control={control} />
      {errors?.address && (
      <div className="error-fio errors">{errors.address.message}</div>
      )}

      <label className="label-inputs label-input-rentPrice">Стоимость аренды</label>
      <RentInput name='rentPrice' control={control} price={price} setPrice={setPrice} />
      {errors.rentPrice && errors.rentPrice.type === "required" && (
      <div className="errors error-rentPrice">это поле нужно заполнить</div>
      )}
      {errors.rentPrice && errors.rentPrice.type === "min" && (
      <div className="errors error-rentPrice">Мы работаем с квартирами от 20 000₽/мес.
         <br /><span>Напишите на <span style={{textDecoration: 'underline'}}>help@pik-arenda.ru</span> и мы найдем решение</span>
      </div>
      )}
      {errors.rentPrice && errors.rentPrice.type === "max" && (
      <div className="errors error-rentPrice">Мы работаем с квартирами до 100 000₽/мес.
         <br /><span>Напишите на <span style={{textDecoration: 'underline'}}>help@pik-arenda.ru</span> и мы найдем решение</span>
      </div>
      )}

      <label className="label-inputs label-docs">Документы</label>
      <label className="label-docs-info">договор аренды, доп. соглашение</label>
      <FileInput name='fileDoc' control={control} textBtn='выбрать файл' classNameBtnAdd='btn-add-file-doc'/>
        {errors?.filePassportSelfy && (
            <div>{errors.filePassportSelfy.message}</div>
        )}


      <button disabled={!isValid}>далее</button>
   </form>
</div>
)
}
export default PageTwo;