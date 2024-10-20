# SOVD – Service Oriented Vehicle Diagnostics

## Agenda

1. Motivation
2. The SOVD API
3. Access to Classic Diagnostics
4. The Standardization Project

## Motivation

Modern vehicles are equipped with High-Performance Computers (HPCs), running multiple applications on virtualized operating systems. This complex environment involves the functional contribution of Apps, Electronic Control Units (ECUs), and Backend systems. Software updates dynamically change the installation landscape, and Over-The-Air (OTA) updates enhance vehicle functionality post-Start of Production (SOP). The development lifecycle extends beyond SOP, necessitating seamless integration with Unified Diagnostic Services (UDS)-based diagnostic Backends.

### Why not UDS?

While UDS remains suitable for classic ECUs, it falls short of addressing the requirements of future systems. UDS lacks flexibility, relying on a static description of content. The byte-based nature of UDS does not align with the needs of Software-based systems. The SOVD system aims to read and filter structured logs, interpret environment data like stack traces, install and remove apps, update software, and interact with the complex software structure within the vehicle. Apps often use standard IT technologies (e.g., http/REST and JSON) for their interfaces, which UDS doesn't inherently support.

## SOVD Standardization

The primary task of diagnostics is to provide a uniform interface for essential data analysis and maintenance of (ECU) software and hardware throughout development, production, and service. Diagnostic processes must begin during development, a necessity amplified by next-generation SW architectures where development persists post-SOP.

<img src="image/sovd/1710192960425.png" alt="drawing" style="width:400px;"/>

## SOVD API (Next Generation Diagnostics)

### Remote

1. **SOTA (Software Over-The-Air) Updates:** Enabling seamless software updates remotely.
2. **Backend Evaluation:** Evaluating and diagnosing the vehicle's backend system.
3. **Fleet Management:** Monitoring and managing vehicle fleets.
4. **Remote Assistance:** Providing remote assistance, including on-roadside support.
5. **Activation of Functionality:** Enabling customers to activate additional functionalities as paid services.

### In-Vehicle

1. **Monitoring:** Identifying and addressing sporadic errors within the vehicle.
2. **Predictive Maintenance:** Anticipating and addressing maintenance needs proactively.
3. **Health Status Access:** Providing access to the health status of the vehicle's systems.
4. **Proximity Services:** Services related to the vehicle's proximity and environment.

### Workshop / Service

1. **Manufacturing (e.g., EOL):** Diagnostics during manufacturing, including End-Of-Line testing.
2. **Emission Check and ePTI (Periodic Technical Inspection):** Ensuring compliance with emissions and regulatory standards.
3. **Identical Service for All Access Possibilities:** A consistent diagnostic service across various access points.

### No Implementation

The SOVD API aims to standardize diagnostic content and transfer it to ISO, ensuring uniformity across different systems.

## Use Case Overview

- **Data Evaluation Responsibility:** The consumer is responsible for evaluating data.
- **Key Value Pairs:** Data is represented using key-value pairs (Identifier [e.g., type], Value [e.g., structure]).
- **Physical Level Data:** Data is presented on the physical level.
- **SI Unit Inclusion:** Data includes the System International (SI) unit for measurement.
- **Provider Language:** Provider language is in en_GB (translation key for client applications available).
- **Service Independence:** Data looks service-independent and equal across different diagnostic scenarios.

<img src="image/sovd/1710192499159.png" alt="drawing" style="width:400px;"/>

## Classic Diagnostic Adapter

1. Domains: Three domains - ECU Level, HPC Level, Classic Diagnostic Adapter.
2. Communication Protocols: OBD, WiFi, 4G/5G, CAN.
3. Diagnostic Functions: In-Vehicle, Proximity, Remote.
4. UDS Stack: Present in ECU and HPC levels.
5. Encapsulation of Classical:
   1. Stateful communication
   2. Signal-based communication
   3. Usage of diagnostic protocols (e.g., UDS)
