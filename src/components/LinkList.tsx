import React from "react";
import { NavLink } from "react-router-dom";
import useSidebar from "../hooks/useSidebar";
import routes from "../routes/routes";

const LinkList = () => {
    const { setOpen } = useSidebar();

    return (
        <div className="mt-4 d-flex flex-column ">
            {routes.map((route, i) => (
                <NavLink
                    onClick={() => setOpen(false)}
                    key={i}
                    to={route.path}
                    className={({ isActive }) =>
                        isActive
                            ? "active rounded p-2 mt-2 mb-2 text-white fw-bold"
                            : "inactive p-2 mt-2 mb-2 fw-bold"
                    }
                >
                    {route.title}
                </NavLink>
            ))}
        </div>
    );
};

export default LinkList;
