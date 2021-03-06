import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";

const features = [
  {
    title: <>Products</>,
    imageUrl: "img/product-illustration-01.png",
    description: (
      <>
        Product descriptions providing detailed information on the features offered, the benefits to users and the technologies involved.
      </>
    ),
  },
  {
    title: <>Documentation</>,
    imageUrl: "img/documentation-illustration-02.png",
    description: (
      <>
        Provides develpers all the information required to use the Glasswall products 
	with example code in a variety of languages and step by step guides.
      </>
    ),
  },
  {
    title: <>Use Cases</>,
    imageUrl: "img/use-cases-illustration-03.png",
    description: (
      <>
        How can the Glasswall Products help you. We've provided a number of use cases that cover common scenarios.
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    
    <Layout
      title={`Trust every file with Glasswall Solutions`}
      description="The online knowledge base for Glasswall technologies and products, with code examples and detailed CDR Use Cases."
    >
      <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans&display=swap" rel="stylesheet" /> 
      <header className={classnames("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                "button button--outline button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/getting-started")}
            >
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