6. Easy Migration Between Classical and Web-based Access

<img src="image/sovd/1710192888048.png" alt="drawing" style="width:700px;"/>

## HPC Diagnostics

1. HPC Multi-Core μP Hardware
2. Adaptive Platform: Utilizing AUTOSAR for benefits such as reuse of diagnostic functions, communication standards, update and configuration management, identity and access management, safety, and security standards.
3. HPC Diagnostics Overview:
   - UDS, UDS on REST, SOVD
   - Technology Change: Moving from static offline descriptions to dynamic, API-based access.
   - Uniform API for accessing Classic, Adaptive, and non-AUTOSAR entities in the vehicle.

**Kurzfassung:**

Dieser Beitrag bietet einen detaillierten Überblick über die Historie der Fahrzeugdiagnose und einen Ausblick auf aktuelle Entwicklungen und zukünftige Trends in diesem Bereich. Es werden die Entwicklungen in der Fahrzeug-Elektronik- und Mechatronik sowie ihre daraus resultierenden Möglichkeiten beleuchtet, einschließlich aktueller Entwicklungen und ihrer prototypischen Umsetzung.

**1. Historie:**

Die Historie der Fahrzeugdiagnose reicht von den Anfängen mit Blinkcodes an proprietären Diagnosekupplungen über spezifische Protokolle von vernetzten Steuergeräten bis hin zu standardisierten Systemen wie KWP2000 und dem aktuellen Stand der Technik, UDS "Unified Diagnostic Services". UDS, als ISO-Standard im Jahr 2006 veröffentlicht, erfährt kontinuierliche Erweiterungen, insbesondere im Bereich Sicherheit. Die 3. Edition wurde kürzlich mit bedeutenden Erweiterungen im Sicherheitsbereich veröffentlicht.

**2. Trends:**

Die Fahrzeugentwicklung hat sich von einem abgeschlossenen System zu einem kontinuierlich weiterentwickelten, IT-technologisch anspruchsvollen System gewandelt. Neue Trends umfassen den zunehmenden Einsatz leistungsstarker Mikroprozessor-Systeme, schnellere Release-Zyklen, erhöhte Anforderungen an Datenschutz und Sicherheit sowie neue Geschäftsmodelle wie die Nachrüstung von Fahrzeugfunktionen. Auch die Use Cases für Diagnose entwickeln sich schnell, einschließlich drahtloser Diagnose und Remote-Diagnose.

**3. SOVD – Gesamtziele:**

Die Service-orientierte Fahrzeugdiagnose (SOVD) strebt eine zuverlässige Diagnose von modernen Fahrzeugen mit Hochleistungsrechnern und klassischen Steuergeräten sowie das Software-Update dieser Fahrzeuge an. Die Ziele umfassen ein fahrzeugübergreifendes API für Diagnose und Software-Update, Konsistenz für neue und traditionelle Systeme, Einsatzszenarien für verschiedene Fahrzeugzugänge, selbstbeschreibende APIs und die Auswahl bestehender Technologien ohne Erfindung neuer.

**4. SOVD: native und classic:**

Innerhalb des Fahrzeugs arbeiten verschiedene Softwarekomponenten und Geräte mit Prozessoren zusammen, um eine ganzheitliche Diagnose zu ermöglichen. Anfragen werden entweder nativ an Hochleistungsrechner oder klassisch an UDS-Steuergeräte gerichtet, wobei der Classic Diagnostic Adapter als Vermittler fungiert.

**5. Classic Diagnostic Adapter:**

Der Classic Diagnostic Adapter übersetzt SOVD-Anfragen an UDS-fähige Steuergeräte und überwacht die Kommunikation sowie unterschiedliche Sessions. Dieser Adapter extrahiert und übersetzt die Daten gemäß dem UDS-Protokoll und erfordert eine formale Beschreibung des Diagnoseumfangs jedes Steuergeräts. Eine Herausforderung liegt in der zustandsabhängigen Natur bestimmter UDS-Protokolldienste. Der Adapter muss alle relevanten Diagnose-Services unterstützen und enthält einen fahrzeugtauglichen UDS-Diagnose-Kernel.

