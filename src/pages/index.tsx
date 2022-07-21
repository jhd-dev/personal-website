import type { NextPage } from 'next';
import Head from 'next/head';

const allTechnologies: TechnologyProps[] = [
    {
        name: 'TailwindCSS',
        icon: '',
    },
];

type ProjectCardProps = {
    name: string;
    description: string;
    images?: string[];
    githubLink?: string;
    externalLink?: string;
    technologies?: TechnologyProps[];
};

type TechnologyProps = {
    name: string;
    icon: string;
};

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>Jonathan Doliver</title>
                <meta
                    name="description"
                    content="Personal website for Jonathan Doliver"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className="container mx-auto flex flex-col items-center justify-center h-screen p-4">
                <h1 className="text-5xl md:text-[5rem] leading-normal font-extrabold text-gray-700">
                    Jonathan Doliver
                </h1>
                <p className="text-2xl text-gray-700">Projects:</p>
                <div className="grid gap-3 pt-3 mt-3 text-center md:grid-cols-3 lg:w-2/3">
                    <ProjectCard
                        name="Personal Website"
                        description="The React framework for production"
                        githubLink="https://nextjs.org/"
                    />
                    <ProjectCard
                        name="Bad Day to Be a Hero"
                        description="Strongly typed programming language that builds on JavaScript, giving you better tooling at any scale"
                        githubLink="https://www.typescriptlang.org/"
                    />
                    <ProjectCard
                        name="Anki Speed Limit"
                        description="Rapidly build modern websites without ever leaving your HTML"
                        githubLink="https://tailwindcss.com/"
                        externalLink="https://anki.com/"
                    />
                </div>
            </main>
        </>
    );
};

const ProjectCard = ({
    name,
    description,
    images,
    githubLink,
    externalLink,
    technologies,
}: ProjectCardProps) => {
    return (
        <section className="flex flex-col justify-center p-6 duration-500 border-2 border-gray-500 rounded shadow-xl motion-safe:hover:scale-105">
            <h2 className="text-lg text-gray-700">{name}</h2>
            <p className="text-sm text-gray-600">{description}</p>
            <section className="flex flex-row justify-center items-center text-center p-3">
                {githubLink && (
                    <a
                        className="text-sm underline text-cyan-800 hover:text-cyan-900 decoration-dotted underline-offset-2"
                        href={githubLink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        GitHub
                    </a>
                )}
                {externalLink && (
                    <a
                        className="text-sm underline text-cyan-800 hover:text-cyan-900 decoration-dotted underline-offset-2"
                        href={externalLink}
                        target="_blank"
                        rel="noreferrer"
                    >
                        External
                    </a>
                )}
            </section>
            <section className="mt-3 "></section>
        </section>
    );
};

export default Home;
