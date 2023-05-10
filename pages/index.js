import Head from "next/head";
import Appbar from "@/components/Appbar";
import styles from "@/styles/Home.module.css";
import Hero from "@/components/Hero";
import StarsCanvas from "@/components/canvas/Stars";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience";

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Appbar />
        <div style={{ position: "relative", zIndex: "-1" }}>
          <StarsCanvas />
          <Hero />
        </div>
        <About />
        <WorkExperience />
      </main>
    </>
  );
}

