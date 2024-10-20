# Modular FrameGrabber (MGB)

## Inhaltsverzeichnis

1. **Einleitung**
   - Überblick
   - Hauptanwendungsbereiche
   - Zielgruppe

2. **Hardwareübersicht**
   - Technische Spezifikationen
   - Anschlüsse und Schnittstellen
   - Zubehör

3. **Installation**
   - Systemanforderungen
   - Hardwareinstallation
   - Verbindung mit dem Netzwerk

4. **Konfiguration**
   - Zugriff auf die Weboberfläche
   - Netzwerkkonfiguration
   - Auswahl der Videoschnittstelle
   - Konfiguration von Videoformaten und Auflösung
   - Trigger-Einstellungen
   - Speichern und Laden von Konfigurationen

5. **Nutzung**
   - Erfassung von Videostreams
   - Erstellung und Verwaltung von Screenshots
   - Analyse der erfassten Daten
   - Nutzung der TCP-Control-Socket-API

6. **Fehlerbehebung**
   - Häufige Probleme und Lösungen
   - Diagnose und Monitoring

7. **Sicherheitshinweise**
   - Umgang mit elektrischen Komponenten
   - Schutz vor Überhitzung
   - Datensicherheit

8. **Support und Wartung**
   - Regelmäßige Wartung
   - Firmware-Updates
   - Kontaktaufnahme mit dem technischen Support

9. **Anhang**
   - Technische Zeichnungen und Pinbelegungen
   - Glossar
   - Rechtliche Hinweise und Garantiebestimmungen

---

# 1. Einleitung

## Überblick

Der Modular FrameGrabber (MGB) ist ein hochentwickeltes Gerät zur Erfassung von Videostreams aus Infotainmentsystemen, insbesondere aus Fahrzeugen der Volkswagen Gruppe. Es ermöglicht die Echtzeiterfassung, Übertragung und Analyse von Videodaten und unterstützt dabei verschiedene komprimierte und unkomprimierte Videoformate wie H.264, Motion JPEG und RAW. Die Daten werden über Gigabit Ethernet an einen PC übertragen und können dort weiterverarbeitet werden.

## Hauptanwendungsbereiche

- **Automobilentwicklung:** Testen und Validieren von Infotainmentsystemen.
- **Qualitätssicherung:** Erfassung und Analyse von Videodaten zur Sicherstellung der Systemleistung.
- **Forschung:** Untersuchung und Verbesserung der Benutzerinteraktion mit Infotainmentsystemen.

## Zielgruppe

Diese Dokumentation richtet sich an Ingenieure, Entwickler und Techniker, die in der Automobilbranche tätig sind und Videodaten aus Infotainmentsystemen erfassen und analysieren müssen.

---

# 2. Hardwareübersicht

## Technische Spezifikationen

- **Unterstützte Schnittstellen:** FPD Link 2/3, GMSL 2/3
- **Videoformate:** H.264, MJPEG, RAW
- **Screenshot-Format:** PNG (verlustfreie Kompression)
- **Anschlüsse:** CAN, UART, 2× GPIO, Trigger-Eingang
- **Netzwerk:** Gigabit Ethernet
- **Stromversorgung:** 9 V bis 30 V
- **Betriebstemperatur:** 0° C bis 70° C
- **Abmessungen:** 170 × 170 × 60 mm
- **Gewicht:** 1.3 kg

## Anschlüsse und Schnittstellen

- **Ethernet:** Zur Verbindung mit einem Netzwerk oder PC.
- **GPIO/Trigger:** Für externe Trigger-Signale zur Steuerung der Videoerfassung.
- **CAN-Bus:** Zur Erfassung von Ereignissen basierend auf CAN-Bus-Nachrichten.
- **Videoeingang:** Verschiedene LVDS- und GMSL-Schnittstellen zur Verbindung mit Infotainmentsystemen.

## Zubehör

- **GMSL 2/3 Modul**
- **FPD Link 3 Modul**
- **FPD Link 2 Modul**
- **FPK Entry Adapter**
- **FPK Medium Set**
- **FPK Basic Set**
- **MIB3 EI Adapter**
- **MGB Backup Modul**
- **FPD Link 2/3 LVDS Kabel** (gerade Anschlüsse, verschiedene Winkel)

