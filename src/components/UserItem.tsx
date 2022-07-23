import React, { useState } from "react";
import { User } from "../global/user.interface";
import UserModal from "./UserModal";

interface Props {
    user: User;
}

const UserItem = ({ user }: Props) => {
    const [show, setShow] = useState(false);

    return (
        <div className="user-item rounded text-white shadow-sm d-flex flex-wrap">
            <div className="d-flex align-items-center">
                <img
                    src={user.avatar_url}
                    className="user-img rounded-circle"
                    alt=""
                />
                <div className="ms-2">
                    <h5 className="fw-bold text-break">{user.login}</h5>
                    <a
                        href={user.html_url}
                        className="text-decoration-none"
                        target={"_blank"}
                    >
                        Link to Github
                    </a>
                    <br />
                    <div className="d-flex flex-wrap">
                        <button
                            className="button-primary  me-2"
                            onClick={() => setShow(true)}
                        >
                            See details
                        </button>
                        <button className="button-secondary">
                            Repositories
                        </button>
                    </div>
                </div>
            </div>
            <UserModal show={show} hide={() => setShow(false)} url={user.url} />
        </div>
    );
};

export default UserItem;
