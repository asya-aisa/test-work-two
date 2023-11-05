import { useFormContext } from 'react-hook-form'
import Field from '../../ui/field/Field'
import FieldPassportCod from '../../ui/field/FieldPassportCod'
import FieldPassportNumber from '../../ui/field/FieldPassportNumber'
import FieldFio from '../../ui/field/fieldFio/FieldFio'
import Heading from '../../ui/heading/Heading'
import { data } from './data'

const UserData = () => {
	const {
		register,
		formState: { errors },
		watch,
		control,
	} = useFormContext()
	return (
		<div>
			<FieldFio
				name='fio'
				control={control}
				watch={watch}
				error={errors?.fio?.message}
			/>

			<Heading coordHeading='coordHeadingDataPassport'>
				Паспортные данные
			</Heading>

			<FieldPassportNumber
				name='PassportNumber'
				control={control}
				watch={watch}
				error={errors?.PassportNumber?.message}
			/>

			{data.map(item => (
				<Field
					key={item.name}
					error={errors?.[item.name]?.message}
					name={item.name}
					register={register}
					watch={watch}
					type={item.type}
					options={item.options}
					textLeft={item.textLeft}
					textRight={item.textRight}
					placeholder={item.placeholder}
				/>
			))}

			<FieldPassportCod
				name='PassportCod'
				control={control}
				watch={watch}
				error={errors?.PassportCod?.message}
			/>
		</div>
	)
}

export default UserData
