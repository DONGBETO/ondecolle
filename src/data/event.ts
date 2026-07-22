type EventsData = {
    title: string;
    description: string;
    image: string;
    duration?: string;
    slug: string;
    youtubeId: string;
    content: string;
    gallery?: string[];
    statNumber?: number;
};
export const events: EventsData[] = [
        {
            slug: "conference-entrepreneurs",
            title: "Conférence des jeunes entrepreneurs",
            image: "/assets/images/event.jpg",
            duration: "2h17",
            description:
            "Une rencontre inspirante autour de l’innovation et de l’entrepreneuriat des jeunes.",
            youtubeId: "dQw4w9WgXcQ",
            content: `
            Cet événement a rassemblé de jeunes porteurs de projets
            autour d’échanges stratégiques, de mentorat et
            d’opportunités concrètes.
            `,
            gallery: [
          "/assets/images/gallery/event1-1.jfif",
          "/assets/images/gallery/event1-2.jfif",
          "/assets/images/gallery/event1-3.jfif",
          "/assets/images/gallery/event1-4.jfif",         
          "/assets/images/gallery/event1-5.jfif",
          "/assets/images/gallery/event1-6.jfif",
          "/assets/images/gallery/event1-7.jfif",
          "/assets/images/gallery/event1-8.jfif",
        ],
            statNumber: +700,

        },

      {
        slug: "atelier-formation-business",
        title: "Atelier de formation business",
        description: "Participez à cet atelier de formation pour développer vos compétences en business et apprendre de nouvelles stratégies pour faire croître votre entreprise.",
        image: "/assets/images/event.jpg",
        duration: "1h30",
            youtubeId: "dQw4w9WgXcQ",
            content: `
            Cet atelier de formation business a été une occasion précieuse pour les jeunes entrepreneurs
            de renforcer leurs compétences, d’apprendre de nouvelles stratégies et de se connecter avec
            des experts du domaine. Les participants ont pu bénéficier de conseils pratiques, d’études
            de cas inspirantes et d’un environnement propice à l’échange d’idées. Cet événement a contribué
            à stimuler la croissance des entreprises émergentes et à renforcer l’écosystème entrepreneurial local.
            `,
            gallery: [
          "/assets/images/gallery/event1-1.jfif",
          "/assets/images/gallery/event1-2.jfif",
          "/assets/images/gallery/event1-3.jfif",
          "/assets/images/gallery/event1-4.jfif",
          "/assets/images/gallery/event1-5.jfif",
          "/assets/images/gallery/event1-6.jfif",
          "/assets/images/gallery/event1-7.jfif",
          "/assets/images/gallery/event1-8.jfif",
        ],
            statNumber: +400,
      },
      {

        slug: "rencontre-investisseurs-3",
        title: "Rencontre avec investisseurs",
        description: "Rejoignez-nous pour une rencontre avec des investisseurs passionnés qui souhaitent soutenir les projets innovants et les entreprises en développement.",
        image: "/assets/images/event.jpg",
        duration: "45min",
            youtubeId: "dQw4w9WgXcQ",
            content: `
            Cette rencontre avec des investisseurs a été une opportunité exceptionnelle pour les jeunes
            entrepreneurs de présenter leurs projets à des acteurs clés du financement. Les participants
            ont pu échanger directement avec des investisseurs passionnés, obtenir des retours précieux
            et explorer des possibilités de collaboration. Cet événement a renforcé les liens entre les
            porteurs de projets et les investisseurs, contribuant ainsi à créer un écosystème dynamique
            et propice à la croissance des entreprises innovantes.
            `,
            gallery: [
          "/assets/images/gallery/event1-1.jfif",
          "/assets/images/gallery/event1-2.jfif",
          "/assets/images/gallery/event1-3.jfif",
          "/assets/images/gallery/event1-4.jfif",
          "/assets/images/gallery/event1-5.jfif",
          "/assets/images/gallery/event1-6.jfif",
          "/assets/images/gallery/event1-7.jfif",
          "/assets/images/gallery/event1-8.jfif",
        ],

          statNumber: +250,
      },
      {
        slug: "Rencontre-avec-la-jeunesse",
        title: "Rencontre avec la jeunesse béninoise",
        description: "Nouvelle rencontre de Habib Aboukhedoud avec des jeunes à Cotonou : ”Ensemble, on décolle” prend de l’altitude.",
        image: "/assets/images/11 Juillet/1.jpg",
        duration: "3min",
        youtubeId: "dQw4w9WgXcQ",
            content: `
            Le Bamboo Numeric de Cotonou a servi de cadre, le samedi 11 juillet 2026, à une nouvelle rencontre du mouvement citoyen Ensemble, on décolle. Pendant près de deux heures, de 10 h 30 à 12 h 30, une cinquantaine de jeunes, sélectionnés à partir du forum WhatsApp du Commandant Habib Aboukhedoud, ont pris part à cette séance d’échanges placée sous le signe de la réflexion, de l’engagement et de l’action. Le mouvement se présente comme une initiative citoyenne, apolitique et bénévole destinée à détecter, former et accompagner les jeunes porteurs de projets.

            Loin d’une simple conférence, cette rencontre s’est voulue un véritable espace de dialogue. Les participants ont exposé leurs ambitions, partagé les difficultés qui freinent leurs initiatives et bénéficié des conseils du Commandant Habib Aboukhedoud. Fidèle à sa philosophie, celui-ci a insisté sur la nécessité de transformer les mentalités, de cultiver la discipline et de développer un état d’esprit tourné vers la persévérance et la responsabilité.

            Dans le message publié à l’issue de la rencontre, le Commandant rappelle que la réussite ne se construit pas autour de l’assistanat, mais autour de la capacité de chacun à croire en son potentiel et à agir avec méthode. Une vision qui constitue l’un des fondements du concept Ensemble, on décolle, lequel ambitionne de faire émerger une génération de jeunes conscients de leurs responsabilités et capables de contribuer au développement de leur pays.

            Par son parcours international dans l’aviation comme par son investissement bénévole auprès de la jeunesse, Habib Aboukhedoud s’efforce de mettre son expérience au service d’une cause qu’il considère essentielle. Son engagement constant mérite d’être salué. Dans un contexte où de nombreux jeunes recherchent des repères, des initiatives de cette nature offrent des occasions précieuses d’écoute, de mentorat et de partage d’expérience.

            À travers Ensemble, on décolle, le Commandant Habib Aboukhedoud poursuit ainsi une démarche qui place la jeunesse au cœur de la construction de l’avenir, avec la conviction que les plus grands décollages prennent d’abord naissance dans les esprits.
            `,
        gallery: [
          "/assets/images/11 Juillet/2.jpg",
          "/assets/images/11 Juillet/3.jpg",
          "/assets/images/11 Juillet/4.jpg",
          "/assets/images/11 Juillet/5.jpg",
          "/assets/images/11 Juillet/6.jpg",
          "/assets/images/11 Juillet/7.jpg",
          "/assets/images/11 Juillet/8.jpg",
          "/assets/images/11 Juillet/9.jpg",
          "/assets/images/11 Juillet/10.jpg",
          "/assets/images/11 Juillet/11.jpg",
        ],
        statNumber: +50,
      },
      {
        slug: "conference-uac-habib",
        title: "Rencontre avec Habib Aboukhedoud à l'UAC",
        image: "/assets/images/event.jpg",
        duration: "5min:51s",
        description:
        "Une rencontre exceptionnelle entre Habib Aboukhedoud et les jeunes de l’Université d’Abomey-Calavi.",

        youtubeId: "U_Fz2cmtqLQ&t=7s", 

        content: `
        Rejoignez-nous pour cette rencontre exceptionnelle entre le pilote et commandant de bord béninois, 
        Habib Aboukhedoud, et les jeunes porteurs d'ambitions à l'université d'Abomey-Calavi.

        Sous le thème "Jeunesse, ton avenir commence aujourd'hui : ose le bâtir", Habib Aboukhedoud partage 
        son expérience et son expertise pour inspirer et motiver les jeunes à prendre leur destin en main.
        `,
    gallery: [
        "/assets/images/gallery/event1-1.jfif",
        "/assets/images/gallery/event1-2.jfif",
        "/assets/images/gallery/event1-3.jfif",
        "/assets/images/gallery/event1-4.jfif",
        "/assets/images/gallery/event1-5.jfif",
        "/assets/images/gallery/event1-6.jfif",
        "/assets/images/gallery/event1-7.jfif",
        "/assets/images/gallery/event1-8.jfif",
      ],
    statNumber: +300,
    },
      {
        slug: "conference-uac-jeunesse",
        title:
        "Séance d'échanges du Commandant Habib Aboukhedoud avec la jeunesse béninoise",

        image: "/assets/images/event.jpg",
        duration: "4min:05s",

        description:
        "Plus de 3000 jeunes réunis à l'UAC pour une conférence inspirante sur l’avenir et l’engagement.",

        youtubeId: "CYZu4Fx96x0", 

        content: `
        Rejoignez-nous pour cette rencontre exceptionnelle entre le pilote et commandant de bord béninois, Habib Aboukhedoud, et les jeunes porteurs d'ambitions à l'Université d'Abomey-Calavi.

        Sous le thème "Jeunesse, ton avenir commence aujourd'hui : ose le bâtir", Habib Aboukhedoud partage son expérience et son expertise pour inspirer et motiver les jeunes à prendre leur destin en main.

        Le commandant Habib Aboukhedoud partage son expérience et ses conseils avec plus de 3000 jeunes à l'Université d'Abomey-Calavi (UAC).

        Dans cette conférence inspirante, il aborde les défis auxquels la jeunesse est confrontée et propose des solutions concrètes pour bâtir un avenir meilleur.
        `,
    gallery: [
      "/assets/images/Calavi/event1.jpg",
      "/assets/images/Calavi/event2.jpg",
      "/assets/images/Calavi/event3.jpg",
    ],
    statNumber: 3000,
  },
]