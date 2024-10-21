# Service Orientierte Vehicle Diagnostics

Die Service-Oriented Vehicle Diagnostics (SOVD) ist ein Standard, der eine API zur Diagnose und Kommunikation mit softwarebasierten Fahrzeugen definiert. Er ermöglicht einen einheitlichen Zugriff auf den Diagnoseinhalt von High-Performance Computers (HPCs), zugehörigen Anwendungen und klassischen Electronic Control Units (ECUs). SOVD markiert einen Übergang von der Hardware-Diagnose zur integrierten Diagnose sowohl von Hardwarekomponenten als auch der darauf laufenden Software. Diese Umstellung beinhaltet den Wechsel von einem statischen Ansatz, basierend auf dem Unified Diagnostic Services (UDS) Protokoll, zu dynamischen Anwendungsfällen. Darüber hinaus passt sich SOVD an neue Konnektivitätstechnologien an, indem es Over-the-Air (OTA) Fernzugriff über HTTP/REST ermöglicht.

### Schlüsselpunkte zu ASAM SOVD:

- **Zweck**: SOVD definiert, wie die Fahrzeugdiagnose über RESTful HTTP API im kommenden Jahrzehnt aussehen wird.
- **Flexibilität**: Es handelt sich um einen flexiblen Standard, der der zunehmenden Komplexität von Fahrzeugen im Übergang zum autonomen Fahren gerecht wird.
- **Diagnosefokus**: Erweitert von der Identifizierung von Hardwarefehlern zur Analyse von Softwareproblemen und berücksichtigt die dynamische Natur des Fahrzeuginhalts.
- **API-Entwicklung**: Basierend auf HTTP/REST, JSON und OAuth konzentriert sich SOVD auf die Entwicklung einer API für Diagnosezwecke und Softwareupdates.
- **Implementierungspartner**: Diskussionen zur Implementierung begannen mit AUTOSAR und umfassen verschiedene Automobilunternehmen wie AUDI AG, BMW AG, Mercedes-Benz Group AG, Ford Motor Company und andere.

### Entwicklung von ASAM SOVD:

- **Veröffentlichung**: Die erste Version von ASAM SOVD v1.0.0 wurde am 30. Juni 2022 veröffentlicht.
- **Folgeprojekt**: Ein nachfolgendes Projekt ist geplant, um zusätzliche Anforderungen und Anwendungsfälle anzugehen, die aufgrund ihrer Komplexität nicht in der ersten Version umgesetzt werden konnten.

ASAM SOVD spielt eine entscheidende Rolle in der modernen Fahrzeugdiagnose, indem er einen standardisierten Ansatz bietet, der dem sich entwickelnden Umfeld softwaregesteuerter Fahrzeuge gerecht wird und gleichzeitig die Kompatibilität mit bestehenden Technologien und Methoden in der Automobilindustrie sicherstellt.

![1710057765444](image/209_SOVD/1710057765444.png)


# Herausforderungen und Ziele von ASAM SOVD

## Herausforderungen:

1. **Kompatibilität mit HPCs und Apps:** Die statische Struktur von ODX und UDS erschwert die Diagnose von HPCs und Apps im Auto, da native Apps andere Schnittstellen und Datenformate nutzen.
2. **Flexibilität und Geschwindigkeit:** Die traditionelle UDS-basierte Diagnose erfordert eine statische Offline-Beschreibung, was im Widerspruch zur schnellen Integration neuer Software steht.
3. **Statische Identifikation:** Die Verwendung statischer Identifier erschwert flexible Änderungen an der Kommunikationsmatrix, was der agilen Integration neuer Software im Auto entgegensteht.
4. **Integration klassischer Steuergeräte:** Die Integration von UDS-basierter Diagnose in die Software-orientierte Fahrzeugarchitektur (SOVD) stellt eine weitere Herausforderung dar.

## Ziele:

1. **Einheitliches API:** Entwicklung eines API für Diagnose und Software-Updates, das sowohl für neue Systeme als auch traditionelle Sensor-/Aktor-Systeme geeignet ist.
2. **Einsatzszenarien:** Proximal, In-Vehicle und Remote-Diagnose sollen unterstützt werden, um verschiedene Anwendungsfälle abzudecken.
3. **Selbstbeschreibendes API:** Schaffung eines API, das auch ohne externe Beschreibungsdatei funktioniert, aber dennoch die Möglichkeit bietet, variantenübergreifende Prüfabläufe zu erstellen.
4. **Nutzung bestehender Technologien:** Auswahl und Kombination geeigneter Technologien ohne Erfindung neuer Technologien als explizites Ziel.

