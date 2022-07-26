export interface User {
    login: string
    id: number;
    node_id: string
    avatar_url: string
    gravatar_id: string
    url: string
    html_url: string
    followers_url:string
    following_url: string
    gists_url: string
    starred_url: string
    subscriptions_url: string
    organizations_url: string
    repos_url: string
    events_url: string
    received_events_url: string
    type: "Organization" | "User";
    site_admin: boolean
    score: number
}

export interface UserDetails extends Omit<User, 'score'> {
    name: string | null
    company:string | null
    blog: string | null
    location: string | null
    email: string | null
    hireable: string | null
    bio: string | null
    twitter_username: string | null
    public_repos: number
    public_gists: number
    followers: number
    following: number
    created_at: Date
    updated_at: Date
}


export type SearchByType = 'email' | 'fullname' | 'login' | 'user' | 'name' | 'description' | 'topics' | 'readme';
