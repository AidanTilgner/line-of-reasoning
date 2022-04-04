import Head from "next/head";
import styles from "../styles/Dashboard.module.scss";
import NavButton from "./components/NavButton/NavButton";
import ProjectPreview from "./components/ProjectPreview/ProjectPreview";
import { randomBytes } from "crypto";

function Dashboard() {
  const projects = [
    {
      name: "Project 1",
      description: "This is a project",
      image: "https://source.unsplash.com/random/400x400",
    },
    {
      name: "Project 2",
      description: "This is a project",
      image: "https://source.unsplash.com/random/400x400",
    },
  ];

  return (
    <div>
      <Head>
        <title>Line of Reasoning</title>
        <meta name="description" content="Visualize your perspective" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavButton />
      <main className={styles.main}>
        <h1 className={styles.title}>Projects</h1>
        <div className={styles.projects}>
          {projects.map((project, idx) => {
            console.log("idx: ", idx);
            return (
              <div key={project.name + idx} className={styles.project}>
                <ProjectPreview
                  name={project.name}
                  description={project.description}
                  image={project.image}
                />
              </div>
            );
          })}
        </div>
      </main>
      <footer className="footer"></footer>
    </div>
  );
}

export default Dashboard;
