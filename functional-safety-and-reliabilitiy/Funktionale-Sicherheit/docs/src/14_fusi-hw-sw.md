# Entwicklung von Hardware und Software für die funktionale Sicherheit

In diesem Abschnitt werden wir die Bedeutung der Entwicklung von Hardware und Software zur Gewährleistung der Sicherheit in der Automobilindustrie lernen. Wenn ich von Sicherheit spreche, beziehe ich mich immer auf die funktionale Sicherheit. Wir beginnen mit der Diskussion der Hardware-Sicherheitsanforderungen. Diese Anforderungen sollten aus den höherstufigen Anforderungen abgeleitet und unter Berücksichtigung des technischen Sicherheitskonzepts und der Hardware-Sicherheitsanalyse erstellt werden.

### Allgemeine Hardware- und Softwarethemen

Der erste normative Abschnitt ist Abschnitt 5 sowohl in Teil 5 als auch in Teil 6. Dieser Abschnitt behandelt allgemeine Hardware- und Softwarethemen. Das Ziel dieses Abschnitts ist es, einen konsistenten Rahmen für die Entwicklung von Hardware und Software im gesamten System zu etablieren.

Große Unternehmen haben oft verschiedene Abteilungen, Kompetenzzentren, Plattform-Teams, Projektteams und Unterteams. In vielen Fällen wird ein System von verschiedenen Einheiten innerhalb desselben Unternehmens oder sogar von verschiedenen Unternehmen entwickelt. Es ist wichtig, hier eine klare Unterscheidung zwischen Einheiten zu treffen, die denselben Satz von Regeln verwenden, und Einheiten, die getrennt sind. Wenn sichergestellt werden kann, dass dieselben Prozesse und Regeln auf alle Einheiten angewendet werden, die ein System entwickeln, dann gelten die Anforderungen in Abschnitt 5 von Teil 5 und 6.

Dieser Abschnitt verlangt:

1. Geeignete Werkzeuge, Prozesse und Methoden auszuwählen und durchzusetzen, um die Hardware und Software innerhalb eines Systems konsistent zu entwickeln.
2. Sicherzustellen, dass Informationen aus höheren Ebenen, wie dem technischen Sicherheitskonzept und sogar dem funktionalen Sicherheitskonzept, innerhalb der Hardware- und Softwaredomänen verbreitet werden können.
3. Methoden bereitzustellen, um ein konsistentes Niveau bei der Bewertung der Qualität der Prozesse und Methoden zu gewährleisten, die zur Entwicklung von Hardware und Software verwendet werden.

Als Ergebnis dieses Abschnitts könnten Prozesse, Qualität, Teammanagement und Sicherheitspläne aktualisiert werden müssen.

### Hardware-Sicherheitsanforderungen

Als Nächstes müssen die Sicherheitsanforderungen für Hardware und Software geschrieben werden, die die Sicherheitsmechanismen auf Hardware- und Softwareebene beschreiben sollten. Die Hardware-Sicherheitsanforderungsspezifikation sollte Informationen enthalten wie:

- Wie Hardware-Elemente transiente Fehler abdecken,
- Wie tolerant die Sicherheitsmechanismen gegenüber externen Fehlern sind,
- Wie die Sicherheitsmechanismen interne und externe Fehler erkennen,
- Und möglicherweise andere Aspekte.

### Beispiel für Hardware-Sicherheitsanforderungen

Nehmen wir an, wir haben einen Sensor, der die Position des Lenkrads misst, im Fall eines Steer-by-Wire-Systems. Die Eigenschaften des Sensors könnten beinhalten, dass er ein analoges Signal liefert, das in ein digitales Signal umgewandelt werden kann, dass er minimale Winkeländerungen von 0,1 Grad erkennt, eine Genauigkeit von 0,01 Grad hat und dass ein Hardware-Reset des Sensors bis zu 5 Millisekunden dauern kann. Basierend auf diesen Eingaben ist unser Ziel, Sicherheitsmechanismen abzuleiten, die verhindern, dass verschiedene Fehler, die zur Verletzung von Sicherheitszielen führen können, auftreten.

