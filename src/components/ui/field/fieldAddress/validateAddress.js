export const options = {
	required: 'это поле нужно заполнить',
	validate: {
		more14YearsAfterBirthday: fieldValue => {
			return fieldValue !== 'not found' || 'адрес не найден'
		},
		notMoreNow: fieldValue => {
			return fieldValue !== 'not text' || 'это поле нужно заполнить'
		},
	},
}