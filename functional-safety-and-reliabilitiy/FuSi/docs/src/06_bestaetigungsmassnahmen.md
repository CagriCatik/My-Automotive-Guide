
## Bestätigungsmaßnahmen gemäß ISO 26262

### Einführung

ISO 26262 ist ein kritischer Standard für die funktionale Sicherheit in der Automobilindustrie. Bestätigungsmaßnahmen, die Bestätigungsreviews, funktionale Sicherheitsaudits und funktionale Sicherheitsbewertungen umfassen, sind unerlässlich, um sicherzustellen, dass ein Produkt die funktionalen Sicherheitsanforderungen des Standards erfüllt. Dieses Tutorial bietet eine detaillierte Erkundung dieser Bestätigungsmaßnahmen, um ein klares Verständnis jedes Konzepts zu gewährleisten.

### Bestätigungsreviews

**Definition und Zweck**

Gemäß ISO 26262 ist ein Bestätigungsreview eine formale Prüfung eines Arbeitsergebnisses, um sicherzustellen, dass es ausreichende und überzeugende Nachweise für seinen Beitrag zur Erreichung der funktionalen Sicherheit liefert. Diese Prüfung berücksichtigt die entsprechenden Ziele und Anforderungen des Standards.

**Durchführung von Bestätigungsreviews**

- **Arbeitsergebnisse**: Ein Bestätigungsreview kann für verschiedene Arbeitsergebnisse durchgeführt werden, einschließlich Dokumenten, Quellcode und anderen Artefakten.
- **Leitfäden**: Der Überprüfungsprozess verwendet Leitfäden wie Checklisten.
- **Festgelegte Regeln**: Es müssen festgelegte Regeln für die Interpretation der Ergebnisse vorhanden sein, einschließlich Kriterien für Bestehen und Nichtbestehen, Relevanz für das Projekt und den Prozess der Durchführung des Reviews.
- **Häufigkeit**: Bestätigungsreviews können mehrfach während des Lebenszyklus eines Arbeitsergebnisses durchgeführt werden.
- **Unabhängigkeit**: Um Objektivität zu gewährleisten, erfordert der Überprüfungsprozess ein gewisses Maß an Unabhängigkeit. Details zu den Unabhängigkeitsstufen sind in Teil 2 des Standards zu finden.

**Unabhängigkeitsstufen**

- **I3 Unabhängigkeit**: Für die höchste Unabhängigkeitsstufe sollten die Prüfer aus verschiedenen Abteilungen, Bereichen oder sogar unterschiedlichen Unternehmen stammen. Es ist eine bewährte Praxis, externe Partner zusammen mit internen Experten einzubeziehen, um die Unabhängigkeit zu gewährleisten.

### Funktionale Sicherheitsaudits

**Definition und Zweck**

Ein funktionales Sicherheitsaudit untersucht einen implementierten Prozess, um dessen Einhaltung der Prozessziele in Bezug auf die funktionale Sicherheit zu überprüfen.

**Umfang von Funktionalen Sicherheitsaudits**

- **Prozessprüfung**: Audits überprüfen Prozesse wie das Schreiben, Verfolgen und Überprüfen von Anforderungen; das Entwickeln von Testplänen; das Durchführen von Tests; die Durchführung statischer Code-Analysen; das Erstellen von Schätzungen; das Analysieren und Beheben von Problemen; das Erkennen und Implementieren von Änderungen und mehr.
- **Kombination mit anderen Audits**: Funktionale Sicherheitsaudits können mit anderen Audits kombiniert werden, wie z. B. ASPICE (Automotive SPICE) Audits.
- **Unabhängigkeit**: Funktionale Sicherheitsaudits erfordern auch ein gewisses Maß an Unabhängigkeit, typischerweise durch Teams, die Mitglieder enthalten, die nicht direkt für die geprüften Prozesse verantwortlich sind.

### Funktionale Sicherheitsbewertungen

**Definition und Zweck**

Eine funktionale Sicherheitsbewertung bewertet, ob die funktionale Sicherheit des Produkts erreicht wird, und gibt Empfehlungen zum erreichten Sicherheitsniveau.

**Durchführung von Funktionalen Sicherheitsbewertungen**

