# Aufgabe 4: Routing & Neue Campus-Events erstellen

In dieser Übung werden wir eine neue Seite erstellen, über die wir neue Campus-Events erstellen können. Für eine schöne UX soll diese Seite über eine eigene Route aufrufbar sein.

## 1. Erstmal ein bisschen Refactoring...

Bevor wir mit der eigentlichen Arbeit beginnen, möchten wir etwas aufräumen: Komponenten, die "routebar" sind, also einer Seite entsprechen, die über eine bestimmte Route aufgerufen werden können, sollen in einen eigenen _pages_ Ordner verlagert werden. Normale Komponenten, die als Baustiene in verschiedenen Seiten eingebaut sein können, kommen nicht in diesen Ordner. Gehe dazu wie folgt vor:

- Erstelle einen neuen Ordner _src/app/pages_
- Erstelle eine neue `CampusEventsPageComponent` mit folgendem Befehl:

```bash
ng generate component /pages/CampusEventsPage
```

- Um Dir die weitere Arbeit zu erleichtern, haben wir hier bereits den Rest in der Datei _refactoring.md_ vorbereitet. Kopiere nun den Code aus jedem Abschnitt der _refactoring.md_ Datei und überschreibe damit den Inhalt der entsprechenden _.ts_ bzw _.html_ Datei.\
  Ein Beispiel: Der Code aus dem Abschnitt **app.component.ts** in der Datei _refactoring.md_ soll den Inhalt der der Datei _src/app/app.component.ts_ ersetzen.
- Wenn du jetzt die Anwendung mit `ng serve` startest, sollte die App genau so aussehen wie zuvor

## 2. Routing

### 2.1

Bevor wir den Router einsetzen können, müssen wir zunächst eine weitere Seite, erstellen, auf die gerouted werden kann: Eine `CreateCampusEventPage`. Führe dazu folgenden Befehl aus:

```bash
ng generate component /pages/CreateCampusEventPage
```

Belasse es erst einmal bei einer leeren Komponente, um die Ausgestaltung kümmern wir uns später.

### 2.2

Nun können wir das Routing umsetzen:

- Definiere die Routes in der Datei _app.routes.ts_. Dazu musst du in das `Routes` Array zwei Objekte nach dem unten dargestellten Schema packen.
  - Gib im ersten Route-Objekt einen leeren String als `<Path>` und die `CampusEventsPage` Komponente (die Klasse, keine Instanz) als `<Component>` an. Damit werden wir die Liste der Campus-Events auf der Homepage sehen können.
  - Erstelle ein zweites Objekt, dass "create-campus-event" auf die `CreateCampusEventPageComponent` Komponente routet.

_Route-Schema_:

```
{
    path: <Path>,
    component: <Component>,
}
```

- In der Datei _app.component.html_ müssen wir nun festlegen, wo die gerouteten Komponenten gerendert werden sollen. Ersetze dafür das Element `<app-campus-event-list />` durch das Element `<router-outlet />` (die enstprechende Komponente ist bereits in der _app.component.ts_ importiert).
- Zu guter Letzt müssen wir die zwei Seiten miteinander verlinken:
  - Füge sowohl im Decorator der `AppComponent` Klasse, als auch der `CampusEventsPage` Klasse die Klasse `RouterLink` im `imports` Array hinzu
  - Gebe dem `<h1>` Element in der Datei _app.component.html_ das Attribut `routerLink` mit dem Wert `"/"`: Ein Klick auf den "HdM-Header" leitet nun zur Homepage.
  - Erstelle in der Datei _campus-events-page.component.ts_
    einen zweiten Button nach dem Muster des "Events anzeigen"-Button, aber gib ihm den Namen "Neues Event erstellen". Gib auch diesem das Attribut `routerLink`, diesmal mit dem Wert `"create-campus-event"`: Ein Klick auf Button leitet nun zur "Event-Erstell"-Seite.

Nun können zwischen den zwei Seiten hin- und her navigieren!

### 2.3

Als letztes müssen wir noch die "Event-Erstell"-Seite ausarbeiten und mit dem Service aus der letzten Aufgabe verknüpfen.

Führe zunächst folgende Änderungen in der Datei _campus-event-data.service.ts_ durch:

- Erstelle eine public Methode `createCampusEvent`, die als Argument ein Objekt vom Typ `CampusEvent` entgegen nimmt und dieses in das Array `campusEvents` des Service pusht

Führe dann folgende Änderungen in der Datei _create-campus-event-page.component.ts_ durch:

- Erstelle ein public Property `newCampusEvent` mit dem Typ `CampusEvent` und initialisiere es mit "leeren" Werten:

```
public newCampusEvent: CampusEvent = {
    id: Date.now(),
    name: '',
    date: '',
    location: '',
    description: '',
  };
```

- Fordere im Konstruktor unseren `CampusEventDataService` an. Fordere außerdem den `Router` Service an, mit welchem wir später programmatisch zur Homepage zurück navigieren können:

```
constructor(
    private campusEventDataService: CampusEventDataService,
    private router: Router
  ) {}
```

- Erstelle schließlich eine Methode `onCreateClick`, welche unsere neue Service-Methode `createCampusEvent` mit dem `campusEvent` Property als Argument aufruft und anschließend über die `navigate` Methode des `router` Service zur Homepage zurück navigiert.

Jetzt fehlt noch das Template der `CreateCampusEventPage`: Wir benötigen für jedes Feld der `newCampusEvent` Property, ausgenommen dem `id` Feld, ein entsprechendes `<input />` Element, das über Two-Way Binding die Werte miteinander verknüpft.
Wir haben Dir das Template schon in der Datei _template.create-campus-event-page.component.html_ vorbereitet, du musst den Inhalt nur noch rüberkopieren und kannst es nach belieben stylen.

**Wichtig**: Du fragst Dich vielleicht, was `[(ngModel)]` im Template bedeutet: Das ist eine Direktive von Angular, die für uns das Two-Way Binding auf die `value`von dem Input Element übernimmt. `[(value)]` funktioniert hier leider nicht, da es sich hier um native Html Elemente handelt. Damit die Direktive verfügbar ist, musst Du noch in das `imports` Array der `CreateCampusEventPageComponent` das `FormsModule` importieren:

```
@Component({
  ...
  imports: [FormsModule],
  ...
})
```

Geschafft! 🔥
