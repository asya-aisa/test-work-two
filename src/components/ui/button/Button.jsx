import cn from 'clsx'
import styles from './Button.module.scss'

const Button = ({ type, coord, isValid, clickHandler = null }) => {
	return (
		<div>
			<button
				disabled={type === 'next' ? !isValid : ''}
				className={cn(styles.btn, styles[type], styles[coord])}
				onClick={clickHandler}
			>
				<span className={cn(styles.textBtn)}>
					{type === 'next' ? 'Далее' : 'Назад'}
				</span>
			</button>
		</div>
	)
}

export default Button
