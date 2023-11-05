import 'react-dadata/dist/react-dadata.css'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Button from '../../ui/button/Button'
import HeadingForStep from '../../ui/heading/HeadingForStep'
import UserData from './UserData'
import UserPhoto from './UserPhoto'

const PageOne = () => {
	const navigate = useNavigate()

	const methods = useForm({
		mode: 'all',
	})

	const {
		handleSubmit,
		formState: { isValid },
	} = methods

	const onSubmit = data => {
		console.log(data)
		navigate('/stepTwo')
	}

	return (
		<div>
			<HeadingForStep
				coordText='coordTextStepOne'
				coordHr='coordHrStepOne'
				text='Шаг 1 из 2 | Личная информация'
			/>

			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<UserData />
					<UserPhoto />

					<Button
						type='next'
						coord='nextOne'
						isValid={isValid}
						clickHandler={() => onSubmit}
					/>
				</form>
			</FormProvider>
		</div>
	)
}

export default PageOne