**6. Ein SOVD2UDS Prototyp für ein reales Fahrzeug**

**6.1 Ziele**

Die Entscheidung über die Basis-Technologie für SOVD ist in der ASAM Arbeitsgruppe zum Zeitpunkt der Beitragserstellung noch nicht gefallen. Die vorgestellte prototypische Umsetzung basiert auf http/REST, da Mercedes und Vector dies zu Beginn des Projekts als vielversprechend erachteten. Hauptziele der Umsetzung waren die Beantwortung von Fragen zur Performance, Vor- und Nachteilen der Technologie, dem Benutzererlebnis eines Diagnose-Testers, dem Umgang mit zustandsabhängigen UDS-Services und kritischen Pfaden einer serientauglichen Umsetzung.

**6.2 Aufbau und Architektur**

Die Abbildung zeigt den Aufbau und die Architektur des SOVD2UDS Prototyps der Vector Informatik GmbH. Der Prototyp läuft auf einem NVIDIA Jetson TX2 Board, das über DoIP mit einem realen Fahrzeug kommuniziert. Die Komponenten umfassen eine standardisierte D-PDU API für CAN oder DoIP, einen fahrzeugtauglichen Diagnose Kernel (DTLX), einen SOVD2UDS Adapter und eine frei verfügbare C++ REST Bibliothek.

**6.3 REST in aller Kürze**

REST wird in der Regel auf http umgesetzt und ermöglicht eine browserbasierte Nutzung. Eine Ressource steht im Mittelpunkt, hierarchisch organisiert, und der Aufruf erfolgt über eine Http-Methode (GET, POST, PUT oder DELETE). REST ist zustandslos, da alle erforderlichen Informationen in einer Anfrage enthalten sind.

**6.4 REST in der Praxis**

Die Screenshots zeigen einen Web-Browser, der aktive Diagnose-Informationen und identifizierende Diagnose-Dienste vom Steuergerät abfragt. Der SOVD2UDS Adapter übersetzt die Anfragen und stellt die Antworten graphisch dar. Die REST-API ermöglicht eine hierarchische Abbildung der Fahrzeugstruktur und die dynamische Anpassung an verschiedene Diagnoseinhalte, Rechte und Rollen.

**6.5 Kennzahlen**

Die Performance-Kennzahlen erfüllen oder übertreffen die Erwartungen. Der Speicherverbrauch für die gesamte Baureihe beträgt 110 MB RAM. Die Lade- und Startzeit des Prototyps ist akzeptabel, und die Laufzeiten für verschiedene Diagnose-Services sind im Bereich von Millisekunden.

**6.6 Technologiebewertung http/REST für die Diagnose**

Die Erfahrungen mit http/REST sind positiv, da die Technologie eine elegante Abbildung der Fahrzeughierarchie ermöglicht. Die Selbstbeschreibung über HATEOAS bietet Navigationsmöglichkeiten, und OAuth2 eignet sich für ressourcenspezifische Zugriffsregeln. Es gibt viele frei verfügbare Werkzeuge für eine einfache Implementierung, aber es gibt auch Nachteile wie den Overhead bei der Übertragung einzelner UDS Dienste.

**6.7 Fazit**

Die Diagnose muss sich an moderne Fahrzeugarchitekturen und Hochleistungsrechner anpassen. Die Prototypumsetzung von Mercedes und Vector mit http/REST zeigt positive Ergebnisse. Die Technologie ist fahrzeugtauglich, bietet neue Möglichkeiten und hält den Ressourcenverbrauch in Grenzen. Die kontinuierliche Weiterentwicklung von Diagnosesystemen erfordert den Einsatz moderner IT-Technologien, und der Prototyp erfüllt erfolgreich die gesteckten Projektziele.