- **Sicherheitsplan**: Bewertungen werden basierend auf dem Sicherheitsplan des Projekts durchgeführt.
- **Umfang**: Bewertungen beurteilen alle Aspekte der funktionalen Sicherheit, einschließlich Arbeitsergebnissen, Sicherheitsmaßnahmen, Prozessen und Qualitätsaspekten.
- **Sequenzielle Bewertungen**: Funktionale Sicherheitsbewertungen können in Sequenzen durchgeführt werden, beginnend mit den früheren Phasen eines Projekts und fortschreitend mit dem Fortschritt des Projekts.
- **ASIL-Betrachtungen**: Projekte mit mindestens einem Sicherheitsziel, das mit ASIL C oder ASIL D bewertet ist, müssen einer funktionalen Sicherheitsbewertung unterzogen werden. Für andere ASILs (A und B) wird dies empfohlen oder ist optional. QM (Qualitätsmanagement) hat keine spezifischen Anforderungen für funktionale Sicherheitsbewertungen gemäß dem Standard.

**Bewertungsmethodik**

- **Checklisten**: Bewertungen verwenden Checklisten, die auf den Anforderungen des Standards basieren.
- **Klauselbewertung**: Die Bewertung prüft, ob die Ziele jeder Klausel des Standards erfüllt sind. Die Bewertung jeder Klausel basiert auf den Zielen, die aus den Anforderungen dieser Klausel abgeleitet sind.

### Schlussfolgerung zu den Bestätigungsmaßnahmen

Die in ISO 26262 beschriebenen Bestätigungsmaßnahmen stellen sicher, dass alle Arbeitsergebnisse, Prozesse und Projekte den funktionalen Sicherheitsanforderungen entsprechen. Audits und Bewertungen sind entscheidend, um die Einhaltung zu überprüfen und sicherzustellen, dass das Produkt produziert und verkauft werden kann und die Sicherheitsstandards erfüllt. Alle Ergebnisse, Artefakte und Sicherheitsargumentationen sind Teil des Sicherheitsnachweises, der vor Produktionsbeginn bewertet werden muss.

### Quizfragen

1. **Was ist der Zweck eines Bestätigungsreviews gemäß ISO 26262?**

   - a) Um sicherzustellen, dass das Produkt den Marketinganforderungen entspricht.
   - b) Um Arbeitsergebnisse formal auf die Einhaltung der funktionalen Sicherheitsziele zu überprüfen.
   - c) Um die finanzielle Rentabilität zu überprüfen.
   - d) Um die Kundenzufriedenheit zu bewerten.
2. **Wie oft können Bestätigungsreviews an einem Arbeitsergebnis durchgeführt werden?**

   - a) Nur einmal.
   - b) Zweimal während des Produktlebenszyklus.
   - c) Mehrfach während des Lebenszyklus.
   - d) Nur während der Anfangsphase.
3. **Was erfordert die Unabhängigkeitsstufe I3 bei einem Bestätigungsreview?**

   - a) Prüfer aus dem gleichen Team.
   - b) Prüfer aus verschiedenen Abteilungen, Bereichen oder Unternehmen.
   - c) Prüfer aus der gleichen Abteilung.
   - d) Prüfer nur von der Kundenseite.
4. **Was ist der primäre Fokus eines funktionalen Sicherheitsaudits?**

   - a) Finanzielle Leistung.
   - b) Marketingstrategien.
   - c) Untersuchung von implementierten Prozessen in Bezug auf die funktionalen Sicherheitsziele.
   - d) Kundenfeedback.
5. **In welchen Fällen ist eine funktionale Sicherheitsbewertung gemäß ISO 26262 obligatorisch?**

   - a) Für alle Projekte.
   - b) Für Projekte mit mindestens einem Sicherheitsziel, das mit ASIL C oder ASIL D bewertet ist.
   - c) Für Projekte mit QM.
   - d) Für Projekte nur mit ASIL A.
6. **Was ist im Bericht zur funktionalen Sicherheitsbewertung enthalten?**

   - a) Marketingstrategien.
   - b) Finanzanalyse.
   - c) Empfehlung zur Annahme, bedingten Annahme oder Ablehnung des Projekts.
   - d) Kundenfeedback.

Diese Fragen sollen Ihr Verständnis der in dieser Sitzung zu Bestätigungsmaßnahmen gemäß ISO 26262 behandelten Konzepte testen.
