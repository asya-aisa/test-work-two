import cn from 'clsx'
import { useState } from 'react'
import styles from './BoxCopyPassport.module.scss'
const BoxCopyPassport = ({ coordBox, coordText, coordDeleteBox }) => {
	const [isShow, setIsShow] = useState(true)
	return (
		<div>
			<div
				className={cn(styles.box, styles[coordBox], {
					[styles.none]: !isShow,
				})}
			></div>

			<p
				className={cn(styles.text, styles[coordText], {
					[styles.none]: !isShow,
				})}
			>
				copy passport…
			</p>

			<p
				className={cn(styles.deleteBox, styles[coordDeleteBox], {
					[styles.none]: !isShow,
				})}
				onClick={() => {
					setIsShow(false)
				}}
			>
				<span className={styles.deleteIcon}>×</span>
			</p>
		</div>
	)
}

export default BoxCopyPassport
