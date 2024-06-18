# Aufgabe 5: Rxjs für asynchrone Operationen

In dieser Übung wollen wir die statisch in unserer App importierten `CampusEvents` durch "echte" Daten von einem Backend austauschen und dabei Rxjs verwenden. Das Backend haben wir schon vorbereitet. Der Api-Endpunkt lautet:

```
http://193.196.53.51:8443/events/
```

## 1. Abrufen der CampusEvents vom Backend

Da der `CampusEventDataService` für die Verwaltung der Daten im Frontend zuständig ist, müssen wir die Call zum Backend ausführen, um an die Daten zu kommen. Gehe dazu wie folgt vor:

- Entferne die `campusEvents` Property, diese wird nicht mehr benötigt
- Lege stattdessen eine konstante Variable `apiUrl` an und weise ihr die oben angegebene Adresse des Backends als Wert zu
- Angular liefert einen eignen `HttpClient` mit. Diesen müssen wir im Konstruktor als Service anfordern (siehe Kapitel "Services"). Aus historischen Gründen müssen solche Angular-eigenen Services noch registriert werden, damit Angulars Dependency Injection uns versteht. Dazu müssen wir in der _app.config.ts_ im `providers` Array die Methode `provideHttpClient` ausführen:

```
...
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
  ],
};
```

- Nun müssen wir die beiden public Methoden anpassen:

  - `getAllCampusEvents`: Der `httpClient` liefert als Ergebnis der Methode `get` ein Observable zurück, dass bei erfolgreichem Request die Antwort-Daten emittiert. `get`benötigt als Parameter die Endpunkt-Url und mit einem Typ-Paramter kann der erwartete Typ der Antwort-Daten fetsgelegt werden. Die Methode könnte also so aussehen:

  ```
  public getAllCampusEvents() {
      return this.httpClient.get<CampusEvent[]>(this.apiUrl);
  }
  ```

  - `createCampusEvent`: Hier kann mit dem `httpClient` über die Methode `post` ein neues `campusEvent` an das Backend geschickt werden. Returne auch hier das Observable, sodass die Komponenten, die diese Methode aufrufen auf den abgeschlossenen Post-Request reagieren können.

## 2. Anpassung der Komponenten

Jetzt müssen wir noch einige Komponenten anpassen, damit diese mit den asynchron geliferten Daten vom Backend umgehen können.

- Passe dazu als erstes die Initialisierung der `campusEvents` in der `CampusEventList` Komponente an: Subscribe im Konstruktor auf das von `getAllCampusEvents` gelieferte Observable, und weise die Response-Daten der `campusEvent` Variable zu.
- Auch der Handler in der `CreateCampusEvent` Komponente muss angepasst werden: Subscribe auf das von der `createCampusEvent` Methode gelieferte Observable und navigiere erst im `complete` Callback zur Homepage zurück

## 3. Loading-Spinner

Als kleine Verzierung wollen wir noch einen Loading-Spinner im Template der `CampusEventList` Komponente einbauen. Mit einem `@empty{ ... }` Block können wir auf eine leere `campusEvents` List im `@for { ... }` Block reagieren.\
 Ein Loading-Spinner lässt sich mit Tailwind Utility-Klassen beispielsweise so realsieren:

```
<div class="flex items-center justify-center">
  <div class="w-8 h-8 border-4 border-secondary border-t-transparent border-solid rounded-full animate-spin"></div>
</div>
```

## 4. Fertig!

Falls noch Zeit da ist, kannst du die App noch etwas rund schleifen! Beispielsweise kannst du Error-Handling für die Backend-Calls einbauen, noch einen zweiten Loading-Spinner, der anzeigt, dass ein neues Campus-Event auf dem Weg zum Backend ist, oder auch etwas am Design mit Tailwind feilen...
