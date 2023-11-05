import cn from 'clsx'
import { useRef, useState } from 'react'
import { useController } from 'react-hook-form'
import Error from '../../error/Error'
import styles from './InputForFile.module.scss'

const InputForFile = ({ control, name, error, text, coord }) => {
	const { field } = useController({
		control,
		name,
		rules: { required: 'добавьте файл' },
	})

	const [value, setValue] = useState('')
	const [showName, setShowName] = useState('')

	const fileInput = useRef(null)

	return (
		<div>
			<input
				ref={fileInput}
				style={{ display: 'none' }}
				type='file'
				value={value}
				onChange={e => {
					setValue(e.target.value)
					setShowName(e.target.files)
					field.onChange(e.target.files)
				}}
			/>

			<div className={styles.boxFile} style={coord}></div>

			<span
				className={cn(styles.plus, styles[`${name}Plus`])}
				onClick={() => fileInput.current.click()}
			>
				{value ? `` : '+'}
			</span>

			<span className={cn(styles.text, styles[`${name}Text`])}>
				{value ? `${showName[0].name.substring(0, 10)}` : `${text}`}
			</span>

			{error && <Error name={name} error={error} />}
		</div>
	)
}

export default InputForFile