---

# 3. Installation

## Systemanforderungen

- **Betriebssystem:** Kompatibel mit Windows, Linux und macOS.
- **Netzwerk:** Gigabit-Ethernet-Verbindung erforderlich.
- **Stromversorgung:** 9 V bis 30 V DC, Netzteil optional erhältlich.

## Hardwareinstallation

1. **Anschluss an das Infotainmentsystem:** Verbinden Sie den MGB mit dem entsprechenden LVDS- oder GMSL-Kabel mit der Videoschnittstelle des Fahrzeugs.
2. **Stromversorgung:** Stellen Sie sicher, dass das Gerät ordnungsgemäß mit Strom versorgt wird.
3. **Netzwerkverbindung:** Verbinden Sie den MGB über ein Ethernet-Kabel mit Ihrem Netzwerk oder direkt mit einem PC.

## Verbindung mit dem Netzwerk

- **DHCP:** Der MGB unterstützt standardmäßig DHCP zur automatischen Zuweisung einer IP-Adresse.
- **Manuelle IP-Konfiguration:** Falls erforderlich, können Sie eine statische IP-Adresse über die Weboberfläche konfigurieren.

---

# 4. Konfiguration

## Zugriff auf die Weboberfläche

- **IP-Adresse eingeben:** Geben Sie die IP-Adresse des MGB in einen Webbrowser ein, um auf die Konfigurationsoberfläche zuzugreifen.
- **Login:** Verwenden Sie die Standardanmeldedaten, die im Handbuch angegeben sind, oder die vom Administrator festgelegten Zugangsdaten.

## Netzwerkkonfiguration

- **DHCP/Static IP:** Wählen Sie zwischen dynamischer und statischer IP-Konfiguration.
- **Subnetzmaske und Gateway:** Konfigurieren Sie die Netzwerkeinstellungen entsprechend Ihrer Netzwerkinfrastruktur.

## Auswahl der Videoschnittstelle

- **LVDS/GMSL:** Wählen Sie die entsprechende Schnittstelle, die mit dem Infotainmentsystem verbunden ist.
- **Automatische Erkennung:** Der MGB erkennt automatisch die Videosignalparameter, was die manuelle Konfiguration vereinfacht.

## Konfiguration von Videoformaten und Auflösung

- **Videocodec auswählen:** Wählen Sie den gewünschten Codec (H.264, MJPEG, RAW).
- **Auflösung und Bildrate:** Konfigurieren Sie die gewünschten Einstellungen für Auflösung und Bildrate.

## Trigger-Einstellungen

- **Trigger-Quellen:** Wählen Sie zwischen GPIO, CAN-Bus-Ereignissen und dem Trigger-Button.
- **Aktionen:** Definieren Sie, welche Aktionen bei einem Trigger-Ereignis ausgelöst werden sollen, wie z.B. das Starten einer Videoaufnahme oder das Erstellen eines Screenshots.

## Speichern und Laden von Konfigurationen

- **Konfiguration speichern:** Speichern Sie die aktuellen Einstellungen, um sie später wieder verwenden zu können.
- **Konfiguration laden:** Laden Sie gespeicherte Konfigurationen, um schnell zwischen verschiedenen Einstellungen zu wechseln.

---

# 5. Nutzung

## Erfassung von Videostreams

- **Start der Videoaufnahme:** Beginnen Sie die Videoerfassung über die Weboberfläche oder per Befehl über die TCP-Control-Socket-API.
- **Echtzeit-Übertragung:** Der Videostream wird in Echtzeit über Gigabit Ethernet an den angeschlossenen PC übertragen.

## Erstellung und Verwaltung von Screenshots

- **Manuelle Screenshot-Erstellung:** Erstellen Sie Screenshots über die Weboberfläche.
- **Automatische Screenshots:** Konfigurieren Sie die Screenshot-Frequenz und die Aufnahmeregion, um automatisch Screenshots während der Videoaufnahme zu erstellen.

