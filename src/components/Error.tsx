import React from "react";

interface Props {
    error: string;
}

const Error = (props: Props) => {
    return (
        <div className="text-center mt-4">
            <p className="fw-bold fs-2 text-danger">{props.error}</p>
        </div>
    );
};

export default Error;
