const introduction = [
    "Former mathematics teacher and trained engineer, I am now focused on Python and data, driven by a passion for analysis and strong problem-solving skills that I've been honing through coding since the age of 10.",
    "I have been freelancing since this spring, specializing as a GIS Analyst.",
]

const stacklist = [
    "Python, SQL, Linux, Bash, Javascript",
    "Juypyter, Pandas, Plotly, Dash, Scikit-Learn, Matplotlib/Seaborn, Panel/Holoviz",
    "GCP: BigQuery, Storage, Cloud Functions, Dataproc, Pub/Sub, Run",
    "Spark, Kafka, Airflow, PostgreSQL, MySQL, Cassandra, SQLAlchemy",
    "Flask, FastAPI, Docker, Git",
    "GeoPandas, Leaflet, OpenStreetMap, Google Maps API, Google Earth Engine, GeoPy, QGIS",
]

const experiences = [
    {
        title: "Data Analyst / Python Developer",
        company: "Kooling.io (EN)",
        date: "September 2024 - Present",
        tasks: [
            "Development of GPS tracking algorithms: segmentation, transport mode detection",
            "Visualization dashboards for algorithm performance evaluations",
            "Design of a GPS tracker prototype - ESP32 - Neo6M (GPS) - Sim800L (GSM)",
        ],
        description: "",
        stack: ["Pandas", "Scikit-Learn", "Dash", "Plotly", "Postgresql", "C++", "MicroPython"],
    },
    {
        title: "Python Developer",
        company: "Winslow McD (US)",
        date: "November 2024",
        tasks: [
            "Development of a dashboard for historical article consultation",
        ],
        stack: ["Pandas", "Dash", "Plotly", "Docker", "GCP Cloud Run", "GCP Storage"],
    },
    {
        title: "Software Engineer",
        company: "Solve42 GmBH (DE)",
        date: "July - August 2024",
        tasks: [
            "Development of various features for an RAG/LLM application with FastAPI",
            "Unit and integration tests with pytest",
        ],
        description: "",
        stack: ["FastAPI", "pytest", "Docker", "PostgreSQL", "Chroma"],
    },
    {
        title: "Python Developer / Data Analyst",
        company: "KXI Wildertech (CAN)",
        date: "June - July 2024",
        tasks: [
            "Automated signal processing from sensors (MDF4 format) implemented in test cars",
            "Development of an automated reporting, data visualization, and mapping application",
        ],
        description: "",
        stack: ["Pandas", "Jupyter", "Flask", "Leaflet", "Matplotlib", "Plotly", "GCP", "BigQuery"],
    },
    {
        title: "Data Analyst",
        company: "Nextérité (FR)",
        date: "April - June 2024",
        tasks: [
            "Processing, analysis, and visualization of GPS tracking from MPD (Mobile Positioning Data) to define mobility trends in a large French city",
            "Deployment of data visualization dashboards and automated analyses",
            "Development of transport mode detection algorithms inspired by scientific literature, primarily <a href='https://www.scopus.com/authid/detail.uri?authorId=57216741721'>Paria Sadeghian</a> and <a href='https://www.scopus.com/authid/detail.uri?authorId=56382645500'>Yu Zheng</a>: segmentation, clustering (ST-DBSCAN & K-Means), mapping tracks on OpenStreetMap for public transport detection",
            "Mobility trends: Origin-Destination matrix, parameterized heatmaps",
        ],
        description: "",
        stack: ["GeoPandas", "Leaflet", "Javascript", "OpenStreetMap", "GeoPy", "Scikit-Learn", "Flask", "Docker", "Dash", "Plotly", "GCP Cloud Run", "GCP BigQuery"],
    },
    {
        title: "Web scraping",
        company: "Stratalis Ltd (FR)",
        date: "April 2024",
        tasks: [
            "Proxy rotation, AJAX interception",
        ],
        description: "",
        stack: ["Scrapy", "BeautifulSoup", "Selenium", "TypeScript"],
    },
    {
        title: "Python Developer",
        company: "VIP Jet Catering (FR)",
        date: "April 2024",
        tasks: [
            "Sales analysis dashboard",
        ],
        stack: ["Pandas", "Dash", "Plotly", "Docker", "GCP Cloud Run"],
    },
    {
        title: "Certified Mathematics Teacher",
        company: "National Education, Academy of Lille",
        date: "2015 - 2023",
        tasks: [
            "Teaching mathematics and physical sciences in a vocational high school",
            "Students in adapted education (CAP classes, 3PM, post-ULIS/SEGPA, Allophone)",
            "Development of a web application for calculation training",
            "Teaching programming in Python & Arduino",
            "Creating a YouTube channel for mathematics tutorials",
        ],
        hr: true,
    },
    {
        title: "Research Engineer",
        company: "IEMN: Institute of Electronics, Microelectronics, and Nanotechnology, Villeneuve-d'Ascq",
        date: "2013 - 2015",
        description: "",
        hr: true,
        tasks: [
            "Setup and programming of measurement and characterization systems for THz devices",
            "THz imaging, spectral mapping of wafers"
        ],
        stack: ["LabView", "Matlab", "Python", "Microwave Electronics", "THz Optoelectronics", "Metamaterials"],
    }
]

const diplomas = [
    {
        title: "Engineering degree in scientific instrumentation",
        school: "Polytech'Lille",
        date: "2013",
        description: undefined,
        stack: ["Optics", "Electronics", "Photonics", "Signal Processing", "Measurement", "Programming", "Data Analysis", "Statistics"],
        tasks: [],
        hr: true,
    },
    {
        title: "Master's degree in microelectronics and nanotechnology",
        school: "University of Lille",
        date: "2013",
        description: undefined,
        stack: ["Scientific Literature & Bibliography", "Optoelectronics", "Semiconductors", "Microwaves", "Nanotechnologies"],
        tasks: [],
        hr: true,
    },
    {
        title: "DUT in Physical Measurements",
        school: "IUT A de Lille",
        date: "2010",
        description: undefined,
        tasks: [],
        hr: true,
    },
    {
        title: "First year of a Mathematics Bachelor",
        school: "University of Lille",
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
        stack: ["GCP: CLI, BigQuery, Storage, Cloud Functions, Dataproc, Pub/Sub, Run", "Bash", "Flask", "Docker", "Javascript", "Google Maps API"],
        github: "https://github.com/yzpt/vlille_gcp",
        demo: "https://vlille-v1-app-service-dxpal7wuuq-od.a.run.app/",
        tasks: [
            "ETL that retrieves <a href='https://data.lillemetropole.fr/geoserver/wfs?SERVICE=WFS&REQUEST=GetFeature&VERSION=2.0.0&TYPENAMES=dsp_ilevia%3Avlille_temps_reel&OUTPUTFORMAT=application%2Fjson'>V'Lille station data via the public API</a> every minute via Cloud Functions, storing it in BigQuery & Storage.",
            "Demonstration of a Spark job with GCP Dataproc.",
            "Frontend: HTML/CSS/JavaScript (+Chart.js) and Google Maps API.",
            "Backend: Flask & BigQuery client.",
            "Deployment: Docker & GCP Cloud Run.",
        ],
        images: [
            "assets/images/diagram_vlille.svg",
            "assets/images/flask_dashboard.png",
        ],
    },
    {
        title: "Data Engineering projects",
        description: 
        "Series of Data Engineering projects to get hands-on experience with key tools in the field.<br><br>",
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
        stack: [
            "Airflow", "Kafka", "Spark", "PostgreSQL", "BigQuery", "Google Pub/Sub", "Dataflow", "Docker", "Linux", "GCP"
        ],
    }
]
