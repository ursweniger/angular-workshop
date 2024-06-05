# Aufgabe 1: Event Liste erstellen

In dieser Übung werden wir unsere Campus-Events-App um eine Liste mit Events erweitern.

## 1. Entfernen von Boilerplate-Code

Nachdem wir ein neues Angular-Projekt erstellt haben, müssen wir zunächst wir Boilerplate-Code entfernen, den Angular CLI für uns generiert hat.

Navigiere in das Verzeichnis des Projekts und öffne die Datei `src/app/app.component.html`. 

Lösche den gesamten Inhalt der Datei, hier ergänzen wir später unseren eigenen Code.

## 2. Erstellen einer neuen Komponente

Angular verwendet Komponenten, um die Benutzeroberfläche zu strukturieren. Wir erstellen eine neue Komponente, die die Liste der Events darstellt.

Angular CLI bietet uns ein Kommando, um eine neue Komponente zu erstellen. Führe den folgenden Befehl in der Kommandozeile aus:

```bash
ng generate component /components/EventList
```
Die neue Komponente ist jetzt im Verzeichnis `src/app/components/event-list` zu finden.

Ebenso benötigen wir eine Komponente für die einzelnen Events. Diese erstellen wir als Unterverzeichnis der EventList-Komponente:

```bash
ng generate component /components/EventList/EventListItem
```

## 3. Füge einen Type für Events hinzu

Erstelle eine neue Datei `src/app/models/event.ts` und füge in dieser ein Interface für ein Event hinzu.
Ein Event soll folgende Eigenschaften haben:
- `id` (number): Die eindeutige ID des Events
- `name` (string): Der Name des Events
- `date` (Date): Das Datum des Events
- `location` (string): Der Ort des Events
- `description` (string): Eine Beschreibung des Events

## 4. Erstelle die Event-Liste

Zuerst implementieren wir die einzelnen Event-Items. Dazu fügen wir in der `EventListItem`-Komponente eine Input-Property `event` hinzu, das ein Event-Objekt erwartet.

Im HTML der `EventListItem`-Komponente erstellen wir eine einfache Darstellung des Events. Gib dazu untereinander den Namen, das Datum, den Ort und Beschreibung des Events aus.
Tipp: Nutze `@if` um nur Events anzuzeigen, die auch tatsächlich existieren.

Danach befüllen wir die Event-Liste mit Dummy-Daten. Diese sind im Ordner "content" im root Verzeichnis des Workshops zu finden. 
Importiere die Daten in die EventList-Komponente und speichere sie als state mit dem namen `events`. Denke an die Typisierung der Events.

Anschließend können wir im HTML der `EventList`-Komponente die `EventListItem`-Komponente für jedes Event in der Liste rendern.
Denke daran, das entsprechende Objekt an die Input-Property `event` zu übergeben.
Tipp: Hierzu kann `@for` genutzt werden.

Danach müssen wir nur noch die `EventList`-Komponente in der `AppRoot`-Komponente einbinden.
Füge ebenso ein passendes Heading der Seite ein, zum Beispiel "HdM Events".

## 5. Konditioneller Rendern der Event-Liste

Abschließend möchten wir die Event-Liste erst nach Click auf einen Button anzeigen.
Füge dazu einen Button in die `AppRoot`-Komponente ein, der den Text "Events anzeigen" trägt.
Mithilfe eines states `showEvents` in der `AppRoot`-Komponente können wir den Zustand speichern, ob die Events angezeigt werden sollen oder nicht.
Erstelle eine Methode `toggleShowEvents()`, die den Zustand von `showEvents` umkehrt und führe diese bei Click des Buttons aus.

