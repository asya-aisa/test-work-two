import cn from 'clsx'
import { useState } from 'react'
import { useController } from 'react-hook-form'
import InputMask from 'react-input-mask'
import Error from '../error/Error'
import IconCheck from '../iconCheck/IconCheck'
import styles from './Field.module.scss'
import LabelForInput from './LabelForInput/LabelForInput'

const FieldPassportCod = ({
	control,
	name,
	nameLabel = `${name}Label`,
	watch,
	error,
}) => {
	const { field } = useController({
		control,
		name,
		watch,
		rules: {
			minLength: {
				value: 7,
				message: 'поле заполнено не до конца',
			},
		},
	})

	const [value, setValue] = useState('')
	const getValue = watch(name)

	return (
		<div>
			<LabelForInput textLeft='Код подразделения' nameLabel={nameLabel} />

			<InputMask
				className={cn(
					styles.input,
					styles[name],
					{
						[styles.successInput]: getValue && !error,
					},
					{
						[styles.errorInput]: error,
					}
				)}
				value={value}
				onChange={e => {
					setValue(e.target.value)
					field.onChange(e.target.value)
				}}
				maskPlaceholder={null}
				placeholder='000 - 000'
				mask='999 999'
			/>

			{error && <Error name={name} error={error} />}

			<IconCheck name={name} error={error} getValue={getValue} />
		</div>
	)
}

export default FieldPassportCod
