type BiblioTextProps = {
    title: string;
    description: string;
    image: string;
    file: string;
    lang: "fr" | "en";
};
export const biblioTextData: BiblioTextProps[] = [
    {
        title: "MA ROUTE, MA FOI, MA MISSION",
        description: "Ma route, ma foi, ma mission est un appel vibrant à la jeunesse africaine à croire en elle-même, à agir avec discipline et foi, et à construire l’avenir sans attendre l’aide extérieure. À travers des récits réels et des leçons tirées de son expérience, Habib Aboukhedoud montre que la réussite vient de la rigueur, du travail et de l’unité. Il encourage les jeunes à transformer leurs talents en actions concrètes et à servir leur pays avec intégrité. Ce livre est à la fois un témoignage, une source d’inspiration et un guide pour une génération décidée à bâtir l’Afrique de demain.",
        image: "/assets/images/bibli1.jpg",
        file: "/assets/uploads/Ma-route-ma-foi-ma-mission.pdf",
        lang: "fr",
    },
    {
        title: "MA PATH, MA FAITH, MY MISSION",
        description: "My Path, My Faith, My Mission is a powerful call to African youth to believe in themselves, to act with discipline and faith, and to build the future without waiting for outside help. Through real-life stories and lessons drawn from his experience, Habib Aboukhedoud shows that success comes from rigor, hard work, and unity. He encourages young people to transform their talents into concrete actions and to serve their country with integrity. This book is both a testimony, a source of inspiration, and a guide for a generation determined to build the Africa of tomorrow.",
        image: "/assets/images/bibli2.jpg",
        file: "/assets/uploads/My-Path-My-Faith-My-Mission.pdf",
        lang: "en",
    },
]