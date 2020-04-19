import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import informationImage from "../../static/images/Information-document.svg";
import eventImage from "../../static/images/Event-managment.svg";
import ProductivityImage from "../../static/images/Increase-Productivity.svg";
import happinessImage from "../../static/images/Make-happiness.svg";

const AboutPage = () => (
    <Layout>
        <SEO title="About"/>

        <div className={"page-header"}>
            <h2>What’s Monoid Technologies?</h2>
            <p>Monoid Ltd. is a consultancy company and a software building house.<br />We specialize in distributed Big Data systems, Machine Learning, data analytics and Blockchain.</p>
        </div>

        <div className={"container"}>
            <div className={"targets"}>
                <div className={"title"}>
                    <h2>Our Values</h2>
                </div>

                <div className={"row"}>
                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Information"} src={informationImage}/>
                            <h3>Deliver value</h3>
                            <p>Monoid Technologies is a company that trully believes in excellence. We are however at the same time pragmatic and our top priority is delivering value to our customers.</p>
                        </div>
                    </div>

                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Event"} src={eventImage}/>
                            <h3>Being Agile</h3>
                            <p>We strive in applying the best and most appropriate Agile methodologies in every occasion. Our team is continuously trying to improve and be responsive in an environment where the requirements might change constantly.</p>
                        </div>
                    </div>
                </div>

                <div className={"row"}>
                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Productivity"} src={ProductivityImage}/>
                            <h3>Data driven</h3>
                            <p>We make all our decisions in a data driven way. We automate the data collection, cleaning, augmentation so that we can be in a position of getting insightful information about the problem we try to solve every time.</p>
                        </div>
                    </div>

                    <div className={"col-6"}>
                        <div className={"item"}>
                            <img alt={"Happiness"} src={happinessImage}/>
                            <h3>Constant communication</h3>
                            <p>In Monoid Technologies we believe in honest an constant communication, within our team as well as our clients. Good communication is an essential element for any successful project</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)

export default AboutPage
