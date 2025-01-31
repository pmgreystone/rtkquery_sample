import { configureStore } from "@reduxjs/toolkit"
import { setupListeners } from "@reduxjs/toolkit/query"

import blogApis from "./services/blogApis.ts"
import githubApis from "./services/githubApis.ts"
import counterReducer from "./services/counterReducer.ts"

const store = configureStore({
    reducer: {
        [blogApis.reducerPath]: blogApis.reducer,
        [githubApis.reducerPath]: githubApis.reducer,
        counter: counterReducer
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware()
        .concat(blogApis.middleware)
        .concat(githubApis.middleware)
    }
})

setupListeners(store.dispatch)

export default store