## Analyse der erfassten Daten

- **Datenübertragung:** Übertragen Sie die erfassten Videodaten zur Analyse auf ein geeignetes Analysetool.
- **Format und Qualität:** Die Videodaten können in verschiedenen Formaten und Qualitätsstufen analysiert werden.

## Nutzung der TCP-Control-Socket-API

- **Remote-Steuerung:** Nutzen Sie die API, um den MGB aus der Ferne zu steuern und Einstellungen vorzunehmen.
- **Integration in eigene Anwendungen:** Die API ermöglicht die Integration des MGB in benutzerdefinierte Anwendungen zur erweiterten Steuerung und Automatisierung.

---

# 6. Fehlerbehebung

## Häufige Probleme und Lösungen

- **Keine Netzwerkverbindung:** Überprüfen Sie die Netzwerkkonfiguration und stellen Sie sicher, dass die Verkabelung ordnungsgemäß ist.
- **Videostream wird nicht erfasst:** Stellen Sie sicher, dass die richtige Videoschnittstelle ausgewählt und korrekt konfiguriert ist.
- **Fehlende Trigger-Reaktion:** Überprüfen Sie die Trigger-Verkabelung und -Konfiguration, um sicherzustellen, dass die Signale ordnungsgemäß erkannt werden.

## Diagnose und Monitoring

- **Systemprotokolle:** Greifen Sie auf die Systemprotokolle über die Weboberfläche zu, um detaillierte Informationen über den Betrieb des MGB zu erhalten.
- **LED-Anzeigen:** Nutzen Sie die LED-Anzeigen am Gerät zur schnellen Diagnose von Betriebszuständen.

---

# 7. Sicherheitshinweise

## Umgang mit elektrischen Komponenten

- **Schutzmaßnahmen:** Verwenden Sie geeignete Schutzkleidung und stellen Sie sicher, dass das Gerät ordnungsgemäß geerdet ist.
- **Stromversorgung:** Verwenden Sie nur die angegebenen Spannungen, um Schäden am Gerät zu vermeiden.

## Schutz vor Überhitzung

- **Belüftung:** Stellen Sie sicher, dass der MGB in einer gut belüfteten Umgebung betrieben wird, um Überhitzung zu vermeiden.
- **Temperaturüberwachung:** Nutzen Sie die integrierten Temper

atursensoren, um die Betriebstemperatur zu überwachen.

## Datensicherheit

- **Verschlüsselung:** Nutzen Sie die angebotenen Verschlüsselungsoptionen für die Datenübertragung, um sensible Informationen zu schützen.
- **Zugriffskontrolle:** Setzen Sie sichere Zugangsdaten und Zugriffsrechte, um unbefugten Zugriff auf das Gerät zu verhindern.

---

# 8. Support und Wartung

## Regelmäßige Wartung

- **Firmware-Updates:** Stellen Sie sicher, dass der MGB regelmäßig mit den neuesten Firmware-Updates versorgt wird.
- **Reinigung:** Halten Sie die Anschlüsse und Lüftungsschlitze sauber, um eine optimale Funktion zu gewährleisten.

## Kontaktaufnahme mit dem technischen Support

- **Support-Kontakt:** Bei technischen Problemen oder Fragen wenden Sie sich an den technischen Support von Digiteq Automotive unter der angegebenen E-Mail-Adresse.

---

# 9. Anhang

## Technische Zeichnungen und Pinbelegungen

- **Pinbelegungen:** Detaillierte Informationen über die Pinbelegungen der Anschlüsse finden Sie in den technischen Zeichnungen im Anhang.

## Glossar

- **LVDS:** Low-Voltage Differential Signaling – eine Schnittstellentechnologie zur Übertragung von Videodaten.
- **GMSL:** Gigabit Multimedia Serial Link – eine Hochgeschwindigkeitsverbindung für die Übertragung von Video-, Audio- und Steuerdaten.
- **TCP-Control-Socket-API:** Eine Programmierschnittstelle zur Steuerung des MGB über das Netzwerk.

