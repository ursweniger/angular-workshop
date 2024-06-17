# Workshop - Übung 1

In dieser Übung werden der Basis NestJS Anwendung neue Funktionalitäten hinzugefügt. 

## Aufgabe 1: Fügen eine '/events/:id' Route hinzu

1. Öffnen die Datei `events.controller.ts`.
2. Fügen Sie eine neue Route für den Pfad `/events/:id` hinzu.
3. Konfigurieren Sie die Route so, dass sie mit hilfe des `EventsService` das entsprechende Event zurückgibt.


## Aufgabe 2: Füge einen Middleware-Logger hinzu

1. Erstellen eine neue Datei namens `logger.middleware.ts`. Dies funktioniert auch über die nest cli, indem bei `generate` als parameter `middleware` verwendet wird.
2. Implementieren Sie eine Middleware-Funktion, die die eingehenden Anfragen protokolliert.
3. Importiere und verwende die Middleware in einem beliebigen modul, und stelle sicher, dass die Middleware nur auf den `/events` Routen ausgeführt wird.

## Aufgabe 3: Füge eine Validatione Pipe hinzu

1. Füge eine Pipe hinzu, um sicherzustellen, dass die `findOne`-Route nur aufgerufen wird, wenn ein Integer als Pfad verwendet wird.

## Optional: Aufgabe 4: Erstelle ein Interface für TypeScript von CampusEvent (wird später nicht mehr benötigt)

1. Erstelle eine neue Datei namens `campus-event.interface.ts`.
2. Definiere ein Interface mit dem Namen `CampusEvent` mit den folgenden Eigenschaften:
    - `id` vom Typ `number`
    - `name` vom Typ `string`
    - `date` vom Typ `Date`
    - `location` vom Typ `string`
    - `description` vom Typ `string`
3. Exportiere `CampusEvent` aus der Datei.
4. Importiere und verwende  `CampusEvent` in den entsprechenden Dateien, in denen das `CampusEvent`-Objekt verwendet wird.

Denken Sie daran, Ihre Änderungen zu testen und sicherzustellen, dass alles wie erwartet funktioniert.

