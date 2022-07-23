import React from "react";

const RateLimit = () => {
    return (
        <div className="text-center mt-4">
            <p className="fw-bold fs-2 text-danger">
                Ups!, rate limit exceeded, please wait a minute to try again!
            </p>
        </div>
    );
};

export default RateLimit;
