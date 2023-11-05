import cn from 'clsx'
import { useState } from 'react'
import { useController } from 'react-hook-form'
import IconCheck from '../../iconCheck/IconCheck'
import { getInsurance } from './CalculationInsurance'
import styles from './FieldRent.module.scss'

const FieldRent = ({ control, name, price, setPrice, watch, error }) => {
	const { field } = useController({
		control,
		name,
		rules: {
			required: true,
			min: {
				value: 20000,
			},
			max: {
				value: 100000,
			},
		},
	})

	const [value, setValue] = useState('')
	const [showInsurance, setShowInsurance] = useState(false)
	const getValue = watch(name)

	const insurance = e => {
		getInsurance(e, setValue, setShowInsurance, setPrice)
		field.onChange(e.target.value)
	}

	return (
		<div>
			<input
				className={cn(
					styles.rentPrice,
					{
						[styles.success]: getValue && !error,
					},
					{
						[styles.error]: error,
					}
				)}
				value={value}
				onChange={e => insurance(e)}
			/>

			<p className={cn(styles.textInsurance, styles[showInsurance])}>
				Стоимость
				<br />
				страховки
				<br />
				<span style={{ fontWeight: 'bold' }}>{price}₽/мес</span>
				<br />
				(платит арендатор)
			</p>

			<IconCheck name={name} error={error} getValue={getValue} />
		</div>
	)
}

export default FieldRent
