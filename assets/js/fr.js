const introduction = [
    "Avec un background de professeur de mathématiques certifié et d'ingénieur de recherche, je me concentre aujourd'hui sur Python et la data, animé par le goût de l'analyse et d'une forte capacité de résolution de problèmes que je développe à travers le code depuis l'âge de 10 ans.",
    "<b>Je réalise des missions en freelance full-remote depuis ce printemps et souhaite désormais monter en compétences en occupant un poste basé à Lille.</b>",
]

const stacklist = [
    "Python, SQL, Linux, Bash, Javascript",
    "Juypyter, Pandas, Plotly, Dash, Scikit-Learn, Matplotlib/Seaborn, Panel/Holoviz",
    "GCP : BigQuery, Storage, Cloud Functions, Dataproc, Pub/Sub, Run",
    "Flask, FastAPI, Docker, Git",
    "Spark, Kafka, Airflow, Postgresql, MySQL, Cassandra, SQLAlchemy",
    "GeoPandas, Leaflet, OpenStreetMap, Google Maps API, Google Earth Engine, GeoPy, postGIS",
    "J'apprends : React, Django, QGIS, GeoServer, clean-code, principes SOLID & TDD",
]


const experiences = [
    {
        title: "Data Analyst / Développeur Python",
        company: "Kooling.io (EN)",
        date: "Septembre 2024 - aujourd'hui",
        tasks: [
            "Développement d'algorithmes de tracking GPS : segmentation, détection de mode de transport",
            "Dashboards de visualisation des évaluations de performances des algorithmes",
            "POC d'un trackeur GPS/GPRS basé sur un ESP32"
        ],
        description: "",
        stack: ["Pandas", "Scikit-Learn", "Dash", "Plotly", "Postgresql", "ESP32"],
    },
    {
        title: "Développeur Python",
        company: "Winslow McD (US)",
        date: "Novembre 2024",
        tasks: [
            "Développement d'un dashboard de consultation d'articles historiques",
        ],
        stack: ["Pandas", "Dash", "Plotly", "Docker", "GCP Cloud Run", "GCP Storage"],
    },
    {
        title: "Software engineer",
        company: "Solve42 GmBH (DE)",
        date: "Juillet - Août 2024",
        tasks: [
            "Développement de fonctionnalités diverses d'une application RAG/LLM avec FastAPI",
            "Tests unitaires et d'intégration avec pytest",
        ],
        description: "",
        stack: ["FastAPI", "pytest", "Docker", "PostgreSQL", "Chroma"],
    },
    {
        title: "Développeur Python / Data Analyst",
        company: "KXI Wildertech (CAN)",
        date: "Juin - Juillet 2024",
        tasks: [
            "Traitement de signal automatisé de capteurs (format MDF4) implentés dans des voitures de tests",
            "Développement d'une application de reporting automatisé, de visualisation de données et de cartographie",
        ],
        description: "",
        stack: ["Pandas", "Jupyter", "Flask", "Leaflet", "Matplotlib", "Plotly", "GCP", "BigQuery"],
    },
    {
        title: "Data Analyst",
        company: "Nextérité (FR)",
        date: "Avril - Juin 2024",
        tasks: [
            "Traitement, analyse et visualisation de trackings GPS issues de données MPD (Mobile Positionning Data) pour définir les tendances de mobilité dans une grande ville française",
            "Déploiement de dashboards de visualisation de données et d'analyses automatisées",
            "Développement d'algorithmes de détection de mode de transport inspirés par la littérature scientifique, principalement <a href='https://www.scopus.com/authid/detail.uri?authorId=57216741721'>Paria Sadeghian</a> et <a href='https://www.scopus.com/authid/detail.uri?authorId=56382645500'>Yu Zheng</a> : segmentation, clusterisation (ST-DBSCAN & K-Means), mappage des tracés sur OpenStreetMap pour détection des transports publics",
            "Tendances de mobilité : matrice Origin-Destination, heatmaps paramétrées",
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
            "Développement d’une application web d’entraînement aux calculs",
            "Apprentissage de la programmation en Python & Arduino",
            "Création d'une chaîne YouTube de tutoriels de mathématiques",
        ],
        hr: true,
    },
    {
        title: "Ingénieur de recherche",
        company: "IEMN : Institut d’Electronique, de Micro-électronique et Nanotechnologies, Villeneuve-d’Ascq",
        date: "2013 - 2015",
        description: "",
        hr: true,
        tasks: [
            "Mise en place et programmation de bancs de mesures & caractérisations de dispositifs THz",
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
        description: "",
        stack: ["GCP : CLI, BigQuery, Storage, Cloud Functions, Dataproc, Pub/Sub, Run", "Bash", "Flask", "Docker", "Javascript", "Google Maps API"],
        github: "https://github.com/yzpt/vlille_gcp",
        demo: "https://vlille-v1-app-service-dxpal7wuuq-od.a.run.app/",
        description: "ETL qui récupère les <a href='https://data.lillemetropole.fr/geoserver/wfs?SERVICE=WFS&REQUEST=GetFeature&VERSION=2.0.0&TYPENAMES=dsp_ilevia%3Avlille_temps_reel&OUTPUTFORMAT=application%2Fjson'>données des stations V'Lille depuis l'API publique</a> chaque minute via Cloud Functions et les stocke dans BigQuery & Storage.",
        images: [
            "assets/images/diagram_vlille.svg",
            "assets/images/flask_dashboard.png",
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
        title: "Data Engineering projects",
        description: 
        "Série de projets orientés Data Engineering afin de prendre en main certains outils phares du domaine.<br><br>",
        tasks: [
            "<a href='https://github.com/yzpt/docker_cluster_streaming'>Spark + Kafka + Cassandra Streaming Pipeline</a><br>",
            "<a href='https://github.com/yzpt/airflow_carburants'>Airflow to Postgres / GCP Composer to BigQuery</a><br>",
            "<a href='https://github.com/yzpt/websocket_to_gcp_pubsub'>Websocket to GCP Pub/Sub</a><br>",
            "<a href='https://github.com/yzpt/dataflow_carburants'>GCP Dataflow & BigQuery, fuel prices</a><br>",
            "<a href='https://github.com/yzpt/kafka_kraft'>Kafka KRaft mode</a><br>",
            "<a href='https://github.com/yzpt/upw_test_kafka_spark_docker'>SASL/PLAIN and ACLs on Kafka",
            "<a href='https://github.com/yzpt/upw_test_kafka_spark_docker'>Kafka + Spark + Docker</a><br>",
            "<a href='https://github.com/yzpt/spark_on_kubernetes'>Spark on Kubernetes</a><br>",
        ],
        stack: ["Spark", "Kafka", "Airflow", "Postgresql", "Cassandra", "Docker", "GCP"],
        images: [
            // "assets/images/docker_streaming.png",
            "assets/images/streaming_and_airflow.png",
            "assets/images/dag_screen.png"
        ],
        demo: "",
    },
    {
        title: "Analyses et reporting automatisés",
        description: "Extraits de la mission chez KXI Wildertech d'analyse automatisée de séries temporelles et de reporting en ligne",
        stack: ["Jupyter", "Flask", "Plotly", "Leaflet", "GCP", "Matplotlib"],
        images: [
            "assets/images/mdf1b.png",
            "assets/images/mdf3.png",
        ],
    },
    {
        title: "Introduction à l'imagerie satellite (Sentinel-2) avec Google Earth Engine",
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
]


export { introduction, experiences, diplomes, projects, formations, stacklist };