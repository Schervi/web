import Head from "next/head";
import styles from '../styles/Home.module.css'

const Home = () => {
    return (
        <>
            <Head>
                <title>ColdDev | Full Stack</title>
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                <meta property="og:description" content="I make things for people on the web. Check out my website to learn more." />
                <meta property="twitter:description" content="I make things for people on the web. Check out my website to learn more." />
                <meta property="theme-color" content="#00aeff" />
                <meta property="og:title" content="ColdDev | Home" />
                <meta property="og:type" content="website" />
                <meta property="og:image:type" content="Image/png" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    );
}

export default Home;