# LIN-Netzwerkmanagement im Automotivebereich: Ein umfassendes Tutorial

## Einleitung

Das Local Interconnect Network (LIN) ist ein kostengünstiges Netzwerkprotokoll, das hauptsächlich in der Automobilindustrie zur Vernetzung von elektronischen Steuergeräten (ECUs) verwendet wird. Es ergänzt das leistungsstärkere Controller Area Network (CAN) und bietet eine effiziente Lösung für die Kommunikation in weniger zeitkritischen Anwendungen. Dieses Tutorial bietet eine detaillierte Betrachtung des Zustandsmodells von LIN-Slaves, des Goto-Sleep-Kommandos, des automatischen Sleep-Modes und der Wakeup-Prozedur. 

## Zustandsmodell von LIN-Slaves

Das LIN-Protokoll definiert ein eigenes Netzwerkmanagement, das für die Verwaltung der Zustände der LIN-Slaves verantwortlich ist. Die Slaves durchlaufen vier Hauptzustände: Power Off, Initialisierung, Betrieb und Sleep.

- **Power Off**: In diesem Zustand ist der Slave ohne Strom und führt keine Funktionen aus.
- **Initialisierung**: Nach dem Einschalten (Power On) wechselt der Slave in diesen Zustand. Die Initialisierung muss innerhalb von 100 ms abgeschlossen sein.
- **Betrieb**: Nach der Initialisierung wechselt der Slave automatisch in den Betriebszustand, in dem er seine regulären Funktionen ausführt.
- **Sleep**: In diesen Zustand wechseln die Slaves entweder auf Befehl des Masters oder bei längerer Inaktivität auf dem Bus.

Die Zustandsübergänge sind klar definiert und folgen einem festgelegten Ablauf. Ein Slave wechselt beispielsweise durch ein Power On in den Initialisierungszustand und nach Abschluss der Initialisierung in den Betriebszustand.

## Goto-Sleep-Kommando

Der Master kann alle Slaves in den Sleep-Zustand versetzen, indem er ein Goto-Sleep-Kommando sendet. Dieses Kommando ist ein Master Request Frame mit dem Wert 0x00 im ersten Datenbyte (NAD=0). Die restlichen sieben Datenbytes werden mit 0xFF übertragen.

- **Master Request Frame**: Dies ist ein spezieller Frame, der vom Master gesendet wird, um Befehle an die Slaves zu übermitteln.
- **NAD (Node Address)**: Die Adresse des Zielknotens, hier mit dem Wert 0x00, was alle Slaves adressiert.
- **Goto-Sleep**: Der Wert 0xFF in den restlichen Datenbytes signalisiert den Befehl zum Wechsel in den Sleep-Zustand.

## Automatischer Sleep Mode

Slaves wechseln auch dann in den Sleep-Zustand, wenn vier bis zehn Sekunden lang keine Busaktivität vorhanden ist. Dies erfolgt unabhängig davon, ob der Mikrocontroller in einen Energiesparmodus wechselt, bei dem nicht benötigte Hardware-Ressourcen abgeschaltet werden. 

- **Busaktivität**: Die kontinuierliche Übertragung von Nachrichten auf dem LIN-Bus.
- **Energiesparmodus**: Ein Zustand, in dem der Mikrocontroller seinen Energieverbrauch minimiert, indem er ungenutzte Hardware-Komponenten deaktiviert.

## Wakeup-Prozedur

Jeder Slave hat die Fähigkeit, das gesamte Cluster aus dem Sleep-Zustand aufzuwecken. Dies geschieht durch das Senden eines Wakeup-Signals am Bus, welches ein dominanter Puls ist, der mindestens 250 µs und maximal 5 ms andauert.

- **Dominanter Puls**: Ein Signalzustand, der von allen Knoten auf dem Bus erkannt wird und einen Übergang in den Initialisierungszustand auslöst.
- **Initialisierungszustand**: Nach Erkennung des Wakeup-Signals verlassen die Knoten den Sleep-Zustand und wechseln in den Initialisierungszustand. Nach weiteren 100 ms wechseln sie in den Betriebszustand.

## Der "schläfrige" Master

Wenn ein Slave das Cluster weckt und nach der Initialisierung für weitere 150 ms keinen Header vom Master erkennt, überträgt der Slave ein weiteres Wakeup-Signal. Sollte auch dieser Versuch fehlschlagen, setzt der Slave die Aufweckprozedur für 1,5 Sekunden aus, bevor er erneut versucht, das Cluster aufzuwecken. 

- **Header**: Ein spezielles Signal vom Master, das die Synchronisation und das Timing der Kommunikation auf dem LIN-Bus steuert.
- **Wakeup-Prozedur**: Die festgelegte Abfolge von Aktionen, die ein Slave durchführt, um das Cluster aus dem Sleep-Zustand zu wecken.

## Fazit

Das LIN-Protokoll bietet eine strukturierte und effiziente Methode zur Verwaltung der Zustände von Slaves in einem Automobilnetzwerk. Durch klare Definitionen von Zuständen und Übergängen sowie spezifizierte Kommandos und Prozeduren gewährleistet es eine zuverlässige Kommunikation und Energieverwaltung. Das Verständnis dieser Mechanismen ist entscheidend für die Entwicklung und Wartung von LIN-basierten Systemen in der Automobilindustrie.