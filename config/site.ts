export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Ferryops",
  description: "Mendokumentasikan dan sharing segala hal terkait sains, teknologi dan programming.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "https://blog.ferryops.dev/",
    },
    {
      label: "Repo",
      href: "/repo",
    },
    {
      label: "Resume",
      href: "/resume",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Blog",
      href: "https://blog.ferryops.dev/",
    },
    {
      label: "Repo",
      href: "/repo",
    },
    {
      label: "Resume",
      href: "/resume",
    },
  ],
  links: {
    github: "https://github.com/ferryops",
    twitter: "https://twitter.com/ferryafbi",
    docs: "https://blog.ferryops.dev/",
    discord: "#",
    myLove: "#",
  },

  pengalaman: [
    {
      company: "Minergo Systems",
      position: "JavaScript Developer",
      duration: "Aug 2023 - Present",
      tools: ["React.js", "Node.js", "GIS", "MySQL"],
      description:
        "Bertanggung jawab merancang antarmuka web dengan ekosistem React, Pengembangan Back-End dengan Node.js, Integrasi API.",
    },
    {
      company: "PT Media Kreasi Abadi",
      position: "Full Stack Developer",
      duration: "Jan 2023 - Jun 2023",
      tools: ["React.js", "Next.js", "TypeScript", "PostgreSQL"],
      description:
        "Magang ini merupakan program Kampus Merdeka Batch 4 oleh Kemendikbud, disini aku berkesempatan menjadi FullStack Developer dan bertanggung jawab dalam project Kerjatim, mulai dari front-end hingga back-end, stack yang digunakan (React, Native CSS, Postgres dan Auth Firebase)",
    },
    {
      company: "Kominfo RI",
      position: "Cyber Security Analyst",
      duration: "Aug 2022 - Jan 2023",
      tools: ["Cisco", "Linux", "Networks"],
      description:
        "Magang ini merupakan program Kampus Merdeka Batch 3 oleh Kemendikbud, disini aku berkesempatan menjadi Cybersecurity Analyst dan belajar menganalisis jaringan komputer skala kecil dan menengah, merancang jaringan komputer perusahaan, mengevaluasi peringatan keamanan dengan SIEM, menerbitkan artikel ilmiah, dan sertifikasi Cisco Certified Network Associate (CCNA).",
    },
    {
      company: "PT Telkom Regional VI",
      position: "Back End Developer",
      duration: "Apr 2022 - Jul 2022",
      tools: ["PHP", "HTML", "CSS", "JavaScript"],
      description:
        "Berkesempatan menjadi mentee dalam program Digitalent Regional Internship sebagai Back end Developer, disini aku banyak belajar cara membuat dashboard dan Bot telegram dengan PHP Native.",
    },
  ],
};