### Implementierung von Sicherheitsmechanismen

Um festzustellen, welche Sicherheitsmechanismen erforderlich sind und wo sie benötigt werden, sollte eine Sicherheitsanalyse durchgeführt werden. Teil 5, Anhang D der ISO 26262, bietet Vorschläge für Sicherheitsmechanismen, die verwendet werden können, um dieselben Arten von Fehlern zu verhindern, zu erkennen und darauf zu reagieren, die Sicherheitsziele verletzen können.

### Erstellung der Hardware-Sicherheitsanforderungen

Die Erstellung der Hardware-Sicherheitsanforderungen sollte mit der Einbindung technischer Sicherheitsanforderungen beginnen. Jede technische Sicherheitsanforderung hat eine zugewiesene Zuordnung, ob sie sich auf Hardware, Software oder beides bezieht. Anforderungen, die der Hardware zugeordnet sind, müssen hardware-spezifische Aspekte wie Sicherheitsmechanismen, Eigenschaften, Ströme, Zeiten, Spannungen und Hardware-Diagnosen beschreiben.

Die Hardware-Sicherheitsanforderungsspezifikation sollte auch Informationen darüber enthalten, wie Sicherheitsmechanismen Fehler erkennen, welche Arten von Fehlern erkannt werden können und wie sie externe Fehler von anderen Elementen im System erkennen können.

### Überprüfung und Verifikation

Die Hardware-Sicherheitsanforderungen müssen gemäß dem Tailoring der Bestätigungsmaßnahmen überprüft werden. Wenn Ihre Hardware-Sicherheitsanforderungsspezifikation stabil ist, sollten Sie den Verifikationsprozess anwenden, der aus einer Reihe von Überprüfungen besteht und Berichte generiert. Diese Berichte sollten in Ihrem Sicherheitsfall aufbewahrt werden.

### Software-Sicherheitsanforderungen

Ähnlich wie bei der Hardware müssen auch die Software-Sicherheitsanforderungen spezifiziert und überprüft werden. In der Software-Sicherheitsanforderungsspezifikation sollten die software-spezifischen Aspekte der Sicherheitsmechanismen beschrieben werden. Dies umfasst Diagnosen beim Start des Sensors, Softwarepartitionen, Ausführungsreihenfolgen, Schnittstellen, Zeitverhalten und Methoden zur Fehlererkennung.

### Hardware- und Software-Architekturdesigns

Sowohl Hardware als auch Software haben Architekturdesigns und detaillierte Designs.

- **Hardware-Architekturdesign**: Stellt alle Hardwarekomponenten und ihre Interaktion miteinander dar.
- **Hardware-Detaildesign**: Zeigt die Interaktion zwischen den verschiedenen Hardwareteilen, die die Hardwarekomponenten ausmachen, auf der Ebene der elektrischen Schaltpläne.

Das Ziel des Hardware-Architekturdesigns ist es, eine Rückverfolgbarkeit zwischen Anforderungen und Design-Dokumenten zu schaffen. Das detaillierte Hardware-Design umfasst Schaltpläne, PCB-Layouts und andere visuelle Hilfsmittel.

### Software-Architekturdesign

Das Software-Architekturdesign basiert auf dem technischen Sicherheitskonzept und den Software-Sicherheitsanforderungen. Es sollte eine hierarchische Struktur, robuste und bidirektionale Verknüpfungen zwischen Software-Architekturdesign und Softwarekomponenten sowie Erklärungen zu statischen und dynamischen Aspekten wie Schnittstellen und Zeitverhalten umfassen.

### Fazit

Die Entwicklung von Hardware- und Software-Designs ist ein wichtiger Schritt zur Gewährleistung der funktionalen Sicherheit in der Automobilindustrie. ISO 26262 betont die Bedeutung der Gestaltung von Sicherheitsmaßnahmen und -mechanismen zur Erreichung der Sicherheitsziele. Durch die frühzeitige und sorgfältige Planung und Dokumentation dieser Designs kann die Integrität und Sicherheit des gesamten Systems gewährleistet werden.
