import { Controller, useForm } from "react-hook-form";

import { FioSuggestions } from 'react-dadata';
import 'react-dadata/dist/react-dadata.css';

import { useState } from "react";
import React from "react";


function PageOne() {

    const {
        register,
        handleSubmit,
        formState: { errors }
    }  = useForm({
        mode: 'onChange'
    });

    const onSubmit = data => {
        console.log(data)
    }





    return <div>

        <form onSubmit={handleSubmit(onSubmit)}>

        <input type="date" {...register('birthday',{
            // validate: { 
            // positive: (v) => new Date(v) > new Date().setFullYear(new Date().getFullYear() - 18) && 'Вам меньше 18'
            //    }
            })}
            />
            {errors?.birthday && (
                <div style={{color: 'red'}}>{errors.birthday.message}</div>
            )}




            <label className="label-email">Почта</label>
            <label className="label-email-two">на этот адрес мы пришлём страховой полис</label>
            <input className="input-email" {...register('email',{
                required: true,
                pattern: {
                    value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                }
            })}
            />
            
            {errors?.email && (
                <div style={{color: 'red'}}>{errors.email.message}</div>
            )}

            
            <button className="btn-next"><span className="text-btn-next">Далее</span></button>

        </form>

        
    </div>

}

export default PageOne;