# Datenbankanbindung

Um die Datenbankanbindung mit Mongoose einzurichten, folge bitte den folgenden Schritten:

### 1. Installieren des Mongoose-Pakets im Projekt
```
npm i @nestjs/mongoose mongoose
```
### 2. Hinzufügen von Mongoose als Import im `AppModule`. 

Da wir euch heute mal das Aufsetzten einer MongoDB Instanz ersparen wollen, könnt ihr auch einfach folgenden (normalerweise absolut unsicheren) Connection string verwenden:
`'mongodb+srv://webapp:development@webapp.6mtwprv.mongodb.net/?retryWrites=true&w=majority&appName=webapp'`

### 3. Erstellen des CampusEvent-Schemas, um die Struktur der Datenbanktabelle festzulegen.

Mit Mongoose wird alles über ``Schemen`` gesteuert, und ein jedes dieser Schemen spielgelt in der MongoDB eine Collection wieder. NestJS bietet hierfür hilfreiche decorators wie z.B. `@Prop` und `@Schema`. Mongoose erstellt automatisch für jeden neuen Eintrag ein Attribut ``_id`` mit einem zufälligem Wert, weswegen dieses Feld nicht nötig ist, füge dem Schema jedoch folgendes hinzu, um die id korrekt zu mappen:
```
const schmema = SchemaFactory.createForClass().set('toJSON', {
    virtuals: true
});
```

### 4. Einrichten von Module und Service

Verwende im Import des Event Moduls die `MongooseModule.forFeature()` Methode, um dein Events Schema im Modul bereitszustellen. 

Beachte im Service das MongooseModel über den Constructor zu injecten. Im anshcluss kannst du das injectete Objekt verwenden, um deine bisherigen funktionen anzupassen und die MongoDB zu verwenden. Hilfreiche funktionen am Model sind beispielsweise `findById(id)` oder `find()`, und in diesen Fällen vergesse nicht `.exec()` auszuführen. Bedenke, dass es sich hierbei um Promises handelt.

Erstelle zudem eine Funktion um Events mit einer bestimmten ID aus der DB zu löschen.

### 5. Anpassen des Controllers um die neuen Service-Methoden zu verwenden und die Datenbankanbindung zu nutzen.

Hier musst du nur die Rückgabetypen anpassen, sowie einen neuen Pfad für `/delete/:id`
anlegen.

### 6. Optional: Erstellen des CreateCampusEvent-DTO (Data Transfer Object)

Wenn du zuvor bereits ein Interface erstellt hast, kannst du das wiederverwenden und in ein DTO umbennen, und an den entsprechenden Stellen im Events-Controller als Typ angeben.


