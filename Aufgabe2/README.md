# Aufgabe 2: Styling mit Tailwind CSS

In dieser Übung werden wir unsere bestehende Campus-Events-App mit Tailwind CSS stylen.

## 1. Installation von Tailwind CSS

Um Tailwind CSS in unser Angular-Projekt zu integrieren, müssen wir es zunächst installieren.
Führe dazu den folgenden Befehl in der Kommandozeile aus:

```bash
npm install -D tailwindcss postcss autoprefixer
```

Anschließend müssen wir die Konfigurationsdateien für Tailwind CSS erstellen. 
Führe dazu den folgenden Befehl aus:

```bash
npx tailwindcss init
```

Anschließend können wir Tailwind für unser Projekt konfigurieren. 
Öffne die Tailwind-Konfigurationsdatei und Verknüpfe den Pfad zu unseren Projektdateien.
Danach muss Tailwind noch in unser globales Stylesheet eingebunden werden.

## 2. Personalisieren von Tailwind CSS

Wir möchten in unserer App eigene Fonts und Farben verwenden.
Ergänze dazu das Tailwind Theme. Beispielsweise um die Schriftart `Verdana, sans-serif` und die Farben der HdM-Website ('#e31134', '#3E4847').
Stelle anschließend die Schriftart als Default Wert für Tailwind ein.
Tipp: `@layer` und `@apply` können hier hilfreich sein.

## 3. Styling der Root-Komponente

Zunächst möchten wir die Root-Komponente unserer App stylen. 
Style deine App nach Belieben, folgendes sind Vorschläge:
- Beginne damit, die App mit einem Layout zu versehen, sodass die Elemente zentriert und untereinander angeordnet sind.
- Style die Überschrift, indem du sie durch Größe und Farbe hervorhebst.
- Versehe den Button mit einer runden Umrandung

## 4. Styling der Event-Liste

Anschließend stylen wir die Event-Liste.
Gehe auch hier gerne nach Belieben vor, folgendes Vorschläge gibt es:
- Versehe auch die Event-Liste mit einem Layout, sodass die Events untereinander angeordnet sind.
- Beschränke die maximale Breite der Event-Liste.
- Style die einzelnen Event-Items so, dass sie wie Karten aussehen.
- Hierarchisiere die einzelnen Elemente der Events (Name, Datum, Ort, Beschreibung), indem du sie durch Größe und Farbe hervorhebst.
