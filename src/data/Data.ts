import PersonalData from "../model/Data";

const DATA: PersonalData = {
    name: "Simon Degroote",
    tel : "+32 491 73 47 31",
    email : "simon.degroote1@gmail.com",
    address : "7 rue de la Couronne, 6210 Villers Perwin",
    bio : "Etudiant en électromécanique option maintenance et aimant de nature découvrir les nouvelles technologies, j’aime mettre à profit mes compétences pour faire évoluer un projet. C’est d’ailleurs mon occupation principale en dehors de mon cursus scolaire, ce qui me permet de m’instruire quotidiennement en travaillant au côté de professionnel dans divers secteurs tels que l’automobile, l’agriculture, l’HVAC ou la conception mécanique.",
    skills : [
        "Communication au sein d’une équipe ",
        "Expérience dans l’installation de climatisation et pompes à chaleur",
        "Expérience dans l’entretien de machines agricoles",
        "Formation soudeur TIG/MIG",
        "Maîtrise de la suite Office (Excel, Word, etc.)",
        "Maîtrise d’Autocad et Inventor 3D",
        "Notion de Tia Portal et Optimain"
    ],
    education : [
        {
            from : "2020",
            to : "aujourd’hui",
            where : "Haute Ecole EPHEC",
            formation : "Bachelier en électromécanique option maintenance",
            image : "./../img/Saint-Marie.jpg"
        },
        {
            from : "2018",
            to : "2020",
            where : "ECAM",
            formation : "Ingénieur industriel en électromécanique",
            image : "./../img/ecam.pnj"
        },
        {
            from : "2012",
            to : "2018",
            where : "Institut Sainte Marie à Rèves",
            formation : "Général option mathématiques/sciences",
            image : "./../img/Saint-Marie.jpg"
        }
    ],
    professional: [
        {
            from : "du berceau",
            to : "aujourd’hui",
            where : "Travail au sein de l’entreprise agricole familiale Alain Degroote",
            formation : "Axé mécanique, maintenance et récolte",
            image : null
        },
        {
            from : "2016",
            to : "2017",
            where : "Dépôt de grain SCAM",
            formation : "Réceptionniste",
            image : null
        },
        {
            from : "2018",
            to : "aujourd’hui",
            where : "Etudiant dans la société IDClim",
            formation : "Axé montage et maintenance",
            image : null
        },
        {
            from : "2024",
            to : "aujourd’hui",
            where : "Etudiant dans la société Degroote Solutions",
            formation : "Axé conception et programmation hydraulique, conception et réalisation mécanique dans le cadre d’une commande de remorque dédiée au nettoyage des fermes",
            image : null
        },
        {
            from : "2024",
            to : "2024",
            where : "Stagiaire dans la société DELTA Maintenance",
            formation : "Axé sur la gestion de maintenance et la rénovation de la chaufferie à la clinique Méridien à Bruxelles",
            image : null
        }
    ],
    isatLife : [
        {
            title : "Participation à la journée porte ouverte de mon école",
            description : "Afin d’encourager de jeunes étudiants à découvrir les différentes formations que propose l’ISAT, je me suis proposé comme guide à la journée porte ouverte du 3 avril 2024 à Auderghem. Lors de cette journée, j’ai pu emmener par petit groupe une multitude d’élèves dans différentes classes et laboratoires en leur proposant diverses activités et partages avec les professeurs afin de les aider à choisir des études dans lesquelles ils s’épanouiront. Cette journée fut passionnante et permis en quelque sorte de passer le flambeau à ces futurs étudiants motivés"
        },
        {
            title : "Participation à la journée « Entreprendre ton futur »",
            description : "Cette journée est organisée par notre école pour nous aider dans la recherche de notre futur parcours professionnel. Une vingtaine d’entreprises actives dans le secteur en Belgique et dans le monde y était présentes et à notre disposition pour des séances d’information. Pour ma part celle-ci fut très instructive et m’a permis d’échanger mes coordonnées avec deux entreprises intéressées par mon profil que sont KSB et EQUANS"
        }
    ],
    visits : [
        {
            where : "Siemens Healtheneers",
            description : "Durant notre deuxième année de bachelier en 2023, nous avons eu l’occasion de visiter les nouveaux bureaux de Siemens Healtheneers à Anderlecht. Lors de cette visite, nous avons pu découvrir en détail ce que l’entreprise proposait comme service dans le monde et la place que l’électromécanicien pouvait avoir dans celle-ci. A la suite d’une discussion avec un ancien étudiant de l’ISAT, j’ai pu en apprendre davantage sur les possibilités de formations complémentaires post bachelier afin de pouvoir exercer dans ce milieu très passionnant."
        },
        {
            where : "AGORIA",
            description : "Durant cette même année, nous avons aussi eu l’opportunité d’être en contact avec AGORIA. Durant cette journée une multitude de leurs partenaires nous ont présenté leur entreprise, nous permettant d’augmenter le spectre des possibilités dans le développement de notre parcours professionnel."
        }
    ],
    analyze : {
        text : [
            "Né dans une entreprise agricole, j’ai la chance d’avoir pu rapidement être baigné dans le monde du travail dans lequel j’ai pu découvrir une multitude de facettes d’une entreprise tant au niveau des récoltes, que la maintenance mais aussi au niveau économique. Passionné par les nouvelles technologies, c’est donc naturellement que j’ai suivi un cursus en électromécanique qui m’a permis de me former davantage dans le domaine de l’électronique allié à la mécanique.",
            "Durant mon bachelier, j’ai eu l’occasion de m’essayer à différents métiers en tant qu’étudiant dans lesquels j’ai pu affirmer mes compétences mais aussi faire face à mes faiblesses en participant en tant qu’exposant à différents salons de l’énergie. C’est donc avec soif de découverte que je me lance dans mon parcours professionnel."
        ],
        data :    [
            {
                title : "Strenghts (Forces)",
                color : "lightgreen",
                points : [
                    "Volonté d’apprendre et de mettre en œuvre",
                    "Sens logique et pratique",
                    "Sens du devoir et des responsabilités",
                    "Autonomie"
                ]
            },
            {
                title : "Weaknesses (Faiblesse)",
                color : "lightblue",
                points : [
                    "Peur de mal faire",
                    "Parfois réservé"
                ]
            },
            {
                title : "Threats (Menaces)",
                color : "red",
                points : [
                    "Monotonie dans les tâches",
                    "Travail peu actif"
                ]
            },
            {
                title : "Opportunities (Opportunités)",
                color : "yellow",
                points : [
                    "Le cursus que j’ai suivi me permet d’accéder à des emplois riches et variés, permettant de découvrir chaque jour de nouvelles choses"
                ]
            }
        ]
    },
    expertise : {
        text : "La plateforme PIX est proposée par la direction interministérielle du numérique afin de permettre aux utilisateurs d’évaluer leurs compétences numériques. Voici ci-dessous, les différents niveaux que j’ai obtenus à ce jour.",
        data : [
            {
                title : "Information et donnée",
                color: "orange",
                data : [
                    {
                        title : "Mener une recherche et ue veille d'information",
                        level : 5,
                        levelMax : 6,
                        nextLevel : 15
                    },
                    {
                        title : "Gérér des données",
                        level : 5,
                        levelMax : 6,
                        nextLevel : 0
                    },
                    {
                        title : "Traiter des données",
                        level : 5,
                        levelMax : 6,
                        nextLevel : 0
                    }
                ]
            },
            {
                title : "Commuication et collaboration",
                color: "green",
                data : [
                    {
                        title : "Iteragir",
                        level : 5,
                        levelMax : 6,
                        nextLevel : 25
                    },
                    {
                        title : "Partager et publier",
                        level : 5,
                        levelMax : 6,
                        nextLevel : 0
                    },
                    {
                        title : "Collaborer",
                        level : 4,
                        levelMax : 6,
                        nextLevel : 50
                    },
                    {
                        title : "S'insérer dans le monde numérique",
                        level : 4,
                        levelMax : 6,
                        nextLevel : 0
                    }
                ]
            },
            {
                title : "Création de contenu",
                color: "blue",
                data : [
                    {
                        title : "Développer des documents textuels",
                        level : 4,
                        levelMax : 6,
                        nextLevel : 35
                    },
                    {
                        title : "Développer des documents multimedia",
                        level : 4,
                        levelMax : 6,
                        nextLevel : 0
                    },
                    {
                        title : "Adapter des documents à leur finalité",
                        level : 4,
                        levelMax : 6,
                        nextLevel : 35
                    },
                    {
                        title : "Programmer",
                        level : 4,
                        levelMax : 6,
                        nextLevel : 35
                    }
                ]
            },
            {
                title : "Protection et sécurité",
                color: "pink",
                data : [
                    {
                        title : "Sécuriser l'environnement numérique",
                        level : 4,
                        levelMax : 6,
                        nextLevel : 35
                    },
                    {
                        title : "Protéger les données personnelles de la vie privée",
                        level : 4,
                        levelMax : 6,
                        nextLevel : 25
                    },
                    {
                        title : "Protéger la santé, le bien-être et l'environnement",
                        level : 4,
                        levelMax : 6,
                        nextLevel : 35
                    }
                ]
            },
            {
                title : "Environnement numérique",
                color: "purple",
                data : [
                    {
                        title : "Résoudre des problèmes techniques",
                        level : 4,
                        levelMax : 6,
                        nextLevel : 10
                    },
                    {
                        title : "Construire un environnement numérique",
                        level : 5,
                        levelMax : 6,
                        nextLevel : 35
                    }
                ]
            }
        ]
    }
}

export default DATA;