## Anwendungsfälle:

1. **Proximal-, In-Vehicle- und Ferndiagnose:** ASAM SOVD unterstützt diese drei Hauptanwendungsfälle mit verschiedenen Operationen auf Ressourcen wie Messwerten, Ereignisspeichern, Parametern etc.
2. **Selbstbeschreibung von Ressourcen:** Anfragen zur Selbstbeschreibung einer Ressource ermöglichen es, den verfügbaren Diagnoseumfang abzurufen, abhängig von der Rolle des Anfragenden.
3. **Nativ vs. Klassisch:** Unterscheidung zwischen nativer SOVD für Hochleistungsrechner und klassischem Diagnoseadapter für UDS-Steuergeräte zur nahtlosen Integration verschiedener Systeme.

## Standardisierung:

1. **Einheitliche API:** ASAM SOVD zielt darauf ab, eine einheitliche API für neue Systeme sowie traditionelle Sensor-/Aktor-Diagnosen zu spezifizieren.
2. **Technologiebasierte Lösungen:** Die API basiert auf einem http/REST-Ansatz und unterstützt die Suche nach Inhalten zur Vermeidung externer Datenspezifikationen.
3. **Offline-Dokumentation:** Mechanismen für Offline-Dokumentation und -Spezifikation sind vorhanden, um Entwicklungs-, Produktions- und After-Sales-Prozesse zu unterstützen.

Diese strukturierte Dokumentation bietet einen Überblick über die Herausforderungen, Ziele, Anwendungsfälle und Standardisierungsbemühungen von ASAM SOVD im Kontext der Fahrzeugdiagnose und Software-Updates.



### Unterschiede zwischen UDS und SOVD

### Hintergrund

Beim Vergleich der Unified Diagnostic Services (UDS) mit der Service-Oriented Vehicle Diagnostics (SOVD) ist es wichtig, die grundlegenden Unterschiede in ihren Ansätzen zur Interpretation und Handhabung diagnostischer Daten zu verstehen.

### UDS Überblick

- **Interpretation diagnostischer Daten**:
  - UDS-Anfragen/Antworten basieren auf statischen diagnostischen Daten zur Interpretation.
- **Status-Handhabung**:
  - Verwendet Statusfilter, Fehlerbeschreibungen und DTC-Interpretationen.
- **Kommunikation**:
  - Nutzt ein standardisiertes Adressierungssystem und HTTP-Methoden.

### SOVD Überblick

- **Interpretation diagnostischer Daten**:
  - Selbstständig und anpassungsfähig in dynamischen Umgebungen, ohne statische Daten zu benötigen.
- **Status-Handhabung**:
  - Verwendet eigenständige Statusfilter, Fehlerbeschreibungen und Statusmasken.
- **Kommunikation**:
  - Nutzt HTTP-Methoden mit universell gültigen Semantiken für die Kommunikation.

### Hauptunterschiede

1. **Dateninterpretation**:
   - UDS basiert auf statischen diagnostischen Daten, während SOVD selbstständig und dynamisch ist.
2. **Status-Handhabung**:
   - UDS verwendet standardisierte Statusfilter, während SOVD eigenständige Mechanismen einsetzt.
3. **Kommunikationsprotokoll**:
   - UDS nutzt ein strukturiertes Adressierungssystem, während SOVD HTTP-Methoden mit universellen Semantiken verwendet.

### Fazit

Zusammenfassend liegen die Hauptunterschiede zwischen UDS und SOVD in ihrem Ansatz zur Interpretation von diagnostischen Daten, der Status-Handhabung und den Kommunikationsprotokollen. Während UDS auf statischen Daten und standardisierten Filtern basiert, ist SOVD selbstständig, anpassungsfähig in dynamischen Umgebungen und nutzt HTTP-Methoden für die Kommunikation.

Für weitere Details zu den technischen Aspekten von SOVD und seiner Abgrenzung von UDS verweisen Sie auf die bereitgestellten Ressourcen.
