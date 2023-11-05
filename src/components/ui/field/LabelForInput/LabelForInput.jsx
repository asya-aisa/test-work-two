import cn from 'clsx'
import styles from './LabelForInput.module.scss'

const LabelForInput = ({ textLeft, textRight = '', nameLabel, infoLabel }) => {
	return (
		<div>
			<div className={cn(styles.nameForInput, styles[nameLabel])}>
				{textLeft}
			</div>

			<div className={cn(styles.nameForInputTwo, styles[infoLabel])}>
				{textRight}
			</div>
		</div>
	)
}

export default LabelForInput
