import { useController, useForm } from "react-hook-form";
import 'react-dadata/dist/react-dadata.css';
import { useState } from "react";
import React from "react";
import StepHeading from "./StepHeading";
import Heading from "./Heading";
import FileInput from "./FileInput";
import FioInput from "./FioInput";
import PassportNumberInput from "./PassportNumberInput";
import PassportCodInput from "./PassportCodInput";



function PageOne() {

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        control
    }  = useForm({
        mode: 'onChange'
    });


    const onSubmit = (data) => {
    console.log(data)
    }

    
 

    return <div>

        <StepHeading text='Шаг 1 из 2 | Личная информация' classNameText='step-heading-text' classNameHr='step-heading-hr' />

        <form onSubmit={handleSubmit(onSubmit)}>

           <FioInput name='fio' control={control} />
           {errors?.fio && (
            <div className="error-fio errors">{errors.fio.message}</div>
           )}


            <label className="label-inputs label-birthday">Дата рождения</label>
           <input className="input-birthday"
            type="date" {...register('birthday',{
            required: 'это поле нужно заполнить',
            validate: (fieldValue) => {
                return (
                    new Date(fieldValue) < new Date().setFullYear(new Date().getFullYear() - 18) || 'нельзя подписать договор, если вам меньше 18 лет'
                )
            }
            })}
            placeholder="дд.мм.гггг"
           />
            {errors?.birthday && (
            <div className="errors error-birthday">{errors.birthday.message}</div>
             )}

        <label className="label-email label-inputs">Почта</label>
        <label className="label-email-two">на этот адрес мы пришлём страховой полис</label>
        <input className=
        // {(errors.email) ? 'input-email input-error'
        // : (isValid) ? 'input-email input-success' : 'input-email input-state'}

        {errors.email ? 'input-email input-error' : 'input-email'}
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

        <Heading text='Паспортные данные' className='heading-passport'/>

        <PassportNumberInput name='PassportNumber' control={control} />
        {errors?.PassportNumber && (
            <div className="errors error-passport-number">{errors.PassportNumber.message}</div>
        )}


        <label className="label-whoPassport label-inputs">Кем выдан</label>
        <input className="input-whoPassport"  {...register('whoPassport',{
            required: 'это поле нужно заполнить',
        })}
        placeholder="Заполните точно как в паспорте"
        />
            
        {errors?.whoPassport && (
            <div className="errors error-whoPassport">{errors.whoPassport.message}</div>
        )}

        <label className="label-whenPassport label-inputs">Когда выдан</label>
        <input className="input-whenPassport"  

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
            <div className="error-whenPassport">{errors.whenPassport.message}</div>
        )}


        <PassportCodInput name='PassportCod' control={control} />
        {errors?.PassportCod && (
            <div className="error-passport-cod errors">{errors.PassportCod.message}</div>
        )}

        <Heading text='Фото документов' className='heading-photo' />
        <label className="label-photo-doc">jpg, png, pdf, не больше 40 мб</label>

        <FileInput name='filePassportMain' control={control} textBtn='Паспорт, 2-3 стр.' classNameBtnAdd='btn-add-file-passport-main' />
        {errors?.filePassportMain && (
            <div>{errors.filePassportMain.message}</div>
        )}

        <FileInput name='filePassportAddress' control={control} textBtn='Паспорт, 19 стр.' classNameBtnAdd='btn-add-file-passport-address'/>
        {errors?.filePassportAddress && (
            <div>{errors.filePassportAddress.message}</div>
        )}

        <FileInput name='filePassportSelfy' control={control} textBtn='Фото с паспортом' classNameBtnAdd='btn-add-file-passport-selfy'/>
        {errors?.filePassportSelfy && (
            <div>{errors.filePassportSelfy.message}</div>
        )}

        <p className="text-save-data">Мы надеждно храним и защищаем ваши личные данные и не передаем их третьим лицам</p>
            
        <button disabled={!isValid} className="btn-next"><span className="text-btn-next">Далее</span></button>

        </form>
        
    </div>

}

export default PageOne;