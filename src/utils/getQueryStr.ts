import type { SearchByType } from "../global/user.interface";


const queryString = {
    login: (text: string, type: QueryType) => `${text} in:login type:user`,
    name: (text: string, type: QueryType) => type === 'repo' ?`${text} in:name` : `${text} in:name type:user`,
    user: (text: string, type: QueryType) => `user:${text} type:user`,
    fullname: (text: string, type: QueryType) => `fullname:${text} type:user`,
    email: (text: string, type: QueryType) => `${text} in:email type:user`,
    description: (text: string, type: QueryType) => `${text} in:description `,
    topics: (text: string, type: QueryType) => `${text} in:topics`,
    readme: (text: string, type: QueryType) => `${text} in:readme `,
};

type QueryType = 'user' | 'repo'

export  function getUserQuery(value: SearchByType, text: string, type: QueryType ) {
    return queryString[value](text, type);
}

