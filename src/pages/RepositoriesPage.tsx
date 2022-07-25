import React, { useEffect, useState } from "react";
import SearchBar from "../components/SearchBar";
import SearchBy from "../components/SearchBy";
import Title from "../components/Title";
import { SearchByType } from "../global/user.interface";
import { getUserQuery } from "../utils/getQueryStr";
import { Repository } from "../global/repository.interface";
import Error from "../components/Error";
import Loading from "../components/Loading";
import { Col, Row } from "react-bootstrap";
import Empty from "../components/Empty";
import RepoItem from "../components/RepoItem";

const values: SearchByType[] = ["name", "description", "topics", "readme"];

const RepositoriesPage = () => {
    const [value, setValue] = useState("");
    const [searchBy, setSearchBy] = useState<SearchByType>("name");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [results, setResults] = useState<Repository[]>([])


    const search = async () => {
        setLoading(true);
        let queryStr = getUserQuery(searchBy, value, 'repo');
        try {
            const res = await fetch(
                `https://api.github.com/search/repositories?q=${queryStr}`,
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
                return setError('Ups! Rate limit exceeded');
            }
            const resData = await res.json()
            setError('');
            setResults(resData.items || []);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if (!value) return;
        //Una vez que el usuario empiece a escribir, pasarán 300 milisegundos para empezar a hacer el request a la api
        let delay = setTimeout(() => {
            search();
        }, 300);

        // en caso de que el usuario cambie de página o sitio web, abortamos la petición al servidor
        return () => {
            //controller.abort();
            clearTimeout(delay);
        };
    }, [value]);

    const clearInput = () => {
        setValue('');
        setResults([])
    }
    return (
        <div>
            <div className="d-flex justify-content-between flex-wrap">
                <Title title="Repositories" />
                <SearchBy
                    values={values}
                    setSearchBy={setSearchBy}
                    searchBy={searchBy}
                />
            </div>
            <SearchBar
                placeholder="Search for Github respositories"
                clear={clearInput}
                value={value}
                onChange={(e) => setValue(e.target.value)}
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
                        results.map((repo) => (
                            <Col md={6} lg={6} xl={4} key={repo.id}>
                                <RepoItem repository={repo} />
                            </Col>
                        ))
                    )}
                </Row>
            )}
        </div>
    );
};

export default RepositoriesPage;
