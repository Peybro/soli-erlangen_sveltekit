export const load = async ({ cookies }) => {
	return {
		maps:
			cookies.get('mapSelection') !== undefined || cookies.get('mapSelection') !== ''
				? cookies.get('mapSelection')
				: '1',
		infos: [
			{
				sport: 'Gymnastik',
				subheading: 'Eine Sportart, die Körper und Geist fordert',
				times: ['Dienstag: 16:00 - 17:00 Uhr'],
				info: [
					'Gymnastik ist eine Sportart, die eine Vielzahl von Bewegungen und Übungen umfasst und in verschiedenen Disziplinen ausgeübt werden kann. Sie erfordert Kraft, Flexibilität, Koordination und Eleganz und kann sowohl individuell als auch im Team durchgeführt werden.',
					{
						subitem: 'Geschichte und Entwicklung',
						text: [
							'Gymnastik hat eine lange Geschichte, die bis ins antike Griechenland zurückreicht. Dort wurde sie als Teil der körperlichen und geistigen Ausbildung der Athleten betrachtet. In der Moderne wurde Gymnastik als Sportart weiterentwickelt und hat sich in verschiedene Disziplinen wie rhythmische Sportgymnastik, Trampolinturnen, Akrobatik, Bodenturnen und Gerätturnen aufgeteilt.'
						]
					},
					{
						subitem: 'Regeln und Ausrüstung',
						text: [
							'Die Regeln und Anforderungen für Gymnastik variieren je nach Disziplin. In der Regel wird jedoch eine bestimmte Anzahl von Übungen durchgeführt, die von einer Jury bewertet werden. Die Bewertung erfolgt anhand der Ausführung, der Schwierigkeit und der Kreativität der Übungen.',
							'Die Ausrüstung für Gymnastik variiert ebenfalls je nach Disziplin. Bei Gerätturnen und Bodenturnen werden beispielsweise Matten, Schwebebalken, Reckstangen und Sprungbretter verwendet. Bei der rhythmischen Sportgymnastik hingegen werden Bänder, Keulen, Reifen oder Seile eingesetzt.'
						]
					},
					{
						subitem: 'Warum Gymnastik eine tolle Sportart ist',
						text: [
							'Gymnastik ist eine Sportart, die den ganzen Körper fordert und dabei gleichzeitig die geistige Stärke verbessert. Die Übungen erfordern Kraft, Flexibilität, Koordination und Eleganz und fördern somit eine Vielzahl von körperlichen Fähigkeiten. Gleichzeitig erfordert die Sportart auch eine hohe Konzentration und geistige Stärke, da die Übungen oft sehr anspruchsvoll sind und präzise ausgeführt werden müssen.',
							'Gymnastik ist zudem eine Sportart, die für alle Altersklassen geeignet ist. Es gibt sowohl Wettkämpfe für Kinder und Jugendliche als auch für Erwachsene. Auch im Breitensport wird Gymnastik oft als Fitness- oder Gesundheitssport betrieben.',
							'Ein weiterer Vorteil von Gymnastik ist, dass sie eine tolle Möglichkeit bietet, um den Körper zu straffen und zu formen. Die Übungen fördern die Muskulatur, verbessern die Körperhaltung und können dabei helfen, das Körperbewusstsein zu steigern.'
						]
					},
					{
						subitem: 'Fazit',
						text: [
							'Gymnastik ist eine anspruchsvolle und vielseitige Sportart, die den ganzen Körper fordert und dabei auch die geistige Stärke verbessert. Sie ist für alle Altersklassen geeignet und bietet eine Vielzahl von Disziplinen, die unterschiedliche Fähigkeiten erfordern. Wenn Sie Interesse an Gymnastik haben, gibt es zahlreiche Möglichkeiten, um diese Sportart zu erlernen und auszuüben.'
						]
					}
				]
			},
			{
				sport: 'Kindertanzen',
				subheading: 'Kreativität, Musikalität und Spaß für Kinder',
				times: ['Montag: 16:30 - 17:30 Uhr'],
				info: [
					'Kindertanzen ist eine wunderbare Möglichkeit, um die Kreativität, Musikalität und Freude an der Bewegung bei Kindern zu fördern. Es ist ein sehr beliebter Freizeitsport, der Kinder im frühen Kindesalter anspricht und sie dabei unterstützt, ihre körperlichen Fähigkeiten zu entwickeln.',
					{
						subitem: 'Warum Kindertanzen so wichtig ist',
						text: [
							'Kindertanzen hat viele positive Auswirkungen auf die körperliche und geistige Entwicklung von Kindern. Es fördert die Koordination, das Gleichgewicht, die Flexibilität und die Ausdauer. Gleichzeitig unterstützt es die Wahrnehmungsfähigkeit und die Konzentration der Kinder.',
							'Kindertanzen bietet zudem eine tolle Möglichkeit, um die soziale Entwicklung zu fördern. Es ermöglicht den Kindern, gemeinsam zu tanzen, sich auszutauschen und neue Freundschaften zu schließen. Durch das Tanzen können die Kinder auch ihr Selbstbewusstsein stärken und sich auf spielerische Weise ausdrücken.'
						]
					},
					{
						subitem: 'Wie Kindertanzen gestaltet werden kann',
						text: [
							'Kindertanzen sollte auf eine spielerische Art und Weise gestaltet werden, damit die Kinder Spaß haben und sich gleichzeitig kreativ entfalten können. Die Tanzlehrer sollten sich an den individuellen Fähigkeiten und Interessen der Kinder orientieren und auf ihre Bedürfnisse eingehen.',
							'Ein wichtiger Aspekt des Kindertanzens ist die Musik. Die Musik sollte altersgerecht ausgewählt werden und den Kindern dabei helfen, sich in die Bewegungen hinein zu fühlen. Es kann dabei auch sinnvoll sein, verschiedene Musikrichtungen und -stile auszuprobieren, um die Vielfalt des Tanzens zu erforschen.',
							'Bei der Gestaltung von Kindertanzkursen können verschiedene Methoden eingesetzt werden, wie zum Beispiel das Erlernen von Choreografien oder das Improvisieren von Bewegungen. Es ist jedoch wichtig, dass die Kinder die Möglichkeit haben, sich selbst kreativ auszudrücken und ihre eigenen Ideen einzubringen.'
						]
					}
				]
			},
			{
				sport: 'Kinderturnen',
				subheading: 'Spielen, Spaß haben und die motorische Entwicklung fördern',
				times: ['Dienstag: 17:00 - 18:00 Uhr'],
				info: [
					'Kinderturnen ist eine spezielle Form des Turnens, die sich an Kinder und Jugendliche richtet. Es fördert die motorischen Fähigkeiten, die Koordination und die Beweglichkeit der jungen Sportlerinnen und Sportler. Kinderturnen ist jedoch nicht nur eine Möglichkeit, um den Körper zu stärken und zu formen, sondern es ist auch eine tolle Möglichkeit, um Spaß zu haben und neue Freunde zu finden.',
					{
						subitem: 'Warum Kinderturnen so wichtig ist',
						text: [
							'Kinderturnen ist eine tolle Möglichkeit, um Kinder in Bewegung zu bringen und ihre motorischen Fähigkeiten zu fördern. Es hilft den Kindern dabei, ihre Koordination und Beweglichkeit zu verbessern und ihre körperliche Fitness zu steigern. Gleichzeitig fördert Kinderturnen auch die soziale Entwicklung, da die Kinder im Team zusammenarbeiten und sich gegenseitig unterstützen.',
							'Kinderturnen ist zudem wichtig, weil es den Kindern die Möglichkeit gibt, sich auf spielerische Art und Weise zu bewegen. Die Kinder können sich austoben, spielen und Spaß haben, während sie gleichzeitig ihre motorischen Fähigkeiten verbessern.'
						]
					},
					{
						subitem: 'Wie Kinderturnen gestaltet werden kann',
						text: [
							'Kinderturnen kann auf verschiedene Arten und Weisen gestaltet werden, je nach Alter und Entwicklungsstand der Kinder. Im Allgemeinen sollten die Übungen und Aktivitäten jedoch spielerisch und abwechslungsreich sein. Die Kinder sollten die Möglichkeit haben, verschiedene Bewegungsabläufe auszuprobieren und ihre Koordination und Beweglichkeit zu verbessern.',
							'Eine gute Möglichkeit, um Kinderturnen zu gestalten, ist die Verwendung von Parcours. Ein Parcours kann aus verschiedenen Stationen bestehen, an denen die Kinder verschiedene Bewegungsabläufe ausprobieren können. Beispiele für Stationen könnten sein: Balancieren auf einem Balken, Klettern über eine Wand, Hüpfen auf einem Trampolin oder Springen über Hindernisse. Die Kinder sollten die Möglichkeit haben, den Parcours individuell oder im Team zu durchlaufen.',
							'Kinderturnen kann auch durch das Spielen von Bewegungsspielen gestaltet werden. Hierbei sollten die Spiele spielerisch und abwechslungsreich sein und die Kinder sollten die Möglichkeit haben, sich auszutoben. Beispiele für Bewegungsspiele sind: Fangspiele, Versteckspiele oder Staffelspiele.'
						]
					},
					{
						subitem: 'Fazit',
						text: [
							'Kinderturnen ist eine tolle Möglichkeit, um Kinder in Bewegung zu bringen und ihre motorischen Fähigkeiten zu fördern. Es hilft den Kindern dabei, ihre Koordination und Beweglichkeit zu verbessern und ihre körperliche Fitness zu steigern. Gleichzeitig fördert es auch die soziale Entwicklung, da die Kinder im Team zusammenarbeiten und sich gegenseitig unterstützen. Wenn Sie Interesse an Kinderturnen haben, gibt es zahlreiche Vereine und Sportstätten, die Kurse für Kinder anbieten.'
						]
					}
				]
			},
			{
				sport: 'Kunstrad',
				subheading: 'Eine anspruchsvolle Sportart mit artistischem Anspruch',
				times: ['Dienstag: 17:00 - 19:00 Uhr'],
				info: [
					'Kunstrad ist eine Sportart, bei der ein Radfahrer auf einem speziellen Fahrrad namens "Kunstrad" verschiedene akrobatische Übungen vorführt. Dabei geht es vor allem um Geschicklichkeit, Gleichgewichtssinn und Präzision. Kunstrad ist eine anspruchsvolle Sportart, die eine hohe Konzentration erfordert und sowohl als Freizeit- als auch als Leistungssport betrieben werden kann.',
					{
						subitem: 'Die Geschichte des Kunstrads',
						text: [
							'Die Ursprünge des Kunstrads liegen im späten 19. Jahrhundert in Europa. Ursprünglich wurde diese Sportart als "Radturnen" bezeichnet und war vor allem in Deutschland und der Schweiz populär. In den 1920er Jahren wurde das Kunstradfahren dann als offizielle Wettkampfdisziplin anerkannt und hat sich seitdem weltweit verbreitet. Heute gibt es zahlreiche nationale und internationale Wettbewerbe, bei denen die besten Kunstradfahrer gegeneinander antreten.'
						]
					},
					{
						subitem: 'Regeln und Ausrüstung',
						text: [
							'Die Regeln des Kunstrads sind vergleichsweise einfach. Ein Kunstradfahrer muss auf einem speziellen Fahrrad, dem Kunstrad, verschiedene akrobatische Übungen vorführen. Das Kunstrad ist kleiner als ein normales Fahrrad und hat keine Bremsen. Es ist außerdem mit einer speziellen Bremsbacke ausgestattet, die dem Fahrer hilft, das Rad bei bestimmten Übungen im Gleichgewicht zu halten.',
							'Die Übungen werden in verschiedenen Kategorien bewertet, je nach Schwierigkeitsgrad und Ausführung. Dazu gehören zum Beispiel "Sitz- und Stehübungen", "Sprungübungen" und "Drehübungen". Ein Kunstradfahrer hat üblicherweise drei Minuten Zeit, um so viele Übungen wie möglich vorzuführen.'
						]
					},
					{
						subitem: 'Warum Kunstrad eine tolle Sportart ist',
						text: [
							'Kunstrad ist eine faszinierende Sportart, die eine hohe Konzentration und Geschicklichkeit erfordert. Es ist eine einzigartige Kombination aus Kunst, Akrobatik und Radfahren und erfordert ein hohes Maß an körperlicher und geistiger Disziplin. Kunstrad ist somit nicht nur eine Sportart, sondern auch eine Art der Kunst.',
							'Kunstrad bietet zudem viele gesundheitliche Vorteile. Durch die körperliche Aktivität wird der Kreislauf angeregt, die Muskulatur gestärkt und die Ausdauer verbessert. Es fördert die Körperbeherrschung und den Gleichgewichtssinn.'
						]
					},
					{
						subitem: 'Fazit',
						text: [
							'Kunstrad ist eine anspruchsvolle und faszinierende Sportart, die eine einzigartige Kombination aus Kunst, Akrobatik und Radfahren darstellt. Es erfordert ein hohes Maß an Konzentration und Geschicklichkeit und fördert die körperliche und geistige Disziplin. Kunstrad bietet sowohl als Freizeit- als auch als Leistungssport zahlreiche Möglichkeiten und ist für alle Altersklassen geeignet. Es ist eine Sportart, die immer wieder neue Herausforderungen bietet und somit nie langweilig wird.',
							'Abschließend lässt sich sagen, dass Kunstrad eine Sportart ist, die nicht nur den Körper, sondern auch den Geist fordert und somit eine ideale Möglichkeit darstellt, um fit und gesund zu bleiben. Probieren Sie es aus und lassen Sie sich von der Faszination des Kunstradfahrens begeistern!'
						]
					}
				]
			},
			{
				sport: 'Radball',
				subheading: 'Eine faszinierende Kombination aus Radfahren und Ballsport',
				times: [
					'Donnerstag: 19:30 - 22:00 Uhr',
					'Freitag: 16:30 - 18:00 Uhr (Kinder) (Bitte vorher anfragen))',
					'Freitag: 18:00 - 19:30 Uhr (Jugend)'
				],
				info: [
					'Radball ist eine einzigartige Sportart, die eine Kombination aus Radfahren und Ballsport darstellt. Es wird von zwei Teams mit je zwei Spielern gespielt, die auf Fahrrädern sitzen und versuchen, einen Ball mit ihren Rädern in das gegnerische Tor zu befördern. Radball erfordert ein hohes Maß an Geschicklichkeit, Ausdauer und Teamarbeit und ist damit ein attraktiver Sport für Menschen jeden Alters und Geschlechts.',
					{
						subitem: 'Die Geschichte des Radballs',
						text: [
							'Die Ursprünge des Radballs reichen zurück bis ins späte 19. Jahrhundert, als der Schweizer Radrennfahrer Nicholas Edward Kaufmann das erste Mal eine solche Sportart vorstellte. Im Jahr 1901 wurde dann das erste offizielle Radball-Turnier in Zürich ausgetragen. Seitdem hat sich Radball in Europa verbreitet und ist vor allem in Deutschland, Österreich, der Schweiz und Belgien sehr populär geworden. In diesen Ländern gibt es mittlerweile auch zahlreiche Vereine und Ligen, die sich dem Radball verschrieben haben.'
						]
					},
					{
						subitem: 'Regeln und Ausrüstung',
						text: [
							'Die Regeln des Radballs sind vergleichsweise einfach. Die Mannschaften bestehen aus zwei Spielern, die auf einem speziellen Fahrrad namens "Radballrad" sitzen. Das Rad ist kleiner als ein normales Fahrrad und hat keine Bremsen. Der Ball ist etwa so groß wie ein Handball und wird mit den Rädern ins Tor befördert. Ein Tor zählt immer dann, wenn der Ball die Torlinie überquert.',
							'Die Spielzeit beträgt üblicherweise 2 x 7 Minuten mit einer Pause von 2 Minuten zwischen den Halbzeiten. Gewonnen hat das Team, das am Ende der Spielzeit mehr Tore erzielt hat. Bei einem Unentschieden wird in der Regel eine Verlängerung gespielt.',
							'Ausrüstung: Eigentlich nur das Fahrrad, knöchelhohe Schuhe und Schienbeinschoner sind außerdem empfehlenswert'
						]
					},
					{
						subitem: 'Warum Radball ein toller Sport ist',
						text: [
							'Radball ist eine faszinierende Sportart, die eine einzigartige Kombination aus Radfahren und Ballsport darstellt. Es erfordert ein hohes Maß an Koordination und Ausdauer und kann somit als eine Art "Radsportakrobatik" betrachtet werden. Darüber hinaus fördert Radball auch die Teamarbeit, da die beiden Spieler ständig miteinander kommunizieren müssen, um den Ball ins gegnerische Tor zu befördern. Radball ist somit nicht nur ein Sport für Individualisten, sondern auch für Menschen, die gerne im Team arbeiten.',
							'Radball bietet zudem viele gesundheitliche Vorteile. Durch die körperliche Aktivität wird der Kreislauf angeregt, die Muskulatur gestärkt und die Ausdauer verbessert. Radball ist damit ein toller Sport für Menschen jeden Alters und Geschlechts, der sich sowohl als Freizeitsport als auch als Leistungssport eignet.'
						]
					},
					{
						subitem: 'Fazit',
						text: [
							'Radball ist eine faszinierende Sportart, die eine einzigartige Kombination aus Radfahren und Ballsport darstellt.'
						]
					}
				]
			},
			{
				sport: 'Reigen',
				subheading: 'Eine kunstvolle Kombination aus Rhythmus und Balance',
				times: [
					'Donnerstag: 16:00 - 17:00 Uhr (Schüler / Jugend)',
					'Donnerstag: 17:00 - 18:00 Uhr (Jugend)'
				],
				info: [
					'Reigen ist eine Tanzform, bei der sich eine Gruppe von Tänzern in einer choreografierten Abfolge von Schritten und Bewegungen auf Musik bewegt. Dabei wird oft auch ein Einrad als Teil der Performance eingesetzt. Einradfahren hingegen ist eine Sportart, bei der man auf einem Einrad fährt und dabei verschiedene Tricks und Akrobatikvorführungen durchführt. Wenn diese beiden Sportarten kombiniert werden, entsteht eine kunstvolle Kombination aus Rhythmus und Balance.',
					{
						subitem: 'Geschichte und Entwicklung',
						text: [
							'Die Kombination von Reigen und Einradfahren hat eine lange Geschichte. Bereits in den 1920er Jahren wurden erste Einrad-Reigen in Zirkus- und Varieté-Shows aufgeführt. In den 1980er Jahren wurde diese Kunstform dann weiterentwickelt und es entstanden spezielle Reigen für Einradfahrer.',
							'Heutzutage ist die Kombination von Reigen und Einradfahren vor allem im Breitensport und bei Schulaufführungen beliebt. Es gibt aber auch zahlreiche Wettkämpfe, bei denen sich Einrad-Reigen in verschiedenen Kategorien messen.'
						]
					},
					{
						subitem: 'Regeln und Ausrüstung',
						text: [
							'Die Regeln für Einrad-Reigen variieren je nach Veranstaltung und Wettkampf. In der Regel wird jedoch eine Gruppe von Einradfahrern benötigt, die gemeinsam einen Reigen aufführen. Dabei müssen die Choreografie und die Musik harmonieren und die Einradfahrer müssen aufeinander abgestimmt sein.',
							'Einrad-Reigen können auf jedem Einrad durchgeführt werden, das den Fahrer gut unterstützt und ihm ein ausreichendes Maß an Kontrolle und Stabilität bietet. In der Regel werden Einräder mit einer Radgröße von 20 Zoll bis 26 Zoll verwendet.'
						]
					},
					{
						subitem: 'Warum Reigen und Einradfahren eine tolle Kombination ist',
						text: [
							'Einrad-Reigen sind eine einzigartige Kombination aus Kunst und Sport. Die Kombination von Reigen und Einradfahren erfordert ein hohes Maß an Koordination, Rhythmusgefühl und Balance. Es ist eine anspruchsvolle und zugleich kreative Art des Einradfahrens, die die Fahrerinnen und Fahrer körperlich und geistig fordert.',
							'Einrad-Reigen fördern zudem den Teamgeist und die Zusammenarbeit innerhalb einer Gruppe. Die Fahrerinnen und Fahrer müssen aufeinander abgestimmt sein und zusammenarbeiten, um eine harmonische Performance abzuliefern.',
							'Ein weiterer Vorteil von Einrad-Reigen ist, dass sie für Zuschauerinnen und Zuschauer sehr unterhaltsam sind. Die Kombination aus Musik und spektakulären Einrad-Tricks zieht das Publikum in ihren Bann und begeistert Jung und Alt gleichermaßen.'
						]
					},
					{
						subitem: 'Fazit',
						text: [
							'Einrad-Reigen sind eine einzigartige Kombination aus Kunst und Sport, die eine hohe Koordination und Balance erfordert. Sie fördern den Teamgeist und die Zusammenarbeit innerhalb einer Gruppe und sind für Zuschauerinnen und Zuschauer sehr unterhaltsam. Wenn Sie Interesse am Einradfahren und an der Kombination von Reigen und Einradfahren haben, gibt es zahlreiche Möglichkeiten, um diese Kunstform zu erlernen. In vielen Städten gibt es Einradvereine, die Kurse für Anfängerinnen und Anfänger sowie für Fortgeschrittene anbieten. Dort können Sie das Einradfahren erlernen, Tricks üben und auch die Kombination von Reigen und Einradfahren ausprobieren.',
							'Einradfahren ist zudem eine Sportart, die für alle Altersklassen geeignet ist. Egal, ob Sie jung oder alt sind, Einradfahren kann Ihnen dabei helfen, Ihre Koordination und Balance zu verbessern, Ihre körperliche Fitness zu steigern und Ihren Geist zu fordern. Es ist eine tolle Möglichkeit, um fit und gesund zu bleiben und gleichzeitig Spaß zu haben.',
							'Abschließend lässt sich sagen, dass Einrad-Reigen eine einzigartige und faszinierende Sportart sind, die sowohl für Einzelpersonen als auch für Gruppen geeignet sind. Probieren Sie es aus und lassen Sie sich von der Kombination aus Rhythmus und Balance begeistern!'
						]
					}
				]
			}
		]
	};
};
