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
watch,
formState: { errors, isValid },
control
}  = useForm({
mode: 'onChange'
});
const [price, setPrice] = useState(null);

const [showCopyPassport, setShowCopyPassport] = useState(true);
const [showCopyPassportTwo, setShowCopyPassportTwo] = useState(true);


const onSubmit = (data) => {
console.log(data, 'страховка:', price)
};
return (
<div>
   <StepHeading classNameText='headings-text step-heading-text-two' text='Шаг 2 из 2 | О квартире' classNameHr='hrs-step step-heading-hr-two'/>
   <p className="headings-text heading-about-DA">Мы составим договор аренды: в нем не будет<br />  упоминания залога, но будет пункт o страховке</p>
   <form onSubmit={handleSubmit(onSubmit)}>
      <AddressInput name='address' control={control} />
      {errors?.address && (
      <div className="error-address errors">{errors.address.message}</div>
      )}

      <label className="label-inputs label-input-rentPrice">Стоимость аренды</label>
      <RentInput name='rentPrice' control={control} price={price} setPrice={setPrice} watch={watch} errors={errors} />
      {errors.rentPrice && errors.rentPrice.type === "required" && (
      <div className="errors error-rentPrice error-rent-aligh-right">это поле нужно заполнить</div>
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
      <label className="label-texts label-docs-info">договор аренды, доп. соглашение</label>
      <FileInput name='fileDoc' control={control} textBtn='выбрать файл' classNameBtnAdd='btn-add-files btn-add-file-doc'/>
        {errors?.fileDoc && (
            <div className="errors error-file-doc">{errors.fileDoc.message}</div>
        )}

      <div className={showCopyPassport ? 'div-copy-passport' : 'show-none'}></div>
      <p className={showCopyPassport ? 'text-copy-passport' : 'show-none'}>copy passport…</p>
      <p className={showCopyPassport ? 'delete' : 'show-none'} onClick={() => {setShowCopyPassport(false)}}><span className="delete-icon">×</span></p>

      <div className={showCopyPassportTwo ? 'div-copy-passport-two' : 'show-none'}></div>
      <p className={showCopyPassportTwo ? 'text-copy-passport-two' : 'show-none'}>copy passport…</p>
      <p className={showCopyPassportTwo ? 'delete-two' : 'show-none'} onClick={() => {setShowCopyPassportTwo(false)}}><span className='delee-icon'>×</span></p>


      <button className="btn-next btn-two-page" disabled={!isValid}><span className="text-btn">Далее</span></button>
      <button className="btn-back"><span className="text-btn">Назад</span></button>
   </form>
</div>
)
}
export default PageTwo;