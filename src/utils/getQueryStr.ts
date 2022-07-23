import type { SearchBy } from "../global/user.interface";

const queryString = {
    login: (text: string) => `${text} in:login type:user`,
    name: (text: string) => `${text} in:name type:user`,
    user: (text: string) => `user:${text} type:user`,
    fullname: (text: string) => `fullname:${text} type:user`,
    email: (text: string) => `${text} in:email type:user`,
}

export default function(value: SearchBy, text: string){
    return queryString[value](text);
}