import cn from 'clsx'
import Error from '../error/Error'
import IconCheck from '../iconCheck/IconCheck'
import styles from './Field.module.scss'
import LabelForInput from './LabelForInput/LabelForInput'

const Field = ({
	register,
	name,
	options,
	error,
	watch,
	textLeft,
	textRight,
	nameLabel = `${name}Label`,
	infoLabel = `${name}InfoLabel`,
	...rest
}) => {
	const getValue = watch(name)

	return (
		<div>
			<LabelForInput
				textLeft={textLeft}
				textRight={textRight}
				nameLabel={nameLabel}
				infoLabel={infoLabel}
			/>

			<input
				{...register(name, options)}
				{...rest}
				className={cn(
					styles.input,
					styles[name],
					{
						[styles.colorInput]: !getValue,
					},
					{
						[styles.successInput]: getValue && !error,
					},
					{
						[styles.errorInput]: error,
					}
				)}
			/>

			{error && <Error name={name} error={error} />}

			<IconCheck name={name} error={error} getValue={getValue} />
		</div>
	)
}

export default Field
