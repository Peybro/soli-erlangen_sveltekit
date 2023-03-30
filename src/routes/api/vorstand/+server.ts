import { json } from '@sveltejs/kit';

export const POST = async () => {
	return json([
		{
			titel: '1. Vorstand',
			name: 'Ralf Häusinger',
			email: 'ralf.haeusinger@t-online.de',
			telefon: '09132 796970',
			mobil: '49017645145696'
		},
		{
			titel: '2. Vorstand',
			name: 'René',
			email: '',
			telefon: '',
			mobil: ''
		},
		{
			titel: 'Sportleiter',
			name: 'Thomas',
			email: 't.kretschmann@t-online.de',
			telefon: '',
			mobil: '49017643839664'
		},
		{
			titel: 'Fachwart Kunstrad',
			name: 'Anne',
			email: '',
			telefon: '',
			mobil: ''
		},
		{
			titel: 'Fachwart Reigen',
			name: 'Renate',
			email: 'renate.transchel@gmx.de',
			telefon: '09131 49454 ',
			mobil: ''
		},
		{
			titel: 'Frauenbeauftragte',
			name: 'Sabine',
			email: '',
			telefon: '09132 796970',
			mobil: ''
		}
	]);
};
