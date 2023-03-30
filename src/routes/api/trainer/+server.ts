import { json } from '@sveltejs/kit';

export const POST = async () => {
	return json([
		{
			sport: 'Allgemein',
			name: 'Ralf Häusinger',
			email: 'vorstand@soli-erlangen.de',
			telefon: '09132 796970',
			mobil: '49017645145696',
			icon: ''
		},
		{
			sport: 'Kunstrad',
			name: 'Anne',
			email: 'kunstrad@soli-erlangen.de',
			telefon: '',
			mobil: '',
			icon: '/stickmen/logo_kunstrad_q.png'
		},
		{
			sport: 'Reigen',
			name: 'Renate',
			email: 'reigen@soli-erlangen.de',
			telefon: '09131 49454',
			mobil: '',
			icon: '/stickmen/logo_reigen_q.png'
		},
		{
			sport: 'Radball',
			name: 'Thomas',
			email: 'radball@soli-erlangen.de',
			telefon: '',
			mobil: '49017643839664',
			icon: '/stickmen/logo_radball_q.png'
		},
		{
			sport: 'Gymnastik',
			name: 'Heiner',
			email: 'gymnastik@soli-erlangen.de',
			telefon: '09131 990149',
			mobil: '',
			icon: '/stickmen/logo_gymnastik_q.png'
		},
		{
			sport: 'Kinderturnen',
			name: 'Ralf',
			email: 'kinderturnen@soli-erlagen.de',
			telefon: '09132 796970',
			mobil: '49017645145696',
			icon: '/stickmen/logo_kinderturnen_q.png'
		},
		{
			sport: 'Kindertanzen',
			name: 'Janice',
			email: 'kindertanzen@soli-erlangen.de',
			telefon: '',
			mobil: '49017632843418',
			icon: '/stickmen/logo_kindertanzen_q.png'
		}
	]);
};