Ja, der Modular FrameGrabber (MGB) verfügt über eine API zur Programmierung und Fernsteuerung. Diese API wird als **TCP-Control-Socket-API** bezeichnet. Mit dieser API können Benutzer den MGB aus der Ferne konfigurieren, steuern und verschiedene Funktionen des Geräts programmatisch nutzen. Hier sind einige wesentliche Aspekte der API:

### Funktionen der TCP-Control-Socket-API:

1. **Remote-Konfiguration:**
   - Sie können verschiedene Parameter des MGB wie die Netzwerkeinstellungen, die Wahl der Videoschnittstelle (z.B. GMSL, LVDS) und die Konfiguration des Videocodecs (z.B. H.264, Motion JPEG, RAW) aus der Ferne einstellen.

2. **Steuerung der Videoerfassung:**
   - Die API ermöglicht es, die Videoaufnahme zu starten, zu stoppen und zu verwalten, ohne direkten Zugriff auf die Weboberfläche zu haben.

3. **Trigger-Verwaltung:**
   - Konfiguration und Auslösung von Ereignissen basierend auf externen Trigger-Signalen (GPIO, CAN-Bus). Diese Ereignisse können zur automatischen Steuerung von Aufnahmeprozessen genutzt werden.

4. **Screenshot-Erstellung:**
   - Screenshots des Videostreams können programmatisch erfasst und gespeichert werden, um bestimmte Momente oder Zustände festzuhalten.

5. **Statusabfragen und Diagnose:**
   - Über die API können Statusinformationen abgerufen werden, um den aktuellen Betriebszustand des MGB zu überwachen. Dies umfasst Informationen wie aktuelle Videoeinstellungen, Netzwerkkonfiguration und Systemlogs.

6. **Integration in eigene Anwendungen:**
   - Die API ermöglicht Entwicklern, den MGB in eigene Softwarelösungen zu integrieren. Dies ist besonders nützlich für automatisierte Tests, kontinuierliche Integration und benutzerdefinierte Analyse-Tools.

### Beispielanwendungen:

- **Automatisierte Tests:**
  - In einem Testlabor könnte die API verwendet werden, um den MGB automatisch zu steuern, wenn verschiedene Szenarien und Konfigurationen getestet werden.
  
- **Fernüberwachung:**
  - Bei der Überwachung von Infotainmentsystemen in Fahrzeugen könnte die API genutzt werden, um aus der Ferne auf die Video-Streams zuzugreifen und zu analysieren.

- **Benutzerdefinierte Schnittstellen:**
  - Entwickler könnten eigene Benutzeroberflächen oder Softwarelösungen erstellen, die auf die spezifischen Bedürfnisse des Projekts zugeschnitten sind und die API zur Steuerung des MGB nutzen.

### Zugang zur API:

Um die TCP-Control-Socket-API zu nutzen, benötigen Sie:
- **Zugangsdaten:** Stellen Sie sicher, dass Sie die notwendigen Anmeldedaten haben, um auf die API zuzugreifen.
- **API-Dokumentation:** Eine detaillierte Dokumentation zur API sollte im Lieferumfang des MGB enthalten sein oder kann beim Hersteller angefragt werden.

### Fazit:

Die TCP-Control-Socket-API des MGB ist ein leistungsstarkes Werkzeug, das Entwicklern und Ingenieuren die Flexibilität gibt, das Gerät in eine Vielzahl von Anwendungen und Prozessen zu integrieren. Diese API erweitert die Nutzbarkeit des MGB weit über die manuelle Bedienung hinaus und ermöglicht eine tiefergehende, programmatische Steuerung.

Um die TCP-Control-Socket-API des Modular FrameGrabber (MGB) zu verwenden, müssen Sie in der Lage sein, über TCP/IP mit dem Gerät zu kommunizieren. Hier ist ein Beispiel, wie Sie in Python ein einfaches Programm schreiben können, das eine Verbindung zur API herstellt und einen Befehl sendet, um die Videoaufnahme zu starten.

### Voraussetzungen

