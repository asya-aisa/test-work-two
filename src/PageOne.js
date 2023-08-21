import { useController, useForm, FormProvider, useFormContext } from "react-hook-form";
import 'react-dadata/dist/react-dadata.css';
import { useState } from "react";
import React from "react";
import StepHeading from "./StepHeading";
import Heading from "./Heading";
import FileInput from "./FileInput";
import FioInput from "./FioInput";
import PassportNumberInput from "./PassportNumberInput";
import PassportCodInput from "./PassportCodInput";
import InputBirthday from "./InputBirthday";


const PageOne = () => {

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch,
        control
    }  = useForm({
        mode: 'onChange'
    });

    const methods = useForm({mode:'onChange'})


    const onSubmit = (data) => {
    console.log(data)
    }

    const emailInput = watch('email');
    const birthdayInput = watch('birthday');
    const whoPassportInput = watch('whoPassport');
    const whenPassportInput = watch('whenPassport');

 

    return <div>

        <StepHeading text='Шаг 1 из 2 | Личная информация' classNameText='headings-text step-heading-text' classNameHr='hrs-step step-heading-hr' />

        <FormProvider {...methods} >
        <form onSubmit={methods.handleSubmit(onSubmit)}>

           <FioInput name='fio' control={control} watch={watch} />
           {errors?.fio && (
            <div className="error-fio errors">{errors.fio.message}</div>
           )}
           <InputBirthday />



        <label className="label-email label-inputs">Почта</label>
        <label className="label-inputs-two label-email-two">на этот адрес мы пришлём страховой полис</label>
        <input className={emailInput ? 
        errors.email ? 
        'inputs input-email input-error' 
        : 'inputs input-email input-success'
        : errors.email ? 'inputs input-email input-error' 
        : 'inputs input-email input-state'}

        {...register('email',{
            required: 'это поле нужно заполнить',
            pattern: {
                value:
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'некорректный email'
            }
        })}
        />
            
        {errors?.email && (
            <div className="error-email errors">{errors.email.message}</div>
        )}

        <Heading text='Паспортные данные' className='headings heading-passport-data'/>

        <PassportNumberInput name='PassportNumber' control={control} watch={watch} errors={errors} />
        {errors?.PassportNumber && (
            <div className="errors error-passport-number">{errors.PassportNumber.message}</div>
        )}


        <label className="label-whoPassport label-inputs">Кем выдан</label>
        <input className={whoPassportInput ? 
        errors.whoPassport ? 
        'inputs input-whoPassport input-error' 
        : 'inputs input-whoPassport input-success'
        : errors.whoPassport ? 'inputs input-whoPassport input-error' 
        : 'inputs input-whoPassport input-state'}

          {...register('whoPassport',{
            required: 'это поле нужно заполнить',
        })}
        placeholder="Заполните точно как в паспорте"
        />
            
        {errors?.whoPassport && (
            <div className="errors error-whoPassport">{errors.whoPassport.message}</div>
        )}

        <label className="label-whenPassport label-inputs">Когда выдан</label>
        <input className={whenPassportInput ? 
        errors.whenPassport ? 
        'inputs input-whenPassport input-error' 
        : 'inputs input-whenPassport input-success'
        : errors.whenPassport ? 'inputs input-whenPassport input-error' 
        : 'inputs input-whenPassport input-state'}
        

        type="date" {...register('whenPassport',{
            required: 'это поле нужно заполнить',
            validate: {
                more14YearsAfterBirthday: (fieldValue, data) => {
                return (
                    new Date(fieldValue) >= new Date(data.birthday).setFullYear(new Date(data.birthday).getFullYear() + 14) || 'некорректная дата выдачи'
                )
                },
                notMoreNow: (fieldValue) => {
                    return(
                        new Date(fieldValue) <= new Date() || 'некорректная дата выдачи'
                        )
                }
        }

        })}
        />
            
        {errors?.whenPassport && (
            <div className="errors error-whenPassport">{errors.whenPassport.message}</div>
        )}


        <PassportCodInput name='PassportCod' control={control} watch={watch} errors={errors} />
        {errors?.PassportCod && (
            <div className="error-passport-cod errors">{errors.PassportCod.message}</div>
        )}

        <Heading text='Фото документов' className='headings heading-photo-data' />
        <label className="label-inputs-two label-photo-doc">jpg, png, pdf, не больше 40 мб</label>

        <FileInput name='filePassportMain' control={control} textBtn='Паспорт, 2-3 стр.' classNameBtnAdd='btn-add-files btn-add-file-passport-2-3-page' />
        {errors?.filePassportMain && (
            <div className=" errors error-file-one">{errors.filePassportMain.message}</div>
        )}

        <FileInput name='filePassportAddress' control={control} textBtn='Паспорт, 19 стр.' classNameBtnAdd='btn-add-files btn-add-file-passport-address'/>
        {errors?.filePassportAddress && (
            <div className=" errors error-file-two">{errors.filePassportAddress.message}</div>
        )}

        <FileInput name='filePassportSelfy' control={control} textBtn='Фото с паспортом' classNameBtnAdd='btn-add-files btn-add-file-passport-selfy'/>
        {errors?.filePassportSelfy && (
            <div className=" errors error-file-three">{errors.filePassportSelfy.message}</div>
        )}

        <p className="label-texts text-save-data">Мы надеждно храним и защищаем ваши личные данные и не передаем их третьим лицам</p>
            


        <div className=
        {emailInput ? 
        errors.email ? 
        'check-none' 
        : 'check-all check-email'
        : 'check-none'}>
            <span className="icon-check">🗸︎</span>
        </div>

        <div className=
        {whoPassportInput ? 
        errors.whoPassport ? 
        'check-none' 
        : 'check-all check-who'
        : 'check-none'}>
            <span className="icon-check">🗸︎</span>
        </div>

        <div className=
        {whenPassportInput ? 
        errors.whenPassport ? 
        'check-none' 
        : 'check-all check-when'
        : 'check-none'}>
            <span className="icon-check">🗸︎</span>
        </div>

        <button disabled={!isValid} className="btn-next btn-one-page"><span className="text-btn">Далее</span></button>

        </form>
        </FormProvider>
        
    </div>

}

export default PageOne;