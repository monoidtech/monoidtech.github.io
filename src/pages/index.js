import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import featureImage from "../../static/images/background-tech.jpg";
import thumbnailCode from "../../static/images/code.jpg"
import thumbnailBigData from "../../static/images/big_data.jpg"
import thumbnailMachineLearning from "../../static/images/ml.jpg"
import thumbnailBlockchain from "../../static/images/blockchain.jpg"
import thumbnailStaff from "../../static/images/feature-user.png"

const IndexPage = () => (
    <Layout>
        <SEO title="Monoid Technologies - Tech made simple"/>

        <div className={"page-header home"}>
            <h1>Technology made simple</h1>
            <p>Monoid Ltd. gives your company the opportunity to solve difficult problems<br/>in an efficient and elegant manner.</p>
            <img alt={"Dashboard"} src={featureImage}/>
        </div>

        <div className={"container"}>
            <div className={"features"}>
                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Event"} src={thumbnailCode}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Software development</h2>
                                <p>Our rock star developers can build any solution for you.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Big Data</h2>
                                <p>Big data is an asset for any company,<br/>we can help you to use them in a meaningful way for your business.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Big Data"} src={thumbnailBigData}/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"News"} src={thumbnailMachineLearning}/>
                            </div>
                        </div>

                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Machine learning</h2>
                                <p>We specialize in Deep learning and classical statistical models.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={"feature__item"}>
                    <div className={"row"}>
                        <div className={"col-6"}>
                            <div className={"feature__content"}>
                                <h2>Blockchain</h2>
                                <p>We can help you make the most and apply the bleeding edge blockchain technologies.</p>
                            </div>
                        </div>

                        <div className={"col-6 first"}>
                            <div className={"thumbnail"}>
                                <img alt={"Team"} src={thumbnailBlockchain}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default IndexPage