1. **IP-Adresse des MGB**: Sie benötigen die IP-Adresse des MGB, um eine Verbindung herzustellen.
2. **Portnummer**: Der TCP-Port, über den die API verfügbar ist (dieser sollte in der Dokumentation des Geräts angegeben sein).
3. **Befehlsformat**: Sie müssen wissen, welches Befehlsformat die API erwartet (auch dies sollte in der API-Dokumentation beschrieben sein).

### Beispiel in Python

```python
import socket

# Konfiguration
MGB_IP = '192.168.1.100'  # Ersetzen Sie dies mit der IP-Adresse Ihres MGB
MGB_PORT = 12345           # Ersetzen Sie dies durch den korrekten Port der API
BUFFER_SIZE = 1024         # Größe des Empfangspuffers

# Beispielbefehl zum Starten der Videoaufnahme
# Der genaue Befehl muss der API-Dokumentation entnommen werden
start_recording_command = 'START_RECORDING\n'

# Verbindung zum MGB herstellen
with socket.socket(socket.AF_INET, socket.SOCK_STREAM) as s:
    try:
        # Verbindung zum MGB herstellen
        s.connect((MGB_IP, MGB_PORT))
        print(f"Verbunden mit MGB an {MGB_IP}:{MGB_PORT}")

        # Befehl zum Starten der Videoaufnahme senden
        s.sendall(start_recording_command.encode('utf-8'))
        print("Befehl zum Starten der Aufnahme gesendet.")

        # Antwort vom MGB empfangen
        response = s.recv(BUFFER_SIZE).decode('utf-8')
        print(f"Antwort vom MGB: {response}")

    except Exception as e:
        print(f"Fehler bei der Kommunikation mit dem MGB: {e}")
```

### Erläuterungen zum Beispiel

1. **Socket-Verbindung:** 
   - In Python wird die `socket`-Bibliothek verwendet, um eine TCP/IP-Verbindung herzustellen. 
   - `AF_INET` gibt an, dass wir eine IPv4-Adresse verwenden, und `SOCK_STREAM` gibt an, dass wir eine TCP-Verbindung aufbauen.

2. **Verbindung herstellen:** 
   - Mit `s.connect((MGB_IP, MGB_PORT))` stellen Sie eine Verbindung zum MGB her.
   - Stellen Sie sicher, dass die IP-Adresse und der Port korrekt sind.

3. **Befehl senden:** 
   - Der Befehl `START_RECORDING\n` ist ein Beispiel. Der genaue Befehl muss der API-Dokumentation entnommen werden.
   - `s.sendall(start_recording_command.encode('utf-8'))` sendet den Befehl an das MGB.

4. **Antwort empfangen:** 
   - `s.recv(BUFFER_SIZE).decode('utf-8')` empfängt die Antwort vom MGB. Die Antwort könnte z.B. eine Bestätigung oder ein Statusbericht sein.

5. **Fehlerbehandlung:** 
   - Das Beispiel enthält eine einfache Fehlerbehandlung, um Probleme bei der Verbindung oder Kommunikation zu melden.

### Erweiterungen

- **Komplexere Befehle:** Sie können die API verwenden, um komplexere Befehle zu senden, wie das Konfigurieren von Videoeinstellungen, das Anfordern von Statusinformationen, das Auslösen von Triggersignalen usw.
- **Asynchrone Kommunikation:** Für fortgeschrittene Anwendungen könnten Sie asynchrone oder Multithread-Kommunikation verwenden, um mehrere Befehle gleichzeitig zu verwalten.
- **API-Dokumentation:** Die genaue Syntax und der Aufbau der API-Befehle müssen aus der offiziellen Dokumentation entnommen werden, die detaillierte Informationen über alle verfügbaren Befehle und deren Parameter enthält.

### Fazit

Dieses einfache Beispiel zeigt, wie Sie über die TCP-Control-Socket-API des MGB grundlegende Befehle programmatisch ausführen können. Die Verwendung dieser API ermöglicht es Ihnen, den FrameGrabber flexibel und effizient in Ihre eigenen Softwarelösungen zu integrieren.
 