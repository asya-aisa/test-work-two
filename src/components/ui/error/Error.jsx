import cn from 'clsx'
import styles from './Error.module.scss'

const Error = ({ error, name }) => {
	return <div className={cn(styles.error, styles[name])}>{error}</div>
}

export default Error
