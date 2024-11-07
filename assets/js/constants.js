const introduction = [
    "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi. Proin porttitor, orci nec nonummy molestie, enim est eleifend mi, non fermentum diam nisl sit amet erat",
]


const experiences = [
    {
        title: "Data Analyst / Développeur Python",
        company: "Kooling.io (EN)",
        date: "Septembre 2024 - aujourd'hui",
        tasks: [
            "Analyse de tracking GPS & développement d'algorithmes de détection automatique de mode de transport",
            "Déploiement de plusieurs tableaux de bord de visualisation de données et analyses automatisées paramétrées (STDBSCAN, segmentation, tracking features, évaluation d'algorithmes)",
        ],
        description: "",
        stack: ["Pandas", "Dash", "Plotly", "Postgresql", "C++", "MicroPython", "Scikit-Learn"],
    },
    {
        title: "Développeur Python",
        company: "Winslow McD (US)",
        date: "Novembre 2024",
        tasks: [
            "Développement d'un dashboard de consultation d'articles historiques",
            "Timelines par auteurs, cartographie des articles, édition des données en ligne"
        ],
        stack: ["Pandas", "Dash", "Plotly", "Docker", "GCP Cloud Run"],
    },
    {
        title: "Développeur Python / Data Analyst",
        company: "KXI Wildertech (CAN)",
        date: "Juin - Juillet 2024",
        tasks: [
            "Analyse automatisée de de séries temporelles issues d'une batterie de capteurs (format MDF4) implentés dans des véhicules de tests",
            "Traitement de signal automatisé (détection et caractérisation des virages, compressions de suspensions limites, positionnement GPS des détections, tangage, etc.)",
            "Déploiement d'une application web permettant un reporting automatisé",
        ],
        description: "",
        stack: ["Pandas", "Flask", "Plotly", "Leaflet", "Jupyter", "Matplotlib", "GCP", "BigQuery"],
    },
    {
        title: "Software engineer",
        company: "Solve42 GmBH (DE)",
        date: "Juillet - Août 2024",
        tasks: [
            "Développement de fonctionnalités diverses d'une application RAG/LLM avec FastAPI",
            "Application des principes SOLID",
            "Développement des tests unitaires avec pyTest"
        ],
        description: "",
        stack: ["FastAPI", "pytest", "Docker", "PostgreSQL", "Chroma"],
    },
    {
        title: "Data Analyst",
        company: "Nextérité (FR)",
        date: "Avril - Juin 2024",
        tasks: [
            "Traitement, analyse et visualisation de trackings GPS issues de données MPD (Mobile Positionning Data) pour définir les tendances de mobilité dans une grande ville française",
            "Déploiement de dashboards de visualisation de données et d'analyses automatisées",
            "Développement d'algorithmes de détection de mode de transport",
            "Littérature scientifique : <a href='allo'>Paria Sadeghian</a> et Yu Zheng"
        ],
        description: "",
        stack: ["GeoPandas", "Leaflet", "Javascript", "OpenStreetMap", "GeoPy", "Scikit-Learn", "Flask", "Docker", "Dash", "Plotly", "GCP Cloud Run", "GCP BigQuery"],
    },
    {
        title: "Web scrapping",
        company: "Stratalis Ltd (FR)",
        date: "Avril 2024",
        tasks: [
            "Rotation de proxys, interceptions AJAX",
        ],
        description: "",
        stack: ["Scrapy", "BeautifulSoup", "Selenium", "TypeScript"],
    },
    {
        title: "Développeur Python",
        company: "VIP Jet Catering (FR)",
        date: "Avril 2024",
        tasks: [
            "Dashboard d'analyse des ventes",
        ],
        stack: ["Pandas", "Dash", "Plotly", "Docker", "GCP Cloud Run"],
    },
    {
        title: "Professeur de mathématiques certifié",
        company: "Education Nationale, Académie de Lille",
        date: "2015 - 2023",
        // description: "",
        tasks: [
            "Enseignant de mathématiques et sciences physiques en lycée professionnel",
            "Elèves en scolarité adaptée (classes de CAP, 3PM, post-ULIS/SEGPA, Allophones)",
            "Développement d’une application web d’entraînement aux calculs. (ZapMaths)",
            "Apprentissage de la programmation en Python & Arduino",
            "Création d'une chaîne YouTube de tutoriels de mathématiques",
        ],
        hr: true,
    },
    {
        title: "Ingénieur de recherche au CNRS, opto-électronique et imagerie TeraHertz",
        company: "IEMN : Institut d’Electronique, de Micro-électronique et Nanotechnologies, Villeneuve-d’Ascq",
        date: "2013 - 2015",
        description: "",
        hr: true,
        tasks: [
            "Mise en place et programmation de bancs de mesures caractérisation de dispositifs THz",
            "Imagerie THz, cartographies spectrales de wafers"
        ],
        stack: ["LabView", "Matlab", "Python", "Electronique hyperfréquences", "Opto-électronique THz", "Métamatériaux"],
    }
]


