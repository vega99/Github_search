import React from "react";
import { Spinner } from "react-bootstrap";

const Loading = () => {
    return (
        <div className="text-center text-white">
             <Spinner animation="border" variant="secondary" />
        </div>
    );
};

export default Loading;
