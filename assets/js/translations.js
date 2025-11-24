const translations = {
  en: {
    "nav.welcome": "Welcome to my Portfolio",
    "nav.home": "Home",
    "nav.skills": "Skills",
    "nav.certificates": "Certificates",
    "nav.events": "Training",
    "nav.experience": "Contat",
    "nav.values": "Values",
    "nav.projects": "Projects",
    "nav.contact": "Contact",
     "hero.body": `My name is <strong>Robson Augusto</strong>, I work as a <strong>Software Developer</strong> at DL
    Eletrônicos. I am an <strong>Electronics Technician</strong> with a degree in Industrial Automation from Escola Técnica Francisco Moreira da
    Costa and currently pursuing a degree in <strong>Information Systems</strong> at Uninter (5th semester).
    <br><br>
    I have over <strong>3 years of hands-on experience</strong> in technology, working with the main tools and methodologies in the market. My main skills include: development in
    <strong>Java</strong> and <strong>Angular</strong>, programming in <strong>ADVPL</strong> for the Protheus ERP,
    applying <strong>software development best practices</strong>, code versioning, and fundamentals in
    <strong>Cybersecurity</strong>.
    <br><br>
    In addition to practical experience, I also hold <strong>recognized course certifications</strong>, which reinforce my
    commitment to continuous learning and professional growth.`,
    "projects.title": "My Skills",
    "hero.tagline": "About me:",
    "hero.hello": "Hello,",
    "read.more":"Read more",
    "certificate":"Certificate",
    "skills.ocuppation1": "Back-end Development",
    "skills.description1": "Java + Spring Boot programming for building APIs, web applications, and microservices.",

    "skills.ocuppation2": "ERP Protheus",
    "skills.description2": "Development in ADVPL/TL++, customizations, reports, API/WebService integrations, and technical support.",

    "skills.ocuppation3": "SQL Databases",
    "skills.description3": "Experience with databases such as PostgreSQL and MySQL, SQL queries, maintenance, query optimization, and data manipulation.",

    "skills.ocuppation4": "Code Versioning",
    "skills.description4": "Experience in code versioning (GitHub/GitLab), following best practices for commits, branches, and team collaboration.",

    "skills.ocuppation5": "Front-end Development",
    "skills.description5": "Front-end development using technologies like Angular, Tailwind, and Bootstrap to build web pages and applications.",
      "events.desc2": "Software development course",
      "events":"Education",
      "events.desc1":"Technical course in industrial automation",
      "events.desc3":"Java development with Spring Boot",
      "experience":"Contact",
    "footer.rights":"All rights reserved.",
    "footer.back_to_top":"Back to Top"
     
  },
  pt: {
    "nav.welcome": "Bem Vindo ao meu Portifólio",
    "nav.home": "Início",
    "nav.skills": "Habilidades",
    "nav.certificates": "Formação",
    "nav.events": "Formação",
    "nav.experience": "Contato",
    "nav.values": "Valores",
    "nav.projects": "Projetos",
    "nav.contact": "Contato",
    "hero.body": `Meu nome é <strong>Robson Augusto</strong>, atuo como <strong>Desenvolvedor de Software</strong> na empresa DL
    Eletrônicos. Sou <strong>Técnico em Eletrônica</strong> com formação em Automação Industrial pela Escola Técnica Francisco Moreira da
    Costa e graduando em <strong>Sistemas de Informação</strong> pela Uninter (5° Período).
    <br><br>
    Possuo mais de <strong>3 anos de experiência prática</strong> em tecnologia, trabalhando com as principais
    ferramentas e metodologias do mercado. Minhas principais habilidades incluem: desenvolvimento em
    <strong>Java</strong> e <strong>Angular</strong>, programação em <strong>ADVPL</strong> para o ERP Protheus,
    aplicação de <strong>boas práticas de desenvolvimento de software</strong>, versionamento de código e fundamentos em
    <strong>Cibersegurança</strong>.
    <br><br>
    Além da experiência prática, também possuo <strong>certificações em cursos reconhecidos</strong>, que reforçam meu
    compromisso com o aprendizado contínuo e a evolução profissional.`,
    "projects.title": "Minhas Habilidades",
    "hero.tagline": "Sobre Mim:",
    "hero.hello":"Olá,",
     "skills.ocuppation1": "Desenvolvimento Back-end",
    "skills.description1": "Programação Java + Spring Boot para construção de API's, aplicações Web e microserviços.",

    "skills.ocuppation2": "ERP Protheus",
    "skills.description2": "Desenvolvimento em ADVPL/TL++, customizações, relatórios, integração com APIs/WebServices e suporte técnico.",

    "skills.ocuppation3": "Banco de dados SQL",
    "skills.description3": "Experiência com bancos de dados como PostgreSQL, MySQL, consultas SQL, manutenção, otimização de queries e manipulação de dados.",

    "skills.ocuppation4": "Versionamento de código",
    "skills.description4": "Experiência em versionamento de código (GitHub/GitLab), seguindo boas práticas de commits, branches e colaboração em equipe.",

    "skills.ocuppation5": "Desenvolvimento Front-end",
    "skills.description5": "Desenvolvimento front-end utilizando tecnologias como Angular, Tailwind e Bootstrap para construção de páginas e aplicações web.",
    "events":"Formação",
    "experience":"Contato",
    "certificate":"Certificado",
    "events.desc1":"Curso Técnico em automação industrial",
    "events.desc2":"Curso em desenvolvimento de software",
    "events.desc3":"Desenvolvimento Java com Spring Boot",
    "read.more":"Leia mais",
      "footer.rights":"Todos os direitos reservados.",
      "footer.back_to_top":"Voltar ao Topo"
  }
};

function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key]; // mantém <strong>, <br>, etc
    }
  });

  localStorage.setItem("lang", lang);
}


// Inicialização
document.addEventListener("DOMContentLoaded", () => {
  const langSelect = document.getElementById("langSelect");
  const langSelectMobile = document.getElementById("langSelectMobile");

  const savedLang = localStorage.getItem("lang") || "pt";

  if (langSelect) langSelect.value = savedLang;
  if (langSelectMobile) langSelectMobile.value = savedLang;

  setLanguage(savedLang);

  if (langSelect) {
    langSelect.addEventListener("change", (e) => {
      setLanguage(e.target.value);
      if (langSelectMobile) langSelectMobile.value = e.target.value;
    });
  }

  if (langSelectMobile) {
    langSelectMobile.addEventListener("change", (e) => {
      setLanguage(e.target.value);
      if (langSelect) langSelect.value = e.target.value;
    });
  }
});