import React, { useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Repository } from "../global/repository.interface";
import RepoModal from "./RepoModal";
import Title from "./Title";

interface Props {
    repository: Repository;
}

const RepoItem = (props: Props) => {
    const [open, setOpen] = useState(false);


    return (
        <div className="repo-item text-white rounded">
            {/* <h6 className="fw-bold fs-5">{props.repository.name}</h6> */}
            <h4 className="Repositories fw-bold text-white text-nowrap text-truncate">{props.repository.name}</h4>

            <Row className="mt-3">
                <Col sm={6}>
                    <div>
                        <label htmlFor="">Watchers:</label>
                        <span className="ms-2 text-success">{props.repository.watchers}</span>
                    </div>
                    <div>
                        <label htmlFor="">Language:</label>
                        <span className="ms-2 text-warning text-nowrap text-truncate">{props.repository.language || 'No identified'}</span>
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="mt-2 mt-sm-0">
                        <label htmlFor="">Forks:</label>
                        <span className="ms-2 text-info">{props.repository.forks_count}</span>
                    </div>
                    <div>
                        <label htmlFor="">Open issues:</label>
                        <span className="ms-2 text-danger">{props.repository.open_issues}</span>
                    </div>
                </Col>
                <button className="button-primary mt-2" onClick={() => setOpen(true)}>See details</button>
            </Row>
            <RepoModal show={open} hide={() => setOpen(false)} repository={props.repository}/>
        </div>
    );
};

export default RepoItem;
