import { useFormContext } from 'react-hook-form'
import LabelForInput from '../../ui/field/LabelForInput/LabelForInput'
import FieldAddress from '../../ui/field/fieldAddress/FieldAddress'
import FieldRent from '../../ui/field/fieldRent/FieldRent'
import ErrorRent from '../../ui/field/fieldRent/errorRent/ErrorRent'

const AddressAndRent = ({ price, setPrice }) => {
	const {
		watch,
		formState: { errors },
		control,
	} = useFormContext()

	return (
		<div>
			<FieldAddress
				name='address'
				control={control}
				error={errors?.address?.message}
			/>

			<LabelForInput textLeft='Стоимость аренды' nameLabel='priceRent' />

			<FieldRent
				name='rentPrice'
				control={control}
				price={price}
				setPrice={setPrice}
				watch={watch}
				error={errors?.rentPrice}
			/>

			<ErrorRent errors={errors} name='rentPrice' />
		</div>
	)
}

export default AddressAndRent
