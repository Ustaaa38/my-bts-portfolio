
const FormationSection = () => {
  return (
    <section id="formation" className="py-20 bg-gray-50 section-fade">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-12 text-center">Formation BTS SIO</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">SISR (Systèmes Informatiques aux Organisations)</h3>
            <p className="text-gray-600">
              La spécialité SISR est orientée vers la gestion, l'administration et la sécurité des systèmes et réseaux informatiques au sein des entreprises. Ce cursus vous prépare à devenir un expert dans la gestion des infrastructures informatiques critiques. Vous apprendrez à configurer, déployer et maintenir des réseaux complexes, tout en garantissant leur sécurité contre les attaques et vulnérabilités.
            </p>
            <p className="text-gray-600 mt-4">
              Au cours de cette formation, vous serez amené à travailler sur des systèmes d'exploitation tels que Linux et Windows Server, ainsi que sur des équipements réseaux comme les routeurs et les switches. Vous développerez des compétences en gestion des serveurs, en virtualisation des ressources et en sécurité des réseaux. De plus, la spécialité SISR inclut des cours sur l'administration des bases de données et la gestion des incidents, vous permettant de maîtriser les outils essentiels pour assurer une infrastructure fiable et sécurisée.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-4">SLAM (Solutions Logicielles et Applications Métiers)</h3>
            <p className="text-gray-600">
              La spécialité SLAM forme les étudiants aux métiers du développement logiciel, en mettant l'accent sur la conception, le développement et la gestion des applications métiers spécifiques aux besoins des entreprises. Ce parcours vous amène à comprendre les enjeux des logiciels utilisés au sein des organisations et à créer des solutions efficaces et adaptées à chaque contexte.
            </p>
            <p className="text-gray-600 mt-4">
              Vous apprendrez à utiliser des langages de programmation modernes comme Java, Python, PHP, et à développer des applications web, mobiles ou des logiciels de gestion. Vous serez initié à la création de bases de données, à l'intégration des applications, ainsi qu'aux processus de tests et de déploiement des logiciels. Un autre aspect important de la formation SLAM est la gestion de projets de développement, ce qui vous permet d'acquérir une méthodologie agile pour travailler efficacement en équipe et gérer des projets complexes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FormationSection;
