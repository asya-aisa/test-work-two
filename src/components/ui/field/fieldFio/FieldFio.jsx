import cn from 'clsx'
import { useState } from 'react'
import { FioSuggestions } from 'react-dadata'
import 'react-dadata/dist/react-dadata.css'
import { useController } from 'react-hook-form'
import Error from '../../error/Error'
import LabelForInput from '../LabelForInput/LabelForInput'
import styles from './FieldFio.module.scss'

const FieldFio = ({ control, name, error, nameLabel = `${name}Label` }) => {
	const { field } = useController({
		control,
		name,
		rules: {
			required: 'это поле нужно заполнить',
			pattern: {
				value: /([А-ЯЁ][а-яё]+[\s]?){2,}/,
				message: 'Некорректное ФИО',
			},
		},
	})

	const [valueInput, setValueInput] = useState('')

	const getValueInput = e => {
		setValueInput(e.target.value)
		field.onChange(e.target.value)
	}

	const [valueFio, setValueFio] = useState('')

	return (
		<div>
			<LabelForInput textLeft='Фамилия Имя Отчество' nameLabel={nameLabel} />

			<FioSuggestions
				containerClassName={styles.fioContainer}
				token='09db053307dfbfa5a847f0669fa9cad636d0d8ee'
				value={valueFio}
				onChange={e => {
					setValueFio(e)
					field.onChange(e.value)
				}}
				inputProps={{
					className: cn(
						styles.fioInput,
						{
							[styles.successInput]: valueInput && !error,
						},
						{
							[styles.errorInput]: error,
						}
					),
					onChange: e => getValueInput(e),
				}}
			/>

			{error && <Error name={name} error={error} />}
		</div>
	)
}

export default FieldFio
