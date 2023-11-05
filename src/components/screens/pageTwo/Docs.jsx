import { useFormContext } from 'react-hook-form'
import BoxCopyPassport from '../../ui/boxCopyPassport/BoxCopyPassport'
import Error from '../../ui/error/Error'
import LabelForInput from '../../ui/field/LabelForInput/LabelForInput'
import InputForFile from '../../ui/field/inputForFile/InputForFile'
import styles from './PageTwo.module.scss'

const Docs = () => {
	const {
		formState: { errors },
		control,
	} = useFormContext()

	return (
		<div>
			<LabelForInput textLeft='Документы' nameLabel='labelDocs' />

			<p className={styles.textInfo}>договор аренды, доп. соглашение</p>

			<InputForFile
				name='fileForSelect'
				control={control}
				error={errors?.fileForSelect?.message}
				text='выбрать файл'
				coord={{ left: '570px', top: '460px' }}
			/>

			{errors.fileForSelect && (
				<Error name='fileForSelect' error={errors?.fileDoc?.message} />
			)}

			<BoxCopyPassport
				coordBox='boxOne'
				coordText='textOne'
				coordDeleteBox='deleteBoxOne'
			/>

			<BoxCopyPassport
				coordBox='boxTwo'
				coordText='textTwo'
				coordDeleteBox='deleteBoxTwo'
			/>
		</div>
	)
}

export default Docs
