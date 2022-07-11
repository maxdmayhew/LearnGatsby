import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { StaticImage } from "gatsby-plugin-image"
import * as styles from "../components/index.module.css"

const SecondPage = () => (
  <Layout>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <StaticImage
      className={styles.catpic}
      src="../../content/img/cat1.jpeg"
      alt="a cute lil cat"
    />
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
    <StaticImage
      className={styles.catbanner2}
      src="../../content/img/cat2.jpeg"
      alt="a cute lil cat"
      loading="lazy"
      // aspectRatio={4 / 3}
    />
    <h2 className={styles.textCenter}>
      I like crunchy I like meaty Tender centers satisfies completely I like
      salmon I like chicken 🥩
    </h2>
  </Layout>
)

export default SecondPage
