import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
import { User } from "../global/user.interface";
import { Col, Row } from "react-bootstrap";
import UserItem from "../components/UserItem";
import Empty from "../components/Empty";
import Loading from "../components/Loading";
import Error from "../components/Error";
import type { SearchByType } from "../global/user.interface";
import { getUserQuery } from "../utils/getQueryStr";
import SearchBy from "../components/SearchBy";

const values: SearchByType[] = ["email", "user", "fullname", "login", "name"];

const UserPage = () => {
    const [value, setValue] = useState("");
    const [results, setResults] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [searchBy, setSearchBy] = useState<SearchByType>("login");

    const onSearch = async () => {
        setLoading(true);
        let queryStr = getUserQuery(searchBy, value, 'user');
        try {
            const res = await fetch(
                `https://api.github.com/search/users?q=${queryStr}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            if (res.status === 403) {
                // Cuando la API de Github devuelve un status 403 es porque el límite de llamadas se ha excedido
                setLoading(false);
                return setError('Ups! Rate limit exceeded!');
            }
            const resData = await res.json();
            setError('');
            setResults(resData.items || []);
            setLoading(false);
        } catch (error) {
            setError('Ups!, Something went wrong');
            console.log(error);
        }
    };

    useEffect(() => {
        if (!value) return;
        //Una vez que el usuario empiece a escribir, pasarán 300 milisegundos para empezar a hacer el request a la api
        let delay = setTimeout(() => {
            onSearch();
        }, 300);

        // en caso de que el usuario cambie de página o sitio web, abortamos la petición al servidor
        return () => {
            //controller.abort();
            clearTimeout(delay);
        };
    }, [value]);

    const clearSearhbar = () => {
        setValue("");
        setResults([]);
    };

    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap">
                <Title title="Users" />
                <SearchBy
                    searchBy={searchBy}
                    values={values}
                    setSearchBy={setSearchBy}
                />
            </div>
            <SearchBar
                placeholder="Look for Github users"
                onChange={(e) => setValue(e.target.value)}
                value={value}
                clear={clearSearhbar}
            />
            {error ? (
                <Error error={error} />
            ) : loading ? (
                <Loading />
            ) : (
                <Row>
                    {results.length < 1 ? (
                        <Empty />
                    ) : (
                        results.map((user) => (
                            <Col md={6} lg={6} xl={4} key={user.id}>
                                <UserItem key={user.id} user={user} />
                            </Col>
                        ))
                    )}
                </Row>
            )}
        </div>
    );
};

export default UserPage;
