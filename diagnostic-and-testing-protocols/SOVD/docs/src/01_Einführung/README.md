# Neue Perspektiven auf Fahrzeugdiagnose

## Service-orientierte Fahrzeugdiagnostik (SOVD)

Die Abkürzung SOVD steht für Service Oriented Vehicle Diagnostic und repräsentiert eine Standardisierung innerhalb des ASAM e.V. (Verband für Normung der Automatisierungs- und Messtechnik) in der Version 1.0.0. Diese Norm definiert eine einheitliche API (Application Programming Interface) für die Diagnose von Fahrzeugen, die sowohl Hochleistungscomputern als auch traditionellen Steuergeräten umfasst. Dabei ermöglicht SOVD den Zugriff auf die Steuergeräte lokal am Fahrzeug ("Proximity"), im Fahrzeug selbst ("In-Vehicle") oder über die Cloud ("Remote"). Die Anwendungsfälle reichen dabei vom Entwicklungsprozess über die Produktion bis hin zum Betrieb und After-Sales-Service. SOVD nutzt moderne Webtechnologien, wobei die API auf dem HTTP-Protokoll basiert und den REST-Prinzipien folgt. Die Übertragung der Daten erfolgt in Form von JSON-codierten Datenstrukturen.

## Die Triebfedern hinter SOVD

### Aktuelle Vorteile von SOVD

Bisher erfolgt die Fahrzeugdiagnose in der Regel über UDS (Unified Diagnostic Services), wobei der Technologie-Stack üblicherweise aus einer VCI-Hardware (Vehicle Communication Interface), einer D-PDU-API-verknüpften Verbindung zum Diagnoseserver sowie parametrisierten Diagnosedatenbanken besteht. Der Diagnoseserver wiederum stellt eine API für die Testeranwendung bereit. Die nachfolgende Darstellung verdeutlicht die involvierten Komponenten:

<div style="text-align: center;">
    <img src="image/README/1714400305521.png" alt="Abbildung 1" style="max-width:30%;" />
</div>

### Zukünftige Potenziale von SOVD

Viele Komponenten wurden bisher primär für den Einsatz in Desktop-Betriebssystemen entwickelt, was sich auch in den standardisierten Programmierschnittstellen zeigt, die in C, C++ oder Java definiert sind. SOVD hingegen standardisiert eine REST-API, die unabhängig von der Programmiersprache ist. Dies eröffnet neue, leichtgewichtige Anwendungsszenarien für die Fahrzeugdiagnose. Auf Basis von SOVD können Diagnose-Workflows in beliebigen modernen Programmier- oder Skriptsprachen wie Python implementiert werden, um beispielsweise Fahrzeugdaten zu erfassen und auszuwerten. Darüber hinaus ermöglicht die REST-API die Entwicklung von Unternehmens- oder Cloud-Anwendungen für umfangreichere Einsatzszenarien wie fortschrittliche Werkstattsysteme oder Entwicklertests. Diese Anwendungen können als Webanwendungen ausgeführt werden, die auf verschiedenen Geräten wie Smartphones, Tablets, Laptops oder sogar den neuesten Datenbrillen laufen. Die nachstehende Grafik zeigt die Kommunikation einer Diagnoseanwendung mit einem SOVD-Server über REST:

<div style="text-align: center;">
    <img src="image/README/1714400645471.png" alt="Abbildung 2" style="max-width:55%;" />
</div>

Webstandards bieten bereits ein hohes Maß an Sicherheit durch standardisierte Protokolle wie OpenID Connect für die Authentifizierung und OAuth2 zur Berechtigungssteuerung. Es besteht die Möglichkeit, vorhandene Identitätsanbieter wie Microsoft Azure AD zu integrieren, um bereits etablierte Identitäten aus der Unternehmensumgebung wiederzuverwenden. Die einheitliche Schnittstelle von SOVD ermöglicht eine konsistente Durchführung von Diagnosezugriffen und -operationen in lokalen, entfernten oder fahrzeuginternen Umgebungen.

<div style="text-align: center;">
    <img src="image/README/1714401758622.png" alt="Abbildung 3" style="max-width:55%;" />
</div>