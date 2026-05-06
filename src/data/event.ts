type EventsData = {
    title: string;
    description: string;
    image: string;
    duration?: string;
    slug: string;
    youtubeId: string;
    content: string;
};
export const events: EventsData[] = [
        {
            slug: "conference-entrepreneurs",
            title: "Conférence des jeunes entrepreneurs",
            image: "/assets/images/event1.jpg",
            duration: "2h17",
            description:
            "Une rencontre inspirante autour de l’innovation et de l’entrepreneuriat des jeunes.",
            youtubeId: "dQw4w9WgXcQ",
            content: `
            Cet événement a rassemblé de jeunes porteurs de projets
            autour d’échanges stratégiques, de mentorat et
            d’opportunités concrètes.
            `,
        },

      {
        slug: "atelier-formation-business",
        title: "Atelier de formation business",
        description: "Participez à cet atelier de formation pour développer vos compétences en business et apprendre de nouvelles stratégies pour faire croître votre entreprise.",
        image: "/assets/images/event2.jpg",
        duration: "1h30",
            youtubeId: "dQw4w9WgXcQ",
            content: `
            Cet atelier de formation business a été une occasion précieuse pour les jeunes entrepreneurs
            de renforcer leurs compétences, d’apprendre de nouvelles stratégies et de se connecter avec
            des experts du domaine. Les participants ont pu bénéficier de conseils pratiques, d’études
            de cas inspirantes et d’un environnement propice à l’échange d’idées. Cet événement a contribué
            à stimuler la croissance des entreprises émergentes et à renforcer l’écosystème entrepreneurial local.
            `,
      },
      {

        slug: "rencontre-investisseurs-3",
        title: "Rencontre avec investisseurs",
        description: "Rejoignez-nous pour une rencontre avec des investisseurs passionnés qui souhaitent soutenir les projets innovants et les entreprises en développement.",
        image: "/assets/images/event3.jpg",
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
      },
      {
        slug: "rencontre-investisseurs-4",
        title: "Rencontre avec investisseurs",
        description: "Rejoignez-nous pour une rencontre avec des investisseurs passionnés qui souhaitent soutenir les projets innovants et les entreprises en développement.",
        image: "/assets/images/event4.jpg",
        duration: "3min",
        youtubeId: "dQw4w9WgXcQ",
            content: `
            Cette rencontre avec des investisseurs a été une opportunité exceptionnelle pour les jeunes
            entrepreneurs de présenter leurs projets à des acteurs clés du financement. Les participants
            ont pu échanger directement avec des investisseurs passionnés, obtenir des retours précieux
            et explorer des possibilités de collaboration. Cet événement a renforcé les liens entre les
            porteurs de projets et les investisseurs, contribuant ainsi à créer un écosystème dynamique
            et propice à la croissance des entreprises innovantes.
            `,
      },
      {
        slug: "conference-uac-habib",
        title: "Rencontre avec Habib Aboukhedoud à l'UAC",
        image: "/assets/images/event5.jpg",
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
    },
      {
        slug: "conference-uac-jeunesse",
        title:
        "Séance d'échanges du Commandant Habib Aboukhedoud avec la jeunesse béninoise",

        image: "/assets/images/event6.jpg",
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
    },
]