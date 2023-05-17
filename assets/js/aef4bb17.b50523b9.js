"use strict";(self.webpackChunkevcc_docs=self.webpackChunkevcc_docs||[]).push([[8840],{9869:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=t(7462),r=(t(7294),t(3905));const i={title:"Version 0.111",authors:["naltatis"],tags:["release"],hide_table_of_contents:!1},l=void 0,s={permalink:"/blog/2023/01/11/release-111",editUrl:"https://github.com/evcc-io/docs/tree/main/blog/2023-01-11/release-111.md",source:"@site/blog/2023-01-11/release-111.md",title:"Version 0.111",description:"evcc v0.111",date:"2023-01-11T00:00:00.000Z",formattedDate:"11. Januar 2023",tags:[{label:"release",permalink:"/blog/tags/release"}],readingTime:2.525,hasTruncateMarker:!1,authors:[{name:"Michael Geers",title:"Core-Team, UI",url:"https://github.com/naltatis",imageURL:"https://github.com/naltatis.png",key:"naltatis"}],frontMatter:{title:"Version 0.111",authors:["naltatis"],tags:["release"],hide_table_of_contents:!1},prevItem:{title:"evcc auf dem 19. Linux Infotag",permalink:"/blog/2023/05/17/linux-infotag-talk"},nextItem:{title:"Sponsoring und Umz\xfcge",permalink:"/blog/2022/11/26/one-time-sponsoring"}},u={authorsImageUrls:[void 0]},d=[{value:"\ud83e\uddde\u200d\u2642\ufe0f Neuer Ladeplaner: Erneuerbaren Netzstrom nutzen",id:"\ufe0f-neuer-ladeplaner-erneuerbaren-netzstrom-nutzen",level:2},{value:"\ud83d\udcc8 B\xf6rsenpreise mit awattar und Tibber",id:"-b\xf6rsenpreise-mit-awattar-und-tibber",level:3},{value:"\ud83d\udcca Manuelle Zeittarife",id:"-manuelle-zeittarife",level:3},{value:"\ud83c\udf31 CO\u2082-Daten von Gr\xfcnStromIndex und ElectricityMap",id:"-co-daten-von-gr\xfcnstromindex-und-electricitymap",level:3},{value:"Ausblick",id:"ausblick",level:2},{value:"Weitere neue Funktionen",id:"weitere-neue-funktionen",level:2}],o={toc:d},c="wrapper";function p(e){let{components:n,...i}=e;return(0,r.kt)(c,(0,a.Z)({},o,i,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"evcc v0.111",src:t(1058).Z,width:"3686",height:"1024"})),(0,r.kt)("p",null,"P\xfcnktlich am 11.1. haben wir mit dem Release 0.111 wieder einige neue Funktionen am Start die wir euch hier kurz vorstellen m\xf6chten."),(0,r.kt)("h2",{id:"\ufe0f-neuer-ladeplaner-erneuerbaren-netzstrom-nutzen"},"\ud83e\uddde\u200d\u2642\ufe0f Neuer Ladeplaner: Erneuerbaren Netzstrom nutzen"),(0,r.kt)("p",null,"Die Zielladenfunktion gibt es in evcc schon seit einiger Zeit. Damit kannst du eine Zielzeit definieren zu der das verbundene Fahrzeug einen bestimmten Ladestand erreichen soll. Die Funktion ist bspw. praktisch um den Wagen vor l\xe4ngeren Fahrten p\xfcnktlich zur Abfahrt aufzuladen."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Zielladen",src:t(9360).Z,width:"1078",height:"760"})),(0,r.kt)("p",null,"Die bisherige Ladestrategie war relativ simpel: Die Ladung wird m\xf6glichst sp\xe4t gestartet, sodass der Akku p\xfcnktlich zur Abfahrt den gew\xfcnschten Stand erreicht hat. Das schont den Akku da er nicht lange auf hohen Ladest\xe4nden geparkt wird."),(0,r.kt)("p",null,"Mit diesem Release wird der Ladeplaner intelligenter und bezieht dynamische Energiepreise und CO\u2082-Daten mit ein. Damit wird die Ladung auf Zeitfenster geplant in denen besonders viel erneuerbarer Strom im Netz ist. Das spart Geld, entlastet das Stromnetz und reduziert den Bedarf an fossilien Energietr\xe4gern."),(0,r.kt)("h3",{id:"-b\xf6rsenpreise-mit-awattar-und-tibber"},"\ud83d\udcc8 B\xf6rsenpreise mit awattar und Tibber"),(0,r.kt)("p",null,"Die stundenabh\xe4ngigen Tarife von awattar und Tibber haben wir schon l\xe4nger angebunden. Bislang hatten wir aber nur eine einfache Steuerung, die das Laden unter einem vorher zu konfigurierenden Strompreis freigibt (",(0,r.kt)("inlineCode",{parentName:"p"},"cheap"),")."),(0,r.kt)("p",null,"Jetzt werden die st\xfcndlichen Preise auch in der Ladeplanung verwendet und das Auto l\xe4dt dann wenn der Netzstrom besonders g\xfcnstig ist."),(0,r.kt)("p",null,"Konfiguration f\xfcr awattar"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"tariffs:\n  grid:\n    type: awattar\n    region: de # or at\n")),(0,r.kt)("p",null,"Konfiguration f\xfcr Tibber"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'tariffs:\n  grid:\n    type: tibber\n    token: "476...963a4" # access token\n')),(0,r.kt)("h3",{id:"-manuelle-zeittarife"},"\ud83d\udcca Manuelle Zeittarife"),(0,r.kt)("p",null,"Es ist nun auch m\xf6glich Zeittarife zu hinterlegen. Hier eine Beispielkonfiguration f\xfcr g\xfcnstige Energie zu Nachtzeiten und noch g\xfcnstigere Energie am Wochenende:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"tariffs:\n  grid:\n    type: fixed\n    price: 0.294 # EUR/kWh\n    zones:\n      - days: Mo-Fr\n        hours: 2-5\n        price: 0.2 # EUR/kWh\n      - days: Sa,So\n        price: 0.15 # EUR/kWh\n")),(0,r.kt)("p",null,"Auch diese Preisdaten flie\xdfen in den neuen Planungsalgorithmus mit ein."),(0,r.kt)("h3",{id:"-co-daten-von-gr\xfcnstromindex-und-electricitymap"},"\ud83c\udf31 CO\u2082-Daten von Gr\xfcnStromIndex und ElectricityMap"),(0,r.kt)("p",null,"Wer keinen dynamischen Stromtarif hat kann dennoch klimaschonen Laden. Daf\xfcr binden wir jetzt CO\u2082-Daten ein. Aktuell haben wir zwei Quellen implementiert. Wir sind aber offen f\xfcr weitere Vorschl\xe4ge."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://gruenstromindex.de"},"Gr\xfcnStromIndex")," liefert regionale Vorhersagen \xfcber die Sauberkeit des Netzstroms f\xfcr Deutschland. Du musst lediglich deine Postleitzahl hinterlegen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"planner:\n  type: gr\xfcnstromindex\n  zip: 12349\n")),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://app.electricitymaps.com/map"},"Electricity Map")," liefert weltweite Vorhersagen. F\xfcr die Nutzung in evcc ben\xf6tigt Ihr ein Token und den URL Pr\xe4fix. Diese Daten bekommst du mit dem ",(0,r.kt)("a",{parentName:"p",href:"https://api-portal.electricitymaps.com/"},"kostenlosen Account im API portal"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"planner:\n  type: electricitymaps\n  uri: https://api-access.electricitymaps.com/2w...1g/\n  token: Rp...D2\n  zone: DE\n")),(0,r.kt)("h2",{id:"ausblick"},"Ausblick"),(0,r.kt)("p",null,"F\xfcr eines der n\xe4chsten Releases arbeiten wir an einer visuellen Aufbereitung des Ladeplans. Dann kannst du auch die vom Algorithmus errechneten Zeitfenster und die konkrete Kosten- oder CO\u2082 Ersparnis sehen."),(0,r.kt)("h2",{id:"weitere-neue-funktionen"},"Weitere neue Funktionen"),(0,r.kt)("p",null,"Dieses Release enth\xe4lt neben den \xfcblichen kleinen Verbessungen und Bugfixes auch noch ein paar weitere neue Funktionen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd0b\ud83e\udeab Bessere Unterst\xfctzung von mehreren Hausakkus ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/pull/5598"},"#5598")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udf1e Unterst\xfctzung f\xfcr FoxESS ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/pull/5721"},"#5721")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\udd0c Unterst\xfctzung f\xfcr den Tesla Wall Connector 3 ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/pull/5341"},"#5341")),(0,r.kt)("li",{parentName:"ul"},"\ud83d\ude99 Unterst\xfctzung f\xfcr Volvo Fahrzeuge ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/evcc-io/evcc/pull/5681"},"#5681")),(0,r.kt)("li",{parentName:"ul"},"\ud83c\udff3\ufe0f\u200d\ud83c\udf08 Drei neue UI Sprachen")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Danke f\xfcr eure Unterst\xfctzung!"),(0,r.kt)("br",null),"\nevcc Core Team",(0,r.kt)("br",null),"\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/andig"},"@andig"),", ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/premultiply"},"@premultiply")," und ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/naltatis"},"@naltatis")))}p.isMDXComponent=!0},1058:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/banner-evcc-release-111-00a137beebfb96fc1c00a5438869bb40.webp"},9360:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/zielladen-521c71459d2fbbf235d2cf1ef9309df5.webp"}}]);