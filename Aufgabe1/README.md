# Aufgabe 1: Event Liste erstellen

In dieser Übung werden wir unsere Campus-Events-App um eine Liste mit Events erweitern.

## 1. Entfernen von Boilerplate-Code

Nachdem wir ein neues Angular-Projekt erstellt haben, müssen wir zunächst wir Boilerplate-Code entfernen, den Angular CLI für uns generiert hat.

Navigiere in das Verzeichnis des Projekts und öffne die Datei `src/app/app.component.html`. 

Lösche den gesamten Inhalt der Datei, hier ergänzen wir später unseren eigenen Code.

## 2. Erstellen einer neuen Komponente

Angular verwendet Komponenten, um die Benutzeroberfläche zu strukturieren. Wir erstellen eine neue Komponente, die die Liste der Events darstellt.

Angular CLI bietet uns ein Kommando, um eine neue Komponente zu erstellen. Führe den folgenden Befehl im Terminal aus:

```bash
ng generate component EventList
```
Die neue Komponente ist jetzt im Verzeichnis `src/app/event-list` zu finden.

## 3. Füge einen Type für Events hinzu

Erstelle eine neue Datei `src/app/types/event.ts` und füge in dieser ein Interface für ein Event hinzu.
Ein Event soll folgende Eigenschaften haben:
- `id` (number): Die eindeutige ID des Events
- `name` (string): Der Name des Events
- `date` (Date): Das Datum des Events
- `location` (string): Der Ort des Events
