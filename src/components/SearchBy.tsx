import React, { useState } from "react";
import { ButtonGroup, Dropdown, DropdownButton } from "react-bootstrap";
import { SearchByType } from "../global/user.interface";

interface Props {
    values: SearchByType[];
    searchBy: string;
    setSearchBy: (val: SearchByType) => void;
}

const SearchBy = (props: Props) => {
    return (
        <div className="d-flex align-items-center">
            <span className="fw-bold text-secondary">
                Searching by:{" "}
                <span className="color-primary ">{props.searchBy}</span>
            </span>
            <DropdownButton
                as={ButtonGroup}
                variant="secondary"
                title="Search By"
                className="ms-3"
                size="sm"
            >
                {props.values.map((value, i) => (
                    <Dropdown.Item
                        key={i}
                        onClick={() => props.setSearchBy(value)}
                    >
                        {value.charAt(0).toUpperCase() + value.slice(1)}
                    </Dropdown.Item>
                ))}
            </DropdownButton>
        </div>
    );
};

export default SearchBy;
