import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

interface License {
    key: string;
    name: string;
    spdx_id: string;
    url: string;
    node_id: string;
}

interface Owner {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    following_url: string;
    gists_url: string;
    starred_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    events_url: string;
    received_events_url: string;
    type: string;
    user_view_type: string;
    site_admin: boolean;
}

interface Repository {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
    private: boolean;
    owner: Owner;
    html_url: string;
    description: string;
    fork: boolean;
    url: string;
    forks_url: string;
    keys_url: string;
    collaborators_url: string;
    teams_url: string;
    hooks_url: string;
    issue_events_url: string;
    events_url: string;
    assignees_url: string;
    branches_url: string;
    tags_url: string;
    blobs_url: string;
    git_tags_url: string;
    git_refs_url: string;
    trees_url: string;
    statuses_url: string;
    languages_url: string;
    stargazers_url: string;
    contributors_url: string;
    subscribers_url: string;
    subscription_url: string;
    commits_url: string;
    git_commits_url: string;
    comments_url: string;
    issue_comment_url: string;
    contents_url: string;
    compare_url: string;
    merges_url: string;
    archive_url: string;
    downloads_url: string;
    issues_url: string;
    pulls_url: string;
    milestones_url: string;
    notifications_url: string;
    labels_url: string;
    releases_url: string;
    deployments_url: string;
    created_at: string;
    updated_at: string;
    pushed_at: string;
    git_url: string;
    ssh_url: string;
    clone_url: string;
    svn_url: string;
    homepage: string | null;
    size: number;
    stargazers_count: number;
    watchers_count: number;
    language: string;
    has_issues: boolean;
    has_projects: boolean;
    has_downloads: boolean;
    has_wiki: boolean;
    has_pages: boolean;
    has_discussions: boolean;
    forks_count: number;
    mirror_url: string | null;
    archived: boolean;
    disabled: boolean;
    open_issues_count: number;
    license: License;
    allow_forking: boolean;
    is_template: boolean;
    web_commit_signoff_required: boolean;
    topics: any[];
    visibility: string;
    forks: number;
    open_issues: number;
    watchers: number;
    default_branch: string;
}

interface Links {
    self: string;
    git: string;
    html: string;
}

interface FileContentMeta {
    name: string;
    path: string;
    sha: string;
    size: number;
    url: string;
    html_url: string;
    git_url: string;
    download_url: string;
    type: string;
    content: string;
    encoding: string;
    _links: Links;
}

interface FileContentMetaApiRequest {
    username: string,
    repo: string,
    relativePath: string
}

// id="repo-content-pjax-container"
// https://api.github.com/users/pattmehta/repos
const githubApisAbortController = new AbortController()
const githubApis = createApi({
    reducerPath: 'githubApis',
    baseQuery: fetchBaseQuery({
        signal: githubApisAbortController.signal,
        baseUrl: 'https://api.github.com',
        prepareHeaders: (headers) => {
            headers.set('Sec-Fetch-Dest', 'document')
            headers.set('Sec-Fetch-Mode', 'cors')
            headers.set('Sec-Fetch-Site', 'cross-site')
            headers.set('Content-Type', 'application/json')
            headers.set('sec-ch-ua-platform', '"macOS"')
            headers.set('sec-ch-ua', '"Google Chrome";v="131", "Chromium";v="131", "Not_A Brand";v="24"')
            headers.set('sec-ch-ua-mobile', '?0')
            return headers
        },

    }),
    endpoints: (builder) => ({
        getRepos: builder.query<Repository[], string>({
            query: (username) => ({ url: `users/${username}/repos`, method: 'GET' }),
            async onQueryStarted(queryArgument, queryLifeCycleApi) {
                console.log(`[query started with param ${queryArgument}]`)
                setTimeout(() => {console.log('[timeout]')}, 20000)
                const { queryFulfilled } = queryLifeCycleApi
                try {
                    const data = await queryFulfilled
                    console.log(`arraylength=${data.data.length} [queryFulfilled]`)
                } catch (error) {
                    console.log(`${error} [error reading data]`)
                }
            },
            async onCacheEntryAdded(_, api) {
                console.log('[cache entry added]')
                // In JavaScript, await can be used with both functions that return promises and with promises directly
                const { cacheDataLoaded, cacheEntryRemoved } = api
                try {
                    const data = await cacheDataLoaded
                    console.log(`arraylength=${data.data.length} [cacheDataLoaded]`)
                } catch (error) {
                    console.log(`${error} [error reading cache data]`)
                }
                await cacheEntryRemoved
                console.log('[cache entry removed]')
            },
        }),
        getFileContentMeta: builder.query<FileContentMeta, FileContentMetaApiRequest>({
            query: (apiRequest) => ({ url: `repos/${apiRequest.username}/${apiRequest.repo}/contents/${apiRequest.relativePath}`, method: 'GET' })
        })
    }),
    refetchOnReconnect: true,
    refetchOnFocus: true,
    keepUnusedDataFor: 20
})

// Re-exporting a type when 'isolatedModules' is enabled requires using 'export type'
export type { Repository, FileContentMeta, FileContentMetaApiRequest }
export const { useGetReposQuery, useGetFileContentMetaQuery } = githubApis
export { githubApisAbortController }
export default githubApis