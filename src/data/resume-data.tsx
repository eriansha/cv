import type { ResumeData } from "@/lib/types";

export const RESUME_DATA: ResumeData = {
  name: "Ivan Putra Eriansya",
  initials: "Ivan",
  location: "jakarta, Indonesia",
  locationLink: "https://www.google.com/maps/place/Jakarta",
  about: "Full Stack Engineer dedicated to building high-quality products.",
  summary: (
    <>
      A Full Stack Software Engineer with 7+ years of experience in creating
      scalable web applications. Expertise in React, Node.js, and Ruby on Rails,
      with a strong foundation in both frontend and backend technologies.
      Passionate about learning new technologies and improving development
      processes.
    </>
  ),
  avatarUrl: "https://avatars.githubusercontent.com/u/18480194",
  personalWebsiteUrl: "",
  contact: {
    email: "eriansha.van@gmail.com",
    tel: "+6281314520810",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/eriansha",
        icon: "github",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/mivanputra/",
        icon: "linkedin",
      },
      // TODO: add twitter here
      // {
      //   name: "X",
      //   url: "https://x.com/BartoszJarocki",
      //   icon: "x",
      // },
    ],
  },
  education: [
    {
      school: "Universitas Budi Luhur",
      link: "https://www.budiluhur.ac.id/",
      degree: "Bachelor's Degree in Informatics Engineering",
      start: "Sep 2014",
      end: "May 2018",
    },
  ],
  work: [
    {
      company: "Bank Neo Commerce",
      link: "https://www.bankneocommerce.co.id/id/home",
      badges: ["On Site", "React", "NextJS", "Vite", "SpringBoot"],
      title: "Software Engineer",
      start: "Sept 2024",
      end: null,
      description: (
        <>
          Working on improving digital transaction experiences via QRIS and
          Virtual Account systems.
          <ul className="list-inside list-disc">
            <li>
              Led the revamp of the Merchant Dashboard to support desktop
              layouts, including enhancing mobile-view components for responsive
              behavior on larger screens. It was built using React, Typescript,
              Webpack, and Vite.
            </li>
            <li>
              Maintained and extended features in the Internal Merchant
              Management Dashboard, working with legacy codebases to ensure
              system stability and ongoing functionality.
            </li>
            <li>
              Directed the end-to-end development of the Open API website as the
              primary frontend engineer using NextJS, with additional
              contributions on the backend to streamline QRIS merchant
              onboarding.
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Tinkerlust",
      link: "https://www.tinkerlust.com/",
      badges: ["Remote", "React", "NextJS", "Ruby on Rails"],
      title: "Full Stack Software Engineer",
      start: "Jun 2023",
      end: "Jul 2024",
      description: (
        <>
          Leading engineering platform for tech-based secondhand fashion
          ecommerce
          <ul className="list-inside list-disc">
            <li>
              Led the migration of two user-facing frontend web applications
              into a monorepo to streamline our frontend architecture using NPM
              Workspaces. This resulted in easier maintenance and improved
              consistency in common libraries used across the two apps.
            </li>
            <li>
              Identified and led the development of rolling deployments that
              eliminated downtimes of our user-facing NextJS web application
            </li>
            <li>
              Led the development of Tinkerlust UI Library using React.js and
              Vite, adhering to the Design System and company brand guidelines
              across all web applications
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Sayurbox",
      link: "https://sayurbox.com",
      badges: ["Remote", "React Native", "GraphQL", "WebDriver I/O", "Svelte"],
      title: "Software Developer Engineer 2",
      start: "Mar 2022",
      end: "May 2023",
      description: (
        <>
          Tech-powered online grocery supply chain. Series C-funded ($139mi
          raised) perferendis.
          <ul className="list-inside list-disc">
            <li>
              Increased the number of customers building baskets with an average
              order of 150k from 21% to 53.03% by developing “Tebus Murah” on
              the Frontend side, both web and mobile, using React Native and
              GraphQL
            </li>
            <li>
              Reduced B2C abusers from a median of 4.5% to 2.03% by developing a
              device verification feature on both web and mobile using React
              Native, effectively preventing the same person from abusing
              welcome vouchers
            </li>
            <li>
              Led the e2e test automation with the Engineering Efficiency team
              on both web and Android platforms using WebDriver I/O for
              improving test coverage and reducing manual testing
            </li>
          </ul>
        </>
      ),
    },
    {
      company: "Tinkerlust",
      link: "https://www.tinkerlust.com/",
      badges: ["On Site", "React", "Flask", "Ruby on Rails"],
      title: "Full Stack Software Engineer",
      start: "Sep 2019",
      end: "Mar 2022",
      description:
        "Working as Full Stack Engineer to develop and maintance ecommerce and internal dashboard",
    },
    {
      company: "Ecomindo",
      link: "https://www.ecomindo.com/",
      badges: ["On Site", "ASP.NET", "MS Sharepoint"],
      title: "Web Developer",
      start: "Mar 2018",
      end: "Sep 2019",
      description:
        "Developed an initial public offering system in Indonesian Stock Exchange to increase the number of investors, especially retail, encourage transparency in share allocation, and more effective regulatory supervision using .NET tech stacks",
    },
  ],
  skills: [
    "React/Next.js/",
    "Vite ",
    "TypeScript",
    "Tailwind CSS",
    "Design Systems",
    "Ruby",
    "Ruby on Rails",
    "Node.js",
    "GraphQL",
    "Go",
    "SwiftUI",
    "AWS",
    "Sentry",
    "Datadog",
    "MYSQL",
  ],
  projects: [
    {
      title: "py-mail-expenses",
      techStack: ["Python", "Gmail API", "Spreadsheet API", "Antropics"],
      description:
        "Automated expense tracking system that monitors Gmail for bank transaction notifications and extracts transaction details for personal finance management",
      link: {
        label: "py-mail-expenses",
        href: "https://github.com/eriansha/py-mail-expenses",
      },
    },
  ],
} as const;
