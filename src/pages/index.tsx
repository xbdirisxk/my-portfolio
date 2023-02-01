import Head from "next/head";
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Abdirisak Mohamed</title>
        <meta name="description" content="abdirisak portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="">
        <header>
          <h1>{`Hi 👋 My Name is Abdirisak Mohamed`}</h1>
        </header>
        <section>
          <p>
            {`I'm a full stack developer who loves nothing more than turning code
          into beautiful, functional websites that solve real problems for
          people. I've got a sharp eye for design and a passion for writing
          clean, efficient code. My toolbox is packed with all the latest tech,
          including Typescript, Nextjs, React Native, and Node.js, and I'm never
          happier than when I'm tinkering with a new database (especially
          MongoDB, MySQL, and PostgreSQL). I'm a problem-solver at heart and I
          enjoy nothing more than digging into a tricky issue to find a creative
          solution. And when it all comes together in a seamless, intuitive user
          experience? Pure magic. I can't wait to bring my skills and enthusiasm
          to a fast-paced, dynamic work environment and tackle some exciting new
          projects!`}
          </p>
        </section>
        {/* <hr /> */}
        <footer>
          <p>Copyright ©2023 Abdirisak</p>
        </footer>
      </main>
    </>
  );
}
