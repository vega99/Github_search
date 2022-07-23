import React from "react";
import perfilImage from "../assets/perfil.jpeg";

const Avatar = () => {
    return (
        <div className="d-flex align-items-center">
            <img
                src={perfilImage}
                alt=""
                className="rounded-circle img-profile"
            />
            <div className="ms-3">
                <p className="fw-bold fs-4">
                    Alejandro <br />
                    Vega
                </p>
            </div>
        </div>
    );
};

export default Avatar;
