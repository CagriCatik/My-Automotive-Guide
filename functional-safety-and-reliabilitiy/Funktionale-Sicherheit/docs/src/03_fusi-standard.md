# Einführung in die funktionale Sicherheit und ISO 26262

Funktionale Sicherheit ist ein entscheidender Aspekt der Automobiltechnik, der sicherstellt, dass elektronische und elektrische Systeme unter allen Bedingungen zuverlässig und sicher funktionieren. ISO 26262 ist der internationale Standard für funktionale Sicherheit in der Automobilindustrie und bietet einen strukturierten Ansatz zur Identifizierung, Verwaltung und Minderung von Risiken, die mit diesen Systemen verbunden sind.

## Historischer Kontext

Die Reise der funktionalen Sicherheit in der Automobilindustrie begann in den 1960er Jahren. In dieser Zeit wurden elektromechanische und elektrische Steuerungssysteme in verschiedenen Branchen eingesetzt. Die Entdeckung grundlegender Bauteile wie Transistoren, Dioden und Trioden zwischen 1940 und 1960 führte zur Entwicklung anspruchsvollerer elektronischer Systeme. Die weltweit erste kommerzielle Transistor-Produktionslinie wurde am 1. Oktober 1951 im Western Electric Plant in Pennsylvania eingerichtet, was den Beginn der Massenproduktion von Halbleitern in verschiedenen Sektoren markierte.

In den 1970er Jahren wurden elektronische Bauteile komplexer, und die Fehlermodi und deren Auswirkungen waren nicht gut verstanden. Dieses mangelnde Verständnis führte zu mehreren Unfällen, was zur Schaffung von Gesetzen und Standards zur Verbesserung der Sicherheit führte. Der "Occupational Safety and Health Act of 1970" in den USA und der "Health and Safety at Work Act of 1974" im Vereinigten Königreich waren bedeutende Meilensteine in dieser Hinsicht. Die Seveso-Katastrophe im Jahr 1976, ein Chemieunfall, veranlasste die Europäische Union, Sicherheitsstandards für elektronische, elektrische und elektromechanische Komponenten einzuführen.

Eines der ersten bedeutenden Dokumente zur Standardisierung der funktionalen Sicherheit war die deutsche VDE 0801, die 1990 eingeführt wurde. Dieses Dokument legte den Grundstein für zukünftige Standards, einschließlich der 1998 entwickelten IEC 61508, die als Basis für ISO 26262 diente.

## ISO 26262: Struktur und Umfang

ISO 26262 wurde erstmals 2011 veröffentlicht und befasste sich speziell mit der funktionalen Sicherheit in der Automobilindustrie. Die zweite Ausgabe, die 2018 veröffentlicht wurde, führte mehrere Aktualisierungen ein und erweiterte den Anwendungsbereich. Der Standard umfasst zwölf Teile, von denen jeder ein eigenständiges Dokument ist, das verschiedene Bereiche der funktionalen Sicherheit im Automobilsektor abdeckt. Obwohl er rechtlich als Empfehlung gilt und nicht formal vor Gericht geltend gemacht werden kann, wird die Einhaltung von ISO 26262 zunehmend zu einer Anforderung für die Fahrzeugzulassung durch die UNECE.

ISO 26262 gilt für verschiedene Fahrzeugtypen, einschließlich Personenkraftwagen, Busse, Lkw, Anhänger, Sattelanhänger und Motorräder. Er bietet Methoden zur Gefahrenanalyse und Risikobewertung, einschließlich einer risikospezifischen Klassifizierungsmethodik. Der Schwerpunkt liegt auf der Verwaltung von Risiken, die durch Ausfälle in elektrischen und elektronischen Systemen verursacht werden, und enthält über 750 Anforderungen, die an spezifische Projekte angepasst werden können.

## Entwicklungsmodelle und Methoden

Das V-Cycle-Modell wird traditionell für die Entwicklung nach ISO 26262 verwendet. Agile Methoden können jedoch auch integriert werden, um Flexibilität im Entwicklungsprozess zu bieten. Der Standard umfasst eine Reihe von Fahrzeugen, schließt jedoch Maschinen aus. Dennoch bietet er eine Schnittstelle für die Interaktion mit dem Maschinenbereich, die in Teil 8 (Unterstützende Prozesse), Klausel 15, detailliert beschrieben ist.

