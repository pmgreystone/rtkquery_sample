import "../css/styles.css"
import "../css/index.css"

import React, { useState, useEffect } from "react"

import { Routes, Route } from "react-router"
import { Link } from "react-router-dom"

import CommonHeaderComponent from "./components/common/CommonHeaderComponent.tsx"

import DatasetComponent from "./components/first_blog/DatasetComponent.tsx"
import QuestionsComponent from "./components/first_blog/QuestionsComponent.tsx"
import CleanerDataComponent from "./components/first_blog/CleanerDataComponent.tsx"
import NumberedQuestionsComponent from "./components/first_blog/NumberedQuestionsComponent.tsx"
import ImprovementComponent from "./components/first_blog/ImprovementComponent.tsx"
import SummaryComponent from "./components/first_blog/SummaryComponent.tsx"

import { Provider } from "react-redux"
import store from "./store.ts"

import { ArticleComponent, ReposComponent, BlogsApiComponent } from "./components/ApiComponents.tsx"

const BlogContent = () => {
    return (
        <article className="mb-4">
            <div className="container px-4 px-lg-5">
                <div className="row gx-4 gx-lg-5 justify-content-center">
                    <div className="col-md-10 col-lg-8">
                        <p>This datascience project blog describes the dataset chosen by the author, and the reason to do so. Following this, it talks about the general problems that were faced working with the data. Questions to address from the dataset were pre-determined. However, often times, as the author has observed, as the grip on the data increases by different ways that help understand meaningful relations - the capacity to ask the right questions increases. Being the first project, it took the author some time to play with the data, and come up with anything useful for the audience. The blog also contains some technical details, which will be progressively moved to a github link <a className="link-primary" href="https://github.com/pattmehta/Area_production_and_farm_gate_value_of_marketed_fruits">here</a>.</p>
                        <DatasetComponent />
                        <QuestionsComponent />
                        <CleanerDataComponent />
                        <NumberedQuestionsComponent />
                        <ImprovementComponent />
                        <SummaryComponent />
                    </div>
                </div>
            </div>
        </article>
    )
}

/*const Home = () => {
    return (
        <>
            <CommonHeaderComponent />
            <BlogContent />
        </>
    )
}*/


interface AboutImgProps {
    src: string
}
const AboutImg = (props: AboutImgProps) => {

    const styles = {
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat no-repeat",
        backgroundSize: "contain"
    }

    return (
        <div id="aboutImg" style={{background: `url(${props.src})`, ...styles}}></div>
    )
}

const AboutComponent = () => {
    const imgSrc = "https://media.licdn.com/dms/image/v2/C5103AQH-gqqPAqyx_w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1516716588180?e=2147483647&v=beta&t=UNrsbIMYD2aC9hSVCNMLai_-ad0sLjtO77GMUb0qgmI"

    return (
        <>
            <h5>Prateek's Articles</h5>
            <AboutImg src={imgSrc} /> 
        </>
    )
}

const Spacer = () => {
    return (
        <span className="spacer"></span>
    )
}

const Home = () => {
    return (
        <div id="content">
            <div id="aboutContainer"><AboutComponent /></div>
            <div id="blogsParentContainer">
                <div id="blogsNav"></div>
                <div id="blogsContainer">
                    <div id="blogs">
                        <ReposComponent />
                        <Spacer />
                    </div>
                </div>
            </div>
        </div>
    )
}

const About = () => {
    return (
        <>
            <div>about</div>
            <Link to="/">home</Link>
        </>
    )
}

const ReactRouterApp = () => {
    return (
        <Provider store={store}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Provider>
    );
};

export default ReactRouterApp