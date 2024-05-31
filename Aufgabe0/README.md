# Aufgabe 0: Angular-Anwendung erstellen

In dieser Übung werden wir eine neue Angular-Anwendung erstellen und starten.

## Voraussetzungen

Stelle sicher, dass Node.js und npm auf deinem Rechner installiert sind. Du kannst dies überprüfen, indem du die folgenden Befehle in deinem Terminal ausführst:

```bash
node -v
npm -v
```

## 1. Installation von Angular CLI

Angular CLI ist ein Tool zur Erstellung und Verwaltung von Angular-Projekten. Um Angular CLI zu installieren, führe den folgenden Befehl in deinem Terminal aus:
```bash
npm install -g @angular/cli
```

## 2. Erstellung eines neuen Angular-Projekts

Nachdem Angular CLI installiert ist, können wir ein neues Angular-Projekt erstellen. In dieser Übung entwickeln wir eine einfache Anwendung zur Verwaltung von Campus-Events. Führe den folgenden Befehl aus, um ein neues Projekt zu erstellen:
```bash
ng new hdm-events-app
```

## 3. Projekt starten
Wechsle in das Verzeichnis des neu erstellten Projekts und starte die Anwendung:
```bash
cd hdm-events-app
ng serve
```
Nach dem Start ist die Anwendung unter http://localhost:4200 erreichbar.
