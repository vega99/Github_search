interface Route {
    path: string;
    title: string;
}

const routes: Route[] = [
    {
        path: "/users",
        title: "Users",
    },
    {
        path: "/repositories",
        title: "Repositories",
    },
];

export default routes;
