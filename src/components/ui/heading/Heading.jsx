import cn from 'clsx'
import styles from './Heading.module.scss'

const Heading = ({ children, coordHeading }) => {
	return (
		<h3 className={cn(styles.heading, styles[coordHeading])}>{children}</h3>
	)
}

export default Heading
