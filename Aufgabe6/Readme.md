# Erster Kontakt in NestJS

1. Installiere die NestJS CLI, indem du den folgenden Befehl ausführst:
    ```
    npm install -g @nestjs/cli
    ```

2. Erstelle ein neues Projekt, indem du den folgenden Befehl ausführst:
    ```
    nest new projekt-name
    ```

3. Erstelle ein Modul, indem du den folgenden Befehl ausführst:
    ```
    nest generate module modul-name
    ```

4. Erstelle einen Controller, indem du den folgenden Befehl ausführst:
    ```
    nest generate controller controller-name
    ```

5. Erstelle einen Service, indem du den folgenden Befehl ausführst:
    ```
    nest generate service service-name
    ```

6. Aufgabe: Implementiere eine Route im Controller, um die `campusevents` aus einer Datei zurückzugeben.

- Da TypeScript bei Importen von ausserhalb des root-Verzeichnisses gesondert vorgeht, ist es in diesem Fall einfacher die zuvor verwendete `/content/campus-events.ts` Datei im `src` Verzeichnis abzulegen.
- Erstelle in der Datei `campusevents.service.ts` eine Methode namens `getEvents`, die die Datei `campusevents.json` liest und die Events zurückgibt.
- Erstelle in der Datei `campusevents.controller.ts` einen Routen-Handler für den Endpunkt `/events`, der die Methode `getEvents` aus dem Service aufruft und die Events als Antwort zurückgibt.
- Teste den Endpunkt, indem du die NestJS-Anwendung ausführst und eine GET-Anfrage an `http://localhost:3000/events` stellst.