const diplomes = [
    {
        title: "Diplôme d'ingénieur en instrumentation scientifique",
        school: "Polytech'Lille",
        date: "2013",
        description: undefined,
        stack: ["Optique", "Electronique", "Photonique", "Traitement du signal", "Mesure", "Programmation", "Analyse de données", "Statistiques"],
        tasks: [],
        hr: true,
    },
    {
        title: "Master 2 recherche en micro-électronique et nanotechnologies",
        school: "Université de Lille",
        date: "2013",
        description: undefined,
        stack: ["Littérature & bibliographie scientifique", "Opto-électronique", "Semi-conducteurs", "Hyperfréquences", "Nanotechnologies"],
        tasks: [],
        hr: true,
    },
    {
        title: "DUT Mesures Physiques",
        school: "IUT A de Lille",
        date: "2010",
        description: undefined,
        tasks: [],
        hr: true,
    },
    {
        title: "1ère année de Licence de Mathématiques",
        school: "Université de Lille",
        date: "2006",
        description: undefined,
        tasks: [],
        hr: false,
    }

]


const projects = [
    {
        title: "V'Lille GCP ETL",
        description: "ETL de l'état des stations V'Lille sur GCP",
        stack: ["GCP : BigQuery, Storage, Cloud Functions, Dataproc, Pub/Sub, Run", "Flask", "Docker", "Javascript", "Google Maps API"],
        github: "https://github.com/yzpt/vlille_gcp",
        demo: "https://vlille-v1-app-service-dxpal7wuuq-od.a.run.app/",
        images: [
            "assets/images/diagram_vlille.svg",
            "assets/images/flask_dashboard.png",
        ],
    },
    {
        title: "Data Engineering projects",
        description: 
        "Spark + Kafka + Cassandra Streaming Pipeline<br>" +
        "Airflow to Postgres / GCP Composer to BigQuery<br>" +
        "Spark Operator on Kubernetes<br>" +
        "Kafka : KRaft mode<br>" +
        "GCP Dataflow & BigQuery, fuel prices<br>" +
        "Websocket Streaming to GCP Pub/Sub<br>" +
        "SASL/PLAIN and ACLs on Kafka",
        stack: ["Spark", "Kafka", "Airflow", "Postgresql", "Cassandra", "Docker", "GCP"],
        github: "https://github.com/yzpt/docker_cluster_streaming",
        images: [
            "assets/images/docker_streaming.png",
        ],
        demo: "",
    },
    {
        title: "Analyses et reporting automatisés",
        description: "Extraits du projet KXI Wildertech d'analyse automatisée de séries temporelles et de reporting en ligne",
        stack: ["Jupyter", "Flask", "Plotly", "Leaflet", "GCP", "Matplotlib"],
        images: [
            "assets/images/mdf1b.png",
            "assets/images/mdf3.png",
            // "assets/images/mdf4.png",
            // "assets/images/mdf2.png",
        ],
    },
    {
        title: "Geolife GPS Tracking",
        description: "Visualisation de trackings GPS du dataset Geolife",
        stack: ["Dash", "Plotly", "GeoPandas", "Scikit-Learn"],
        images: [
            "assets/images/geolife_dash1.png",
            // "assets/images/geolife_dash2.png",
        ],
        github: "https://github.com/yzpt/geolife",
        demo: "https://geolife-service-883336909258.europe-west9.run.app/",
    },
    {
        title: "Imagerie satellite (Sentinel) avec Google Earth Engine",
        description: "Estimation de la végétation du Nord-Pas-de-Calais",
        stack: ["Google Earth Engine", "Jupyter"],
        images: [
            "assets/images/sentinel2.png",
        ],
        github: "https://github.com/yzpt/gee",
    },
    {
        title: "Dashboards divers",
        description: "",
        stack: ["Dash", "Plotly", "GeoPandas"],
        images: [
            "assets/images/historic_dashboard_ongoing.png",
            "assets/images/population_mapping_ongoing.png",
        ],
    },
    {
        title: "Zapmaths",
        description: "Application web d'entraînement aux calculs",
        stack: ["Python", "Php", "MySQL", "Apache", "Excel"],
        images: [
            "assets/images/zapmaths1.png",
            "assets/images/zapmaths2.png",
        ],
        github: "https://github.com/ypzt/zapmaths",
    },
]


const formations = [
    {
        title: "Developpeur web Java JEE",
        school: "AFPA Roubaix",
        date: "Janvier - Mai 2023",
    },
    {
        title: "DU/M1 Master MEEF Mathématiques",
        school: "IUFM/ESPE/INSPE de Villeneuve d'Ascq",
        date: "2016 - 2018",
    },
]


export { introduction, experiences, diplomes, projects, formations };