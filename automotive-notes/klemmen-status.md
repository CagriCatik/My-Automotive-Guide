# Klemmen-Status

Das hier beschreibt die Unterschiede zwischen einem traditionellen Serienschlüssel (stecken-drehen) und einem modernen Keyless-Start/Keyless-Go-System, bezogen auf verschiedene Anwendungsfälle und Klemmen-Zustände. Die Tabelle vergleicht beide Systeme anhand ihrer Funktionsweisen in den Bereichen Zugang (Entriegeln und Verriegeln) und den verschiedenen Zündstufen (Klemmen-Status).


## Use-Cases und Klemmen-Status Vergleich

| **Anwendungsfall**               | **Serienschlüssel (stecken-drehen)**                        | **Keyless-Start/Keyless-Go**                             |
| --------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------- |
| **Zugang**                        |                                                            |                                                         |
| Entriegeln                        | Taste am Schlüssel: Schloss-AUF                            | Taste am Schlüssel: Schloss-AUF                          |
| Verriegeln                        | Taste am Schlüssel: Schloss-ZU                             | Taste am Schlüssel: Schloss-ZU                           |
| **Klemmen-Status**                |                                                            |                                                         |
| Klemme 15c ("Schlüssel steckt")    | Schlüssel ins Gateway gesteckt                                 | Nach Tür-Schließen mehrfach Start-Taster betätigen       |
| Klemme 15R                        | Schlüssel auf 1. Raste                                     | Start-Taster betätigen (toggle)                          |
| Klemme 15                         | Schlüssel auf 2. Raste                                     | Start-Taster betätigen (toggle)                          |
| Klemme 50 (Motorstart)            | Schlüssel über die 2. Raste kurz weiterdrehen              | Bremse treten, Start-Taster betätigen (toggle)           |


## Zündzustände (Ignition States)

| **Zündzustand** | **Beschreibung (Klemme)**           |
| --------------- | ----------------------------------- |
| IGN_LOCK        | Zündung gesperrt (0)                |
| IGN_OFF         | Zündung aus (Klemme 15c)            |
| IGN_ACC         | Zündung Zubehörposition (Klemme 15R)|
| IGN_ON          | Zündung an (Klemme 15)              |
| IGN_START       | Motorstart (Klemme 50)              |

## 1. Zugang

Im Bereich des Zugangs (Entriegeln und Verriegeln) zeigt sich die grundlegende Bedienung beider Systeme:

- **Serienschlüssel (stecken-drehen)**: 
  - **Entriegeln** erfolgt durch Drücken der Entriegelungstaste am Schlüssel, wodurch das Schloss geöffnet wird. 
  - **Verriegeln** wird durch die Verriegelungstaste am Schlüssel ausgeführt, um das Schloss zu schließen.
  
- **Keyless-Start/Keyless-Go**:
  - Die Entriegelung erfolgt durch Drücken der Entriegelungstaste am Schlüssel, genau wie beim Serienschlüssel. 
  - Die Verriegelung wird ebenfalls durch Drücken der Verriegelungstaste ausgelöst.

In beiden Fällen bleibt die Bedienung hinsichtlich des Zugangsprozesses identisch.

## 2. Klemmen-Status

Im Zusammenhang mit dem Motorstart und den verschiedenen Klemmen-Zuständen bestehen jedoch signifikante Unterschiede. Die wichtigsten Klemmen-Zustände, die das Verhalten des Fahrzeugs und der Zündung bestimmen, sind wie folgt:

- **Klemme 15c ("Schlüssel steckt")**: 
  - Beim **Serienschlüssel** wird der Schlüssel ins Gateway (EZS) gesteckt, um den Status zu aktivieren. 
  - Beim **Keyless-Start/Keyless-Go** erfolgt der Statuswechsel automatisch, nachdem die Tür geschlossen wurde. Mehrfaches Drücken des Start-Tasters (toggle) wechselt den Status.

- **Klemme 15R** (1. Raste): 
  - Der **Serienschlüssel** muss auf die 1. Raste gedreht werden, um den Zustand der Klemme 15R zu aktivieren.
  - Beim **Keyless-Start/Keyless-Go** wird der Status durch einfaches Drücken des Start-Tasters (toggle) aktiviert.

- **Klemme 15** (2. Raste): 
  - Der **Serienschlüssel** muss auf die 2. Raste gedreht werden, um den Zustand der Klemme 15 zu aktivieren.
  - Beim **Keyless-Start/Keyless-Go** wird erneut der Start-Taster (toggle) gedrückt, um diesen Zustand zu aktivieren.

- **Klemme 50 (Motorstart)**: 
  - Beim **Serienschlüssel** wird der Schlüssel über die 2. Raste kurz weitergedreht, um den Motor zu starten.
  - Beim **Keyless-Start/Keyless-Go** muss das Bremspedal getreten und der Start-Taster gedrückt werden, um den Motor zu starten.

## 3. Zündzustände (Ignition States)

Die verschiedenen Zündzustände (Ignition States) sind in beiden Systemen gleich und folgen den typischen Definitionen:

- **IGN_LOCK**: Zündung gesperrt (Klemme 0) – Fahrzeug im abgeschlossenen Zustand.
- **IGN_OFF**: Zündung aus (Klemme 15c) – Motor ist ausgeschaltet, keine Verbraucher aktiv.
- **IGN_ACC**: Zündung in Zubehörposition (Klemme 15R) – Elektronische Verbraucher wie Radio oder Klimaanlage können betrieben werden.
- **IGN_ON**: Zündung an (Klemme 15) – Fahrzeug ist bereit zum Fahren, aber der Motor ist noch nicht gestartet.
- **IGN_START**: Motorstart (Klemme 50) – Motor startet, Fahrzeug kann gefahren werden.

