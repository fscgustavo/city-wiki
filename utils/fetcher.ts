import { env } from "@/env"





// eslint-disable-next-line no-undef
type Config = RequestInit & {
    method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
};

type Request = Omit<Config, 'body'> & {
    body?: unknown;
};


export function fetcher<T = unknown>(endpoint: string, { body, ...customConfig }: Request = {}) {
    const headers = { 'content-type': 'application/json' }

    let config: Config = {
        method: body ? 'POST' : 'GET',
        credentials: "include",
        ...customConfig,
        headers: {
            'X-RapidAPI-Key': env.NEXT_PUBLIC_RAPID_API_KEY,
            ...headers,
            ...customConfig.headers,
        },
    }

    if (body) {
        config = {
            ...config,
            body: JSON.stringify(body)
        }
    }


    return fetch(endpoint, config)
        .then(async response => {
            if (response.ok) {
                try {
                    return { data: await response.json() as T }
                } catch {
                    return { data: null }
                }
            } else {
                const errorMessage = await response.text()
                return Promise.reject(new Error(errorMessage))
            }
        })
}