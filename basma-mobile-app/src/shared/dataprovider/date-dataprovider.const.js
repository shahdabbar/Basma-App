let index = 0;
import moment from 'moment';

export const DATE_DATAPROVIDER = [
	{
		key: index++,
		value: moment(Date.now())
			.subtract(1, 'days')
			.format('YYYY-MM-DD hh:mm:ss'),
		label: 'Last 24 hours',
	},
	{
		key: index++,
		value: moment(Date.now())
			.subtract(7, 'days')
			.format('YYYY-MM-DD hh:mm:ss'),
		label: 'Last week',
	},
	{
		key: index++,
		value: moment(Date.now())
			.subtract(1, 'months')
			.format('YYYY-MM-DD hh:mm:ss'),
		label: 'Last month',
	},
	{
		key: index++,
		value: moment(Date.now())
			.subtract(3, 'months')
			.format('YYYY-MM-DD hh:mm:ss'),
		label: 'Last 3 months',
	},
	{
		key: index++,
		value: moment(Date.now())
			.subtract(1, 'years')
			.format('YYYY-MM-DD hh:mm:ss'),
		label: 'Last year',
	},
];
