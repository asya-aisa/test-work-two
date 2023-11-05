import { useState } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import Button from '../../ui/button/Button'
import HeadingForStep from '../../ui/heading/HeadingForStep'
import AddressAndRent from './AddressAndRent'
import Docs from './Docs'
import styles from './PageTwo.module.scss'

function PageTwo() {
	const navigate = useNavigate()

	const methods = useForm({
		mode: 'all',
	})

	const {
		handleSubmit,
		formState: { isValid },
	} = methods

	const [price, setPrice] = useState(null)

	const onSubmit = data => console.log(data, 'страховка:', price)

	return (
		<div>
			<HeadingForStep
				coordText='coordTextStepTwo'
				coordHr='coordHrStepTwo'
				text='Шаг 2 из 2 | О квартире'
			/>

			<p className={styles.textInfoAboutDA}>
				Мы составим договор аренды: в нем не будет
				<br /> упоминания залога, но будет пункт o страховке
			</p>

			<FormProvider {...methods}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<AddressAndRent price={price} setPrice={setPrice} />

					<Docs />

					<Button type='next' coord='nextTwo' isValid={isValid} />
				</form>
			</FormProvider>

			<Button type='back' clickHandler={() => navigate('/')} />
		</div>
	)
}

export default PageTwo
