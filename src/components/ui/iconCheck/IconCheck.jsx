import cn from 'clsx'
import styles from './IconCheck.module.scss'

const IconCheck = ({ getValue, error, name }) => {
	return (
		<div
			className={cn(styles.check, styles[name], {
				[styles.show]: getValue && !error,
			})}
		>
			<span className={styles.iconCheck}>🗸︎</span>
		</div>
	)
}

export default IconCheck
