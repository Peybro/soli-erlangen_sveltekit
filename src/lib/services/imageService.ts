type ImageObject = {
	src: string;
	alt: string;
	title: string;
	desc: string;
};

// Gymnastik

// Kindertanzen
import kindertanzen1 from '$lib/Bilder/Kindertanzen/20230212_155300.jpg';
import kindertanzen2 from '$lib/Bilder/Kindertanzen/20230212_155532.jpg';

// Kinderturnen

// Kunstrad
import kunstrad1 from '$lib/Bilder/Kunstrad/20191115_200539.jpg';
import kunstrad2 from '$lib/Bilder/Kunstrad/G20191116-165945_109E72_img1.jpg';

// Radball
import radballBankÜbung2 from '$lib/Bilder/Radball/radball_bankübung_moritz-und-tobi.jpg';
import radballBankÜbung from '$lib/Bilder/Radball/radball_bankübung.jpg';
import radballEcke from '$lib/Bilder/Radball/radball_ecke.jpg';
import radballGenerationen from '$lib/Bilder/Radball/radball_generationen.jpg';
import radballMoritzUndTobi2 from '$lib/Bilder/Radball/radball_moritz-und-tobi-2.jpg';
import radballMoritzUndRemo from '$lib/Bilder/Radball/radball_moritz-und-remo.jpg';
import radballAnpfiff from '$lib/Bilder/Radball/radball_anpfiff.jpg';

// Reigen
import reigen1 from '$lib/Bilder/Reigen/20230212_155921.jpg';
import reigen4 from '$lib/Bilder/Reigen/signal-2022-11-21-06-26-40-868.jpg';

const gymnastikImages: ImageObject[] = [];
const kindertanzenImages: ImageObject[] = [
	{
		src: kindertanzen1,
		alt: 'Kinder beim Tanzen',
		title: 'Kindertanzen',
		desc: 'Verbessert die Motorik, stärkt das Selbstbewusstsein und fördert das rhythmische Verständnis'
	},
	{
		src: kindertanzen2,
		alt: 'Freude am Tanzen in der Gruppe',
		title: 'Freude an Musik und Bewegung',
		desc: 'Kreatives Tanzen für Kindergartenkinder'
	}
];
const kinderturnenImages: ImageObject[] = [];
const kunstradImages: ImageObject[] = [
	{
		src: kunstrad1,
		alt: 'Zwei Fahrerinnen auf dem Kunstrad',
		title: 'Komplexe Figuren auf dem Rad',
		desc: '... erfordern hohe Konzentration, Koordination und Gleichgewichtssinn'
	},
	{
		src: kunstrad2,
		alt: 'Kunstradfigur',
		title: 'Wettkampfsport',
		desc: 'Mit den speziellen Hallenrädern sind komplexe Kunststücke möglich'
	}
];
const radballImages: ImageObject[] = [
	{
		src: radballAnpfiff,
		alt: 'Anstoß beim Radball',
		title: 'Anstoß',
		desc: 'Die Teams sind bereit für den Wettkampf'
	},
	{
		src: radballGenerationen,
		alt: 'Solidarität vereint Generationen',
		title: 'Radball von jung bis alt',
		desc: 'Bei uns steht neben dem Wettkampf vor allem der Spaß im Vordergrund'
	},
	{
		src: radballBankÜbung,
		alt: 'Bankübung',
		title: 'Übung macht den Meister',
		desc: 'Nicht nur Stehen, sondern auch kontrolliertes Hüpfen auf einem Rad ist möglich'
	},
	{
		src: radballMoritzUndTobi2,
		alt: 'Stehen mit Radballrädern',
		title: 'Moritz und Tobias',
		desc: 'Das Stehen ist mit den besonderen Rädern kein Problem'
	},
	{
		src: radballMoritzUndRemo,
		alt: 'Moritz und Remo auf ihren Rädern',
		title: 'Moritz und Remo',
		desc: ''
	},
	{
		src: radballEcke,
		alt: 'Eckentraining',
		title: 'Eckentraining',
		desc: 'Viele Regeln beim Radball ähneln denen des Fußballs'
	},
	{
		src: radballBankÜbung2,
		alt: 'Bankübung',
		title: 'Bankübung',
		desc: 'Verschiedene Übungen gehören dazu um erfolgreich die Tricks zu beherrschen'
	}
	//   {
	//     src: radballMoritzUndTobi3,
	//     alt: "",
	//     title: "",
	//     desc: "",
	//   },
	//   {
	//     src: radballMoritzUndTobi4,
	//     alt: "",
	//     title: "",
	//     desc: "",
	//   },
];
const reigenImages: ImageObject[] = [
	{
		src: reigen1,
		alt: 'Einradfahrerinnen im Team',
		title: 'Spaß im Team',
		desc: 'Die Teams führen synchron verschiedene Figuren und Tricks auf Einrädern aus'
	},
	//   {
	//     src: reigen2,
	//     alt: "",
	//     title: "",
	//     desc: "",
	//   },
	//   {
	//     src: reigen3,
	//     alt: "",
	//     title: "",
	//     desc: "",
	//   },
	{
		src: reigen4,
		alt: 'Einradfahrerinnen in der Gruppe',
		title: 'Teamwettkampf',
		desc: 'Einradfahren als Teamsport erfordert eine hohe Koordination zwischen den einzelnen Fahrer*innen'
	}
];

export {
	gymnastikImages,
	kindertanzenImages,
	kinderturnenImages,
	kunstradImages,
	radballImages,
	reigenImages
};
