# Realisierung aktueller Diagnoseanwendungsfälle mit SOVD

## Fahrzeug-Schnelltest

### ECU-Übersicht

Für die Diagnose von UDS-basierten ECUs ist eine Diagnosebeschreibung erforderlich. Neben dem Diagnoseumfang der ECUs beschreibt dies auch Topologieinformationen und die spezifischen Kommunikationsparameter, die erforderlich sind, damit ein Tester mit dem Fahrzeug kommunizieren kann. Die Verwaltung der Varianten von Fahrzeugen und zugehörigen Diagnosebeschreibungen ist stark herstellerabhängig. SOVD enthält API-Methoden zur Entdeckung von SOVD-Servern über bekannte Mechanismen wie Multicast DNS oder DNS-Service-Discovery sowie die enthaltenen SOVD-Entitäten und ihre Ressourcen. SOVD unterstützt mehrere Ansichten der Systeme:

- Logische Ansicht der Bereiche (z. B. Antriebsstrang)
- Physikalische Ansicht der Komponenten (z. B. spezifische ECUs) und ihrer Anwendungen (z. B. Klimasteuerung)
- Ansicht der fahrzeugübergreifenden Funktionen (z. B. Fahrzeugidentifikation)
- Ansicht zusätzlicher SOVD-Server (im Fahrzeug)

Kreuzabhängigkeiten wie die Verwendung von Komponenten in einzelnen Bereichen (z. B. ADAS oder Antriebsstrang) können über die REST-API aufgelöst werden.

Das folgende Beispiel zeigt speziell, wie die Übersicht über installierte Komponenten (z. B. UDS-ECUs) aussehen kann:

```yaml
Request: 
HTTP GET {base_uri}/components 
Response: 
HTTP 200 OK 
{ 
    "items": [ 
        { 
            "id": "door", 
            "name": "Door Unit", 
            "href": "{base_uri}/components/door" 
        }, 
        { 
            "id": "engine", 
            "name": "Engine Controller Unit", 
            "href": "{base_uri}/components/engine" 
        } 
    ] 
} 
```

### Auslesen der ECU-Identifikationsdaten

Der UDS-Standard stellt den Dienst 0x22 ReadDataByIdentifier zum Auslesen der Identifikationsdaten bereit. Die Datenidentifikatoren (DID), die hier ausgelesen werden können, sind in der Diagnosebeschreibung (z. B. ODX) für den Tester enthalten. Auch die Parameter der Diagnosedienste sind dort beschrieben. Jeder Parameter hat seinerseits unter anderem einen Namen und eine Konvertierung (Datentyp), um einen hexadezimalen Wert aus einem für Menschen lesbaren Wert zu berechnen, der schließlich an die ECU gesendet wird. Die empfangene hexadezimale Antwort von der ECU wird dann wieder in für Menschen lesbare Werte konvertiert.
Hier ist ein Beispiel zum Auslesen der Fahrgestellnummer über die DID 0xF190:

- UDS-Anfrage an die Ziel-ECU:
  - [0x] **22** *F1 90*
- UDS-Antwort von der ECU:
  - [0x] **62** *F1 90* 56 33 43 54 30 52 56 33 48 31 43 4C 33 31 32 33 34

### Auslesen des Fehlerspeichers

## Zustandsbehaftete UDS-Diagnose und SOVD

## Diagnosesequenzen
