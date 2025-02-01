import "../../css/styles.css"
import "../../css/index.css"

import React, { useEffect, useState } from "react"
import { FetchBaseQueryError } from "@reduxjs/toolkit/query"
import { SerializedError } from "@reduxjs/toolkit"

import { articles } from "../../articles.json"
import { Blog } from "../services/blogApis.ts"
import githubApis, { Repository, FileContentMeta, FileContentMetaApiRequest } from "../services/githubApis.ts"
import { useGetBlogsQuery, useCreateBlogMutation } from "../services/blogApis.ts"
import { useGetReposQuery, useGetFileContentMetaQuery } from "../services/githubApis.ts"
import { githubApisAbortController } from "../services/githubApis.ts"

interface Article {
    id: number
    title: string
    // type: "blog" | "project"
    type: string
    thumb: string
    url: string
}

const ArticleComponent = () => {

    return (
        <>
            {articles.map((item: Article) =>
                (<div key={item.id}><img className="thumb" src={`assets/img/thumbs/${item.thumb}`} /><span className="heading">#{item.id} {item.title}</span></div>))
            }
        </>
    )
}

function fetchContent(username: string, repo: string, relativePath: string) {
    // cors, no-cors, there is still empty body
    // Access to fetch at 'https://github.com/pattmehta/AsyncImage' from origin 'http://localhost:8089' has been blocked by
    // CORS policy: Response to preflight request doesn't pass access control check: No 'Access-Control-Allow-Origin' header
    // is present on the requested resource. If an opaque response serves your needs, set the request's mode to 'no-cors' to
    // fetch the resource with CORS disabled.Understand this error
    // e.g. GET https://github.com/pattmehta/AsyncImage net::ERR_FAILED

    let htmlPageUrl = `https://api.github.com/repos/${username}/${repo}/contents/${relativePath}` // README.md
    let configWithoutCors: RequestInit = {
        method: 'GET',
        mode: 'no-cors'
    }
    let configWithCors: RequestInit = {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Sec-Fetch-Dest': 'document',
            'Sec-Fetch-Mode': 'cors',
            'Sec-Fetch-Site': 'cross-site',
            'Content-Type': 'application/vnd.api+json',
            'sec-ch-ua-platform': '"macOS"',
            'sec-ch-ua': '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"',
            'sec-ch-ua-mobile': '?0'
        },

    }
    fetch(htmlPageUrl, configWithCors)
        .then((response) => {
            console.log(response)
            return response.json()
        })
        .then(response => {
            // const parser = new DOMParser()
            // const doc = parser.parseFromString(htmlString, "text/html")
            // console.log(doc.body)
            console.log(response)
        })
        .catch(error => console.log(error))
}

const ReposComponent = () => {

    const username = 'pattmehta'

    // note: no data type after use in generic, as it can cause error
    // return type is a query record, not a simple response data type
    const { data, error, isLoading, refetch } = useGetReposQuery(username, { skip: false })

    return (
        <>
            <h4 style={{marginTop: '10px'}}>Child Component (RTK Query Demo) <span style={{cursor:'pointer',backgroundColor:'yellow',padding:'2px',fontSize:'15px'}} onClick={(_) => refetch()}>refetch</span></h4>
            <div id="reposComponent">
                {
                    data && (data.filter((repo: Repository) => repo.owner.login === username).map((repo: Repository, index: number) => (<div key={repo.id}>
                        <a href={repo.html_url}>#{index + 1} {repo.name}</a>
                    </div>)))
                }
            </div>
        </>
    )
}

interface DebugErrorProps {
    error: FetchBaseQueryError | SerializedError
}
const DebugError = (props: DebugErrorProps) => {
    return (
        <>
            {
                ("status" in props.error) ? <span>{props.error.status}</span> :
                    (("message" in props.error) ? <span>{props.error.message}</span> : <span>error</span>)
            }
        </>
    )
}

const BlogsApiComponent = () => {

    const { data, error, isLoading } = useGetBlogsQuery()

    return (
        <>
            {error ? (<DebugError error={error} />) : (isLoading ? (<span>loading</span>) : (
                data!.map((item: Blog, index: number) => (<div><span className="thumb"></span><span className="heading">{index + 1} {item.title}</span></div>))
            ))}
        </>
    )
}

export {
    ArticleComponent,
    ReposComponent,
    BlogsApiComponent
}