const optionsWhenPassport = {
	required: 'это поле нужно заполнить',
	validate: {
		more14YearsAfterBirthday: (fieldValue, data) => {
			return (
				new Date(fieldValue) >=
					new Date(data.birthday).setFullYear(
						new Date(data.birthday).getFullYear() + 14
					) || 'некорректная дата выдачи'
			)
		},
		notMoreNow: fieldValue => {
			return new Date(fieldValue) <= new Date() || 'некорректная дата выдачи'
		},
	},
}

const optionsBirthday = {
	required: 'это поле нужно заполнить',
	validate: fieldValue => {
		return (
			new Date(fieldValue) <
				new Date().setFullYear(new Date().getFullYear() - 18) ||
			'нельзя подписать договор, если вам меньше 18 лет'
		)
	},
}

const optionsEmail = {
	required: 'это поле нужно заполнить',
	pattern: {
		value:
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		message: 'некорректный email',
	},
}

export const data = [
	{
		name: 'whenPassport',
		type: 'date',
		options: optionsWhenPassport,
		textLeft: 'Когда выдан',
	},
	{
		name: 'birthday',
		type: 'date',
		options: optionsBirthday,
		textLeft: 'Дата рождения',
	},
	{
		name: 'email',
		type: 'email',
		options: optionsEmail,
		textLeft: 'Почта',
		textRight: 'на этот адрес мы пришлём страховой полис',
	},
	{
		name: 'whoPassport',
		type: 'text',
		options: {
			required: 'это поле нужно заполнить',
		},
		textLeft: 'Кем выдан',
		placeholder: 'Заполните точно как в паспорте',
	},
]
