import cn from 'clsx'
import { useState } from 'react'
import { useController } from 'react-hook-form'
import InputMask from 'react-input-mask'
import Error from '../error/Error'
import IconCheck from '../iconCheck/IconCheck'
import styles from './Field.module.scss'
import LabelForInput from './LabelForInput/LabelForInput'

const FieldPassportNumber = ({
	control,
	name,
	nameLabel = `${name}Label`,
	infoLabel = `${name}InfoLabel`,
	watch,
	error,
}) => {
	const { field } = useController({
		control,
		name,
		rules: {
			required: 'это поле нужно заполнить',
			minLength: {
				value: 11,
				message: 'поле заполнено не до конца',
			},
		},
	})
	const [value, setValue] = useState('')
	const getValue = watch(name)

	return (
		<div>
			<LabelForInput
				textLeft='Серия и номер'
				textRight='только паспорт РФ'
				nameLabel={nameLabel}
				infoLabel={infoLabel}
			/>

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
				placeholder='0000 - 000000'
				mask='9999 999999'
			/>

			{error && <Error name={name} error={error} />}

			<IconCheck name={name} error={error} getValue={getValue} />
		</div>
	)
}

export default FieldPassportNumber
