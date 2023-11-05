import cn from 'clsx'
import styles from './ErrorRent.module.scss'

const ErrorRent = ({ errors, name }) => {
	return (
		<div>
			{errors[name] && errors[name].type === 'required' && (
				<div className={cn(styles.errors, styles.required)}>
					это поле нужно заполнить
				</div>
			)}

			{errors[name] && errors[name].type === 'min' && (
				<div className={cn(styles.errors, styles.minMax)}>
					Мы работаем с квартирами от 20 000₽/мес.
					<br />
					<span className={styles.span}>
						Напишите на{' '}
						<span style={{ textDecoration: 'underline' }}>
							help@pik-arenda.ru
						</span>{' '}
						и мы найдем решение
					</span>
				</div>
			)}

			{errors[name] && errors[name].type === 'max' && (
				<div className={cn(styles.errors, styles.minMax)}>
					Мы работаем с квартирами до 100 000₽/мес.
					<br />
					<span className={styles.span}>
						Напишите на{' '}
						<span style={{ textDecoration: 'underline' }}>
							help@pik-arenda.ru
						</span>{' '}
						и мы найдем решение
					</span>
				</div>
			)}
		</div>
	)
}

export default ErrorRent
