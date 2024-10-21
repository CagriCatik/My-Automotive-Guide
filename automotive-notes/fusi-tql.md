


# Tool Qualification Process nach ISO 26262 für Funktionale Sicherheit

## 1. **Einleitung**
In sicherheitskritischen Entwicklungsprozessen ist die Verwendung von Tools weit verbreitet, um die Effizienz und Qualität der Arbeit zu steigern. Wenn solche Tools jedoch bei der Entwicklung sicherheitskritischer Funktionen gemäß der Norm ISO 26262 eingesetzt werden, müssen sie qualifiziert werden, um sicherzustellen, dass sie keine systematischen Fehler in das Endprodukt einführen. Diese Dokumentation beschreibt den **Tool Qualification Process** und liefert spezifische Schritte, um sicherzustellen, dass die eingesetzten Werkzeuge die Anforderungen an die funktionale Sicherheit erfüllen.

## 2. **Zweck der Tool-Qualifikation**
Die ISO 26262 sieht vor, dass Werkzeuge, die in sicherheitskritischen Entwicklungsprozessen verwendet werden, potenzielle Fehlerquellen sein können. Der Tool Qualification Process dient dazu, das Vertrauen in diese Werkzeuge zu schaffen und sicherzustellen, dass sie den Entwicklungsprozess nicht negativ beeinflussen. Dies minimiert die Risiken, die durch potenziell fehlerhafte Werkzeuge entstehen könnten.

## 3. **Tool Classification**
Das erste Element der Tool-Qualifikation besteht darin, das Werkzeug zu klassifizieren. Die ISO 26262 definiert drei Tool Confidence Levels (TCL), abhängig vom Risiko, das das Tool bei einem Fehler darstellt.

- **TCL 1**: Geringes Risiko. Das Werkzeug wird zur Validierung oder Verifikation von Aktivitäten verwendet, deren Fehler keinen direkten Einfluss auf sicherheitskritische Systeme hat.
- **TCL 2**: Mittleres Risiko. Fehler im Werkzeug können potenziell Fehler im sicherheitskritischen System einführen, jedoch nicht direkt zu einem Sicherheitsrisiko führen.
- **TCL 3**: Hohes Risiko. Fehler im Werkzeug können direkt die Sicherheit des Systems gefährden und zu sicherheitskritischen Fehlern führen.

Die Einstufung in TCL bestimmt, wie intensiv das Werkzeug qualifiziert werden muss.

## 4. **Schritte zur Tool-Qualifikation**

### 4.1 **Tool Qualification Plan (TQP)**
Nach der Klassifikation wird ein Tool Qualification Plan erstellt. Dieser Plan definiert alle Aktivitäten, die erforderlich sind, um das Werkzeug zu qualifizieren, einschließlich:
- Zielsetzung der Tool-Qualifikation.
- Verantwortlichkeiten.
- Umfang der Tool-Nutzung im sicherheitskritischen Entwicklungsprozess.
- Geplante Verifikations- und Validierungsmaßnahmen.

### 4.2 **Tool Qualification Requirements**
Die Anforderungen an die Tool-Qualifikation variieren je nach TCL und umfassen:
- **Nachweis der funktionalen Korrektheit**: Das Tool muss auf verschiedenen Testebenen überprüft werden.
- **Dokumentation von Tool-Fehlern**: Alle bekannten Fehler und Probleme des Werkzeugs müssen dokumentiert und bewertet werden.
- **Nachvollziehbarkeit**: Es muss ein vollständiger Nachweis darüber geführt werden, wie das Tool in den Entwicklungsprozess integriert ist und welche Auswirkungen ein Fehler im Tool haben könnte.

### 4.3 **Validation & Verification (V&V)**
Die Tool-Validierung und -Verifikation umfasst folgende Schritte:
- **Testen des Tools**: Werkzeuge müssen unter realen Bedingungen getestet werden, um sicherzustellen, dass sie erwartungsgemäß funktionieren.
- **Simulation von Fehlerszenarien**: Mögliche Fehler, die durch das Werkzeug verursacht werden könnten, werden simuliert und ihre Auswirkungen auf die sicherheitskritischen Systeme bewertet.
- **Regressionstests**: Falls das Tool aktualisiert wird, sind Regressionstests erforderlich, um sicherzustellen, dass keine neuen Fehler eingeführt werden.

### 4.4 **Tool Qualification Report (TQR)**
Nach Abschluss des Qualifizierungsprozesses wird ein Tool Qualification Report erstellt. Dieser Bericht dokumentiert alle Schritte des Qualifizierungsprozesses und zeigt auf, dass das Tool den Anforderungen der ISO 26262 entspricht. Der Bericht enthält:
- Die Klassifikation des Tools (TCL).
- Die durchgeführten Tests und deren Ergebnisse.
- Eine Bewertung der Tool-Sicherheit.
- Maßnahmen zur Fehlervermeidung und -erkennung.

## 5. **Tool Monitoring und Änderungsmanagement**
Auch nach der Qualifikation müssen Werkzeuge kontinuierlich überwacht werden. Insbesondere bei Tool-Updates oder neuen Versionen ist ein **Änderungsmanagement** erforderlich, um sicherzustellen, dass keine neuen Risiken eingeführt werden.

## 6. **Zusammenfassung**
Die Qualifikation von Werkzeugen nach ISO 26262 ist ein wesentlicher Bestandteil des sicherheitskritischen Entwicklungsprozesses. Durch die Klassifikation, Validierung und kontinuierliche Überwachung der Werkzeuge wird das Risiko minimiert, dass systematische Fehler in sicherheitskritische Produkte eingeführt werden. Jedes Tool, das in einem sicherheitsrelevanten Kontext eingesetzt wird, muss die Anforderungen des Tool Qualification Process erfüllen, um die Integrität des Endprodukts zu gewährleisten.

## 7. **Rollen und Verantwortlichkeiten**
Die Verantwortung für die Tool-Qualifikation liegt typischerweise bei folgenden Rollen:
- **FuSi-Manager**: Verantwortlich für die Aufsicht und Einhaltung der funktionalen Sicherheitsanforderungen.
- **Entwickler**: Verantwortlich für die Durchführung der Validierungs- und Verifikationsaktivitäten des Werkzeugs.
- **Qualitätssicherungsteam**: Überwacht die korrekte Durchführung des Qualifizierungsprozesses und führt die abschließende Freigabe durch.

### 8. **Anhang**
- [**Software Tool Qualification in ISO26262**:](https://www.embitel.com/blog/embedded-blog/why-is-software-tool-qualification-indispensable-in-iso-26262-based-software-development)
- [**When and how to qualify tools according to ISO 26262**](https://www.btc-embedded.com/de/when-and-how-to-qualify-tools-according-to-iso-26262/)
