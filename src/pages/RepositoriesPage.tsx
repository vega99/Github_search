import React, { useState } from "react";
import SearchBar from "../components/SearchBar";
import Title from "../components/Title";

const RepositoriesPage = () => {
    const [value, setValue] = useState("");
    return (
        <div>
            <Title title="Repositories" />
            <SearchBar
                placeholder="Search for Github respositories"
                clear={() => {}}
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
        </div>
    );
};

export default RepositoriesPage;