Für landwirtschaftliche Fahrzeuge, die nicht als Straßenfahrzeuge gelten, ist ISO 25119 der relevante funktionale Sicherheitsstandard. Dieser Standard, der 2018 eingeführt wurde, behandelt die speziellen Sicherheitsanforderungen von landwirtschaftlichen Maschinen. Ein Beispiel für die Schnittstelle zwischen ISO 26262 und Maschinenstandards ist im Kontext von Müllfahrzeugen zu finden, bei denen das Fahrgestell als Lkw nach ISO 26262 behandelt werden kann, während der Aufbau den Maschinenstandards entsprechen muss.

## Normativer und informativer Inhalt

ISO 26262 ist in normativen und informativen Inhalt unterteilt. Normativer Inhalt umfasst obligatorische Anforderungen, die angewendet und im Sicherheitsnachweis dokumentiert werden müssen, um die Einhaltung des Standards zu beanspruchen. Informative Inhalte bieten Leitlinien zum Verständnis und zur effektiven Umsetzung der normativen Teile.

Der Standard enthält Tabellen mit Methoden, die als alternativ (1a, 1b, 1c, usw.) und aufeinanderfolgend (1, 2, 3, usw.) kategorisiert sind. Aufeinanderfolgende Einträge sind gemäß der Empfehlung basierend auf ASIL (Automotive Safety Integrity Level) obligatorisch, während alternative Einträge projektspezifisch angepasst werden können. Jede Methode wird basierend auf ihrer ASIL-Bewertung empfohlen: hoch empfohlen, empfohlen oder keine Empfehlung.

## Anpassung und Begründung

Der Sicherheitsnachweis muss Argumente für die Anpassung der in ISO 26262 aufgeführten Methoden enthalten. Wenn empfohlene Methoden durch andere nicht aufgeführte Methoden ersetzt werden, muss eine Begründung geliefert werden, um die Einhaltung der entsprechenden Anforderung nachzuweisen. Wenn eine ASIL in Klammern angegeben ist, wird die entsprechende Unterklausel als Empfehlung und nicht als Anforderung für diese ASIL betrachtet. Dies unterscheidet sich von der Klammernotation, die sich auf die ASIL-Dekomposition bezieht.

## Besondere Überlegungen für verschiedene Fahrzeugtypen

Teile 1 bis 11 von ISO 26262 gelten für Motorräder, es sei denn, spezifische Anforderungen werden in Teil 12, der motorradspezifische Aspekte behandelt, überschrieben. Anforderungen, die im Standard mit (T&B) gekennzeichnet sind, sind spezifisch für Lkw und Busse und nicht für Personenkraftwagen oder Motorräder erforderlich.

# Quizfragen

1. **Was war eines der ersten bedeutenden Dokumente zur Standardisierung der funktionalen Sicherheit und wann wurde es eingeführt?**
2. **Welche Entwicklungsmodelle werden traditionell für ISO 26262 verwendet, und welche anderen Methoden können integriert werden?**
3. **Erklären Sie den Unterschied zwischen normativen und informativen Inhalten in ISO 26262.**
4. **Wie adressiert ISO 26262 die Schnittstelle mit dem Maschinenbereich?**
5. **In welche Kategorien sind die Methoden in den Tabellen von ISO 26262 unterteilt und wie sollen sie angewendet werden?**
6. **Was muss im Sicherheitsnachweis enthalten sein, wenn hoch empfohlene Methoden durch andere nicht aufgeführte Methoden ersetzt werden?**
7. **Welche Teile von ISO 26262 gelten für Motorräder und welche speziellen Überlegungen gibt es für Lkw und Busse?**

Das Verständnis dieser Fragen stellt sicher, dass Sie eine solide Kenntnis der Struktur, Anwendung und Bedeutung von ISO 26262 zur Verbesserung der funktionalen Sicherheit in der Automobilindustrie haben.
