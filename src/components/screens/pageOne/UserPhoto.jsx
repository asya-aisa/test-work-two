import { useFormContext } from 'react-hook-form'
import LabelForInput from '../../ui/field/LabelForInput/LabelForInput'
import InputForFile from '../../ui/field/inputForFile/InputForFile'
import Heading from '../../ui/heading/Heading'
import TextInfo from '../../ui/textInfo/TextInfo'

const UserPhoto = () => {
	const {
		formState: { errors },
		control,
	} = useFormContext()

	return (
		<div>
			<Heading coordHeading='coordHeadingPhotoDoc'>Фото документов</Heading>

			<LabelForInput
				textRight='jpg, png, pdf, не больше 40 мб'
				infoLabel='photoInfoLabel'
			/>

			<InputForFile
				name='filePassportMain'
				control={control}
				error={errors?.filePassportMain?.message}
				text='Паспорт, 2-3 стр.'
				coord={{ left: '330px' }}
			/>

			<InputForFile
				name='filePassportAddress'
				control={control}
				error={errors?.filePassportAddress?.message}
				text='Паспорт, 19 стр.'
				coord={{ left: '480px' }}
			/>

			<InputForFile
				name='filePassportSelfy'
				control={control}
				error={errors?.filePassportSelfy?.message}
				text='Фото с паспортом'
				coord={{ left: '630px' }}
			/>

			<TextInfo />
		</div>
	)
}

export default UserPhoto
