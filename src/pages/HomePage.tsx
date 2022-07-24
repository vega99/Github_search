import React from "react";
import Title from "../components/Title";

const HomePage = () => {
    return (
        <div>
            <Title title="Github Search" />
            <p className="lh-lg text-justify font-monospace text-white">
                Esto es una aplicacion para buscar usuarios y repositorios de Github, ya sea
                por login, nombre, nombre completo o usuario. La api de Github
                esta limitada a solo 10 request por minuto
            </p>
        </div>
    );
};

export default HomePage;
