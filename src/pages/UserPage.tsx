import React, { useEffect, useRef, useState } from "react";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";
import { User } from "../global/user.interface";
import {
    ButtonGroup,
    Col,
    Dropdown,
    DropdownButton,
    Row,
} from "react-bootstrap";
import UserItem from "../components/UserItem";
import Empty from "../components/Empty";
import Loading from "../components/Loading";
import RateLimit from "../components/RateLimit";
import { TOKEN } from "../api/axios";
import type { SearchBy } from "../global/user.interface";
import getQueryStr from "../utils/getQueryStr";


const UserPage = () => {
    const [value, setValue] = useState("");
    const [results, setResults] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [searchBy, setSearchBy] = useState<SearchBy>('login');

    const onSearch = async () => {
        setLoading(true);
        let queryStr = getQueryStr(searchBy, value);
        try {
            const res = await fetch(
                `https://api.github.com/search/users?q=${queryStr}`,
                {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${TOKEN}`,
                    },
                }
            );
            if (res.status === 403) {
                // Cuando la API de Github devuelve un status 403 es porque el límite de llamadas se ha excedido
                setLoading(false);
                return setError(true);
            }
            const resData = await res.json();
            setError(false);
            setResults(resData.items || []);
            setLoading(false);
        } catch (error) {
            console.log("entró en error");
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
            <div className="d-flex justify-content-between flex-wrap ">
                <Title title="Users" />
                <div className="d-flex align-items-center">
                    <span className="fw-bold text-secondary">
                        Searching by: <span className="color-primary">{searchBy}</span>
                    </span>
                    <DropdownButton
                        as={ButtonGroup}
                        variant="secondary"
                        title="Search By"
                        className="ms-3"
                        size="sm"
                    >
                        <Dropdown.Item onClick={() => setSearchBy('email')}>Email</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSearchBy('user')}>User</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSearchBy('login')}>Login</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSearchBy('fullname')}>Fullname</Dropdown.Item>
                        <Dropdown.Item onClick={() => setSearchBy('name')}>Name</Dropdown.Item>
                    </DropdownButton>
                </div>
            </div>
            <SearchBar
                placeholder="Look for Github users"
                onChange={(e) => setValue(e.target.value)}
                value={value}
                clear={clearSearhbar}
            />
            {error ? (
                <RateLimit />
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
