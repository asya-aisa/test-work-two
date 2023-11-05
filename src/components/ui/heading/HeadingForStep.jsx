import cn from 'clsx'
import styles from './Heading.module.scss'

const HeadingForStep = ({ text, coordText, coordHr }) => {
	return (
		<div>
			<p className={cn(styles.headingStep, styles[coordText])}>{text}</p>

			<hr className={cn(styles.hr, styles[coordHr])}></hr>
		</div>
	)
}

export default HeadingForStep
