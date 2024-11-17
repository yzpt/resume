const introduction = [
    "With a background as a certified mathematics teacher and research engineer, I am now focused on Python and data, driven by a passion for analysis and a strong problem-solving ability, which I have developed through coding since the age of 10.",
    "<b>I have been working as a full-remote freelancer since this spring and now wish to enhance my skills by taking on a position based in Lille.</b>",
]

const stacklist = [
    "Python, SQL, Linux, Bash, Javascript",
    "Jupyter, Pandas, Plotly, Dash, Scikit-Learn, Matplotlib/Seaborn, Panel/Holoviz",
    "GCP: BigQuery, Storage, Cloud Functions, Dataproc, Pub/Sub, Run",
    "Flask, FastAPI, Docker, Git",
    "Spark, Kafka, Airflow, Postgresql, MySQL, Cassandra, SQLAlchemy",
    "GeoPandas, Leaflet, OpenStreetMap, Google Maps API, Google Earth Engine, GeoPy, postGIS",
    "I am learning: React, Django, QGIS, GeoServer, clean-code, SOLID principles & TDD",
]

const experiences = [
    {
        title: "Data Analyst / Python Developer",
        company: "Kooling.io (EN)",
        date: "September 2024 - present",
        tasks: [
            "Development of GPS tracking algorithms: segmentation, transport mode detection",
            "Dashboards for visualizing algorithm performance evaluations",
        ],
        description: "",
        stack: ["Pandas", "Scikit-Learn", "Dash", "Plotly", "Postgresql"],
    },
    {
        title: "Python Developer",
        company: "Winslow McD (US)",
        date: "November 2024",
        tasks: [
            "Development of a dashboard for viewing historical articles",
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
            "Automated signal processing of sensors (MDF4 format) implemented in test cars",
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
            "Processing, analysis, and visualization of GPS tracking data from MPD (Mobile Positioning Data) to identify mobility trends in a large French city",
            "Deployment of data visualization dashboards and automated analyses",
            "Development of transport mode detection algorithms inspired by scientific literature, mainly <a href='https://www.scopus.com/authid/detail.uri?authorId=57216741721'>Paria Sadeghian</a> and <a href='https://www.scopus.com/authid/detail.uri?authorId=56382645500'>Yu Zheng</a>: segmentation, clustering (ST-DBSCAN & K-Means), mapping tracks on OpenStreetMap for public transport detection",
            "Mobility trends: Origin-Destination matrix, parameterized heatmaps",
        ],
        description: "",
        stack: ["GeoPandas", "Leaflet", "Javascript", "OpenStreetMap", "GeoPy", "Scikit-Learn", "Flask", "Docker", "Dash", "Plotly", "GCP Cloud Run", "GCP BigQuery"],
    },
    {
        title: "Web Scraping",
        company: "Stratalis Ltd (FR)",
        date: "April 2024",
        tasks: [
            "Proxy rotation, AJAX interceptions",
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
        company: "National Education, Lille Academy",
        date: "2015 - 2023",
        tasks: [
            "Teaching mathematics and physical sciences in vocational high school",
            "Students in adapted education (CAP classes, 3PM, post-ULIS/SEGPA, Allophones)",
            "Development of a web application for calculation practice",
            "Teaching programming in Python & Arduino",
            "Creation of a YouTube channel for mathematics tutorials",
        ],
        hr: true,
    },
    {
        title: "Research Engineer",
        company: "IEMN: Institute of Electronics, Microelectronics and Nanotechnologies, Villeneuve-d'Ascq",
        date: "2013 - 2015",
        description: "",
        hr: true,
        tasks: [
            "Setting up and programming measurement & characterization benches for THz devices",
            "THz imaging, spectral mapping of wafers"
        ],
        stack: ["LabView", "Matlab", "Python", "Microwave Electronics", "THz Optoelectronics", "Metamaterials"],
    }
]

const diplomes = [
    {
        title: "Engineering Degree in Scientific Instrumentation",
        school: "Polytech'Lille",
        date: "2013",
        stack: ["Optics", "Electronics", "Photonics", "Signal Processing", "Measurement", "Programming", "Data Analysis", "Statistics"],
        hr: true,
        tasks: [],
    },
    {
        title: "Master's Degree in Microelectronics and Nanotechnologies",
        school: "University of Lille",
        date: "2013",
        stack: ["Scientific Literature & Bibliography", "Optoelectronics", "Semiconductors", "Microwaves", "Nanotechnologies"],
        hr: true,
        tasks: [],
    },
    {
        title: "DUT (University Diploma of Technology) in Physical Measurements",
        school: "IUT A de Lille",
        date: "2010",
        hr: true,
        tasks: [],
    },
    {
        title: "First Year of Mathematics Bachelor's Degree",
        school: "University of Lille",
        date: "2006",
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
        description: "ETL that fetches <a href='https://data.lillemetropole.fr/geoserver/wfs?SERVICE=WFS&REQUEST=GetFeature&VERSION=2.0.0&TYPENAMES=dsp_ilevia%3Avlille_temps_reel&OUTPUTFORMAT=application%2Fjson'>data from V'Lille stations from the public API</a> every minute via Cloud Functions and stores it in BigQuery & Storage.",
        images: [
            "assets/images/diagram_vlille.svg",
            "assets/images/flask_dashboard.png",
        ],
    },
    {
        title: "Geolife GPS Tracking",
        description: "Visualization of GPS tracking from the Geolife dataset",
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
        "A series of projects focused on Data Engineering to get hands-on experience with key tools in the field.<br><br>",
        tasks: [
            "<a href='https://github.com/yzpt/docker_cluster_streaming'>Spark + Kafka + Cassandra Streaming Pipeline</a><br>",
            "<a href='https://github.com/yzpt/airflow_carburants'>Airflow to Postgres / GCP Composer to BigQuery</a><br>",
            "<a href='https://github.com/yzpt/websocket_to_gcp_pubsub'>Websocket to GCP Pub/Sub</a><br>",
            "<a href='https://github.com/yzpt/dataflow_carburants'>GCP Dataflow & BigQuery, fuel prices</a><br>",
            "<a href='https://github.com/yzpt/kafka_kraft'>Kafka KRaft mode</a><br>",
            "<a href='https://github.com/yzpt/upw_test_kafka_spark_docker'>SASL/PLAIN and ACLs on Kafka</a><br>",
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
        title: "Automated Analysis and Reporting",
        description: "Excerpts from the mission at KXI Wildertech for automated time-series analysis and online reporting",
        stack: ["Jupyter", "Flask", "Plotly", "Leaflet", "GCP", "Matplotlib"],
        images: [
            "assets/images/mdf1b.png",
            "assets/images/mdf3.png",
        ],
    },
    {
        title: "Introduction to Satellite Imagery (Sentinel-2) with Google Earth Engine",
        description: "Estimation of vegetation in the Nord-Pas-de-Calais region",
        stack: ["Google Earth Engine", "Jupyter"],
        images: [
            "assets/images/sentinel2.png",
        ],
        github: "https://github.com/yzpt/gee",
    },
    {
        title: "Various Dashboards",
        description: "",
        stack: ["Dash", "Plotly", "GeoPandas"],
        images: [
            "assets/images/historic_dashboard_ongoing.png",
            "assets/images/population_mapping_ongoing.png",
        ],
    },
    {
        title: "Zapmaths",
        description: "Web application developed during my teaching career, dedicated to helping students practice mental arithmetic.",
        stack: ["Python", "Php", "MySQL", "Apache", "Excel"],
        tasks: [
            "Php & MySQL on Apache server",
            "Semi-random generation of statement values / illustrations and corrections",
            "Detailed tracking of student activity",
            "150,000+ questions processed per school year",
        ],
        images: [
            "assets/images/zapmaths1.png",
            "assets/images/zapmaths2.png",
        ],
        github: "https://github.com/ypzt/zapmaths",
    },
]

const formations = [
    {
        title: "Web Developer Java JEE",
        school: "AFPA Roubaix",
        date: "January - May 2023",
    },
]


const title = "Python / Data Developer";

export { introduction, experiences, diplomes, projects, formations, stacklist, title };
