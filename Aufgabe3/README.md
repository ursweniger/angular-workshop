# Aufgabe 3: Datenverarbeitung über Services

In dieser Übung werden wir die Campus-Events in einen Service auslagern.

## 1. Erstellung von einem neuen Service

Als erstes wollen wir einen `CampusEventDataService` über die CLI erstellen.
Führe dazu den folgenden Befehl in der Kommandozeile aus:

```bash
ng generate service /services/CampusEventData
```

Nun solltest du zwei entsprechende Dateien im neuen Unterordner _src/app/services_ sehen können.

## 2. Campus-Event-Daten über den Service abrufbar machen

Als nächstes wollen wir die Campus-Event Daten in den Service holen und über eine Methode nach außen abrufbar machen.

- Importiere dazu zunächst die `CampusEvents` aus dem Ordner _content_ und speichere sie in eine private Variable des Service.
- Dann kannst du eine public Methode erstellen, bspw. `getAllCampusEvents`, die die CampusEvents returned.

Natürlich würden bei einem echten API-Call die CampusEvents nicht synchron returned werden, wie wir es hier tun. Darum kümmern wir uns aber erst später.

## 3. Campus-Event-Service in die Campus-Event-List einbinden

Abschließend möchten wir nun in der Campus-Event-List die Daten aus dem Service beziehen, anstatt diese direkt zu importieren.

- Gehe dazu in die _campus-event-list.component.ts_ Datei und entferne als erstes den Import der CampusEvents aus dem Ordner _content_. Die Variable `campusEvents` der Komponente kannst du stattdessen als leeres Array initialisieren.
- Importiere nun den `CampusEventDataService` und deklariere ihn als privates Property im Konstruktor der `CampusEventListComponent` Klasse.
- Jetzt können wir im Konstruktor die Methode `getAllCampusEvents` des Service aufrufen und die Daten in die `campusEvents` Property der Komponente schreiben.
