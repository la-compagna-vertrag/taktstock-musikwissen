// Maestro Quiz – ausgelagerte Fragebank
// Version 3.3.6 – Bildfix: alle personen- und werkbezogenen Fragen erhalten ein konkretes Komponistenbild.
//
// Regel:
// - Komponisten-/Werk-/Opernfragen: Bild des passenden Komponisten bzw. der passenden Komponistin.
// - Theorie-, Praxis-, Instrumenten- und reine Begriffsfragen: neutrales Maestro-Logo.
// - Wenn ein Bildpfad nicht gefunden wird, behandelt index.html den Fallback robust.

const levels = [
  {
    "id": 1,
    "title": "Die grossen Klassiker",
    "description": "Ein Einstieg mit den bekanntesten Namen, Werken und Bildern.",
    "active": true,
    "tier": "free",
    "difficulty": "leicht",
    "defaultCategory": "Komponisten",
    "questions": [
      {
        "question": "Wer komponierte die 'Mondscheinsonate'?",
        "category": "Formen & Gattungen",
        "tier": "free",
        "difficulty": "leicht",
        "image": "beethoven.webp",
        "options": [
          "Mozart",
          "Beethoven",
          "Bach",
          "Chopin"
        ],
        "correct": 1,
        "explanation": "Die sogenannte Mondscheinsonate ist Beethovens Klaviersonate Nr. 14 cis-Moll op. 27 Nr. 2. Der berühmte Beiname stammt nicht von Beethoven selbst.",
        "levelId": 1
      },
      {
        "question": "Welcher Komponist wurde im Laufe seines Lebens zunehmend taub?",
        "category": "Komponisten",
        "tier": "free",
        "difficulty": "leicht",
        "image": "beethoven.webp",
        "options": [
          "Beethoven",
          "Brahms",
          "Schubert",
          "Vivaldi"
        ],
        "correct": 0,
        "explanation": "Beethoven verlor ab etwa seinem späten 20er-Lebensalter zunehmend sein Gehör. Trotzdem komponierte er später einige seiner bedeutendsten Werke.",
        "levelId": 1
      },
      {
        "question": "Welches Werk stammt von Antonio Vivaldi?",
        "category": "Werkkunde",
        "tier": "free",
        "difficulty": "leicht",
        "image": "vivaldi.webp",
        "options": [
          "Die Zauberflöte",
          "Die vier Jahreszeiten",
          "Eine kleine Nachtmusik",
          "Die Unvollendete"
        ],
        "correct": 1,
        "explanation": "Die vier Jahreszeiten sind vier Violinkonzerte von Vivaldi. Sie gehören zu den bekanntesten Programmmusik-Werken des Barock.",
        "levelId": 1
      },
      {
        "question": "In welcher Stadt wurde Mozart geboren?",
        "category": "Komponisten",
        "tier": "free",
        "difficulty": "leicht",
        "image": "mozart.jpg",
        "options": [
          "Wien",
          "Berlin",
          "Salzburg",
          "Paris"
        ],
        "correct": 2,
        "explanation": "Mozart wurde 1756 in Salzburg geboren. Wien wurde später einer seiner wichtigsten Wirkungsorte.",
        "levelId": 1
      },
      {
        "question": "Welcher Komponist ist besonders bekannt für Nocturnes, Mazurken und Polonaisen?",
        "category": "Komponisten",
        "tier": "free",
        "difficulty": "leicht",
        "image": "chopin.jpg",
        "options": [
          "Debussy",
          "Chopin",
          "Tschaikowsky",
          "Gershwin"
        ],
        "correct": 1,
        "explanation": "Chopin schrieb fast ausschliesslich für Klavier. Nocturnes, Mazurken, Polonaisen und Etüden gehören zu seinen zentralen Gattungen.",
        "levelId": 1
      },
      {
        "question": "Wer komponierte 'Also sprach Zarathustra'?",
        "category": "Werkkunde",
        "tier": "free",
        "difficulty": "leicht",
        "image": "rstrauss.jpg",
        "options": [
          "Richard Strauss",
          "Wagner",
          "Mahler",
          "Berlioz"
        ],
        "correct": 0,
        "explanation": "Also sprach Zarathustra ist eine sinfonische Dichtung von Richard Strauss. Der Anfang ist besonders durch den Film 2001: A Space Odyssey berühmt geworden.",
        "levelId": 1
      },
      {
        "question": "Wie viele Sinfonien schrieb Beethoven?",
        "category": "Formen & Gattungen",
        "tier": "free",
        "difficulty": "leicht",
        "image": "beethoven.webp",
        "options": [
          "5",
          "7",
          "9",
          "11"
        ],
        "correct": 2,
        "explanation": "Beethoven schrieb neun Sinfonien. Die Neunte mit Chorfinale wurde zu einem Schlüsselwerk der Musikgeschichte.",
        "levelId": 1
      },
      {
        "question": "Wer gilt oft als 'Vater der Sinfonie'?",
        "category": "Formen & Gattungen",
        "tier": "free",
        "difficulty": "leicht",
        "image": "jhaydn.jpg",
        "options": [
          "Joseph Haydn",
          "Bach",
          "Händel",
          "Mendelssohn"
        ],
        "correct": 0,
        "explanation": "Joseph Haydn prägte die klassische Sinfonie entscheidend. Er schrieb über hundert Sinfonien und entwickelte die Gattung enorm weiter.",
        "levelId": 1
      },
      {
        "question": "Welches Instrument spielte Franz Liszt virtuos?",
        "category": "Komponisten",
        "tier": "free",
        "difficulty": "leicht",
        "image": "liszt.jpg",
        "options": [
          "Geige",
          "Klavier",
          "Cello",
          "Flöte"
        ],
        "correct": 1,
        "explanation": "Liszt war einer der berühmtesten Klaviervirtuosen des 19. Jahrhunderts. Seine Werke erweiterten die technischen Möglichkeiten des Klaviers enorm.",
        "levelId": 1
      },
      {
        "question": "Wer komponierte den berühmten Hochzeitsmarsch aus 'Ein Sommernachtstraum'?",
        "category": "Epochen & Stil",
        "tier": "free",
        "difficulty": "leicht",
        "image": "mendelssohn.jpg",
        "options": [
          "Schumann",
          "Mendelssohn",
          "Berlioz",
          "Saint-Saëns"
        ],
        "correct": 1,
        "explanation": "Der bekannte Hochzeitsmarsch stammt von Felix Mendelssohn Bartholdy aus seiner Musik zu Shakespeares Ein Sommernachtstraum.",
        "levelId": 1
      },
      {
        "question": "Welcher Komponist schrieb die „Sinfonia da Requiem“?",
        "category": "Komponisten",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Britten",
          "Elgar",
          "Vaughan Williams",
          "Holst"
        ],
        "correct": 0,
        "explanation": "Benjamin Britten komponierte die Sinfonia da Requiem 1940. Das Werk ist kein liturgisches Requiem, verwendet aber lateinische Satzüberschriften aus der Totenmesse.",
        "levelId": 1,
        "image": "britten.jpg"
      },
      {
        "question": "Welcher Komponist war Mitglied der französischen Gruppe „Les Six“?",
        "category": "Komponisten",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Poulenc",
          "Debussy",
          "Fauré",
          "Saint-Saëns"
        ],
        "correct": 0,
        "explanation": "Francis Poulenc gehörte zur Gruppe Les Six. Die Gruppe stand für eine französische, oft klare und antiromantische Gegenposition zu spätromantischer Schwere.",
        "levelId": 1,
        "image": "poulenc.jpg"
      },
      {
        "question": "Wer komponierte die Oper „Peter Grimes“?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Benjamin Britten",
          "Ralph Vaughan Williams",
          "Edward Elgar",
          "Gustav Holst"
        ],
        "correct": 0,
        "explanation": "Peter Grimes ist eine Oper von Benjamin Britten und wurde 1945 uraufgeführt. Sie gilt als Schlüsselwerk der englischen Oper des 20. Jahrhunderts.",
        "levelId": 1,
        "image": "britten.jpg"
      },
      {
        "question": "Welcher Komponist schrieb viele „Gnossiennes“ und „Gymnopédies“?",
        "category": "Komponisten",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Erik Satie",
          "Claude Debussy",
          "Maurice Ravel",
          "Gabriel Fauré"
        ],
        "correct": 0,
        "explanation": "Erik Satie komponierte die berühmten Gymnopédies und Gnossiennes. Seine Musik wirkt oft schlicht, eigenwillig und atmosphärisch.",
        "levelId": 1,
        "image": "satie.jpg"
      },
      {
        "question": "Welcher Komponist gilt als wichtiger Vertreter der ungarischen Moderne und sammelte Volksmusik?",
        "category": "Komponisten",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Bartók",
          "Mahler",
          "Bruckner",
          "Liszt"
        ],
        "correct": 0,
        "explanation": "Béla Bartók sammelte gemeinsam mit anderen Forschern Volksmusik und verband sie mit moderner Tonsprache.",
        "levelId": 1,
        "image": "bartok.jpg"
      },
      {
        "question": "Welcher Komponist schrieb die Oper „Wozzeck“?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Alban Berg",
          "Arnold Schönberg",
          "Anton Webern",
          "Paul Hindemith"
        ],
        "correct": 0,
        "explanation": "Wozzeck ist eine Oper von Alban Berg nach Georg Büchner. Sie gehört zu den wichtigsten Musiktheaterwerken der Moderne.",
        "levelId": 1,
        "image": "albanberg.jpg"
      },
      {
        "question": "Wer komponierte „Carmina Burana“?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Carl Orff",
          "Paul Hindemith",
          "Kurt Weill",
          "Hans Pfitzner"
        ],
        "correct": 0,
        "explanation": "Carmina Burana ist ein szenisches Chorwerk von Carl Orff. Besonders berühmt ist der Eingangschor „O Fortuna“.",
        "levelId": 1,
        "image": "orff.jpg"
      },
      {
        "question": "Welcher Komponist schrieb das Orchesterwerk „The Planets“?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Gustav Holst",
          "Edward Elgar",
          "William Walton",
          "Frederick Delius"
        ],
        "correct": 0,
        "explanation": "The Planets ist eine Orchestersuite von Gustav Holst. Jeder Satz ist einem Planeten und einer astrologischen Charakteridee gewidmet.",
        "levelId": 1,
        "image": "holst.jpg"
      },
      {
        "question": "Welcher Komponist schrieb die Oper „Pelléas et Mélisande“?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Debussy",
          "Ravel",
          "Fauré",
          "Bizet"
        ],
        "correct": 0,
        "explanation": "Pelléas et Mélisande ist Debussys einzige vollendete Oper. Sie ist ein zentrales Werk des musikalischen Impressionismus.",
        "levelId": 1,
        "image": "debussy.jpg"
      },
      {
        "question": "Wer komponierte die „Alpensinfonie“?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Richard Strauss",
          "Gustav Mahler",
          "Anton Bruckner",
          "Max Reger"
        ],
        "correct": 0,
        "explanation": "Eine Alpensinfonie ist ein grosses Orchesterwerk von Richard Strauss. Es schildert musikalisch eine Bergwanderung vom Aufstieg bis zur Nacht.",
        "levelId": 1,
        "image": "rstrauss.jpg"
      },
      {
        "question": "Welcher Komponist schrieb die „Variationen über ein Thema von Haydn“?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Brahms",
          "Schumann",
          "Mendelssohn",
          "Dvořák"
        ],
        "correct": 0,
        "explanation": "Die Variationen über ein Thema von Haydn stammen von Johannes Brahms. Das zugrunde liegende Thema wurde lange Haydn zugeschrieben.",
        "levelId": 1,
        "image": "brahms.jpg"
      },
      {
        "question": "Welcher Komponist war besonders eng mit dem „Mächtigen Häuflein“ in Russland verbunden?",
        "category": "Komponisten",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Mussorgsky",
          "Mahler",
          "Debussy",
          "Elgar"
        ],
        "correct": 0,
        "explanation": "Modest Mussorgsky gehörte zum Kreis des sogenannten Mächtigen Häufleins, einer Gruppe russischer Komponisten mit nationaler Ausrichtung.",
        "levelId": 1,
        "image": "mussorgsky.jpg"
      },
      {
        "question": "Wer komponierte die „Glagolitische Messe“?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Janáček",
          "Dvořák",
          "Smetana",
          "Martinů"
        ],
        "correct": 0,
        "explanation": "Die Glagolitische Messe ist ein bedeutendes geistliches Werk von Leoš Janáček mit altslawischem Text.",
        "levelId": 1,
        "image": "janacek.jpg"
      },
      {
        "question": "Welcher Komponist schrieb viele Lieder nach Gedichten von Wilhelm Müller?",
        "category": "Komponisten",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Schubert",
          "Brahms",
          "Wolf",
          "Mahler"
        ],
        "correct": 0,
        "explanation": "Franz Schubert vertonte Gedichte von Wilhelm Müller, unter anderem in den Zyklen Die schöne Müllerin und Winterreise.",
        "levelId": 1,
        "image": "schubert.png"
      },
      {
        "question": "Welcher Komponist schrieb das Orchesterwerk „Prélude à l’après-midi d’un faune“?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Debussy",
          "Ravel",
          "Fauré",
          "Saint-Saëns"
        ],
        "correct": 0,
        "explanation": "Debussys Prélude à l’après-midi d’un faune gilt als Schlüsselwerk des musikalischen Impressionismus.",
        "levelId": 1,
        "image": "debussy.jpg"
      },
      {
        "question": "Welcher Komponist schrieb die „Enigma-Variationen“?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Elgar",
          "Britten",
          "Holst",
          "Vaughan Williams"
        ],
        "correct": 0,
        "explanation": "Die Enigma-Variationen stammen von Edward Elgar. Viele Variationen porträtieren Personen aus seinem Umfeld.",
        "levelId": 1,
        "image": "elgar.jpg"
      },
      {
        "question": "Welcher Komponist war ein wichtiger Vertreter der tschechischen Nationalmusik und schrieb „Mein Vaterland“?",
        "category": "Komponisten",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Smetana",
          "Chopin",
          "Grieg",
          "Sibelius"
        ],
        "correct": 0,
        "explanation": "Bedřich Smetana schrieb den Zyklus Mein Vaterland, zu dem auch Die Moldau gehört.",
        "levelId": 1,
        "image": "smetana.jpg"
      },
      {
        "question": "Welcher Komponist schrieb die „Ungarischen Tänze“?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Brahms",
          "Liszt",
          "Bartók",
          "Kodály"
        ],
        "correct": 0,
        "explanation": "Die Ungarischen Tänze stammen von Johannes Brahms und greifen ungarisch geprägte Tanzidiome auf.",
        "levelId": 1,
        "image": "brahms.jpg"
      },
      {
        "question": "Welcher Komponist schrieb die Oper „Porgy and Bess“?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Gershwin",
          "Bernstein",
          "Copland",
          "Barber"
        ],
        "correct": 0,
        "explanation": "Porgy and Bess ist eine Oper von George Gershwin und verbindet klassische Operntradition mit afroamerikanischen Musikidiomen.",
        "levelId": 1,
        "image": "gershwin.jpg"
      },
      {
        "question": "Welcher Komponist schrieb die „Kindertotenlieder“?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Mahler",
          "Schubert",
          "Schumann",
          "Brahms"
        ],
        "correct": 0,
        "explanation": "Gustav Mahler komponierte die Kindertotenlieder nach Gedichten von Friedrich Rückert.",
        "levelId": 1,
        "image": "mahler.jpg"
      },
      {
        "question": "Welcher Komponist wurde 1685 in Eisenach geboren?",
        "category": "Komponisten",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "bach.jpg",
        "options": [
          "Bach",
          "Händel",
          "Haydn",
          "Schubert"
        ],
        "correct": 0,
        "explanation": "Johann Sebastian Bach wurde 1685 in Eisenach geboren.",
        "levelId": 1
      },
      {
        "question": "Welcher Komponist war ein Zeitgenosse Bachs und wurde ebenfalls 1685 geboren?",
        "category": "Komponisten",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "handel.jpg",
        "options": [
          "Händel",
          "Mozart",
          "Brahms",
          "Mahler"
        ],
        "correct": 0,
        "explanation": "Georg Friedrich Händel wurde wie Bach 1685 geboren.",
        "levelId": 1
      },
      {
        "question": "Welcher Komponist wurde wegen seiner langen Tätigkeit in London auch mit den „Londoner Sinfonien“ verbunden?",
        "category": "Komponisten",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "jhaydn.jpg",
        "options": [
          "Haydn",
          "Bach",
          "Chopin",
          "Debussy"
        ],
        "correct": 0,
        "explanation": "Joseph Haydn schrieb seine letzten Sinfonien für Londoner Konzertreisen.",
        "levelId": 1
      },
      {
        "question": "Welcher Komponist schrieb besonders viele Lieder, darunter „Erlkönig“?",
        "category": "Komponisten",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "schubert.png",
        "options": [
          "Schubert",
          "Vivaldi",
          "Verdi",
          "Strauß"
        ],
        "correct": 0,
        "explanation": "Franz Schubert ist einer der wichtigsten Liedkomponisten.",
        "levelId": 1
      },
      {
        "question": "Welcher Komponist schrieb die 9. Sinfonie mit dem berühmten Schlusschor „Ode an die Freude“?",
        "category": "Komponisten",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "beethoven.webp",
        "options": [
          "Beethoven",
          "Monteverdi",
          "Chopin",
          "Ravel"
        ],
        "correct": 0,
        "explanation": "Beethovens 9. Sinfonie endet mit einem Chorfinale über Schillers „Ode an die Freude“.",
        "levelId": 1
      },
      {
        "question": "Welche Oper von Verdi enthält den berühmten Gefangenenchor „Va, pensiero“?",
        "category": "Komponisten",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "verdi.jpg",
        "options": [
          "Nabucco",
          "Tosca",
          "Carmen",
          "Fidelio"
        ],
        "correct": 0,
        "explanation": "Der Gefangenenchor aus „Nabucco“ gehört zu Verdis bekanntesten Opernnummern.",
        "levelId": 1
      },
      {
        "question": "Welcher Komponist schrieb viele Werke für Klavier und lebte lange in Paris?",
        "category": "Komponisten",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "chopin.jpg",
        "options": [
          "Chopin",
          "Mahler",
          "Orff",
          "Telemann"
        ],
        "correct": 0,
        "explanation": "Frédéric Chopin ist besonders für seine Klaviermusik bekannt.",
        "levelId": 1
      },
      {
        "question": "Welcher Komponist schrieb die Oper „Der Freischütz“?",
        "category": "Komponisten",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "weber.jpg",
        "options": [
          "Carl Maria von Weber",
          "Rossini",
          "Puccini",
          "Satie"
        ],
        "correct": 0,
        "explanation": "„Der Freischütz“ gilt als wichtige deutsche romantische Oper.",
        "levelId": 1
      },
      {
        "question": "Welcher Komponist stammt aus Norwegen?",
        "category": "Komponisten",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "grieg.jpg",
        "options": [
          "Grieg",
          "Dvořák",
          "Smetana",
          "Sibelius"
        ],
        "correct": 0,
        "explanation": "Edvard Grieg war ein norwegischer Komponist der Romantik.",
        "levelId": 1
      },
      {
        "question": "Welcher Komponist schrieb „Carmina Burana“?",
        "category": "Komponisten",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "orff.jpg",
        "options": [
          "Carl Orff",
          "Igor Strawinsky",
          "Anton Bruckner",
          "Felix Mendelssohn"
        ],
        "correct": 0,
        "explanation": "„Carmina Burana“ ist Carl Orffs bekanntestes Werk.",
        "levelId": 1
      }
    ]
  },
  {
    "id": 2,
    "title": "Werke & Komponisten",
    "description": "Jetzt wird es etwas mehr Werkkunde: Wer schrieb welches berühmte Werk?",
    "active": true,
    "tier": "free",
    "difficulty": "leicht-mittel",
    "defaultCategory": "Werkkunde",
    "questions": [
      {
        "question": "Wer komponierte die 'Matthäus-Passion'?",
        "category": "Kirchenmusik & Chor",
        "tier": "free",
        "difficulty": "leicht-mittel",
        "image": "bach.jpg",
        "options": [
          "Johann Sebastian Bach",
          "Georg Friedrich Händel",
          "Heinrich Schütz",
          "Antonio Vivaldi"
        ],
        "correct": 0,
        "explanation": "Die Matthäus-Passion ist eines der grössten geistlichen Werke Johann Sebastian Bachs und ein Höhepunkt protestantischer Passionsmusik.",
        "levelId": 2
      },
      {
        "question": "Wer komponierte die Oper 'La Traviata'?",
        "category": "Oper & Musiktheater",
        "tier": "free",
        "difficulty": "leicht-mittel",
        "image": "verdi.jpg",
        "options": [
          "Puccini",
          "Rossini",
          "Verdi",
          "Bizet"
        ],
        "correct": 2,
        "explanation": "La Traviata ist eine Oper von Giuseppe Verdi. Sie gehört zusammen mit Rigoletto und Il trovatore zu seinen populärsten Opern.",
        "levelId": 2
      },
      {
        "question": "Welcher Komponist schrieb 'Die Moldau'?",
        "category": "Werkkunde",
        "tier": "free",
        "difficulty": "leicht-mittel",
        "image": "smetana.jpg",
        "options": [
          "Dvořák",
          "Smetana",
          "Grieg",
          "Sibelius"
        ],
        "correct": 1,
        "explanation": "Die Moldau stammt von Bedřich Smetana und ist Teil des Zyklus Mein Vaterland. Das Werk beschreibt musikalisch den Lauf des Flusses Moldau.",
        "levelId": 2
      },
      {
        "question": "Von wem stammt der berühmte 'Boléro'?",
        "category": "Werkkunde",
        "tier": "free",
        "difficulty": "leicht-mittel",
        "image": "ravel.jpg",
        "options": [
          "Debussy",
          "Ravel",
          "Fauré",
          "Bizet"
        ],
        "correct": 1,
        "explanation": "Der Boléro von Maurice Ravel basiert auf einer fast hypnotischen Wiederholung eines rhythmischen und melodischen Modells mit wachsender Orchestrierung.",
        "levelId": 2
      },
      {
        "question": "Wer komponierte 'Carmina Burana'?",
        "category": "Werkkunde",
        "tier": "free",
        "difficulty": "leicht-mittel",
        "image": "orff.jpg",
        "options": [
          "Carl Orff",
          "Benjamin Britten",
          "Igor Strawinsky",
          "Paul Hindemith"
        ],
        "correct": 0,
        "explanation": "Carmina Burana ist ein szenisches Chorwerk von Carl Orff. Besonders der Satz O Fortuna wurde weltberühmt.",
        "levelId": 2
      },
      {
        "question": "Wer komponierte das Musical 'West Side Story'?",
        "category": "Oper & Musiktheater",
        "tier": "free",
        "difficulty": "leicht-mittel",
        "image": "bernstein.jpg",
        "options": [
          "Leonard Bernstein",
          "George Gershwin",
          "Aaron Copland",
          "Kurt Weill"
        ],
        "correct": 0,
        "explanation": "West Side Story stammt von Leonard Bernstein. Das Werk verbindet Musical, Opernähe, Jazz, lateinamerikanische Rhythmen und sinfonische Klangsprache.",
        "levelId": 2
      },
      {
        "question": "Wer schrieb 'Ein deutsches Requiem'?",
        "category": "Kirchenmusik & Chor",
        "tier": "free",
        "difficulty": "leicht-mittel",
        "image": "brahms.jpg",
        "options": [
          "Brahms",
          "Bruckner",
          "Mahler",
          "Schumann"
        ],
        "correct": 0,
        "explanation": "Ein deutsches Requiem ist ein grosses Chor- und Orchesterwerk von Johannes Brahms. Der Text basiert auf deutschsprachigen Bibelstellen.",
        "levelId": 2
      },
      {
        "question": "Wer komponierte 'Le Sacre du printemps'?",
        "category": "Werkkunde",
        "tier": "free",
        "difficulty": "leicht-mittel",
        "image": "stravinsky.jpg",
        "options": [
          "Ravel",
          "Strawinsky",
          "Prokofjew",
          "Schostakowitsch"
        ],
        "correct": 1,
        "explanation": "Le Sacre du printemps von Igor Strawinsky löste 1913 in Paris einen legendären Skandal aus und wurde zu einem Schlüsselwerk der musikalischen Moderne.",
        "levelId": 2
      },
      {
        "question": "Wer komponierte den Opernzyklus 'Der Ring des Nibelungen'?",
        "category": "Oper & Musiktheater",
        "tier": "free",
        "difficulty": "leicht-mittel",
        "image": "wagner.jpg",
        "options": [
          "Richard Wagner",
          "Richard Strauss",
          "Giuseppe Verdi",
          "Giacomo Puccini"
        ],
        "correct": 0,
        "explanation": "Der Ring des Nibelungen ist ein vierteiliger Opernzyklus von Richard Wagner. Er besteht aus Rheingold, Walküre, Siegfried und Götterdämmerung.",
        "levelId": 2
      },
      {
        "question": "Zu welchem Komponisten gehört die Schauspielmusik 'Peer Gynt'?",
        "category": "Werkkunde",
        "tier": "free",
        "difficulty": "leicht-mittel",
        "image": "grieg.jpg",
        "options": [
          "Sibelius",
          "Grieg",
          "Dvořák",
          "Elgar"
        ],
        "correct": 1,
        "explanation": "Peer Gynt ist Schauspielmusik von Edvard Grieg zu einem Drama von Henrik Ibsen. Morgenstimmung und In der Halle des Bergkönigs sind besonders bekannt.",
        "levelId": 2
      },
      {
        "question": "Welches Werk beginnt mit dem berühmten Orchester- und Chor-Ausbruch „O Fortuna“?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Carmina Burana",
          "Die Schöpfung",
          "Ein deutsches Requiem",
          "Elias"
        ],
        "correct": 0,
        "explanation": "„O Fortuna“ eröffnet und beschliesst Carl Orffs Carmina Burana. Der Satz ist wegen seiner wuchtigen Rhythmik besonders bekannt.",
        "levelId": 2,
        "image": "orff.jpg"
      },
      {
        "question": "Aus welchem Werk stammt der Chor „Va, pensiero“?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Nabucco",
          "Aida",
          "Macbeth",
          "Otello"
        ],
        "correct": 0,
        "explanation": "„Va, pensiero“ ist der berühmte Gefangenenchor aus Verdis Oper Nabucco.",
        "levelId": 2,
        "image": "verdi.jpg"
      },
      {
        "question": "Welches Werk ist ein berühmtes Oratorium von Mendelssohn?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Elias",
          "Die Jahreszeiten",
          "Paulus von Theben",
          "Juditha triumphans"
        ],
        "correct": 0,
        "explanation": "Elias ist eines der bekanntesten Oratorien von Felix Mendelssohn Bartholdy. Auch sein Paulus ist ein wichtiges Oratorium.",
        "levelId": 2,
        "image": "mendelssohn.jpg"
      },
      {
        "question": "Welches Werk ist eine Ballettmusik von Tschaikowsky?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Dornröschen",
          "Die Zauberflöte",
          "Carmen",
          "Der Freischütz"
        ],
        "correct": 0,
        "explanation": "Dornröschen ist eines der grossen Ballette von Tschaikowsky, neben Schwanensee und Der Nussknacker.",
        "levelId": 2,
        "image": "tchaikovsky.jpg"
      },
      {
        "question": "Welches Werk stammt von Mussorgsky und wurde später von Ravel orchestriert?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Bilder einer Ausstellung",
          "Die Moldau",
          "La Mer",
          "Enigma-Variationen"
        ],
        "correct": 0,
        "explanation": "Bilder einer Ausstellung ist ursprünglich ein Klavierzyklus von Mussorgsky. Ravels Orchestrierung machte das Werk im Konzertsaal besonders populär.",
        "levelId": 2,
        "image": "mussorgsky.jpg"
      },
      {
        "question": "Welches Werk ist eine sinfonische Dichtung von Smetana?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Die Moldau",
          "Finlandia",
          "Don Juan",
          "Also sprach Zarathustra"
        ],
        "correct": 0,
        "explanation": "Die Moldau ist Teil des Zyklus Mein Vaterland von Bedřich Smetana und schildert den Verlauf des Flusses musikalisch.",
        "levelId": 2,
        "image": "smetana.jpg"
      },
      {
        "question": "Welches Werk ist ein Klavierzyklus von Schumann?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Kinderszenen",
          "Vier letzte Lieder",
          "Wesendonck-Lieder",
          "Spanische Rhapsodie"
        ],
        "correct": 0,
        "explanation": "Kinderszenen ist ein Klavierzyklus von Robert Schumann. Besonders bekannt ist der Satz „Träumerei“.",
        "levelId": 2,
        "image": "schumann.jpg"
      },
      {
        "question": "Welches Werk ist ein berühmter Liederzyklus von Schubert?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Winterreise",
          "Dichterliebe",
          "Kindertotenlieder",
          "Frauenliebe und Leben"
        ],
        "correct": 0,
        "explanation": "Die Winterreise von Franz Schubert nach Gedichten von Wilhelm Müller gehört zu den wichtigsten Liederzyklen der Romantik.",
        "levelId": 2,
        "image": "schubert.png"
      },
      {
        "question": "Welche Oper stammt von Leoš Janáček?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Jenůfa",
          "Rusalka",
          "Dalibor",
          "Libuše"
        ],
        "correct": 0,
        "explanation": "Jenůfa ist eine Oper von Leoš Janáček. Rusalka stammt dagegen von Antonín Dvořák, Dalibor und Libuše von Smetana.",
        "levelId": 2,
        "image": "janacek.jpg"
      },
      {
        "question": "Welches Werk gehört zu Ravels bekanntesten Orchesterstücken?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Boléro",
          "Rosenkavalier-Suite",
          "Finlandia",
          "Till Eulenspiegel"
        ],
        "correct": 0,
        "explanation": "Ravels Boléro baut fast obsessiv auf einem wiederholten Rhythmus und einer wiederholten Melodie auf, die orchestral immer stärker anwachsen.",
        "levelId": 2,
        "image": "ravel.jpg"
      },
      {
        "question": "Welches Werk ist ein berühmtes Orchesterwerk von Debussy?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "La Mer",
          "Die Moldau",
          "Finlandia",
          "Enigma-Variationen"
        ],
        "correct": 0,
        "explanation": "La Mer ist ein grosses Orchesterwerk von Claude Debussy und ein wichtiges Beispiel impressionistischer Klangkunst.",
        "levelId": 2,
        "image": "debussy.jpg"
      },
      {
        "question": "Welches Werk von Brahms ist kein Requiem im liturgisch-lateinischen Sinn?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Ein deutsches Requiem",
          "Mozart-Requiem",
          "Verdi-Requiem",
          "Fauré-Requiem"
        ],
        "correct": 0,
        "explanation": "Ein deutsches Requiem verwendet deutschsprachige Bibeltexte und ist kein lateinisches Messrequiem.",
        "levelId": 2,
        "image": "brahms.jpg"
      },
      {
        "question": "Welches Werk ist eine berühmte sinfonische Dichtung von Richard Strauss?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Don Juan",
          "Peer Gynt",
          "Die Moldau",
          "Pavane"
        ],
        "correct": 0,
        "explanation": "Don Juan ist eine sinfonische Dichtung von Richard Strauss nach Nikolaus Lenau.",
        "levelId": 2,
        "image": "rstrauss.jpg"
      },
      {
        "question": "Welches Werk von Sibelius gilt als musikalisches Symbol Finnlands?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Finlandia",
          "Karelia",
          "Tapiola",
          "Valse triste"
        ],
        "correct": 0,
        "explanation": "Finlandia von Jean Sibelius wurde zu einem musikalischen Symbol finnischer Identität.",
        "levelId": 2,
        "image": "sibelius.jpg"
      },
      {
        "question": "Welches Werk stammt nicht von Felix Mendelssohn Bartholdy?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Italienische Sinfonie",
          "Elias",
          "Lieder ohne Worte",
          "Die Moldau"
        ],
        "correct": 3,
        "explanation": "Die Moldau stammt von Bedřich Smetana. Italienische Sinfonie, Elias und Lieder ohne Worte gehören zu Mendelssohns Werk.",
        "levelId": 2,
        "image": "mendelssohn.jpg"
      },
      {
        "question": "Welches Werk ist ein berühmtes Klavierkonzert von Grieg?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "a-Moll-Konzert",
          "c-Moll-Konzert",
          "Es-Dur-Konzert",
          "G-Dur-Konzert"
        ],
        "correct": 0,
        "explanation": "Griegs Klavierkonzert in a-Moll gehört zu den bekanntesten romantischen Klavierkonzerten.",
        "levelId": 2,
        "image": "grieg.jpg"
      },
      {
        "question": "Welches Werk stammt von Fauré?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Requiem",
          "Elias",
          "Deutsches Requiem",
          "Schöpfung"
        ],
        "correct": 0,
        "explanation": "Gabriel Fauré schrieb ein berühmtes Requiem mit lyrischer, tröstlicher Grundhaltung.",
        "levelId": 2,
        "image": "faure.jpg"
      },
      {
        "question": "Welches Werk ist ein Liederzyklus von Robert Schumann?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Dichterliebe",
          "Winterreise",
          "Rückert-Lieder",
          "Wesendonck-Lieder"
        ],
        "correct": 0,
        "explanation": "Dichterliebe ist ein Liederzyklus von Robert Schumann nach Gedichten von Heinrich Heine.",
        "levelId": 2,
        "image": "schumann.jpg"
      },
      {
        "question": "Welches Werk ist eine Oper von Gershwin?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Porgy and Bess",
          "West Side Story",
          "Candide",
          "The Tender Land"
        ],
        "correct": 0,
        "explanation": "Porgy and Bess ist Gershwins bekanntestes Bühnenwerk. West Side Story und Candide stammen von Bernstein.",
        "levelId": 2,
        "image": "gershwin.jpg"
      },
      {
        "question": "Welches Werk gehört zu Mussorgskys bekanntesten Bühnenwerken?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Boris Godunow",
          "Eugen Onegin",
          "Fürst Igor",
          "Die Nase"
        ],
        "correct": 0,
        "explanation": "Boris Godunow ist eine Oper von Modest Mussorgsky über eine russische Herrscherfigur.",
        "levelId": 2,
        "image": "mussorgsky.jpg"
      },
      {
        "question": "Wer schrieb das berühmteste Weihnachtsoratorium?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "bach.jpg",
        "options": [
          "Bach",
          "Mozart",
          "Brahms",
          "Verdi"
        ],
        "correct": 0,
        "explanation": "Das berühmte Weihnachtsoratorium stammt von Johann Sebastian Bach.",
        "levelId": 2
      },
      {
        "question": "Wer komponierte „Die Zauberflöte“?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "mozart.jpg",
        "options": [
          "Mozart",
          "Beethoven",
          "Wagner",
          "Haydn"
        ],
        "correct": 0,
        "explanation": "„Die Zauberflöte“ ist eine Oper von Wolfgang Amadeus Mozart.",
        "levelId": 2
      },
      {
        "question": "Zu welchem Werk gehört der berühmte „Halleluja“-Chor?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "handel.jpg",
        "options": [
          "Messias",
          "Matthäuspassion",
          "Requiem",
          "Elias"
        ],
        "correct": 0,
        "explanation": "Der „Halleluja“-Chor stammt aus Händels Oratorium „Messias“.",
        "levelId": 2
      },
      {
        "question": "Wer schrieb „Ein deutsches Requiem“?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "brahms.jpg",
        "options": [
          "Brahms",
          "Bruckner",
          "Schumann",
          "Mendelssohn"
        ],
        "correct": 0,
        "explanation": "Brahms schrieb ein deutschsprachiges Requiem nach Bibeltexten.",
        "levelId": 2
      },
      {
        "question": "Wer komponierte „Die Moldau“?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "smetana.jpg",
        "options": [
          "Smetana",
          "Dvořák",
          "Grieg",
          "Sibelius"
        ],
        "correct": 0,
        "explanation": "„Die Moldau“ ist Teil des Zyklus „Mein Vaterland“.",
        "levelId": 2
      },
      {
        "question": "Wer schrieb die „Kinderszenen“?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "schumann.jpg",
        "options": [
          "Schumann",
          "Mozart",
          "Verdi",
          "Mahler"
        ],
        "correct": 0,
        "explanation": "Robert Schumanns „Kinderszenen“ sind bekannte Klavierstücke.",
        "levelId": 2
      },
      {
        "question": "Wer komponierte „Peter und der Wolf“?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "prokofiev.jpg",
        "options": [
          "Prokofjew",
          "Ravel",
          "Debussy",
          "Britten"
        ],
        "correct": 0,
        "explanation": "„Peter und der Wolf“ ist ein musikalisches Märchen von Sergej Prokofjew.",
        "levelId": 2
      },
      {
        "question": "Wer schrieb „The Young Person’s Guide to the Orchestra“?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "britten.jpg",
        "options": [
          "Britten",
          "Bach",
          "Rossini",
          "Fauré"
        ],
        "correct": 0,
        "explanation": "Benjamin Britten stellte darin die Instrumentengruppen des Orchesters vor.",
        "levelId": 2
      },
      {
        "question": "Wer komponierte „Boléro“?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "ravel.jpg",
        "options": [
          "Ravel",
          "Debussy",
          "Bizet",
          "Satie"
        ],
        "correct": 0,
        "explanation": "Ravels „Boléro“ ist berühmt für seinen ständig wiederholten Rhythmus.",
        "levelId": 2
      },
      {
        "question": "Wer schrieb die Oper „Carmen“?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "bizet.jpg",
        "options": [
          "Bizet",
          "Puccini",
          "Verdi",
          "Donizetti"
        ],
        "correct": 0,
        "explanation": "„Carmen“ ist die bekannteste Oper von Georges Bizet.",
        "levelId": 2
      }
    ]
  },
  {
    "id": 3,
    "title": "Epochen & Stil",
    "description": "Barock, Klassik, Romantik, Moderne: erkennst du die Zusammenhänge?",
    "active": true,
    "tier": "free",
    "difficulty": "mittel",
    "defaultCategory": "Epochen & Stil",
    "questions": [
      {
        "question": "Johann Sebastian Bach gehört hauptsächlich zu welcher Epoche?",
        "category": "Epochen & Stil",
        "tier": "free",
        "difficulty": "mittel",
        "image": "bach.jpg",
        "options": [
          "Renaissance",
          "Barock",
          "Klassik",
          "Romantik"
        ],
        "correct": 1,
        "explanation": "Bach ist einer der zentralen Komponisten des Barock. Seine Musik verbindet kontrapunktische Kunst, Generalbassdenken und starke geistliche Tradition.",
        "levelId": 3
      },
      {
        "question": "Wolfgang Amadeus Mozart ist ein zentraler Komponist welcher Epoche?",
        "category": "Epochen & Stil",
        "tier": "free",
        "difficulty": "mittel",
        "image": "mozart.jpg",
        "options": [
          "Barock",
          "Wiener Klassik",
          "Impressionismus",
          "Moderne"
        ],
        "correct": 1,
        "explanation": "Mozart gehört zusammen mit Haydn und Beethoven zur Wiener Klassik. Klarheit, Balance und formale Eleganz sind wichtige Merkmale.",
        "levelId": 3
      },
      {
        "question": "Frédéric Chopin wird vor allem welcher Epoche zugeordnet?",
        "category": "Epochen & Stil",
        "tier": "free",
        "difficulty": "mittel",
        "image": "chopin.jpg",
        "options": [
          "Renaissance",
          "Barock",
          "Romantik",
          "Avantgarde"
        ],
        "correct": 2,
        "explanation": "Chopin ist ein zentraler Komponist der Romantik. Seine Musik verbindet Virtuosität, poetischen Ausdruck und eine stark persönliche Klangsprache.",
        "levelId": 3
      },
      {
        "question": "Claude Debussy wird besonders mit welcher Stilrichtung verbunden?",
        "category": "Epochen & Stil",
        "tier": "free",
        "difficulty": "mittel",
        "image": "debussy.jpg",
        "options": [
          "Impressionismus",
          "Wiener Klassik",
          "Renaissance",
          "Minimal Music"
        ],
        "correct": 0,
        "explanation": "Debussy wird oft mit dem musikalischen Impressionismus verbunden. Charakteristisch sind schwebende Harmonien, Klangfarben und freiere Formverläufe.",
        "levelId": 3
      },
      {
        "question": "Arnold Schönberg ist eng verbunden mit welcher musikalischen Entwicklung?",
        "category": "Epochen & Stil",
        "tier": "free",
        "difficulty": "mittel",
        "image": "schoenberg.jpg",
        "options": [
          "Generalbass",
          "Sonatenhauptsatzform",
          "Zwölftontechnik",
          "Gregorianik"
        ],
        "correct": 2,
        "explanation": "Schönberg entwickelte die Zwölftontechnik. Sie wurde zu einer zentralen Kompositionstechnik der musikalischen Moderne.",
        "levelId": 3
      },
      {
        "question": "Giovanni Pierluigi da Palestrina steht besonders für welche Epoche?",
        "category": "Epochen & Stil",
        "tier": "free",
        "difficulty": "mittel",
        "image": "palestrina.jpg",
        "options": [
          "Renaissance",
          "Romantik",
          "Expressionismus",
          "Klassik"
        ],
        "correct": 0,
        "explanation": "Palestrina gilt als einer der wichtigsten Vertreter der Vokalpolyphonie der Renaissance. Sein Name steht oft für klare, ausgewogene Kirchenmusik.",
        "levelId": 3
      },
      {
        "question": "Claudio Monteverdi steht musikgeschichtlich besonders an der Schwelle zwischen ...",
        "category": "Epochen & Stil",
        "tier": "free",
        "difficulty": "mittel",
        "image": "monteverdi.jpg",
        "options": [
          "Mittelalter und Renaissance",
          "Renaissance und Barock",
          "Klassik und Romantik",
          "Romantik und Moderne"
        ],
        "correct": 1,
        "explanation": "Monteverdi steht am Übergang von Renaissance zu Barock. Er ist besonders wichtig für die frühe Oper und den neuen expressiven Stil um 1600.",
        "levelId": 3
      },
      {
        "question": "Igor Strawinsky gehört vor allem zur Musik welcher Zeit?",
        "category": "Epochen & Stil",
        "tier": "free",
        "difficulty": "mittel",
        "image": "stravinsky.jpg",
        "options": [
          "Barock",
          "Wiener Klassik",
          "20. Jahrhundert / Moderne",
          "Renaissance"
        ],
        "correct": 2,
        "explanation": "Strawinsky ist eine Schlüsselfigur der Musik des 20. Jahrhunderts. Seine Werke reichen vom russischen Ballettstil über Neoklassizismus bis zur seriellen Phase.",
        "levelId": 3
      },
      {
        "question": "Joseph Haydn gilt als wichtiger Vertreter welcher Epoche?",
        "category": "Epochen & Stil",
        "tier": "free",
        "difficulty": "mittel",
        "image": "jhaydn.jpg",
        "options": [
          "Wiener Klassik",
          "Impressionismus",
          "Spätromantik",
          "Renaissance"
        ],
        "correct": 0,
        "explanation": "Haydn ist einer der Hauptvertreter der Wiener Klassik. Er prägte Sinfonie, Streichquartett und Sonatenform entscheidend.",
        "levelId": 3
      },
      {
        "question": "John Cage wird besonders mit welcher Richtung verbunden?",
        "category": "Epochen & Stil",
        "tier": "free",
        "difficulty": "mittel",
        "image": "cage.jpg",
        "options": [
          "Kirchenmusik der Renaissance",
          "Experimentelle Musik / Avantgarde",
          "Frühbarocke Oper",
          "Wiener Klassik"
        ],
        "correct": 1,
        "explanation": "John Cage steht für experimentelle Musik und Avantgarde. Er arbeitete mit Zufall, Stille, Geräuschen und erweiterten Vorstellungen von Musik.",
        "levelId": 3
      },
      {
        "question": "Welche Epoche verbindet man besonders mit Generalbass und Affektenlehre?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Barock",
          "Romantik",
          "Impressionismus",
          "Klassik"
        ],
        "correct": 0,
        "explanation": "Generalbass und Affektenlehre sind zentrale Begriffe der Barockmusik. Sie prägen besonders die Musik des 17. und frühen 18. Jahrhunderts.",
        "levelId": 3,
        "image": "icon-512.png"
      },
      {
        "question": "Welche Stilrichtung arbeitet oft mit schwebenden Klangfarben und Ganztonleitern?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Impressionismus",
          "Barock",
          "Wiener Klassik",
          "Renaissance"
        ],
        "correct": 0,
        "explanation": "Der musikalische Impressionismus wird häufig mit Klangfarben, Ganztonleitern, modalen Wendungen und fliessenden Konturen verbunden.",
        "levelId": 3,
        "image": "icon-512.png"
      },
      {
        "question": "Welche Epoche bevorzugte häufig klare Periodik und ausgewogene Formen?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Klassik",
          "Mittelalter",
          "Expressionismus",
          "Spätromantik"
        ],
        "correct": 0,
        "explanation": "Die Wiener Klassik wird oft mit Klarheit, Symmetrie, periodischem Aufbau und ausgewogenen Formen verbunden.",
        "levelId": 3,
        "image": "icon-512.png"
      },
      {
        "question": "Welche musikalische Richtung ist eng mit Arnold Schönberg verbunden?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Zweite Wiener Schule",
          "Mannheimer Schule",
          "Notre-Dame-Schule",
          "Les Six"
        ],
        "correct": 0,
        "explanation": "Arnold Schönberg, Alban Berg und Anton Webern bilden den Kern der Zweiten Wiener Schule.",
        "levelId": 3,
        "image": "schoenberg.jpg"
      },
      {
        "question": "Welche Epoche steht zeitlich vor dem Barock?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Renaissance",
          "Romantik",
          "Klassik",
          "Moderne"
        ],
        "correct": 0,
        "explanation": "Die Renaissance liegt vor dem Barock. In der Musikgeschichte folgt grob: Mittelalter, Renaissance, Barock, Klassik, Romantik, Moderne.",
        "levelId": 3,
        "image": "icon-512.png"
      },
      {
        "question": "Welche Epoche wird häufig mit gesteigerter Subjektivität, Naturbildern und Sehnsucht verbunden?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Romantik",
          "Klassik",
          "Frühbarock",
          "Minimal Music"
        ],
        "correct": 0,
        "explanation": "Romantische Musik ist oft mit Ausdruck, Sehnsucht, Naturbildern, Innerlichkeit und erweitertem Klang verbunden.",
        "levelId": 3,
        "image": "icon-512.png"
      },
      {
        "question": "Welcher Begriff passt besonders zur Musik um 1900 mit stark erweiterter Harmonik?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Spätromantik",
          "Frühklassik",
          "Gregorianik",
          "Ars antiqua"
        ],
        "correct": 0,
        "explanation": "Um 1900 wird die Harmonik oft stark erweitert. Mahler, Strauss, Reger und frühe Schönberg-Werke stehen in diesem Umfeld.",
        "levelId": 3,
        "image": "schoenberg.jpg"
      },
      {
        "question": "Welche Stilrichtung verwendet oft wiederholte Muster und langsame Veränderungen?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Minimal Music",
          "Serialismus",
          "Belcanto",
          "Empfindsamer Stil"
        ],
        "correct": 0,
        "explanation": "Minimal Music arbeitet häufig mit Wiederholungen, kleinen Verschiebungen und allmählicher Veränderung musikalischer Muster.",
        "levelId": 3,
        "image": "icon-512.png"
      },
      {
        "question": "Welche Epoche brachte die Mehrchörigkeit der venezianischen Schule hervor?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Renaissance",
          "Romantik",
          "Klassik",
          "Moderne"
        ],
        "correct": 0,
        "explanation": "Die venezianische Mehrchörigkeit ist besonders mit der Spätrenaissance und dem Umfeld von San Marco in Venedig verbunden.",
        "levelId": 3,
        "image": "icon-512.png"
      },
      {
        "question": "Welche Epoche liegt ungefähr zwischen Renaissance und Klassik?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Barock",
          "Mittelalter",
          "Romantik",
          "Impressionismus"
        ],
        "correct": 0,
        "explanation": "Der Barock liegt historisch zwischen Renaissance und Klassik.",
        "levelId": 3,
        "image": "icon-512.png"
      },
      {
        "question": "Welches Werk ist eine berühmte Tondichtung von Dukas?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Der Zauberlehrling",
          "La Mer",
          "Don Juan",
          "Mazeppa"
        ],
        "correct": 0,
        "explanation": "Der Zauberlehrling von Paul Dukas wurde besonders durch seine brillante Orchesterwirkung bekannt.",
        "levelId": 3,
        "image": "dukas.jpg"
      },
      {
        "question": "Welches Werk von Britten ist ein grosser Beitrag zur Chorliteratur des 20. Jahrhunderts?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "War Requiem",
          "Elias",
          "Messias",
          "Schöpfung"
        ],
        "correct": 0,
        "explanation": "Brittens War Requiem verbindet lateinische Totenmesse mit Gedichten von Wilfred Owen und gehört zur bedeutenden Chorliteratur des 20. Jahrhunderts.",
        "levelId": 3,
        "image": "britten.jpg"
      },
      {
        "question": "Welches Werk ist ein berühmter Klavierzyklus von Debussy?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Préludes",
          "Kinderszenen",
          "Lieder ohne Worte",
          "Mikrokosmos"
        ],
        "correct": 0,
        "explanation": "Debussys Préludes sind zwei Hefte mit Klavierstücken voller klanglicher und poetischer Charakterbilder.",
        "levelId": 3,
        "image": "debussy.jpg"
      },
      {
        "question": "Welches Werk gehört zur Kirchenmusik von Rossini?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Petite Messe solennelle",
          "Missa solemnis",
          "Nelsonmesse",
          "Harmoniemesse"
        ],
        "correct": 0,
        "explanation": "Rossinis Petite Messe solennelle ist ein spätes geistliches Werk mit eigenwilliger Besetzung und viel Opernerfahrung im Hintergrund.",
        "levelId": 3,
        "image": "rossini.jpg"
      },
      {
        "question": "Welches Werk ist eine sinfonische Dichtung von Liszt?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Les Préludes",
          "La Mer",
          "Finlandia",
          "Ma vlast"
        ],
        "correct": 0,
        "explanation": "Les Préludes ist eine der bekanntesten sinfonischen Dichtungen von Franz Liszt.",
        "levelId": 3,
        "image": "liszt.jpg"
      },
      {
        "question": "Welche Oper stammt von Verdi und spielt im alten Ägypten?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Aida",
          "Otello",
          "Macbeth",
          "Nabucco"
        ],
        "correct": 0,
        "explanation": "Aida spielt im alten Ägypten und gehört zu Verdis bekanntesten Opern.",
        "levelId": 3,
        "image": "verdi.jpg"
      },
      {
        "question": "Was bezeichnet man in Wagners Musikdramen häufig als „Leitmotiv“?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Ein wiederkehrendes Motiv für Figur, Idee oder Situation",
          "Eine besonders hohe Sopranarie",
          "Ein gesprochenes Rezitativ",
          "Einen Tanzsatz im 3/4-Takt"
        ],
        "correct": 0,
        "explanation": "Ein Leitmotiv ist ein wiederkehrendes musikalisches Motiv, das mit einer Figur, Idee, Situation oder einem Gegenstand verbunden sein kann.",
        "levelId": 3,
        "image": "icon-512.png"
      },
      {
        "question": "Welche Oper von Mozart enthält die Figuren Susanna, Figaro und die Gräfin?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Le nozze di Figaro",
          "Don Giovanni",
          "Così fan tutte",
          "Idomeneo"
        ],
        "correct": 0,
        "explanation": "Susanna, Figaro und die Gräfin sind zentrale Figuren in Mozarts Le nozze di Figaro.",
        "levelId": 3,
        "image": "mozart.jpg"
      },
      {
        "question": "Welche Oper stammt von Rossini?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "La Cenerentola",
          "La Traviata",
          "Tosca",
          "Fidelio"
        ],
        "correct": 0,
        "explanation": "La Cenerentola ist Rossinis Opernfassung des Aschenputtel-Stoffs.",
        "levelId": 3,
        "image": "rossini.jpg"
      },
      {
        "question": "Welche Oper von Puccini spielt in Japan?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Madama Butterfly",
          "Turandot",
          "Tosca",
          "La fanciulla del West"
        ],
        "correct": 0,
        "explanation": "Madama Butterfly spielt in Japan und erzählt die tragische Geschichte von Cio-Cio-San.",
        "levelId": 3,
        "image": "puccini.jpg"
      },
      {
        "question": "Zu welcher Epoche gehört Johann Sebastian Bach?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "bach.jpg",
        "options": [
          "Barock",
          "Klassik",
          "Romantik",
          "Moderne"
        ],
        "correct": 0,
        "explanation": "Bach ist einer der wichtigsten Komponisten des Barock.",
        "levelId": 3
      },
      {
        "question": "Zu welcher Epoche gehört Wolfgang Amadeus Mozart?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "mozart.jpg",
        "options": [
          "Klassik",
          "Renaissance",
          "Moderne",
          "Impressionismus"
        ],
        "correct": 0,
        "explanation": "Mozart ist ein zentraler Vertreter der Wiener Klassik.",
        "levelId": 3
      },
      {
        "question": "Welche Epoche folgt historisch ungefähr auf den Barock?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Klassik",
          "Mittelalter",
          "Moderne",
          "Renaissance"
        ],
        "correct": 0,
        "explanation": "Nach dem Barock folgt in der Musikgeschichte die Klassik.",
        "levelId": 3
      },
      {
        "question": "Welche Epoche verbindet man oft mit grossen Gefühlen und Naturbildern?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Romantik",
          "Barock",
          "Renaissance",
          "Ars nova"
        ],
        "correct": 0,
        "explanation": "Die Romantik betont Gefühl, Fantasie, Natur und Individualität.",
        "levelId": 3
      },
      {
        "question": "Welcher Komponist steht oft an der Schwelle von Klassik zu Romantik?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "beethoven.webp",
        "options": [
          "Beethoven",
          "Palestrina",
          "Cage",
          "Monteverdi"
        ],
        "correct": 0,
        "explanation": "Beethoven verbindet klassische Formen mit romantischem Ausdruck.",
        "levelId": 3
      },
      {
        "question": "Welche Stilrichtung verbindet man besonders mit Debussy und Ravel?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "debussy.jpg",
        "options": [
          "Impressionismus",
          "Barock",
          "Minimal Music",
          "Renaissance"
        ],
        "correct": 0,
        "explanation": "Debussy und Ravel werden oft dem musikalischen Impressionismus zugeordnet.",
        "levelId": 3
      },
      {
        "question": "Welche Musikrichtung arbeitet häufig mit Wiederholung und kleinen Veränderungen?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Minimal Music",
          "Barock",
          "Belcanto",
          "Gregorianik"
        ],
        "correct": 0,
        "explanation": "Minimal Music nutzt oft repetitive Muster und langsame Veränderungen.",
        "levelId": 3
      },
      {
        "question": "Welche Epoche liegt ungefähr vor dem Barock?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Renaissance",
          "Romantik",
          "Klassik",
          "Moderne"
        ],
        "correct": 0,
        "explanation": "Die Renaissance geht dem Barock voraus.",
        "levelId": 3
      },
      {
        "question": "Welche Epoche ist besonders mit Komponisten wie Schubert, Schumann und Chopin verbunden?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "schubert.png",
        "options": [
          "Romantik",
          "Barock",
          "Mittelalter",
          "Klassik"
        ],
        "correct": 0,
        "explanation": "Diese Komponisten gehören zur musikalischen Romantik.",
        "levelId": 3
      },
      {
        "question": "Mit welcher Technik verbindet man Arnold Schönberg besonders?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "schoenberg.jpg",
        "options": [
          "Zwölftontechnik",
          "Generalbass",
          "Belcanto",
          "Gregorianik"
        ],
        "correct": 0,
        "explanation": "Schönberg entwickelte die Zwölftontechnik als neues Ordnungssystem der Moderne.",
        "levelId": 3
      }
    ]
  },
  {
    "id": 4,
    "title": "Oper & Musiktheater",
    "description": "Von Mozart bis Puccini: Bühne frei.",
    "active": true,
    "tier": "learning",
    "difficulty": "mittel",
    "defaultCategory": "Oper & Musiktheater",
    "questions": [
      {
        "question": "Wer komponierte die Oper 'Don Giovanni'?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "mozart.jpg",
        "options": [
          "Mozart",
          "Rossini",
          "Verdi",
          "Puccini"
        ],
        "correct": 0,
        "explanation": "Don Giovanni ist eine Oper von Wolfgang Amadeus Mozart auf ein Libretto von Lorenzo Da Ponte. Sie verbindet Komödie, Tragik und psychologische Tiefe.",
        "levelId": 4
      },
      {
        "question": "Wer komponierte die Oper 'Carmen'?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "bizet.jpg",
        "options": [
          "Bizet",
          "Verdi",
          "Puccini",
          "Gounod"
        ],
        "correct": 0,
        "explanation": "Carmen stammt von Georges Bizet. Die Oper wurde nach ihrer Uraufführung 1875 zunächst umstritten aufgenommen, gehört heute aber zu den meistgespielten Opern überhaupt.",
        "levelId": 4
      },
      {
        "question": "Wer komponierte 'La Bohème'?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "puccini.jpg",
        "options": [
          "Rossini",
          "Puccini",
          "Verdi",
          "Bellini"
        ],
        "correct": 1,
        "explanation": "La Bohème ist eine Oper von Giacomo Puccini. Sie erzählt vom Leben junger Künstler in Paris und gehört zu den zentralen Werken des Verismo-nahen Opernrepertoires.",
        "levelId": 4
      },
      {
        "question": "Wer komponierte 'Il barbiere di Siviglia'?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "rossini.jpg",
        "options": [
          "Rossini",
          "Mozart",
          "Donizetti",
          "Bellini"
        ],
        "correct": 0,
        "explanation": "Der Barbier von Sevilla ist eine Opera buffa von Gioachino Rossini. Besonders bekannt ist Figaros Auftrittsarie 'Largo al factotum'.",
        "levelId": 4
      },
      {
        "question": "Wer komponierte 'Der Ring des Nibelungen'?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "wagner.jpg",
        "options": [
          "Richard Strauss",
          "Richard Wagner",
          "Verdi",
          "Bruckner"
        ],
        "correct": 1,
        "explanation": "Der Ring des Nibelungen ist Richard Wagners monumentaler vierteiliger Opernzyklus. Er besteht aus Rheingold, Walküre, Siegfried und Götterdämmerung.",
        "levelId": 4
      },
      {
        "question": "Wer komponierte 'Der Rosenkavalier'?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "rstrauss.jpg",
        "options": [
          "Richard Wagner",
          "Richard Strauss",
          "Gustav Mahler",
          "Arnold Schönberg"
        ],
        "correct": 1,
        "explanation": "Der Rosenkavalier ist eine Oper von Richard Strauss auf ein Libretto von Hugo von Hofmannsthal. Sie verbindet spätromantischen Klang mit nostalgischem Walzerzauber.",
        "levelId": 4
      },
      {
        "question": "Wer komponierte die Oper 'Wozzeck'?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "albanberg.jpg",
        "options": [
          "Alban Berg",
          "Anton Webern",
          "Arnold Schönberg",
          "Paul Hindemith"
        ],
        "correct": 0,
        "explanation": "Wozzeck ist eine Oper von Alban Berg und ein Schlüsselwerk des musikalischen Expressionismus. Sie basiert auf Georg Büchners Dramenfragment Woyzeck.",
        "levelId": 4
      },
      {
        "question": "Wer komponierte 'Dido and Aeneas'?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "purcell.jpg",
        "options": [
          "Henry Purcell",
          "Georg Friedrich Händel",
          "Claudio Monteverdi",
          "Jean-Baptiste Lully"
        ],
        "correct": 0,
        "explanation": "Dido and Aeneas ist eine englische Barockoper von Henry Purcell. Besonders berühmt ist Didos Lamento 'When I am laid in earth'.",
        "levelId": 4
      },
      {
        "question": "Wer gilt als einer der wichtigsten frühen Opernkomponisten um 1600?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "monteverdi.jpg",
        "options": [
          "Monteverdi",
          "Palestrina",
          "Bach",
          "Haydn"
        ],
        "correct": 0,
        "explanation": "Claudio Monteverdi ist eine Schlüsselfigur der frühen Oper. Sein Orfeo von 1607 gehört zu den frühesten bis heute bedeutenden Opern der Musikgeschichte.",
        "levelId": 4
      },
      {
        "question": "Welche Oper stammt von Giuseppe Verdi?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "verdi.jpg",
        "options": [
          "Aida",
          "La Bohème",
          "Carmen",
          "Der Rosenkavalier"
        ],
        "correct": 0,
        "explanation": "Aida ist eine Oper von Giuseppe Verdi. Sie wurde 1871 in Kairo uraufgeführt und ist besonders für ihre grossen Chorszenen und die Triumphszene bekannt.",
        "levelId": 4
      },
      {
        "question": "Was ist eine Passacaglia?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Variationsform über Bassmodell",
          "Opernfinale",
          "Tanzsatz im 3/4-Takt",
          "Einstimmiger Kirchengesang"
        ],
        "correct": 0,
        "explanation": "Eine Passacaglia ist häufig eine Variationsform über einem wiederkehrenden Bassmodell oder harmonischen Gerüst.",
        "levelId": 4,
        "image": "icon-512.png"
      },
      {
        "question": "Was bezeichnet ein „Rondo“?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Wiederkehr eines Hauptteils",
          "Freie Improvisation",
          "Gesprochener Operndialog",
          "Reines Schlagwerkstück"
        ],
        "correct": 0,
        "explanation": "Im Rondo kehrt ein Hauptteil wieder, oft zwischen kontrastierenden Zwischenteilen.",
        "levelId": 4,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein Madrigal?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Mehrstimmiges weltliches Vokalstück",
          "Solokonzert für Violine",
          "Opernrezitativ",
          "Orgelvorspiel"
        ],
        "correct": 0,
        "explanation": "Das Madrigal ist ein mehrstimmiges weltliches Vokalstück, besonders wichtig in Renaissance und Frühbarock.",
        "levelId": 4,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist eine Suite?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Folge mehrerer Tanz- oder Charakterstücke",
          "Einzelne Opernarie",
          "Einstimmiger Kirchengesang",
          "Zwölftonreihe"
        ],
        "correct": 0,
        "explanation": "Eine Suite ist eine Folge mehrerer Tanz- oder Charakterstücke. Im Barock bestehen Suiten oft aus stilisierten Tänzen.",
        "levelId": 4,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein Rezitativ?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Sprechnahe Gesangsform in Oper/Oratorium",
          "Reiner Instrumentaltanz",
          "Schlusschor",
          "Solokadenz"
        ],
        "correct": 0,
        "explanation": "Ein Rezitativ ist eine sprechnahe Gesangsform, die in Oper, Kantate und Oratorium oft Handlung oder Text vorantreibt.",
        "levelId": 4,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein Divertimento?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Unterhaltendes mehrsätziges Instrumentalwerk",
          "Kirchenlied",
          "Trauermarsch",
          "Zwölftonreihe"
        ],
        "correct": 0,
        "explanation": "Ein Divertimento ist meist ein unterhaltendes mehrsätziges Instrumentalwerk, besonders im 18. Jahrhundert verbreitet.",
        "levelId": 4,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „Da capo“ in einer Arie?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Zurück zum Anfang",
          "Lauter werden",
          "Langsamer werden",
          "Ohne Begleitung"
        ],
        "correct": 0,
        "explanation": "Da capo bedeutet „von Anfang an“. In einer Da-capo-Arie kehrt der erste Teil nach einem Mittelteil wieder.",
        "levelId": 4,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist eine Kantate?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Mehrteiliges Vokalwerk mit Instrumenten",
          "Reines Orchesterwerk",
          "Tanzsuite für Klavier",
          "Oper ohne Text"
        ],
        "correct": 0,
        "explanation": "Eine Kantate ist ein mehrteiliges Vokalwerk mit Instrumentalbegleitung, geistlich oder weltlich.",
        "levelId": 4,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein Scherzo?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Schneller, oft humorvoller Satz",
          "Geistliche Lesung",
          "Bass-Arie",
          "Einstimmige Melodie"
        ],
        "correct": 0,
        "explanation": "Ein Scherzo ist meist ein schneller, bewegter Satz und ersetzt in vielen Werken das ältere Menuett.",
        "levelId": 4,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist eine Toccata?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Virtuoses Instrumentalstück",
          "Opernensemble",
          "Kirchliche Textform",
          "Volksliedsammlung"
        ],
        "correct": 0,
        "explanation": "Eine Toccata ist oft ein virtuoses Instrumentalstück, besonders für Tasteninstrumente.",
        "levelId": 4,
        "image": "icon-512.png"
      },
      {
        "question": "Welche Oper von Strauss spielt mit einem bürgerlich-adligen Wiener Milieu und einer berühmten Marschallin?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Der Rosenkavalier",
          "Salome",
          "Elektra",
          "Ariadne auf Naxos"
        ],
        "correct": 0,
        "explanation": "Der Rosenkavalier von Richard Strauss spielt mit Wiener Klangwelt, Gesellschaft, Zeitgefühl und der Figur der Marschallin.",
        "levelId": 4,
        "image": "rstrauss.jpg"
      },
      {
        "question": "Welche Oper von Beethoven steht für Freiheits- und Rettungsthematik?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Fidelio",
          "Freischütz",
          "Tannhäuser",
          "Lohengrin"
        ],
        "correct": 0,
        "explanation": "Fidelio ist Beethovens einzige Oper und behandelt Themen wie Freiheit, Treue und Befreiung.",
        "levelId": 4,
        "image": "beethoven.webp"
      },
      {
        "question": "Welche Oper von Mussorgsky behandelt eine russische Herrscherfigur?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Boris Godunow",
          "Eugen Onegin",
          "Mazeppa",
          "Rusalka"
        ],
        "correct": 0,
        "explanation": "Boris Godunow ist Mussorgskys Oper über den russischen Zaren Boris Godunow.",
        "levelId": 4,
        "image": "mussorgsky.jpg"
      },
      {
        "question": "Welche Oper von Debussy verzichtet weitgehend auf traditionelle Nummernoper und wirkt sprachnahe?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Pelléas et Mélisande",
          "Carmen",
          "Faust",
          "Lakmé"
        ],
        "correct": 0,
        "explanation": "Debussys Pelléas et Mélisande hat einen deklamatorischen, fliessenden Stil und vermeidet die traditionelle Nummernoper weitgehend.",
        "levelId": 4,
        "image": "debussy.jpg"
      },
      {
        "question": "Was ist ein „Libretto“?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Textbuch einer Oper oder eines Oratoriums",
          "Orchesterpartitur",
          "Bühnenbildplan",
          "Solokadenz"
        ],
        "correct": 0,
        "explanation": "Das Libretto ist der Text einer Oper, eines Oratoriums oder eines ähnlichen Bühnen-/Vokalwerks.",
        "levelId": 4,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „cantus firmus“?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Vorgegebene Melodie als Grundlage",
          "Schlussakkord",
          "Solokadenz",
          "Begleitfigur im Bass"
        ],
        "correct": 0,
        "explanation": "Ein cantus firmus ist eine vorgegebene Melodie, die als Grundlage einer mehrstimmigen Komposition dienen kann.",
        "levelId": 4,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist eine Choralmotette?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Motette auf Grundlage eines Chorals",
          "Opernchor mit Tanz",
          "Sprechgesang",
          "Instrumentalsuite"
        ],
        "correct": 0,
        "explanation": "Eine Choralmotette ist eine Motette, die auf einem Choral basiert oder einen Choral verarbeitet.",
        "levelId": 4,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „antiphonal“ im Chorsingen?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Wechselgesang zwischen Gruppen",
          "Singen ohne Text",
          "Singen nur im Unisono",
          "Sehr leises Singen"
        ],
        "correct": 0,
        "explanation": "Antiphonales Singen meint Wechselgesang, etwa zwischen zwei Chören oder Gruppen.",
        "levelId": 4,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein Introitus?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Eingangsgesang der Messe",
          "Schlussgesang",
          "Orgelnachspiel",
          "Opernouvertüre"
        ],
        "correct": 0,
        "explanation": "Der Introitus ist der Eingangsgesang der Messe.",
        "levelId": 4,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein Graduale?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Messgesang zwischen Lesungen",
          "weltliches Tanzlied",
          "Schlusskadenz",
          "Orgelregister"
        ],
        "correct": 0,
        "explanation": "Das Graduale ist ein Messgesang zwischen den Lesungen.",
        "levelId": 4,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist eine Arie?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Ein solistisches Gesangsstück in Oper oder Oratorium",
          "Ein Orchestervorspiel",
          "Ein Chorsatz",
          "Ein Tanz"
        ],
        "correct": 0,
        "explanation": "Eine Arie gibt einer Figur oder Solostimme besonderen Ausdruck.",
        "levelId": 4
      },
      {
        "question": "Was ist ein Rezitativ?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Sprechähnlicher Gesang",
          "Ein schneller Tanz",
          "Eine reine Orchesterform",
          "Ein Schlusschor"
        ],
        "correct": 0,
        "explanation": "Rezitative treiben oft die Handlung voran.",
        "levelId": 4
      },
      {
        "question": "In welcher Oper kommt die Arie „Nessun dorma“ vor?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "puccini.jpg",
        "options": [
          "Turandot",
          "Don Giovanni",
          "Carmen",
          "Fidelio"
        ],
        "correct": 0,
        "explanation": "„Nessun dorma“ stammt aus Puccinis Oper „Turandot“.",
        "levelId": 4
      },
      {
        "question": "Wer komponierte „La bohème“?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "puccini.jpg",
        "options": [
          "Puccini",
          "Bach",
          "Händel",
          "Haydn"
        ],
        "correct": 0,
        "explanation": "„La bohème“ ist eine Oper von Giacomo Puccini.",
        "levelId": 4
      },
      {
        "question": "Welche Wagner-Oper spielt rund um den Sängerwettstreit auf der Wartburg?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "wagner.jpg",
        "options": [
          "Tannhäuser",
          "Aida",
          "Tosca",
          "La bohème"
        ],
        "correct": 0,
        "explanation": "„Tannhäuser“ verbindet Minnesang, Erlösungsthema und romantische Operntradition.",
        "levelId": 4
      },
      {
        "question": "Welche Stimmlage singt oft jugendliche Heldinnen oder lyrische Frauenrollen?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Sopran",
          "Bass",
          "Bariton",
          "Tenor"
        ],
        "correct": 0,
        "explanation": "Viele weibliche Hauptrollen in Opern sind Sopranpartien.",
        "levelId": 4
      },
      {
        "question": "Was bezeichnet ein Ensemble in der Oper?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Eine Szene mit mehreren gleichzeitig singenden Figuren",
          "Ein reines Orchesterstück",
          "Eine einzelne Arie",
          "Ein Bühnenbild"
        ],
        "correct": 0,
        "explanation": "In Opernensembles singen mehrere Figuren gemeinsam, oft mit unterschiedlichen Gedanken.",
        "levelId": 4
      },
      {
        "question": "Welche Opernfigur gehört zu Bizets „Carmen“?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "bizet.jpg",
        "options": [
          "Don José",
          "Papageno",
          "Wotan",
          "Figaro"
        ],
        "correct": 0,
        "explanation": "Don José ist eine zentrale Figur in „Carmen“.",
        "levelId": 4
      },
      {
        "question": "In welcher Oper kommt Papageno vor?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "mozart.jpg",
        "options": [
          "Die Zauberflöte",
          "Carmen",
          "Aida",
          "Fidelio"
        ],
        "correct": 0,
        "explanation": "Papageno ist eine berühmte Figur aus Mozarts „Zauberflöte“.",
        "levelId": 4
      },
      {
        "question": "Was ist ein Libretto?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Der Text einer Oper",
          "Die Partitur einer Sinfonie",
          "Ein Instrument",
          "Ein Tanzrhythmus"
        ],
        "correct": 0,
        "explanation": "Das Libretto enthält den gesungenen Text und die Handlung.",
        "levelId": 4
      }
    ]
  },
  {
    "id": 5,
    "title": "Romantik & Nationalstile",
    "description": "Chopin, Dvořák, Grieg, Sibelius und mehr.",
    "active": true,
    "tier": "learning",
    "difficulty": "mittel",
    "defaultCategory": "Werkkunde",
    "questions": [
      {
        "question": "Welcher Komponist schrieb besonders viele Mazurken, Polonaisen und Nocturnes?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "chopin.jpg",
        "options": [
          "Chopin",
          "Schumann",
          "Liszt",
          "Brahms"
        ],
        "correct": 0,
        "explanation": "Frédéric Chopin ist eng mit dem Klavier und mit polnisch geprägten Gattungen wie Mazurka und Polonaise verbunden. Seine Musik ist ein Kernbestand der romantischen Klavierliteratur.",
        "levelId": 5
      },
      {
        "question": "Wer komponierte die 'Slawischen Tänze'?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "dvorak.jpg",
        "options": [
          "Dvořák",
          "Smetana",
          "Grieg",
          "Sibelius"
        ],
        "correct": 0,
        "explanation": "Antonín Dvořák schrieb die Slawischen Tänze zunächst für Klavier zu vier Händen und später in Orchesterfassung. Sie verbinden romantische Tonsprache mit slawisch inspirierten Tanzcharakteren.",
        "levelId": 5
      },
      {
        "question": "Welcher Komponist schrieb die sinfonische Dichtung 'Die Moldau'?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "smetana.jpg",
        "options": [
          "Smetana",
          "Dvořák",
          "Janáček",
          "Grieg"
        ],
        "correct": 0,
        "explanation": "Die Moldau stammt von Bedřich Smetana und ist Teil des Zyklus Mein Vaterland. Das Werk gilt als Symbol tschechischer Nationalmusik.",
        "levelId": 5
      },
      {
        "question": "Wer komponierte die Schauspielmusik 'Peer Gynt'?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "grieg.jpg",
        "options": [
          "Grieg",
          "Sibelius",
          "Elgar",
          "Dvořák"
        ],
        "correct": 0,
        "explanation": "Edvard Grieg schrieb die Musik zu Henrik Ibsens Schauspiel Peer Gynt. Stücke wie Morgenstimmung und In der Halle des Bergkönigs wurden weltberühmt.",
        "levelId": 5
      },
      {
        "question": "Welcher Komponist schrieb 'Finlandia'?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "sibelius.jpg",
        "options": [
          "Sibelius",
          "Grieg",
          "Nielsen",
          "Elgar"
        ],
        "correct": 0,
        "explanation": "Finlandia ist eine sinfonische Dichtung von Jean Sibelius und wurde zu einem musikalischen Symbol finnischer Identität.",
        "levelId": 5
      },
      {
        "question": "Wer komponierte die 'Bilder einer Ausstellung'?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "mussorgsky.jpg",
        "options": [
          "Mussorgsky",
          "Rimsky-Korsakow",
          "Tschaikowsky",
          "Rachmaninoff"
        ],
        "correct": 0,
        "explanation": "Modest Mussorgsky schrieb Bilder einer Ausstellung ursprünglich für Klavier. Besonders bekannt ist auch die Orchesterfassung von Maurice Ravel.",
        "levelId": 5
      },
      {
        "question": "Welcher Komponist schrieb die 'Enigma Variations'?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "elgar.jpg",
        "options": [
          "Elgar",
          "Holst",
          "Vaughan Williams",
          "Britten"
        ],
        "correct": 0,
        "explanation": "Edward Elgar schrieb die Enigma Variations als Variationen über ein eigenes Thema. Jede Variation porträtiert eine Person aus seinem Umfeld.",
        "levelId": 5
      },
      {
        "question": "Wer komponierte das berühmte Klavierkonzert Nr. 2 c-Moll?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "rachmaninoff.jpg",
        "options": [
          "Rachmaninoff",
          "Scriabin",
          "Tschaikowsky",
          "Prokofjew"
        ],
        "correct": 0,
        "explanation": "Sergei Rachmaninoffs Klavierkonzert Nr. 2 c-Moll gehört zu den populärsten Klavierkonzerten der Spätromantik und ist berühmt für seine weit gespannten Melodien.",
        "levelId": 5
      },
      {
        "question": "Welcher Komponist schrieb zahlreiche Liederzyklen und war mit Clara Schumann verheiratet?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "schumann.jpg",
        "options": [
          "Robert Schumann",
          "Johannes Brahms",
          "Felix Mendelssohn",
          "Franz Schubert"
        ],
        "correct": 0,
        "explanation": "Robert Schumann ist eine zentrale Figur der deutschen Romantik. Seine Liederzyklen, Klavierwerke und sinfonischen Werke zeigen eine sehr poetische Klangsprache.",
        "levelId": 5
      },
      {
        "question": "Wer komponierte 'Ein deutsches Requiem'?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "brahms.jpg",
        "options": [
          "Brahms",
          "Schumann",
          "Bruckner",
          "Mahler"
        ],
        "correct": 0,
        "explanation": "Ein deutsches Requiem ist eines der wichtigsten Chorwerke von Johannes Brahms. Anders als die lateinische Totenmesse verwendet es deutschsprachige Bibeltexte.",
        "levelId": 5
      },
      {
        "question": "Welche Oper stammt von Carl Maria von Weber?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Der Freischütz",
          "Fidelio",
          "Der Rosenkavalier",
          "Hänsel und Gretel"
        ],
        "correct": 0,
        "explanation": "Der Freischütz von Carl Maria von Weber gilt als zentrales Werk der deutschen romantischen Oper.",
        "levelId": 5,
        "image": "weber.jpg"
      },
      {
        "question": "Welche Figur singt „Der Hölle Rache“?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Königin der Nacht",
          "Carmen",
          "Tosca",
          "Mimi"
        ],
        "correct": 0,
        "explanation": "„Der Hölle Rache“ ist die berühmte zweite Arie der Königin der Nacht aus Mozarts Zauberflöte.",
        "levelId": 5,
        "image": "mozart.jpg"
      },
      {
        "question": "Welche Oper spielt teilweise in Sevilla und handelt von einer freiheitsliebenden Frau?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Carmen",
          "Aida",
          "Rusalka",
          "Salome"
        ],
        "correct": 0,
        "explanation": "Bizets Carmen spielt in Sevilla und erzählt von Carmen, Don José und Escamillo.",
        "levelId": 5,
        "image": "bizet.jpg"
      },
      {
        "question": "Wer komponierte „Hänsel und Gretel“?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Humperdinck",
          "Wagner",
          "Weber",
          "Nicolai"
        ],
        "correct": 0,
        "explanation": "Die Märchenoper Hänsel und Gretel stammt von Engelbert Humperdinck.",
        "levelId": 5,
        "image": "humperdinck.jpg"
      },
      {
        "question": "Welche Oper stammt von Richard Strauss?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Salome",
          "La Bohème",
          "Rigoletto",
          "Der Barbier von Sevilla"
        ],
        "correct": 0,
        "explanation": "Salome ist eine Oper von Richard Strauss nach Oscar Wilde. Sie wurde 1905 uraufgeführt.",
        "levelId": 5,
        "image": "rstrauss.jpg"
      },
      {
        "question": "Welche Oper basiert auf einem Stoff von Shakespeare und wurde von Verdi komponiert?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Otello",
          "Tosca",
          "Lohengrin",
          "Freischütz"
        ],
        "correct": 0,
        "explanation": "Verdis Otello basiert auf Shakespeares Tragödie Othello. Auch Falstaff geht auf Shakespeare zurück.",
        "levelId": 5,
        "image": "verdi.jpg"
      },
      {
        "question": "In welcher Oper tritt die Figur Sarastro auf?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Die Zauberflöte",
          "Fidelio",
          "Don Giovanni",
          "Tannhäuser"
        ],
        "correct": 0,
        "explanation": "Sarastro ist eine wichtige Bassfigur in Mozarts Zauberflöte.",
        "levelId": 5,
        "image": "mozart.jpg"
      },
      {
        "question": "Welche Oper von Puccini spielt im Künstler- und Studentenmilieu von Paris?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "La Bohème",
          "Tosca",
          "Turandot",
          "Madama Butterfly"
        ],
        "correct": 0,
        "explanation": "La Bohème spielt im Pariser Künstlermilieu und gehört zu Puccinis beliebtesten Opern.",
        "levelId": 5,
        "image": "puccini.jpg"
      },
      {
        "question": "Welche Oper von Dvořák enthält das berühmte „Lied an den Mond“?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Rusalka",
          "Jenůfa",
          "Katja Kabanowa",
          "Die verkaufte Braut"
        ],
        "correct": 0,
        "explanation": "Das „Lied an den Mond“ stammt aus Dvořáks Oper Rusalka.",
        "levelId": 5,
        "image": "dvorak.jpg"
      },
      {
        "question": "Welche Oper ist ein zentrales Werk des deutschen romantischen Musiktheaters?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Der Freischütz",
          "Carmen",
          "Aida",
          "La Traviata"
        ],
        "correct": 0,
        "explanation": "Der Freischütz gilt als Schlüsselwerk der deutschen romantischen Oper.",
        "levelId": 5,
        "image": "weber.jpg"
      },
      {
        "question": "Was bedeutet „responsorial“?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Wechsel zwischen Vorsänger und Antwortgruppe",
          "alle singen immer gleichzeitig",
          "nur Instrumente spielen",
          "Chor singt ohne Dirigent"
        ],
        "correct": 0,
        "explanation": "Responsorialer Gesang bedeutet Wechsel zwischen einem Vorsänger oder einer Vorsängerin und einer antwortenden Gruppe.",
        "levelId": 5,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein „Credo“ in der Messe?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Glaubensbekenntnis",
          "Friedensgruss",
          "Schlusssegen",
          "Totenklage"
        ],
        "correct": 0,
        "explanation": "Das Credo ist das Glaubensbekenntnis und gehört zum Messordinarium.",
        "levelId": 5,
        "image": "icon-512.png"
      },
      {
        "question": "Was bezeichnet „Basso continuo“ in barocker Kirchenmusik?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "fortlaufende Bass- und Harmoniestütze",
          "höchste Chorlage",
          "reines Schlagwerk",
          "Schlusschor"
        ],
        "correct": 0,
        "explanation": "Der Basso continuo liefert im Barock die harmonische und bassliche Grundlage, etwa mit Orgel/Cembalo und Bassinstrument.",
        "levelId": 5,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein „Offertorium“?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Gesang zur Gabenbereitung",
          "Eröffnungstakt",
          "Schlussapplaus",
          "Instrumentalprobe"
        ],
        "correct": 0,
        "explanation": "Das Offertorium gehört liturgisch zur Gabenbereitung.",
        "levelId": 5,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein „Vesperpsalm“?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Psalm im Abendgebet",
          "Opernfinale",
          "Klavieretüde",
          "Konzertouvertüre"
        ],
        "correct": 0,
        "explanation": "Vesperpsalmen sind Psalmen im Abendgebet der Kirche.",
        "levelId": 5,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist eine „sinfonische Dichtung“?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Orchesterwerk mit aussermusikalischem Programm",
          "reine Fuge",
          "Messsatz",
          "Opernrezitativ"
        ],
        "correct": 0,
        "explanation": "Eine sinfonische Dichtung ist ein meist einsätziges Orchesterwerk mit programmatischem oder aussermusikalischem Bezug.",
        "levelId": 5,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein „Charakterstück“?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "kurzes Stück mit bestimmter Stimmung oder Idee",
          "vollständige Oper",
          "Messe für Chor",
          "Schlagzeugsolo"
        ],
        "correct": 0,
        "explanation": "Ein Charakterstück ist ein eher kurzes Stück, das eine Stimmung, Szene oder Idee musikalisch gestaltet.",
        "levelId": 5,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „Variationsform“?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Ein Thema wird verändert wiederholt",
          "alle Sätze sind gleich",
          "nur eine Stimme singt",
          "freie Pause"
        ],
        "correct": 0,
        "explanation": "In einer Variationsform wird ein Thema mehrfach verändert, etwa in Rhythmus, Harmonik, Begleitung oder Charakter.",
        "levelId": 5,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist eine „Ouvertüre“?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Eröffnungsstück zu Oper oder Konzertwerk",
          "Schlusschor",
          "Tanz im Dreiertakt",
          "lateinischer Messsatz"
        ],
        "correct": 0,
        "explanation": "Eine Ouvertüre eröffnet häufig eine Oper, ein Bühnenwerk oder auch ein Konzertwerk.",
        "levelId": 5,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist eine „Etüde“?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Übungs- oder Konzertstück mit technischem Schwerpunkt",
          "Operntext",
          "Chorfinale",
          "Totenmesse"
        ],
        "correct": 0,
        "explanation": "Eine Etüde ist ursprünglich ein Übungsstück, kann aber auch als virtuoses Konzertstück gestaltet sein.",
        "levelId": 5,
        "image": "icon-512.png"
      },
      {
        "question": "Welcher Schweizer Komponist schrieb das Oratorium „Le Roi David“?",
        "category": "Musikleben & Praxis",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "honegger.jpg",
        "options": [
          "Arthur Honegger",
          "Richard Wagner",
          "Anton Bruckner",
          "Edvard Grieg"
        ],
        "correct": 0,
        "explanation": "Arthur Honegger war ein Schweizer Komponist und schrieb „Le Roi David“.",
        "levelId": 5
      },
      {
        "question": "Welcher Komponist wurde in Bonn geboren?",
        "category": "Musikleben & Praxis",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "beethoven.webp",
        "options": [
          "Beethoven",
          "Mozart",
          "Schubert",
          "Bruckner"
        ],
        "correct": 0,
        "explanation": "Ludwig van Beethoven wurde in Bonn geboren.",
        "levelId": 5
      },
      {
        "question": "Welcher Komponist stammt aus Salzburg?",
        "category": "Musikleben & Praxis",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "mozart.jpg",
        "options": [
          "Mozart",
          "Brahms",
          "Wagner",
          "Mahler"
        ],
        "correct": 0,
        "explanation": "Wolfgang Amadeus Mozart wurde in Salzburg geboren.",
        "levelId": 5
      },
      {
        "question": "Welcher Komponist ist besonders mit Wien verbunden und schrieb viele Lieder?",
        "category": "Musikleben & Praxis",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "schubert.png",
        "options": [
          "Schubert",
          "Bizet",
          "Grieg",
          "Britten"
        ],
        "correct": 0,
        "explanation": "Franz Schubert lebte und wirkte in Wien.",
        "levelId": 5
      },
      {
        "question": "Was ist die Aufgabe der Konzertmeisterin oder des Konzertmeisters im Orchester?",
        "category": "Musikleben & Praxis",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Führung der ersten Violinen und wichtige Vermittlung zum Dirigat",
          "Verkauf der Eintrittskarten",
          "Bedienung der Lichttechnik",
          "Schreiben des Programmhefts"
        ],
        "correct": 0,
        "explanation": "Die Konzertmeisterin oder der Konzertmeister leitet die erste Violingruppe und hat eine zentrale Rolle im Orchester.",
        "levelId": 5
      },
      {
        "question": "Was ist ein Laienchor?",
        "category": "Musikleben & Praxis",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Chor mit nicht-beruflichen Sänger:innen",
          "Chor ohne Dirigent",
          "Chor nur für Kinder",
          "Chor ohne Noten"
        ],
        "correct": 0,
        "explanation": "Laienchöre bestehen meist aus Sänger:innen, die nicht professionell singen.",
        "levelId": 5
      },
      {
        "question": "Was bedeutet „Uraufführung“?",
        "category": "Musikleben & Praxis",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Erste öffentliche Aufführung eines Werkes",
          "Letzte Probe",
          "Wiederholung eines Konzerts",
          "Probe ohne Publikum"
        ],
        "correct": 0,
        "explanation": "Die Uraufführung ist die erste öffentliche Aufführung.",
        "levelId": 5
      },
      {
        "question": "Was ist ein Dirigent?",
        "category": "Musikleben & Praxis",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Musikalischer Leiter eines Ensembles",
          "Ein Notendrucker",
          "Ein Instrumentenbauer",
          "Ein Sänger im Bass"
        ],
        "correct": 0,
        "explanation": "Der Dirigent koordiniert und gestaltet die Aufführung.",
        "levelId": 5
      },
      {
        "question": "Was ist eine Partitur?",
        "category": "Musikleben & Praxis",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Notentext mit allen Stimmen eines Werkes",
          "Einzelstimme für Violine",
          "Konzertprogramm",
          "Eintrittskarte"
        ],
        "correct": 0,
        "explanation": "In der Partitur stehen alle Stimmen oder Instrumente übereinander.",
        "levelId": 5
      },
      {
        "question": "Was ist eine Generalprobe?",
        "category": "Musikleben & Praxis",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Letzte grosse Probe vor der Aufführung",
          "Erste Leseprobe",
          "Probe nur für Solisten",
          "Probe ohne Musik"
        ],
        "correct": 0,
        "explanation": "Die Generalprobe ist meist die abschliessende Probe vor dem Konzert.",
        "levelId": 5
      }
    ]
  },
  {
    "id": 6,
    "title": "Barock & Alte Musik",
    "description": "Monteverdi, Palestrina, Schütz, Lully, Corelli.",
    "active": true,
    "tier": "learning",
    "difficulty": "mittel-fortgeschritten",
    "defaultCategory": "Komponisten",
    "questions": [
      {
        "question": "Wer komponierte die berühmte 'Marienvesper' von 1610?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel-fortgeschritten",
        "image": "monteverdi.jpg",
        "options": [
          "Monteverdi",
          "Palestrina",
          "Gabrieli",
          "Lully"
        ],
        "correct": 0,
        "explanation": "Claudio Monteverdis Marienvesper von 1610 verbindet alte polyphone Tradition mit dem neuen expressiven Stil des Frühbarock. Sie ist eines der bedeutendsten geistlichen Werke ihrer Zeit.",
        "levelId": 6
      },
      {
        "question": "Welcher Komponist gilt als zentraler Vertreter der römischen Vokalpolyphonie der Renaissance?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "mittel-fortgeschritten",
        "image": "palestrina.jpg",
        "options": [
          "Palestrina",
          "Monteverdi",
          "Schütz",
          "Purcell"
        ],
        "correct": 0,
        "explanation": "Giovanni Pierluigi da Palestrina steht für eine klare, ausgewogene Vokalpolyphonie der Renaissance. Sein Stil wurde später oft als Ideal kirchenmusikalischer Satzkunst betrachtet.",
        "levelId": 6
      },
      {
        "question": "Wer komponierte 'Dido and Aeneas'?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel-fortgeschritten",
        "image": "purcell.jpg",
        "options": [
          "Purcell",
          "Händel",
          "Lully",
          "Monteverdi"
        ],
        "correct": 0,
        "explanation": "Dido and Aeneas ist eine englische Barockoper von Henry Purcell. Besonders berühmt ist Didos Lamento, eines der ergreifendsten Stücke der frühen Operngeschichte.",
        "levelId": 6
      },
      {
        "question": "Welcher Komponist ist besonders mit der französischen Hofoper unter Ludwig XIV. verbunden?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel-fortgeschritten",
        "image": "lully.jpg",
        "options": [
          "Lully",
          "Corelli",
          "Vivaldi",
          "Buxtehude"
        ],
        "correct": 0,
        "explanation": "Jean-Baptiste Lully prägte die französische Oper am Hof Ludwigs XIV. Er entwickelte die Tragédie lyrique und spielte eine zentrale Rolle im Musikleben von Versailles.",
        "levelId": 6
      },
      {
        "question": "Wer gilt als einer der wichtigsten Meister des Concerto grosso?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel-fortgeschritten",
        "image": "corelli.jpg",
        "options": [
          "Corelli",
          "Palestrina",
          "Schütz",
          "Cage"
        ],
        "correct": 0,
        "explanation": "Arcangelo Corelli war ein bedeutender italienischer Violinist und Komponist. Seine Concerti grossi wurden stilbildend für die Instrumentalmusik des Barock.",
        "levelId": 6
      },
      {
        "question": "Welcher norddeutsche Komponist und Organist war ein wichtiger Vorgänger Bachs?",
        "category": "Komponisten",
        "tier": "learning",
        "difficulty": "mittel-fortgeschritten",
        "image": "buxtehude.jpg",
        "options": [
          "Buxtehude",
          "Lully",
          "Rossini",
          "Elgar"
        ],
        "correct": 0,
        "explanation": "Dieterich Buxtehude war ein bedeutender Organist und Komponist in Lübeck. Johann Sebastian Bach soll als junger Mann zu ihm gereist sein, um ihn zu hören.",
        "levelId": 6
      },
      {
        "question": "Wer komponierte die 'Musikalischen Exequien'?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel-fortgeschritten",
        "image": "schuetz.jpg",
        "options": [
          "Heinrich Schütz",
          "Johann Sebastian Bach",
          "Giovanni Gabrieli",
          "Georg Friedrich Händel"
        ],
        "correct": 0,
        "explanation": "Heinrich Schütz schrieb die Musikalischen Exequien als geistliche Begräbnismusik. Er gilt als einer der wichtigsten deutschen Komponisten vor Bach.",
        "levelId": 6
      },
      {
        "question": "Welcher Komponist schrieb das Oratorium 'Messiah'?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel-fortgeschritten",
        "image": "handel.jpg",
        "options": [
          "Händel",
          "Bach",
          "Vivaldi",
          "Purcell"
        ],
        "correct": 0,
        "explanation": "Georg Friedrich Händels Messiah ist eines der berühmtesten Oratorien der Musikgeschichte. Besonders bekannt ist der Halleluja-Chor.",
        "levelId": 6
      },
      {
        "question": "Welcher Komponist wird stark mit venezianischer Mehrchörigkeit verbunden?",
        "category": "Komponisten",
        "tier": "learning",
        "difficulty": "mittel-fortgeschritten",
        "image": "ggabrieli.jpg",
        "options": [
          "Giovanni Gabrieli",
          "Joseph Haydn",
          "Franz Liszt",
          "Carl Orff"
        ],
        "correct": 0,
        "explanation": "Giovanni Gabrieli wirkte an San Marco in Venedig. Seine mehrchörige Musik nutzt räumlich getrennte Klanggruppen und beeinflusste die Entwicklung des konzertierenden Stils.",
        "levelId": 6
      },
      {
        "question": "Welcher Bach-Sohn steht besonders für den empfindsamen Stil zwischen Barock und Klassik?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "mittel-fortgeschritten",
        "image": "cpebach.jpg",
        "options": [
          "Carl Philipp Emanuel Bach",
          "Johann Christian Bach",
          "Wilhelm Friedemann Bach",
          "Johann Sebastian Bach"
        ],
        "correct": 0,
        "explanation": "Carl Philipp Emanuel Bach war einer der wichtigsten Vertreter des empfindsamen Stils. Seine Musik steht zwischen barocker Tradition und klassischer Ausdruckswelt.",
        "levelId": 6
      },
      {
        "question": "Was bedeuten „con sordino“ und „senza sordino“ bei Streichinstrumenten?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "mit Dämpfer / ohne Dämpfer",
          "mit Bogen / ohne Bogen",
          "laut / leise",
          "schnell / langsam"
        ],
        "correct": 0,
        "explanation": "Con sordino bedeutet mit Dämpfer, senza sordino ohne Dämpfer. Bei Streichinstrumenten verändert der Dämpfer die Klangfarbe.",
        "levelId": 6,
        "image": "icon-512.png"
      },
      {
        "question": "Welcher Text gehört fest zum lateinischen Messordinarium?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Kyrie",
          "Psalm 23",
          "Magnificat",
          "Te Deum"
        ],
        "correct": 0,
        "explanation": "Zum Messordinarium gehören Kyrie, Gloria, Credo, Sanctus/Benedictus und Agnus Dei.",
        "levelId": 6,
        "image": "icon-512.png"
      },
      {
        "question": "Welcher Satz gehört nicht zum gewöhnlichen Messordinarium?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Magnificat",
          "Gloria",
          "Credo",
          "Sanctus"
        ],
        "correct": 0,
        "explanation": "Das Magnificat ist kein Teil des Messordinariums, sondern der Lobgesang Mariens.",
        "levelId": 6,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein Choral im evangelischen Kontext?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Gemeindelied",
          "Opernchor",
          "Tanzsatz",
          "Solokadenz"
        ],
        "correct": 0,
        "explanation": "Im evangelischen Kontext bezeichnet Choral meist ein Kirchen- oder Gemeindelied.",
        "levelId": 6,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „divisi“ in Chornoten?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Eine Stimmgruppe teilt sich auf",
          "Alle singen lauter",
          "Die Stelle wird wiederholt",
          "Nur Solisten singen"
        ],
        "correct": 0,
        "explanation": "Divisi bedeutet, dass sich eine Stimmgruppe aufteilt, zum Beispiel Sopran I und Sopran II.",
        "levelId": 6,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein Requiem?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Totenmesse",
          "Hochzeitskantate",
          "Weihnachtslied",
          "Opernfinale"
        ],
        "correct": 0,
        "explanation": "Ein Requiem ist eine Totenmesse. Viele Komponisten haben Requiem-Vertonungen geschrieben.",
        "levelId": 6,
        "image": "mozart.jpg"
      },
      {
        "question": "Welcher Lobgesang beginnt mit „Magnificat anima mea Dominum“?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Magnificat",
          "Stabat Mater",
          "Dies irae",
          "Agnus Dei"
        ],
        "correct": 0,
        "explanation": "Das Magnificat ist der Lobgesang Mariens aus dem Lukasevangelium.",
        "levelId": 6,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein „Stabat Mater“?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Geistlicher Text über Maria unter dem Kreuz",
          "Weihnachtsoratorium",
          "Opernfinale",
          "Weltliches Trinklied"
        ],
        "correct": 0,
        "explanation": "Das Stabat Mater ist ein mittelalterlicher geistlicher Text über Maria unter dem Kreuz und wurde vielfach vertont.",
        "levelId": 6,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein „Te Deum“?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Feierlicher lateinischer Lobgesang",
          "Totenmesse",
          "Passionsrezitativ",
          "Opernchor"
        ],
        "correct": 0,
        "explanation": "Das Te Deum ist ein feierlicher lateinischer Lobgesang, der oft für festliche Anlässe vertont wurde.",
        "levelId": 6,
        "image": "icon-512.png"
      },
      {
        "question": "Was bezeichnet „Psalmvertonung“?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Musikalische Vertonung eines biblischen Psalms",
          "Instrumentales Vorspiel",
          "Opernduett",
          "Tanzsatz"
        ],
        "correct": 0,
        "explanation": "Eine Psalmvertonung ist die musikalische Vertonung eines Psalms, etwa für Chor, Solisten oder Gemeinde.",
        "levelId": 6,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein „Nocturne“?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "meist lyrisches Nachtstück",
          "schneller Tanz",
          "Messgesang",
          "Opernensemble"
        ],
        "correct": 0,
        "explanation": "Ein Nocturne ist meist ein lyrisches, nachtbezogenes Charakterstück, besonders bekannt bei Chopin.",
        "levelId": 6,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein „Impromptu“?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Charakterstück mit improvisatorischem Eindruck",
          "strenge Messform",
          "Opernfinale",
          "Orchesterstimmung"
        ],
        "correct": 0,
        "explanation": "Ein Impromptu wirkt oft spontan oder improvisatorisch, ist aber natürlich komponiert.",
        "levelId": 6,
        "image": "icon-512.png"
      },
      {
        "question": "Was bezeichnet „Thema mit Variationen“?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Thema wird mehrfach verändert",
          "nur der Schluss wird wiederholt",
          "keine Tonart ist festgelegt",
          "nur Schlagwerk spielt"
        ],
        "correct": 0,
        "explanation": "Bei Thema mit Variationen wird ein Thema in mehreren veränderten Fassungen wiederholt.",
        "levelId": 6,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist eine „Serenade“?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "oft unterhaltendes mehrsätziges Werk",
          "Totenmesse",
          "Operntragödie",
          "Chorrezitativ"
        ],
        "correct": 0,
        "explanation": "Eine Serenade ist oft ein unterhaltendes mehrsätziges Werk, ursprünglich häufig mit Abend- oder Freiluftbezug.",
        "levelId": 6,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein „Liedzyklus“?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Sammlung zusammengehöriger Lieder",
          "einzelnes Orchesterwerk",
          "Oper ohne Handlung",
          "Kirchenraum"
        ],
        "correct": 0,
        "explanation": "Ein Liedzyklus ist eine Folge zusammengehöriger Lieder, oft mit thematischem oder poetischem Zusammenhang.",
        "levelId": 6,
        "image": "icon-512.png"
      },
      {
        "question": "Welche Schule ist mit Komponisten wie Haydn, Mozart und Beethoven verbunden?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Wiener Klassik",
          "Les Six",
          "Notre-Dame-Schule",
          "Russische Fünf"
        ],
        "correct": 0,
        "explanation": "Haydn, Mozart und Beethoven werden häufig als zentrale Komponisten der Wiener Klassik bezeichnet.",
        "levelId": 6,
        "image": "beethoven.webp"
      },
      {
        "question": "Welche Stilrichtung steht oft für extreme Ausdrucksspannung und Auflösung der traditionellen Tonalität?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Expressionismus",
          "Klassik",
          "Renaissance",
          "Belcanto"
        ],
        "correct": 0,
        "explanation": "Der musikalische Expressionismus sucht oft extreme Ausdrucksintensität und überschreitet traditionelle tonale Bindungen.",
        "levelId": 6,
        "image": "icon-512.png"
      },
      {
        "question": "Welche Epoche ist stark mit Polyphonie und Vokalwerken von Palestrina verbunden?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Renaissance",
          "Romantik",
          "Klassik",
          "Minimal Music"
        ],
        "correct": 0,
        "explanation": "Palestrina steht exemplarisch für die vokale Polyphonie der Renaissance.",
        "levelId": 6,
        "image": "palestrina.jpg"
      },
      {
        "question": "Welche Richtung steht für mathematisch organisierte Reihenprinzipien nach 1945?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Serialismus",
          "Impressionismus",
          "Barock",
          "Empfindsamer Stil"
        ],
        "correct": 0,
        "explanation": "Der Serialismus organisiert musikalische Parameter nach Reihenprinzipien, besonders in der Nachkriegsavantgarde.",
        "levelId": 6,
        "image": "icon-512.png"
      },
      {
        "question": "Welche Stilrichtung der Oper betont schönen Gesang und Virtuosität?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Belcanto",
          "Minimal Music",
          "Impressionismus",
          "Serialismus"
        ],
        "correct": 0,
        "explanation": "Belcanto bezeichnet eine Operntradition, in der schöner, beweglicher und virtuoser Gesang im Zentrum steht.",
        "levelId": 6,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet allegro?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "schnell",
          "langsam",
          "traurig",
          "leise"
        ],
        "correct": 0,
        "explanation": "Allegro bedeutet schnell oder lebhaft.",
        "levelId": 6
      },
      {
        "question": "Was bedeutet adagio?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "langsam",
          "sehr laut",
          "tänzerisch",
          "plötzlich"
        ],
        "correct": 0,
        "explanation": "Adagio bezeichnet ein langsames Tempo.",
        "levelId": 6
      },
      {
        "question": "Was bedeutet legato?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "gebunden",
          "kurz getrennt",
          "sehr laut",
          "improvisiert"
        ],
        "correct": 0,
        "explanation": "Legato bedeutet, dass Töne gebunden gespielt oder gesungen werden.",
        "levelId": 6
      },
      {
        "question": "Was bedeutet staccato?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "kurz und getrennt",
          "weich gebunden",
          "immer leise",
          "sehr langsam"
        ],
        "correct": 0,
        "explanation": "Staccato bedeutet kurz abgesetzt.",
        "levelId": 6
      },
      {
        "question": "Was ist ein Takt?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Ein rhythmischer Abschnitt mit regelmässiger Betonung",
          "Ein einzelner Ton",
          "Eine Tonart",
          "Ein Instrument"
        ],
        "correct": 0,
        "explanation": "Takte ordnen Musik zeitlich und metrisch.",
        "levelId": 6
      },
      {
        "question": "Was bedeutet Auftakt?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Unvollständiger Takt vor dem ersten Volltakt",
          "Schlussakkord",
          "sehr lauter Beginn",
          "falscher Einsatz"
        ],
        "correct": 0,
        "explanation": "Ein Auftakt beginnt vor dem ersten vollständigen Takt.",
        "levelId": 6
      },
      {
        "question": "Was bedeutet ritardando?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "langsamer werden",
          "schneller werden",
          "lauter werden",
          "ohne Pause"
        ],
        "correct": 0,
        "explanation": "Ritardando bedeutet allmählich langsamer werden.",
        "levelId": 6
      },
      {
        "question": "Was bedeutet accelerando?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "schneller werden",
          "leiser werden",
          "tiefer werden",
          "wiederholen"
        ],
        "correct": 0,
        "explanation": "Accelerando bedeutet allmählich schneller werden.",
        "levelId": 6
      },
      {
        "question": "Was bedeutet Da capo?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Von Anfang an wiederholen",
          "Sofort aufhören",
          "Eine Oktave tiefer",
          "Ohne Dirigent"
        ],
        "correct": 0,
        "explanation": "Da capo bedeutet „von Anfang an“.",
        "levelId": 6
      },
      {
        "question": "Was bedeutet Fine in Noten?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Ende",
          "Anfang",
          "schneller",
          "leiser"
        ],
        "correct": 0,
        "explanation": "Fine bezeichnet das Ende eines Stücks oder Abschnitts.",
        "levelId": 6
      }
    ]
  },
  {
    "id": 7,
    "title": "Moderne & 20. Jahrhundert",
    "description": "Debussy, Ravel, Strawinsky, Schönberg, Cage.",
    "active": true,
    "tier": "learning",
    "difficulty": "fortgeschritten",
    "defaultCategory": "Epochen & Stil",
    "questions": [
      {
        "question": "Welcher Komponist wird häufig mit dem musikalischen Impressionismus verbunden?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "fortgeschritten",
        "image": "debussy.jpg",
        "options": [
          "Claude Debussy",
          "Johannes Brahms",
          "Antonio Vivaldi",
          "Joseph Haydn"
        ],
        "correct": 0,
        "explanation": "Claude Debussy wird oft mit dem musikalischen Impressionismus verbunden. Seine Musik arbeitet stark mit Klangfarben, schwebenden Harmonien und freieren Formen.",
        "levelId": 7
      },
      {
        "question": "Wer komponierte den berühmten 'Boléro'?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "fortgeschritten",
        "image": "ravel.jpg",
        "options": [
          "Maurice Ravel",
          "Claude Debussy",
          "Erik Satie",
          "Gabriel Fauré"
        ],
        "correct": 0,
        "explanation": "Maurice Ravels Boléro beruht auf einer fast durchgehenden rhythmischen und melodischen Wiederholung. Die Wirkung entsteht vor allem durch die stetig wachsende Orchestrierung.",
        "levelId": 7
      },
      {
        "question": "Welcher Komponist schrieb 'Le Sacre du printemps'?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "fortgeschritten",
        "image": "stravinsky.jpg",
        "options": [
          "Igor Strawinsky",
          "Arnold Schönberg",
          "Sergei Prokofjew",
          "Dmitri Schostakowitsch"
        ],
        "correct": 0,
        "explanation": "Igor Strawinskys Le Sacre du printemps wurde 1913 in Paris uraufgeführt und gilt als eines der Schlüsselwerke der musikalischen Moderne.",
        "levelId": 7
      },
      {
        "question": "Wer entwickelte die Zwölftontechnik?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "fortgeschritten",
        "image": "schoenberg.jpg",
        "options": [
          "Arnold Schönberg",
          "Anton Webern",
          "Alban Berg",
          "John Cage"
        ],
        "correct": 0,
        "explanation": "Arnold Schönberg entwickelte die Zwölftontechnik. Sie ordnet die zwölf Töne der chromatischen Skala in einer Reihe und wurde für die Musik des 20. Jahrhunderts sehr einflussreich.",
        "levelId": 7
      },
      {
        "question": "Welcher Komponist gehört zur Zweiten Wiener Schule?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "fortgeschritten",
        "image": "webern.jpg",
        "options": [
          "Anton Webern",
          "Giuseppe Verdi",
          "Franz Schubert",
          "Anton Bruckner"
        ],
        "correct": 0,
        "explanation": "Anton Webern gehört zusammen mit Arnold Schönberg und Alban Berg zur Zweiten Wiener Schule. Seine Musik ist oft extrem konzentriert, kurz und klanglich fein gearbeitet.",
        "levelId": 7
      },
      {
        "question": "Wer komponierte die Oper 'Wozzeck'?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "fortgeschritten",
        "image": "albanberg.jpg",
        "options": [
          "Alban Berg",
          "Richard Strauss",
          "Paul Hindemith",
          "Benjamin Britten"
        ],
        "correct": 0,
        "explanation": "Alban Bergs Wozzeck ist ein zentrales Werk des musikalischen Expressionismus. Die Oper verbindet moderne Tonsprache mit streng gearbeiteten Formen.",
        "levelId": 7
      },
      {
        "question": "Welcher Komponist ist besonders mit experimenteller Musik und dem Stück '4′33″' verbunden?",
        "category": "Komponisten",
        "tier": "learning",
        "difficulty": "fortgeschritten",
        "image": "cage.jpg",
        "options": [
          "John Cage",
          "Carl Orff",
          "Edward Elgar",
          "Jean Sibelius"
        ],
        "correct": 0,
        "explanation": "John Cage stellte die Frage, was überhaupt Musik sein kann. In 4′33″ erklingt kein absichtlich gespielter Ton; die Umgebungsgeräusche werden zum eigentlichen Ereignis.",
        "levelId": 7
      },
      {
        "question": "Wer komponierte 'Carmina Burana'?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "fortgeschritten",
        "image": "orff.jpg",
        "options": [
          "Carl Orff",
          "Benjamin Britten",
          "Aaron Copland",
          "Leonard Bernstein"
        ],
        "correct": 0,
        "explanation": "Carl Orffs Carmina Burana ist ein grosses szenisches Chorwerk. Der Eingangschor O Fortuna gehört zu den bekanntesten Chorstücken des 20. Jahrhunderts.",
        "levelId": 7
      },
      {
        "question": "Welcher amerikanische Komponist schrieb 'Appalachian Spring'?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "fortgeschritten",
        "image": "copland.jpg",
        "options": [
          "Aaron Copland",
          "Leonard Bernstein",
          "George Gershwin",
          "John Cage"
        ],
        "correct": 0,
        "explanation": "Aaron Copland entwickelte einen klaren, weiträumigen amerikanischen Orchesterstil. Appalachian Spring gehört zu seinen bekanntesten Werken.",
        "levelId": 7
      },
      {
        "question": "Wer komponierte das 'War Requiem'?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "fortgeschritten",
        "image": "britten.jpg",
        "options": [
          "Benjamin Britten",
          "Dmitri Schostakowitsch",
          "Igor Strawinsky",
          "Maurice Ravel"
        ],
        "correct": 0,
        "explanation": "Benjamin Brittens War Requiem verbindet den lateinischen Requiemtext mit Gedichten von Wilfred Owen. Es ist eines der bedeutenden pazifistischen Werke des 20. Jahrhunderts.",
        "levelId": 7
      },
      {
        "question": "Wie viele Halbtöne hat eine reine Quinte?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "7",
          "5",
          "6",
          "8"
        ],
        "correct": 0,
        "explanation": "Eine reine Quinte umfasst sieben Halbtonschritte, zum Beispiel C–G.",
        "levelId": 7,
        "image": "icon-512.png"
      },
      {
        "question": "Wie viele Halbtöne hat eine grosse Terz?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "4",
          "3",
          "5",
          "6"
        ],
        "correct": 0,
        "explanation": "Eine grosse Terz umfasst vier Halbtonschritte, zum Beispiel C–E.",
        "levelId": 7,
        "image": "icon-512.png"
      },
      {
        "question": "Welches Intervall liegt zwischen C und F?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Quarte",
          "Terz",
          "Quinte",
          "Sexte"
        ],
        "correct": 0,
        "explanation": "C–F ist eine Quarte.",
        "levelId": 7,
        "image": "icon-512.png"
      },
      {
        "question": "Welche Tonart hat drei Kreuze?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "A-Dur",
          "D-Dur",
          "E-Dur",
          "G-Dur"
        ],
        "correct": 0,
        "explanation": "A-Dur hat drei Kreuze: fis, cis und gis.",
        "levelId": 7,
        "image": "icon-512.png"
      },
      {
        "question": "Welche Tonart hat zwei B?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "B-Dur",
          "Es-Dur",
          "F-Dur",
          "As-Dur"
        ],
        "correct": 0,
        "explanation": "B-Dur hat zwei B-Vorzeichen: b und es.",
        "levelId": 7,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „legato“?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Gebunden",
          "Kurz",
          "Laut",
          "Langsam"
        ],
        "correct": 0,
        "explanation": "Legato bedeutet gebunden: Die Töne sollen möglichst verbunden klingen.",
        "levelId": 7,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „staccato“?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Kurz getrennt",
          "Sehr langsam",
          "Immer lauter",
          "Ohne Tempo"
        ],
        "correct": 0,
        "explanation": "Staccato bedeutet kurz und deutlich getrennt.",
        "levelId": 7,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „crescendo“?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Lauter werden",
          "Leiser werden",
          "Schneller werden",
          "Freier werden"
        ],
        "correct": 0,
        "explanation": "Crescendo bedeutet allmählich lauter werden.",
        "levelId": 7,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „diminuendo“?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Leiser werden",
          "Lauter werden",
          "Schneller werden",
          "Wiederholen"
        ],
        "correct": 0,
        "explanation": "Diminuendo bedeutet allmählich leiser werden.",
        "levelId": 7,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist eine Synkope?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Betonungsverschiebung",
          "Tiefer Ton",
          "Dur-Dreiklang",
          "Schlusskadenz"
        ],
        "correct": 0,
        "explanation": "Eine Synkope verschiebt die erwartete Betonung und erzeugt rhythmische Spannung.",
        "levelId": 7,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „atonal“ vereinfacht gesagt?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "ohne festes tonales Zentrum",
          "besonders laut",
          "im Dreiertakt",
          "nur mit Chor"
        ],
        "correct": 0,
        "explanation": "Atonal bedeutet vereinfacht, dass Musik kein eindeutiges tonales Zentrum wie Dur oder Moll besitzt.",
        "levelId": 7,
        "image": "icon-512.png"
      },
      {
        "question": "Welche Epoche entwickelte die Sonatenhauptsatzform besonders stark weiter?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Klassik",
          "Mittelalter",
          "Renaissance",
          "Gregorianik"
        ],
        "correct": 0,
        "explanation": "Die Sonatenhauptsatzform wurde besonders in der Klassik zu einem zentralen Formmodell.",
        "levelId": 7,
        "image": "icon-512.png"
      },
      {
        "question": "Welche Richtung ist mit Komponisten wie Steve Reich und Philip Glass verbunden?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Minimal Music",
          "Ars nova",
          "Belcanto",
          "Empfindsamer Stil"
        ],
        "correct": 0,
        "explanation": "Steve Reich und Philip Glass gehören zu den bekanntesten Vertretern der Minimal Music.",
        "levelId": 7,
        "image": "icon-512.png"
      },
      {
        "question": "Was meint „Historismus“ in der Musik grob?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "bewusster Rückgriff auf ältere Stile",
          "völliger Verzicht auf Form",
          "nur elektronische Klänge",
          "zufällige Tonwahl"
        ],
        "correct": 0,
        "explanation": "Historismus meint einen bewussten Rückgriff auf ältere Stile, Formen oder Satzweisen.",
        "levelId": 7,
        "image": "icon-512.png"
      },
      {
        "question": "Welche Epoche ist besonders mit höfischen Tänzen, Generalbass und Concerto grosso verbunden?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Barock",
          "Romantik",
          "Impressionismus",
          "Moderne"
        ],
        "correct": 0,
        "explanation": "Höfische Tänze, Generalbass und Concerto grosso sind typisch für viele Bereiche der Barockmusik.",
        "levelId": 7,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein Englischhorn?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "tieferes Oboeninstrument",
          "Blechblasinstrument",
          "kleine Klarinette",
          "Schlaginstrument"
        ],
        "correct": 0,
        "explanation": "Das Englischhorn ist ein tieferes Doppelrohrblattinstrument aus der Oboenfamilie.",
        "levelId": 7,
        "image": "icon-512.png"
      },
      {
        "question": "Welches Instrument ist die tiefere Schwester der Oboe?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Englischhorn",
          "Piccoloflöte",
          "Trompete",
          "Viola"
        ],
        "correct": 0,
        "explanation": "Das Englischhorn ist tiefer als die Oboe und besitzt einen warmen, gedeckten Klang.",
        "levelId": 7,
        "image": "icon-512.png"
      },
      {
        "question": "Welches Instrument spielt häufig die Basslinie im Barock-Continuo?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Violoncello",
          "Viola",
          "Violine",
          "Cembalo solo"
        ],
        "correct": 0,
        "explanation": "Im Basso-continuo-Spiel übernimmt das Violoncello häufig die Basslinie; ein Tasteninstrument ergänzt die Harmonien.",
        "levelId": 7,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist eine Celesta?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Tasteninstrument mit glockenartigem Klang",
          "tiefe Trommel",
          "Blechblasinstrument",
          "Holzflöte"
        ],
        "correct": 0,
        "explanation": "Die Celesta ist ein Tasteninstrument mit hellem, glockenartigem Klang, bekannt etwa aus Tschaikowskys Nussknacker.",
        "levelId": 7,
        "image": "icon-512.png"
      },
      {
        "question": "Welches Instrument gehört zu den Doppelrohrblattinstrumenten?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Oboe",
          "Klarinette",
          "Saxophon",
          "Querflöte"
        ],
        "correct": 0,
        "explanation": "Die Oboe verwendet ein Doppelrohrblatt. Auch Fagott und Englischhorn gehören in diese Familie.",
        "levelId": 7,
        "image": "icon-512.png"
      },
      {
        "question": "Wie viele Halbtöne hat eine Oktave?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "12",
          "7",
          "8",
          "10"
        ],
        "correct": 0,
        "explanation": "Die Oktave ist in der westlichen Musik in 12 Halbtöne geteilt.",
        "levelId": 7
      },
      {
        "question": "Welches Intervall umfasst acht Tonstufen?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Oktave",
          "Terz",
          "Quarte",
          "Sekunde"
        ],
        "correct": 0,
        "explanation": "Die Oktave umfasst acht Stufen im Tonsystem.",
        "levelId": 7
      },
      {
        "question": "Was bedeutet forte?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "laut",
          "leise",
          "langsam",
          "schnell"
        ],
        "correct": 0,
        "explanation": "Forte bedeutet laut.",
        "levelId": 7
      },
      {
        "question": "Was bedeutet piano?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "leise",
          "laut",
          "schnell",
          "gebunden"
        ],
        "correct": 0,
        "explanation": "Piano bedeutet leise.",
        "levelId": 7
      },
      {
        "question": "Was bedeutet crescendo?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "lauter werden",
          "leiser werden",
          "schneller werden",
          "abbrechen"
        ],
        "correct": 0,
        "explanation": "Crescendo bedeutet allmählich lauter werden.",
        "levelId": 7
      },
      {
        "question": "Was bedeutet diminuendo?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "leiser werden",
          "lauter werden",
          "höher werden",
          "wiederholen"
        ],
        "correct": 0,
        "explanation": "Diminuendo bedeutet allmählich leiser werden.",
        "levelId": 7
      },
      {
        "question": "Welche Tonart hat ein Kreuz als Vorzeichen?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "G-Dur",
          "F-Dur",
          "C-Dur",
          "Es-Dur"
        ],
        "correct": 0,
        "explanation": "G-Dur hat ein Kreuz: Fis.",
        "levelId": 7
      },
      {
        "question": "Welche Tonart hat ein b als Vorzeichen?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "F-Dur",
          "G-Dur",
          "D-Dur",
          "A-Dur"
        ],
        "correct": 0,
        "explanation": "F-Dur hat ein b: B.",
        "levelId": 7
      },
      {
        "question": "Was ist ein Dreiklang?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Akkord aus drei verschiedenen Tönen",
          "Drei gleiche Töne",
          "Ein Rhythmus",
          "Eine Tonleiter"
        ],
        "correct": 0,
        "explanation": "Ein Dreiklang besteht meist aus Grundton, Terz und Quinte.",
        "levelId": 7
      },
      {
        "question": "Was ist eine Dur-Tonleiter?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Tonleiter mit charakteristischer grosser Terz",
          "Tonleiter ohne Halbtonschritte",
          "Nur schwarze Tasten",
          "Eine Kirchentonart ohne Grundton"
        ],
        "correct": 0,
        "explanation": "Die grosse Terz prägt den Dur-Charakter.",
        "levelId": 7
      }
    ]
  },
  {
    "id": 8,
    "title": "Kirchenmusik & Chor",
    "description": "Messe, Motette, Passion, Oratorium.",
    "active": true,
    "tier": "learning",
    "difficulty": "mittel",
    "defaultCategory": "Kirchenmusik & Chor",
    "questions": [
      {
        "question": "Welche Gattung vertont normalerweise die festen Teile der katholischen Liturgie wie Kyrie, Gloria, Credo, Sanctus und Agnus Dei?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "icon-512.png",
        "options": [
          "Messe",
          "Sinfonie",
          "Oper",
          "Nocturne"
        ],
        "correct": 0,
        "explanation": "Die Messe vertont die zentralen festen Teile der Liturgie. Zu den klassischen Ordinariumsteilen gehören Kyrie, Gloria, Credo, Sanctus und Agnus Dei.",
        "levelId": 8
      },
      {
        "question": "Welche Gattung ist eine Vertonung der Totenmesse?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "mozart.jpg",
        "options": [
          "Requiem",
          "Motette",
          "Walzer",
          "Scherzo"
        ],
        "correct": 0,
        "explanation": "Das Requiem ist die musikalische Vertonung der Totenmesse. Berühmte Requiem-Vertonungen stammen unter anderem von Mozart, Verdi, Fauré und Britten.",
        "levelId": 8
      },
      {
        "question": "Welche Gattung erzählt musikalisch die Leidensgeschichte Jesu?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "icon-512.png",
        "options": [
          "Passion",
          "Sonate",
          "Madrigal",
          "Etüde"
        ],
        "correct": 0,
        "explanation": "Eine Passion vertont die Leidensgeschichte Jesu. Besonders im protestantischen Barock wurden Passionen mit Evangelientext, Chorälen, Arien und Chören ausgestaltet.",
        "levelId": 8
      },
      {
        "question": "Was unterscheidet ein Oratorium typischerweise von einer Oper?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "icon-512.png",
        "options": [
          "Es ist meist konzertant und nicht szenisch gespielt",
          "Es hat nie einen Chor",
          "Es ist immer rein instrumental",
          "Es wird nur für Klavier geschrieben"
        ],
        "correct": 0,
        "explanation": "Ein Oratorium ist meist ein grosses geistliches oder dramatisches Werk für Solisten, Chor und Orchester, wird aber normalerweise konzertant und nicht als Bühnenoper gespielt.",
        "levelId": 8
      },
      {
        "question": "Welche Gattung ist besonders eng mit mehrstimmiger geistlicher Vokalmusik verbunden?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "icon-512.png",
        "options": [
          "Motette",
          "Konzertwalzer",
          "Klaviersonate",
          "Ouvertüre"
        ],
        "correct": 0,
        "explanation": "Die Motette ist eine wichtige geistliche Vokalgattung. Besonders in Renaissance und Barock spielte sie in der Kirchenmusik eine zentrale Rolle.",
        "levelId": 8
      },
      {
        "question": "Was meint 'a cappella' im Chorkontext?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "icon-512.png",
        "options": [
          "Gesang ohne instrumentale Begleitung",
          "Gesang mit grossem Orchester",
          "Ein Werk nur für Orgel",
          "Eine Opernszene"
        ],
        "correct": 0,
        "explanation": "A cappella bedeutet im heutigen Sprachgebrauch meist Chorgesang ohne instrumentale Begleitung. Der Begriff wird besonders häufig bei Vokalensembles und Chormusik verwendet.",
        "levelId": 8
      },
      {
        "question": "Welche Aussage beschreibt eine Kantate am besten?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "icon-512.png",
        "options": [
          "Ein mehrsätziges Vokalwerk, oft mit Chor, Solisten und Instrumenten",
          "Eine reine Klavierübung",
          "Ein Tanz im Dreiertakt",
          "Eine kurze Orchesterouvertüre"
        ],
        "correct": 0,
        "explanation": "Eine Kantate ist meist ein mehrsätziges Vokalwerk. Im Barock begegnet sie häufig mit Chor, Solisten, Rezitativen, Arien und Instrumentalbegleitung.",
        "levelId": 8
      },
      {
        "question": "Was ist ein Choral im protestantischen Kirchenmusik-Kontext?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "icon-512.png",
        "options": [
          "Ein geistliches Gemeindelied",
          "Ein virtuoses Klavierstück",
          "Ein Opernfinale",
          "Eine italienische Tanzform"
        ],
        "correct": 0,
        "explanation": "Ein Choral ist im protestantischen Kontext ein geistliches Gemeindelied. Bach verwendet Choräle oft als theologische und musikalische Säulen in Kantaten und Passionen.",
        "levelId": 8
      },
      {
        "question": "Welche Besetzung meint die Abkürzung SATB im Chor?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "icon-512.png",
        "options": [
          "Sopran, Alt, Tenor, Bass",
          "Solo, Arie, Tutti, Bass",
          "Streicher, Alt, Trompete, Basso continuo",
          "Sopran, Akkord, Thema, Basslinie"
        ],
        "correct": 0,
        "explanation": "SATB steht für Sopran, Alt, Tenor und Bass. Diese vierstimmige Grundbesetzung ist in der Chorliteratur besonders verbreitet.",
        "levelId": 8
      },
      {
        "question": "Welche Musikform ist besonders typisch für die Renaissance-Vokalpolyphonie?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "image": "icon-512.png",
        "options": [
          "Mehrstimmige, oft imitative Vokalmusik",
          "Elektronische Klangcollage",
          "Sinfonische Dichtung",
          "Klavierkonzert"
        ],
        "correct": 0,
        "explanation": "Die Renaissance-Vokalpolyphonie arbeitet häufig mit mehreren selbständigen Stimmen und Imitation. Komponisten wie Palestrina oder Tallis stehen exemplarisch für diese Klangwelt.",
        "levelId": 8
      },
      {
        "question": "Zu welcher Instrumentenfamilie gehört die Oboe?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Holzbläser",
          "Blechbläser",
          "Streicher",
          "Schlagwerk"
        ],
        "correct": 0,
        "explanation": "Die Oboe gehört zu den Holzblasinstrumenten und verwendet ein Doppelrohrblatt.",
        "levelId": 8,
        "image": "icon-512.png"
      },
      {
        "question": "Welches Instrument verwendet ein Doppelrohrblatt?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Fagott",
          "Klarinette",
          "Flöte",
          "Horn"
        ],
        "correct": 0,
        "explanation": "Das Fagott verwendet wie die Oboe ein Doppelrohrblatt.",
        "levelId": 8,
        "image": "icon-512.png"
      },
      {
        "question": "Welches Instrument ist das tiefste reguläre Streichinstrument im Sinfonieorchester?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Kontrabass",
          "Violoncello",
          "Viola",
          "Violine"
        ],
        "correct": 0,
        "explanation": "Der Kontrabass ist das tiefste reguläre Streichinstrument des Sinfonieorchesters.",
        "levelId": 8,
        "image": "icon-512.png"
      },
      {
        "question": "Welches Blechblasinstrument besitzt meist einen Zug?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Posaune",
          "Trompete",
          "Horn",
          "Tuba"
        ],
        "correct": 0,
        "explanation": "Die Posaune besitzt in der Regel einen Zug, mit dem die Tonhöhe verändert wird.",
        "levelId": 8,
        "image": "icon-512.png"
      },
      {
        "question": "Welches Instrument ist ein Tasteninstrument mit gezupften Saiten?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Cembalo",
          "Klavier",
          "Orgel",
          "Celesta"
        ],
        "correct": 0,
        "explanation": "Beim Cembalo werden die Saiten angerissen bzw. gezupft, nicht wie beim Klavier mit Hämmern angeschlagen.",
        "levelId": 8,
        "image": "icon-512.png"
      },
      {
        "question": "Welches Instrument kann besonders lange Töne durch Luftreservoir und Tasten erzeugen?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Orgel",
          "Violine",
          "Harfe",
          "Pauke"
        ],
        "correct": 0,
        "explanation": "Die Orgel erzeugt Töne durch Luft, die durch Pfeifen strömt. Solange Taste und Luftzufuhr gehalten werden, kann der Ton weiterklingen.",
        "levelId": 8,
        "image": "icon-512.png"
      },
      {
        "question": "Welches Schlaginstrument kann bestimmte Tonhöhen spielen und wird mit Pedal gestimmt?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Pauke",
          "Kleine Trommel",
          "Becken",
          "Triangel"
        ],
        "correct": 0,
        "explanation": "Pauken haben bestimmte Tonhöhen und können über ein Pedal umgestimmt werden.",
        "levelId": 8,
        "image": "icon-512.png"
      },
      {
        "question": "Welches Instrument gehört zu den tiefen Holzblasinstrumenten?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Kontrafagott",
          "Trompete",
          "Viola",
          "Pauke"
        ],
        "correct": 0,
        "explanation": "Das Kontrafagott ist ein sehr tiefes Holzblasinstrument und klingt eine Oktave tiefer als das Fagott.",
        "levelId": 8,
        "image": "icon-512.png"
      },
      {
        "question": "Welches Instrument ist eine tiefer klingende Bauform der Klarinette?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Bassklarinette",
          "Englischhorn",
          "Bratsche",
          "Piccoloflöte"
        ],
        "correct": 0,
        "explanation": "Die Bassklarinette ist eine tiefere Klarinettenbauform mit charakteristisch dunklem Klang.",
        "levelId": 8,
        "image": "icon-512.png"
      },
      {
        "question": "Welches Instrument spielt im Orchester häufig die Stimmgabel-Rolle beim Einstimmen?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Oboe",
          "Tuba",
          "Pauke",
          "Harfe"
        ],
        "correct": 0,
        "explanation": "Traditionell gibt die Oboe im Orchester den Stimmton an, häufig das a'.",
        "levelId": 8,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „pizzicato“ bei Streichinstrumenten?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "gezupft",
          "mit Dämpfer",
          "am Steg gestrichen",
          "sehr laut"
        ],
        "correct": 0,
        "explanation": "Pizzicato bedeutet bei Streichinstrumenten, dass die Saiten gezupft werden.",
        "levelId": 8,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „arco“ bei Streichinstrumenten?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "mit dem Bogen",
          "gezupft",
          "mit Dämpfer",
          "ohne Vibrato"
        ],
        "correct": 0,
        "explanation": "Arco bedeutet, dass wieder mit dem Bogen gestrichen wird, oft nach einer pizzicato-Stelle.",
        "levelId": 8,
        "image": "icon-512.png"
      },
      {
        "question": "Welches Instrument gehört nicht zu den klassischen Holzbläsern des Sinfonieorchesters?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Saxophon",
          "Flöte",
          "Oboe",
          "Fagott"
        ],
        "correct": 0,
        "explanation": "Das Saxophon ist zwar ein Holzblasinstrument, gehört aber nicht zur klassischen Standard-Holzbläsergruppe des Sinfonieorchesters.",
        "levelId": 8,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein „Register“ bei der Orgel?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Klangfarbe/Pfeifenreihe",
          "Taktart",
          "Notenschlüssel",
          "Sitzordnung"
        ],
        "correct": 0,
        "explanation": "Ein Orgelregister ist eine Pfeifenreihe oder Klangfarbe, die zu- oder abgeschaltet werden kann.",
        "levelId": 8,
        "image": "icon-512.png"
      },
      {
        "question": "Welche Besetzung entspricht dem klassischen Streichquartett?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "zwei Violinen, Viola, Violoncello",
          "Violine, zwei Violen, Violoncello",
          "zwei Violinen, zwei Violoncelli",
          "Violine, Viola, Violoncello, Kontrabass"
        ],
        "correct": 0,
        "explanation": "Das klassische Streichquartett besteht aus zwei Violinen, Viola und Violoncello.",
        "levelId": 8,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist eine Kadenz in der Harmonielehre?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Schlusswendung von Akkorden",
          "schneller Lauf",
          "Orchesteraufstellung",
          "Tempoangabe"
        ],
        "correct": 0,
        "explanation": "In der Harmonielehre bezeichnet Kadenz eine Akkordfolge, die eine Tonart bestätigt oder einen Abschluss bildet.",
        "levelId": 8,
        "image": "icon-512.png"
      },
      {
        "question": "Welche Stufe ist in C-Dur die Dominante?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "G",
          "F",
          "A",
          "D"
        ],
        "correct": 0,
        "explanation": "Die Dominante ist die fünfte Stufe. In C-Dur ist das G.",
        "levelId": 8,
        "image": "icon-512.png"
      },
      {
        "question": "Welche Stufe ist in C-Dur die Subdominante?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "F",
          "G",
          "E",
          "H"
        ],
        "correct": 0,
        "explanation": "Die Subdominante ist die vierte Stufe. In C-Dur ist das F.",
        "levelId": 8,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein Leitton in Dur?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "siebte Stufe mit Zug zur Tonika",
          "tiefster Basston",
          "zufälliger Akzent",
          "Pausenwert"
        ],
        "correct": 0,
        "explanation": "Der Leitton ist die siebte Stufe einer Durtonleiter und strebt häufig zur Tonika.",
        "levelId": 8,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist eine enharmonische Verwechslung?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "derselbe Ton anders benannt",
          "Ton wird lauter",
          "Rhythmus wird halbiert",
          "Instrument wird gewechselt"
        ],
        "correct": 0,
        "explanation": "Bei einer enharmonischen Verwechslung wird derselbe klingende Ton anders benannt, zum Beispiel fis und ges.",
        "levelId": 8,
        "image": "icon-512.png"
      },
      {
        "question": "In welcher Sprache sind viele klassische Messvertonungen geschrieben?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Latein",
          "Englisch",
          "Norwegisch",
          "Ungarisch"
        ],
        "correct": 0,
        "explanation": "Viele traditionelle Messtexte wie Kyrie, Gloria und Credo sind lateinisch.",
        "levelId": 8
      },
      {
        "question": "Was ist ein Magnificat?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Der Lobgesang Marias",
          "Ein Opernfinale",
          "Ein Tanzsatz",
          "Eine Instrumentalschule"
        ],
        "correct": 0,
        "explanation": "Das Magnificat ist ein biblischer Lobgesang und wurde oft vertont.",
        "levelId": 8
      },
      {
        "question": "Welcher Komponist schrieb das Oratorium „Elias“?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "mendelssohn.jpg",
        "options": [
          "Mendelssohn",
          "Vivaldi",
          "Mahler",
          "Satie"
        ],
        "correct": 0,
        "explanation": "Felix Mendelssohn Bartholdy schrieb das Oratorium „Elias“.",
        "levelId": 8
      },
      {
        "question": "Was ist ein Psalm?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Ein biblischer Gebets- oder Gesangstext",
          "Ein Opernlibretto",
          "Ein Tanzrhythmus",
          "Eine Klavierform"
        ],
        "correct": 0,
        "explanation": "Psalmen sind wichtige Texte in jüdischer und christlicher Musiktradition.",
        "levelId": 8
      },
      {
        "question": "Was meint „gemischter Chor“?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Chor mit Frauen- und Männerstimmen",
          "Chor nur mit Kindern",
          "Chor ohne Dirigent",
          "Chor nur mit Solisten"
        ],
        "correct": 0,
        "explanation": "Ein gemischter Chor umfasst typischerweise Sopran, Alt, Tenor und Bass.",
        "levelId": 8
      },
      {
        "question": "Was bedeutet homophon im Chorsatz?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Die Stimmen bewegen sich rhythmisch weitgehend gemeinsam",
          "Jede Stimme singt unabhängig eine eigene Melodie",
          "Nur der Bass singt",
          "Es gibt keine Harmonie"
        ],
        "correct": 0,
        "explanation": "Homophonie bedeutet, dass die Stimmen meist gemeinsam im gleichen Rhythmus geführt werden.",
        "levelId": 8
      },
      {
        "question": "Welcher Teil gehört typischerweise zur Messe?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Kyrie",
          "Ouvertüre",
          "Scherzo",
          "Kadenz"
        ],
        "correct": 0,
        "explanation": "Das Kyrie ist ein fester Bestandteil vieler Messvertonungen.",
        "levelId": 8
      },
      {
        "question": "Was ist ein Orgelpunkt?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Ein lang gehaltener Ton, oft im Bass",
          "Ein kaputter Orgelknopf",
          "Eine Arie",
          "Ein Taktwechsel"
        ],
        "correct": 0,
        "explanation": "Ein Orgelpunkt bleibt liegen, während sich die Harmonie darüber verändert.",
        "levelId": 8
      },
      {
        "question": "Was ist ein Kanon?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Stimmen setzen nacheinander mit derselben Melodie ein",
          "Alle singen verschiedene Texte gleichzeitig",
          "Ein reines Schlagzeugstück",
          "Ein Schlussakkord"
        ],
        "correct": 0,
        "explanation": "Im Kanon imitieren sich Stimmen zeitversetzt.",
        "levelId": 8
      },
      {
        "question": "Welche Stimme liegt im gemischten Chor meist am tiefsten?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Bass",
          "Sopran",
          "Alt",
          "Tenor"
        ],
        "correct": 0,
        "explanation": "Der Bass ist die tiefste Männerstimme im gemischten Chor.",
        "levelId": 8
      }
    ]
  },
  {
    "id": 9,
    "title": "Formen, Gattungen & Begriffe",
    "description": "Sonate, Sinfonie, Fuge, Variation, Konzert und mehr.",
    "active": true,
    "tier": "learning",
    "difficulty": "mittel-fortgeschritten",
    "defaultCategory": "Formen & Gattungen",
    "questions": [
      {
        "question": "Welche Gattung ist typischerweise ein mehrsätziges Werk für Orchester?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel-fortgeschritten",
        "image": "icon-512.png",
        "options": [
          "Sinfonie",
          "Nocturne",
          "Motette",
          "Arie"
        ],
        "correct": 0,
        "explanation": "Die Sinfonie ist in der Klassik und Romantik meist ein mehrsätziges Werk für Orchester. Typisch sind vier Sätze mit unterschiedlichen Charakteren und Tempi.",
        "levelId": 9
      },
      {
        "question": "Was bezeichnet eine Sonate im klassischen Sinn meistens?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel-fortgeschritten",
        "image": "icon-512.png",
        "options": [
          "Ein mehrsätziges Instrumentalwerk",
          "Ein geistliches Chorwerk",
          "Eine Opernszene",
          "Ein Tanzlied"
        ],
        "correct": 0,
        "explanation": "Eine Sonate ist meist ein mehrsätziges Instrumentalwerk, zum Beispiel für Klavier solo oder für ein Melodieinstrument mit Klavier. Die Sonate wurde besonders in Klassik und Romantik wichtig.",
        "levelId": 9
      },
      {
        "question": "Welche Form arbeitet besonders mit einem Thema, das nacheinander in verschiedenen Stimmen einsetzt?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel-fortgeschritten",
        "image": "icon-512.png",
        "options": [
          "Fuge",
          "Walzer",
          "Nocturne",
          "Ouvertüre"
        ],
        "correct": 0,
        "explanation": "In einer Fuge wird ein Thema nacheinander von verschiedenen Stimmen aufgegriffen und kontrapunktisch verarbeitet. Johann Sebastian Bach gilt als einer der grössten Meister dieser Form.",
        "levelId": 9
      },
      {
        "question": "Was ist eine Variation?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel-fortgeschritten",
        "image": "icon-512.png",
        "options": [
          "Eine veränderte Wiederholung eines Themas",
          "Ein Opernrezitativ",
          "Ein reines Schlagzeugstück",
          "Ein liturgischer Messteil"
        ],
        "correct": 0,
        "explanation": "Bei Variationen wird ein Thema mehrfach wiederholt, aber jeweils verändert. Verändert werden können Melodie, Rhythmus, Harmonie, Tempo, Begleitung oder Charakter.",
        "levelId": 9
      },
      {
        "question": "Was ist ein Konzert im klassischen Sinn?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel-fortgeschritten",
        "image": "icon-512.png",
        "options": [
          "Ein Werk mit solistischem Instrument und Orchester",
          "Ein Werk nur für Chor",
          "Eine Oper ohne Handlung",
          "Eine reine Tanzfolge"
        ],
        "correct": 0,
        "explanation": "Ein Konzert stellt meist ein oder mehrere Soloinstrumente dem Orchester gegenüber. Besonders bekannt sind Klavierkonzerte, Violinkonzerte und die barocken Solokonzerte Vivaldis.",
        "levelId": 9
      },
      {
        "question": "Was meint 'Concerto grosso'?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel-fortgeschritten",
        "image": "icon-512.png",
        "options": [
          "Ein barockes Konzert mit kleiner Solistengruppe und Orchester",
          "Eine romantische Klaviersonate",
          "Eine geistliche Messe",
          "Ein Opernfinale"
        ],
        "correct": 0,
        "explanation": "Im Concerto grosso steht eine kleine Solistengruppe, das Concertino, einem grösseren Ensemble gegenüber. Diese Gattung ist typisch für den Barock.",
        "levelId": 9
      },
      {
        "question": "Welche Gattung ist eine Folge von Tänzen oder tanzartigen Sätzen?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel-fortgeschritten",
        "image": "icon-512.png",
        "options": [
          "Suite",
          "Sinfonische Dichtung",
          "Requiem",
          "Kanon"
        ],
        "correct": 0,
        "explanation": "Eine Suite besteht aus mehreren Tänzen oder tanzartigen Sätzen. Im Barock finden sich häufig Sätze wie Allemande, Courante, Sarabande und Gigue.",
        "levelId": 9
      },
      {
        "question": "Was ist eine Ouvertüre?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel-fortgeschritten",
        "image": "icon-512.png",
        "options": [
          "Ein eröffnendes Instrumentalstück",
          "Ein Schlusschor",
          "Ein geistliches Gemeindelied",
          "Eine Klavieretüde"
        ],
        "correct": 0,
        "explanation": "Eine Ouvertüre ist ein eröffnendes Instrumentalstück, oft zu einer Oper, einem Oratorium oder einem Schauspiel. Manche Ouvertüren wurden später auch als Konzertstücke beliebt.",
        "levelId": 9
      },
      {
        "question": "Was ist der Unterschied zwischen Rezitativ und Arie in der Oper?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "mittel-fortgeschritten",
        "image": "icon-512.png",
        "options": [
          "Das Rezitativ treibt die Handlung voran, die Arie verweilt stärker im Ausdruck",
          "Die Arie ist immer gesprochen",
          "Das Rezitativ ist immer rein instrumental",
          "Es gibt keinen Unterschied"
        ],
        "correct": 0,
        "explanation": "Das Rezitativ ist oft sprachähnlicher und bringt die Handlung voran. Die Arie ist meist melodischer ausgeformt und gibt einer Figur Raum für Gefühl, Reflexion oder virtuosen Ausdruck.",
        "levelId": 9
      },
      {
        "question": "Was ist eine sinfonische Dichtung?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel-fortgeschritten",
        "image": "icon-512.png",
        "options": [
          "Ein einsätziges Orchesterwerk mit aussermusikalischem Programm",
          "Eine Messe für Chor",
          "Eine barocke Tanzsuite",
          "Ein Klavierlied ohne Text"
        ],
        "correct": 0,
        "explanation": "Die sinfonische Dichtung ist ein meist einsätziges Orchesterwerk mit einem literarischen, bildlichen oder philosophischen Programm. Franz Liszt prägte diese Gattung im 19. Jahrhundert besonders stark.",
        "levelId": 9
      },
      {
        "question": "Was macht ein Konzertmeister oder eine Konzertmeisterin im Orchester?",
        "category": "Musikleben & Praxis",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Führt die ersten Violinen und vermittelt zur Leitung",
          "Stimmt nur die Pauken",
          "Schreibt das Programmheft",
          "Verkauft Tickets"
        ],
        "correct": 0,
        "explanation": "Die Konzertmeisterin oder der Konzertmeister führt die ersten Violinen, übernimmt Soli und ist eine wichtige Verbindung zwischen Orchester und Dirigat.",
        "levelId": 9,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „Stimmton A = 440 Hz“?",
        "category": "Musikleben & Praxis",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Referenzton zum Stimmen",
          "Tempoangabe",
          "Lautstärkegrad",
          "Taktart"
        ],
        "correct": 0,
        "explanation": "A = 440 Hz bezeichnet den Referenzton a' mit 440 Schwingungen pro Sekunde.",
        "levelId": 9,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist eine Generalprobe?",
        "category": "Musikleben & Praxis",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Letzte grosse Probe vor der Aufführung",
          "Erste Leseprobe",
          "Einzelunterricht",
          "Publikumsgespräch"
        ],
        "correct": 0,
        "explanation": "Die Generalprobe ist die letzte grosse Probe vor der Aufführung, möglichst nahe am Konzertablauf.",
        "levelId": 9,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „Besetzung“ in der Musikpraxis?",
        "category": "Musikleben & Praxis",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Welche Stimmen/Instrumente benötigt werden",
          "Wie schnell gespielt wird",
          "Wo das Konzert stattfindet",
          "Welche Tonart vorliegt"
        ],
        "correct": 0,
        "explanation": "Die Besetzung beschreibt, welche Stimmen, Instrumente oder Rollen für ein Werk benötigt werden.",
        "levelId": 9,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist eine Kadenz im Solokonzert?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Virtuose solistische Passage",
          "Choreinsatz",
          "Taktwechsel",
          "Pausenordnung"
        ],
        "correct": 0,
        "explanation": "Eine Kadenz ist eine oft virtuose solistische Passage, besonders in Solokonzerten.",
        "levelId": 9,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „vom Blatt spielen“?",
        "category": "Musikleben & Praxis",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Ohne vorheriges Üben direkt lesen und spielen",
          "Auswendig spielen",
          "Nach Gehör transponieren",
          "In halbem Tempo spielen"
        ],
        "correct": 0,
        "explanation": "Vom Blatt spielen bedeutet, Noten direkt beim ersten Lesen zu spielen oder zu singen.",
        "levelId": 9,
        "image": "icon-512.png"
      },
      {
        "question": "Was bezeichnet „Intonation“?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Genauigkeit der Tonhöhe",
          "Lautstärke",
          "Instrumentenfarbe",
          "Sitzordnung"
        ],
        "correct": 0,
        "explanation": "Intonation bezeichnet die Genauigkeit der Tonhöhe, also ob Töne sauber getroffen werden.",
        "levelId": 9,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein Stimmführer im Chor?",
        "category": "Musikleben & Praxis",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Leitende Person einer Stimme",
          "Dirigent des Orchesters",
          "Solist der Oper",
          "Notenwart"
        ],
        "correct": 0,
        "explanation": "Ein Stimmführer oder eine Stimmführerin unterstützt eine Stimmgruppe musikalisch und organisatorisch.",
        "levelId": 9,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein Programmheft?",
        "category": "Musikleben & Praxis",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Begleittext zum Konzert",
          "Notenpult",
          "Probensaal",
          "Metronom"
        ],
        "correct": 0,
        "explanation": "Ein Programmheft enthält Informationen zum Konzertprogramm, zu Werken, Mitwirkenden und Kontext.",
        "levelId": 9,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „Tutti“?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Alle zusammen",
          "Solo",
          "Sehr leise",
          "Ohne Takt"
        ],
        "correct": 0,
        "explanation": "Tutti bedeutet, dass alle oder die gesamte Gruppe spielen oder singen.",
        "levelId": 9,
        "image": "icon-512.png"
      },
      {
        "question": "Welche Taktart hat drei Viertel pro Takt?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "3/4",
          "4/4",
          "6/8",
          "2/2"
        ],
        "correct": 0,
        "explanation": "Der 3/4-Takt hat drei Viertel pro Takt und ist typisch für viele Walzer.",
        "levelId": 9,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „alla breve“?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "meist Zweiertakt mit halber Note als Zähleinheit",
          "extrem langsam",
          "ohne Takt",
          "immer im 3/4-Takt"
        ],
        "correct": 0,
        "explanation": "Alla breve bezeichnet meist einen Zweiertakt, bei dem die halbe Note als Zähleinheit dient.",
        "levelId": 9,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist eine Triole?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "drei Noten im Raum von zwei gleichwertigen Noten",
          "Schlussakkord",
          "Tonartwechsel",
          "Bassfigur"
        ],
        "correct": 0,
        "explanation": "Eine Triole teilt eine normalerweise zweiteilige Zeit in drei gleichmässige Werte.",
        "levelId": 9,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „chromatisch“?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "in Halbtonschritten",
          "nur in Dreiklängen",
          "ohne Rhythmus",
          "sehr leise"
        ],
        "correct": 0,
        "explanation": "Chromatisch bedeutet, dass sich die Musik in Halbtonschritten bewegt oder chromatische Töne verwendet.",
        "levelId": 9,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „diatonisch“?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "innerhalb einer Tonleiter",
          "völlig ohne Tonzentrum",
          "nur Schlagwerk",
          "immer zwölftönig"
        ],
        "correct": 0,
        "explanation": "Diatonisch bedeutet, dass Töne innerhalb eines Tonleitersystems verwendet werden, etwa einer Dur- oder Molltonleiter.",
        "levelId": 9,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „Transposition“?",
        "category": "Musikleben & Praxis",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Übertragung in eine andere Tonhöhe oder Tonart",
          "besonders langsames Spiel",
          "Stimmen ohne Dirigent",
          "Wechsel zur Pause"
        ],
        "correct": 0,
        "explanation": "Transposition bedeutet, Musik in eine andere Tonhöhe oder Tonart zu übertragen.",
        "levelId": 9,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein „Korrepetitor“?",
        "category": "Musikleben & Praxis",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "musikalischer Begleiter und Probenpartner am Klavier",
          "Lichttechniker",
          "Konzertveranstalter",
          "Instrumentenbauer"
        ],
        "correct": 0,
        "explanation": "Ein Korrepetitor begleitet Proben am Klavier und unterstützt musikalisch, besonders in Oper, Gesang und Chor.",
        "levelId": 9,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „Einsingen“ im Chor nicht?",
        "category": "Musikleben & Praxis",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Ein vollständiges Durchsingen des Konzertprogramms",
          "Aktivierung von Körper und Atmung",
          "Vorbereitung von Resonanz und Vokalen",
          "stimmliches Aufwärmen vor der Probe"
        ],
        "correct": 0,
        "explanation": "Einsingen ist nicht das komplette Durchsingen des Programms, sondern die stimmliche, körperliche und musikalische Vorbereitung.",
        "levelId": 9,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist eine „Stimmprobe“?",
        "category": "Musikleben & Praxis",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Probe einer einzelnen Chor- oder Instrumentengruppe",
          "öffentliche Aufführung",
          "Apéro nach dem Konzert",
          "Solokadenz"
        ],
        "correct": 0,
        "explanation": "Eine Stimmprobe arbeitet gezielt mit einer einzelnen Stimme oder Gruppe, etwa Sopran, Alt, Tenor oder Bass.",
        "levelId": 9,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein sinnvoller Zweck eines Probenplans?",
        "category": "Musikleben & Praxis",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Prioritäten, Zeit und schwierige Stellen gezielt zu strukturieren",
          "die musikalische Interpretation endgültig zu ersetzen",
          "jede Probe exakt mechanisch gleich ablaufen zu lassen",
          "nur die Pausenzeiten festzulegen"
        ],
        "correct": 0,
        "explanation": "Ein guter Probenplan hilft, Zeit, Prioritäten und schwierige Stellen sinnvoll zu strukturieren, ersetzt aber nicht die musikalische Arbeit.",
        "levelId": 9,
        "image": "icon-512.png"
      },
      {
        "question": "Wie nennt man eine klassische Form mit Exposition, Durchführung und Reprise?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Sonatenhauptsatzform",
          "Rondo",
          "Fuge",
          "Choral"
        ],
        "correct": 0,
        "explanation": "Die Sonatenhauptsatzform ist zentral für viele Sätze der Klassik.",
        "levelId": 9
      },
      {
        "question": "Wie nennt man ein Orchesterwerk, das eine Geschichte, ein Bild oder eine Idee musikalisch darstellt?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Sinfonische Dichtung",
          "Messe",
          "Kantate",
          "Etüde"
        ],
        "correct": 0,
        "explanation": "Die sinfonische Dichtung ist ein programmatisches Orchesterwerk.",
        "levelId": 9
      },
      {
        "question": "Welche Form ist typisch, wenn ein Hauptthema immer wiederkehrt und von Zwischenteilen unterbrochen wird?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Rondo",
          "Rezitativ",
          "Motette",
          "Kadenz"
        ],
        "correct": 0,
        "explanation": "Im Rondo kehrt ein Hauptthema mehrfach wieder.",
        "levelId": 9
      },
      {
        "question": "Wie nennt man eine Folge von stilisierten Tänzen, besonders im Barock?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Suite",
          "Sinfonie",
          "Oper",
          "Requiem"
        ],
        "correct": 0,
        "explanation": "Eine Suite besteht oft aus mehreren Tanzsätzen.",
        "levelId": 9
      },
      {
        "question": "Welche Gattung ist im Barock oft für zwei Oberstimmen und Basso continuo geschrieben?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Triosonate",
          "Klavierlied",
          "Sinfonie",
          "Madrigal"
        ],
        "correct": 0,
        "explanation": "Die Triosonate war eine wichtige Kammermusikgattung des Barock.",
        "levelId": 9
      },
      {
        "question": "Wie nennt man ein virtuoses Übungs- oder Vortragsstück, oft für Klavier?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Etüde",
          "Passion",
          "Messe",
          "Ouvertüre"
        ],
        "correct": 0,
        "explanation": "Eine Etüde trainiert technische Fähigkeiten und kann zugleich Konzertstück sein.",
        "levelId": 9
      },
      {
        "question": "Welche Gattung bezeichnet ein mehrstimmiges weltliches Vokalstück, besonders in Renaissance und Frühbarock?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Madrigal",
          "Requiem",
          "Sonate",
          "Sinfonie"
        ],
        "correct": 0,
        "explanation": "Das Madrigal ist eine wichtige weltliche Vokalgattung.",
        "levelId": 9
      },
      {
        "question": "Wie nennt man ein freies, oft improvisatorisch wirkendes Instrumentalstück?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Fantasie",
          "Arie",
          "Motette",
          "Choral"
        ],
        "correct": 0,
        "explanation": "Eine Fantasie wirkt oft freier als streng gebaute Formen.",
        "levelId": 9
      },
      {
        "question": "Welche Gattung ist ein kurzes lyrisches Klavierstück, besonders in der Romantik?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Charakterstück",
          "Oratorium",
          "Messe",
          "Rezitativ"
        ],
        "correct": 0,
        "explanation": "Charakterstücke drücken oft eine bestimmte Stimmung oder Szene aus.",
        "levelId": 9
      },
      {
        "question": "Was ist ein Streichquartett?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Zwei Violinen, Viola und Violoncello",
          "Vier Trompeten",
          "Chor mit Orgel",
          "Klaviertrio plus Flöte"
        ],
        "correct": 0,
        "explanation": "Das klassische Streichquartett besteht aus zwei Violinen, Viola und Cello.",
        "levelId": 9
      }
    ]
  },
  {
    "id": 10,
    "title": "Boss-Level",
    "description": "Fies, aber fair. Die grosse Mischung aus Werken, Epochen, Gattungen und Stil.",
    "active": true,
    "tier": "learning",
    "difficulty": "boss",
    "defaultCategory": "Werkkunde",
    "questions": [
      {
        "question": "Welcher Komponist steht besonders am Übergang von Renaissance zu Barock und ist für die frühe Oper wichtig?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "boss",
        "image": "monteverdi.jpg",
        "options": [
          "Claudio Monteverdi",
          "Giovanni Pierluigi da Palestrina",
          "Joseph Haydn",
          "Frédéric Chopin"
        ],
        "correct": 0,
        "explanation": "Monteverdi steht genau an dieser stilgeschichtlichen Schwelle. Mit Werken wie L'Orfeo wurde er zu einer Schlüsselfigur der frühen Oper und des Frühbarock.",
        "levelId": 10
      },
      {
        "question": "Welches Werk gilt als Schlüsselwerk der musikalischen Moderne und wurde 1913 in Paris uraufgeführt?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "boss",
        "image": "stravinsky.jpg",
        "options": [
          "Le Sacre du printemps",
          "Die Moldau",
          "Ein deutsches Requiem",
          "Die vier Jahreszeiten"
        ],
        "correct": 0,
        "explanation": "Le Sacre du printemps von Igor Strawinsky wurde 1913 uraufgeführt und gilt wegen Rhythmik, Harmonik und Klangsprache als ein Schlüsselwerk der Moderne.",
        "levelId": 10
      },
      {
        "question": "Welche Kombination ist korrekt?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "boss",
        "image": "bach.jpg",
        "options": [
          "Bach – Barock – Matthäus-Passion",
          "Mozart – Romantik – Boléro",
          "Verdi – Renaissance – Motette",
          "Debussy – Barock – Messiah"
        ],
        "correct": 0,
        "explanation": "Johann Sebastian Bach gehört zum Barock, und die Matthäus-Passion ist eines seiner bedeutendsten geistlichen Werke.",
        "levelId": 10
      },
      {
        "question": "Welche Aussage beschreibt eine Fuge am besten?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "boss",
        "image": "icon-512.png",
        "options": [
          "Ein Thema wird nacheinander in verschiedenen Stimmen imitiert und verarbeitet",
          "Ein Solo singt eine Opernarie",
          "Ein Orchester spielt eine Tanzfolge",
          "Ein Chor singt ohne Text"
        ],
        "correct": 0,
        "explanation": "Die Fuge ist eine kontrapunktische Form. Ein Thema erscheint nacheinander in verschiedenen Stimmen und wird kunstvoll weiterverarbeitet.",
        "levelId": 10
      },
      {
        "question": "Welche Komponisten gehören zur Zweiten Wiener Schule?",
        "category": "Epochen & Stil",
        "tier": "learning",
        "difficulty": "boss",
        "image": "schoenberg.jpg",
        "options": [
          "Schönberg, Berg und Webern",
          "Haydn, Mozart und Beethoven",
          "Bach, Händel und Vivaldi",
          "Verdi, Puccini und Rossini"
        ],
        "correct": 0,
        "explanation": "Die Zweite Wiener Schule umfasst vor allem Arnold Schönberg, Alban Berg und Anton Webern. Sie ist zentral für Atonalität, Expressionismus und Zwölftontechnik.",
        "levelId": 10
      },
      {
        "question": "Welche Gattung ist typischerweise konzertant, oft geistlich und nicht szenisch gespielt?",
        "category": "Oper & Musiktheater",
        "tier": "learning",
        "difficulty": "boss",
        "image": "icon-512.png",
        "options": [
          "Oratorium",
          "Oper",
          "Ballett",
          "Sinfonie"
        ],
        "correct": 0,
        "explanation": "Das Oratorium ist meist ein grosses Werk für Solisten, Chor und Orchester. Im Unterschied zur Oper wird es normalerweise nicht szenisch aufgeführt.",
        "levelId": 10
      },
      {
        "question": "Welche Zuordnung ist falsch?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "boss",
        "image": "ravel.jpg",
        "options": [
          "Ravel – Renaissance",
          "Debussy – Impressionismus",
          "Schönberg – Zwölftontechnik",
          "Strawinsky – Moderne"
        ],
        "correct": 0,
        "explanation": "Ravel gehört nicht zur Renaissance, sondern zur Musik des späten 19. und frühen 20. Jahrhunderts. Er wird oft im Umfeld von Impressionismus und Moderne genannt.",
        "levelId": 10
      },
      {
        "question": "Welches Werk gehört besonders zur tschechischen Nationalmusik?",
        "category": "Werkkunde",
        "tier": "learning",
        "difficulty": "boss",
        "image": "smetana.jpg",
        "options": [
          "Die Moldau",
          "Finlandia",
          "Peer Gynt",
          "Enigma Variations"
        ],
        "correct": 0,
        "explanation": "Die Moldau von Bedřich Smetana ist Teil des Zyklus Mein Vaterland und wurde zu einem Symbol tschechischer Nationalmusik.",
        "levelId": 10
      },
      {
        "question": "Welche Aussage zu einem Requiem ist richtig?",
        "category": "Kirchenmusik & Chor",
        "tier": "learning",
        "difficulty": "boss",
        "image": "mozart.jpg",
        "options": [
          "Es ist eine musikalische Vertonung der Totenmesse",
          "Es ist immer eine komische Oper",
          "Es ist ein Klavierstück ohne Text",
          "Es ist eine barocke Tanzsuite"
        ],
        "correct": 0,
        "explanation": "Ein Requiem ist eine Vertonung der Totenmesse. Bekannte Requien stammen unter anderem von Mozart, Verdi, Fauré, Brahms in freierer Form und Britten.",
        "levelId": 10
      },
      {
        "question": "Welche Kombination passt am besten zum Begriff 'sinfonische Dichtung'?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "boss",
        "image": "icon-512.png",
        "options": [
          "Programmmusik – Orchester – 19. Jahrhundert",
          "A-cappella – Messe – Renaissance",
          "Zwölftonreihe – Barock – Generalbass",
          "Opera buffa – Fuge – Choral"
        ],
        "correct": 0,
        "explanation": "Die sinfonische Dichtung ist meist ein einsätziges Orchesterwerk mit aussermusikalischem Programm. Franz Liszt prägte diese Gattung im 19. Jahrhundert.",
        "levelId": 10
      },
      {
        "question": "Was bedeutet „homophon“?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Eine Hauptstimme mit Begleitung",
          "Viele gleichberechtigte Stimmen",
          "Ohne Rhythmus",
          "Nur Schlagwerk"
        ],
        "correct": 0,
        "explanation": "Homophonie bedeutet meist: Eine Hauptstimme steht im Vordergrund, andere Stimmen begleiten rhythmisch oder harmonisch.",
        "levelId": 10,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „polyphon“?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Mehrere selbständige Stimmen",
          "Nur eine Melodie ohne Begleitung",
          "Sehr laut",
          "Tiefer als notiert"
        ],
        "correct": 0,
        "explanation": "Polyphonie bedeutet Mehrstimmigkeit mit mehreren relativ selbständigen Stimmen.",
        "levelId": 10,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein Ostinato?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Wiederholtes musikalisches Muster",
          "Schlussakkord",
          "Tempoangabe",
          "Gesangsregister"
        ],
        "correct": 0,
        "explanation": "Ein Ostinato ist ein wiederholtes rhythmisches, melodisches oder harmonisches Muster.",
        "levelId": 10,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein Leitmotiv?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Wiedererkennbares Motiv für Figur/Idee",
          "Taktstock",
          "Choraufstellung",
          "Stimmpfeife"
        ],
        "correct": 0,
        "explanation": "Ein Leitmotiv ist ein wiedererkennbares Motiv, das mit einer Figur, Idee, Situation oder einem Symbol verbunden sein kann.",
        "levelId": 10,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „Klangfarbe“?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Charakter des Klangs",
          "Notenfarbe im Druck",
          "Lautstärke",
          "Tonart"
        ],
        "correct": 0,
        "explanation": "Klangfarbe beschreibt den charakteristischen Klang eines Instruments, einer Stimme oder einer Kombination von Klängen.",
        "levelId": 10,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein Thema in der Musik?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "Prägnanter musikalischer Gedanke",
          "Pausenregel",
          "Saalordnung",
          "Schlussapplaus"
        ],
        "correct": 0,
        "explanation": "Ein Thema ist ein prägnanter musikalischer Gedanke, der in einem Stück wiederkehren, variiert oder verarbeitet werden kann.",
        "levelId": 10,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist eine Sequenz?",
        "category": "Musiktheorie-Basics",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Wiederholung eines Motivs auf anderer Tonhöhe",
          "Schluss eines Konzerts",
          "Instrumentenwechsel",
          "Sehr schneller Lauf"
        ],
        "correct": 0,
        "explanation": "Eine Sequenz wiederholt ein Motiv oder Modell auf einer anderen Tonstufe.",
        "levelId": 10,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „konsonant“ im musikalischen Sinn?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Ruhig/zusammenklingend wirkend",
          "Immer laut",
          "Sehr schnell",
          "Ohne Rhythmus"
        ],
        "correct": 0,
        "explanation": "Konsonanz wird oft als relativ ruhig, stabil oder spannungsarm empfunden.",
        "levelId": 10,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „dissonant“ im musikalischen Sinn?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Spannungsreich/reibend wirkend",
          "Immer leise",
          "Einstimmig",
          "Tonlos"
        ],
        "correct": 0,
        "explanation": "Dissonanz wirkt spannungsreich oder reibend und verlangt je nach Stil oft nach Auflösung.",
        "levelId": 10,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein Cluster?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "Dicht nebeneinanderliegende Töne",
          "Barocker Tanz",
          "Opernarie",
          "Orgelregister"
        ],
        "correct": 0,
        "explanation": "Ein Cluster besteht aus dicht nebeneinanderliegenden Tönen, häufig Sekunden oder chromatisch benachbarten Tönen.",
        "levelId": 10,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „Tremolo“?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "schnelle Wiederholung oder Wechselbewegung",
          "plötzliches Schweigen",
          "tiefe Bassnote",
          "Tonartwechsel"
        ],
        "correct": 0,
        "explanation": "Tremolo bezeichnet eine schnelle Wiederholung eines Tons oder einen schnellen Wechsel zwischen Tönen.",
        "levelId": 10,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „Vibrato“?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "leichte Tonhöhenschwankung zur Klangbelebung",
          "starrer Ton ohne Bewegung",
          "immer lauter werden",
          "schneller werden"
        ],
        "correct": 0,
        "explanation": "Vibrato ist eine leichte Tonhöhenschwankung, die Klang und Ausdruck beleben kann.",
        "levelId": 10,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein „Glissando“?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "gleitende Bewegung zwischen Tönen",
          "strenger Kanon",
          "Orgelregister",
          "Schlussakkord"
        ],
        "correct": 0,
        "explanation": "Ein Glissando ist eine gleitende Bewegung zwischen Tönen.",
        "levelId": 10,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „sforzato“?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "plötzlich betont",
          "sehr leise",
          "ohne Begleitung",
          "langsamer werdend"
        ],
        "correct": 0,
        "explanation": "Sforzato bedeutet, einen Ton oder Akkord plötzlich hervorzuheben oder zu akzentuieren.",
        "levelId": 10,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „subito piano“?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "plötzlich leise",
          "allmählich lauter",
          "sehr schnell",
          "mit Dämpfer"
        ],
        "correct": 0,
        "explanation": "Subito piano bedeutet plötzlich leise.",
        "levelId": 10,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „rubato“?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "freier Umgang mit Tempo",
          "völlig gleichmässiges Tempo",
          "nur laut spielen",
          "ohne Tonhöhe"
        ],
        "correct": 0,
        "explanation": "Rubato bedeutet einen freien, ausdrucksvollen Umgang mit dem Tempo, ohne den musikalischen Zusammenhang zu verlieren.",
        "levelId": 10,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist eine „Klangfläche“?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "ausgedehnter, flächiger Klangzustand",
          "schneller Lauf",
          "Opernfigur",
          "Kadenzformel"
        ],
        "correct": 0,
        "explanation": "Eine Klangfläche ist ein ausgedehnter, oft statischer oder schwebender Klangzustand.",
        "levelId": 10,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „monophon“?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "einstimmig",
          "mehrchörig",
          "nur mit Orchester",
          "besonders schnell"
        ],
        "correct": 0,
        "explanation": "Monophon bedeutet einstimmig: Es erklingt eine einzelne Melodielinie ohne selbständige Gegenstimmen.",
        "levelId": 10,
        "image": "icon-512.png"
      },
      {
        "question": "Was ist ein „Kanon“?",
        "category": "Formen & Gattungen",
        "tier": "learning",
        "difficulty": "mittel",
        "options": [
          "versetzte Nachahmung derselben Melodie",
          "Opernfinale",
          "Schlaginstrument",
          "Taktwechsel"
        ],
        "correct": 0,
        "explanation": "Im Kanon setzt dieselbe Melodie zeitlich versetzt in verschiedenen Stimmen ein.",
        "levelId": 10,
        "image": "icon-512.png"
      },
      {
        "question": "Was bedeutet „Unisono“?",
        "category": "Hören & Begriffe",
        "tier": "learning",
        "difficulty": "leicht",
        "options": [
          "alle singen oder spielen dieselbe Tonhöhe/Melodie",
          "jeder spielt etwas anderes",
          "nur Schlagwerk",
          "ohne Tempo"
        ],
        "correct": 0,
        "explanation": "Unisono bedeutet, dass mehrere Stimmen oder Instrumente dieselbe Melodie beziehungsweise dieselbe Tonhöhe ausführen.",
        "levelId": 10,
        "image": "icon-512.png"
      },
      {
        "question": "Welches Instrument gehört zu den Holzbläsern?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Oboe",
          "Trompete",
          "Pauke",
          "Violine"
        ],
        "correct": 0,
        "explanation": "Die Oboe gehört zur Familie der Holzblasinstrumente.",
        "levelId": 10
      },
      {
        "question": "Welches Instrument gehört zu den Blechbläsern?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Horn",
          "Klarinette",
          "Fagott",
          "Flöte"
        ],
        "correct": 0,
        "explanation": "Das Horn gehört zu den Blechblasinstrumenten.",
        "levelId": 10
      },
      {
        "question": "Welches Instrument ist das tiefste Streichinstrument im Orchester?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Kontrabass",
          "Viola",
          "Violine",
          "Harfe"
        ],
        "correct": 0,
        "explanation": "Der Kontrabass ist das tiefste reguläre Streichinstrument im Orchester.",
        "levelId": 10
      },
      {
        "question": "Welche Instrumente bilden ein klassisches Klaviertrio?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Klavier, Violine, Violoncello",
          "Klavier, Flöte, Trompete",
          "Drei Klaviere",
          "Violine, Viola, Cello"
        ],
        "correct": 0,
        "explanation": "Das klassische Klaviertrio besteht aus Klavier, Violine und Cello.",
        "levelId": 10
      },
      {
        "question": "Welche Stimme ist höher: Tenor oder Bass?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Tenor",
          "Bass",
          "beide gleich",
          "kommt nie vor"
        ],
        "correct": 0,
        "explanation": "Der Tenor liegt höher als der Bass.",
        "levelId": 10
      },
      {
        "question": "Welches Instrument verwendet ein Doppelrohrblatt?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Oboe",
          "Klarinette",
          "Trompete",
          "Posaune"
        ],
        "correct": 0,
        "explanation": "Die Oboe wird mit einem Doppelrohrblatt gespielt.",
        "levelId": 10
      },
      {
        "question": "Welches Instrument ist ein Tasteninstrument?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Klavier",
          "Fagott",
          "Viola",
          "Horn"
        ],
        "correct": 0,
        "explanation": "Das Klavier wird über Tasten gespielt.",
        "levelId": 10
      },
      {
        "question": "Welche Gruppe sitzt im Orchester meist vorne?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Streicher",
          "Schlagzeug",
          "Hörner",
          "Posaunen"
        ],
        "correct": 0,
        "explanation": "In der klassischen Orchesteraufstellung sitzen die Streicher meist vorne.",
        "levelId": 10
      },
      {
        "question": "Was bedeutet „Kammermusik“?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Musik für kleine Besetzungen",
          "Musik nur für Kirchen",
          "Musik nur mit Schlagzeug",
          "Musik für Stadionkonzerte"
        ],
        "correct": 0,
        "explanation": "Kammermusik ist Musik für kleinere Ensembles.",
        "levelId": 10
      },
      {
        "question": "Welches Instrument gehört zur Schlagwerkgruppe?",
        "category": "Instrumente & Besetzungen",
        "tier": "learning",
        "difficulty": "leicht",
        "image": "icon-512.png",
        "options": [
          "Pauke",
          "Oboe",
          "Bratsche",
          "Kontrabass"
        ],
        "correct": 0,
        "explanation": "Die Pauke gehört zum Schlagwerk.",
        "levelId": 10
      }
    ]
  }
];
