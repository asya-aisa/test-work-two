import cn from 'clsx'
import { useState } from 'react'
import { AddressSuggestions } from 'react-dadata'
import { useController } from 'react-hook-form'
import Error from '../../error/Error'
import LabelForInput from '../LabelForInput/LabelForInput'
import styles from './FieldAddress.module.scss'
import { options } from './validateAddress'

const FieldAddress = ({ control, name, error, nameLabel = `${name}Label` }) => {
	const [valueAddress, setValueAddress] = useState('')
	const [valueInput, setValueInput] = useState('')

	const getValueInput = e => {
		let value = e.target.value

		if (value !== valueInput) {
			field.onChange('not found')
		}
		if (value.length === 0) {
			field.onChange('not text')
		}
		if (value === valueInput) {
			field.onChange(valueInput)
		}
	}

	const { field } = useController({
		control,
		name,
		rules: options,
	})

	return (
		<div>
			<LabelForInput
				textLeft='Адрес: город, улица, дом, квартира'
				nameLabel={nameLabel}
			/>

			<AddressSuggestions
				containerClassName={styles.addressContainer}
				token='09db053307dfbfa5a847f0669fa9cad636d0d8ee'
				value={valueAddress}
				onChange={e => {
					setValueAddress(e)
					setValueInput(e.value)
					field.onChange(e.value)
				}}
				inputProps={{
					className: cn(
						styles.addressInput,
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

export default FieldAddress
