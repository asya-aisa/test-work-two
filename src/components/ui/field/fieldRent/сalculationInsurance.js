export const getInsurance = (e, setValue, setShowInsurance, setPrice) => {
	setValue(e.target.value)

	let startNumber = e.target.value

	if (startNumber.length >= 5) {
		setShowInsurance(true)

		if (startNumber >= 45000) {
			let priceIns =
				Math.floor(
					(654 + (startNumber * 1.5 * 0.05) / 11 + startNumber * 0.0097) / 10
				) * 10

			setPrice(priceIns)

			if (startNumber > 100000) setShowInsurance(false)
		} else {
			let priceIns =
				Math.ceil(
					(454 + (startNumber * 1.5 * 0.05) / 11 + startNumber * 0.0097) / 10
				) * 10

			setPrice(priceIns)
		}
	} else setShowInsurance(false)
}
