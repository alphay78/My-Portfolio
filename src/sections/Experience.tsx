import { EvervaultCard } from "@/components/ui/evervault-card";
import { Timeline } from "@/components/ui/timeline";
import {
  IconBrandNextjs,
  IconBrandReact,
  IconBrandRedux,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandMongodb,
  IconBrandPrisma,
  IconBrandTypescript,
  IconBrandJavascript,
  IconBrandGolang,
  IconGitPullRequest,
  IconSql,
  IconGrain,
  IconBrandFramerMotion,
  IconBrandFlutter,
  // IconBrandDart,
  // IconBrandDotnet,
} from "@tabler/icons-react";

export const Experience = () => {
  const stack = [
    { name: "Next.js", logo: <IconBrandNextjs size={85} stroke={1.25} /> },
    { name: "React", logo: <IconBrandReact size={85} stroke={1.25} /> },
    { name: "Redux Toolkit", logo: <IconBrandRedux size={85} stroke={1.25} /> },
    {
      name: "Tailwind CSS",
      logo: <IconBrandTailwind size={85} stroke={1.25} />,
    },
    {
      name: "Framer Motion",
      logo: <IconBrandFramerMotion size={85} stroke={1.25} />,
    },

    { name: "Node.js", logo: <IconBrandNodejs size={85} stroke={1.25} /> },
    { name: "MongoDB", logo: <IconBrandMongodb size={85} stroke={1.25} /> },
    { name: "Prisma ORM", logo: <IconBrandPrisma size={85} stroke={1.25} /> },
    { name: "SQL", logo: <IconSql size={85} stroke={1.25} /> },
    { name: "Express.js", logo: <IconGrain size={85} stroke={1.25} /> },

    {
      name: "TypeScript",
      logo: <IconBrandTypescript size={85} stroke={1.25} />,
    },
    {
      name: "JavaScript",
      logo: <IconBrandJavascript size={85} stroke={1.25} />,
    },

    { name: "Flutter", logo: <IconBrandFlutter size={85} stroke={1.25} /> },
    // { name: "Dart", logo: <IconBrandDart size={85} stroke={1.25} /> },
    // { name: "ASP.NET", logo: <IconBrandDotnet size={85} stroke={1.25} /> },

    { name: "Go (Golang)", logo: <IconBrandGolang size={85} stroke={1.25} /> },
    {
      name: "Git & Collaboration",
      logo: <IconGitPullRequest size={85} stroke={1.25} />,
    },
  ];

  const data = [
    {
      title: "Frontend Developer",
      content: (
        <div>
          <h1 className="text-3xl md:text-5xl font-serif mb-6">
            Guba Technology
          </h1>
          <p className="text-sm md:text-[15px] leading-relaxed font-poppins">
            Working as a <b>Frontend Developer</b> on a large-scale
            <b> Bus Management System</b>, building modern, responsive, and
            performance-optimized user interfaces.
            <br />
            <br />I develop dashboards and operational screens for managing
            buses, routes, trips, drivers, and schedules using React, Next.js,
            Tailwind, and Redux Toolkit. I collaborate closely with backend
            engineers, product owners, and designers to deliver scalable and
            user-focused frontend solutions.
          </p>
        </div>
      ),
    },
    {
      title: "Project Manager",
      content: (
        <div>
          <h1 className="text-3xl md:text-5xl font-serif mb-6">
            Alta Counseling Ethiopia
          </h1>
          <p className="text-sm md:text-[15px] leading-relaxed font-poppins">
            Serving as a <b>Project Manager</b> for digital mental health
            solutions, bridging the gap between business goals, user needs, and
            technical execution.
            <br />
            <br />I lead project planning, define feature requirements,
            prioritize roadmaps, and collaborate with developers and
            stakeholders to ensure impactful, user-centered product delivery.
          </p>
        </div>
      ),
    },
  ];

  return (
    <section
      id="experience"
      className="flex flex-col items-center justify-center overflow-hidden"
    >
      <h1 className="font-cursive text-3xl md:text-5xl text-center mt-6">
        Professional Experience
      </h1>

      <p className="uppercase font-semibold tracking-widest bg-gradient-to-r from-emerald-300 to-sky-400 text-transparent bg-clip-text text-center mt-4 mb-10 max-w-2xl mx-auto">
        Frontend engineering, product ownership, and real-world systems
      </p>

      <div className="w-full mb-16">
        <Timeline data={data} />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 w-10/12 mx-auto">
        {stack.map((item) => (
          <div key={item.name} className="border border-white/20">
            <EvervaultCard text={item.name} icon={item.logo} />
          </div>
        ))}
      </div>
    </section>
  );
};
