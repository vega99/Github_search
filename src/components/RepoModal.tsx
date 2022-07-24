import React from "react";
import { CloseButton, Col, Modal, Row } from "react-bootstrap";
import { Repository } from "../global/repository.interface";
import Title from "./Title";

interface Props {
    show: boolean;
    hide: VoidFunction;
    repository: Repository;
}

const RepoModal = (props: Props) => {
    return (
        <Modal show={props.show} centered onHide={props.hide}>
            <Modal.Body className="bg text-white rounded">
                <CloseButton onClick={props.hide} className="float-end" />
                <img src={props.repository.owner.avatar_url} className=' float-start rounded me-3 mb-sm-2' style={{ width: 100, height: 'auto'}}  alt="" />
                <Title title={props.repository.name} />
                <div className="mb-5">
                    <label htmlFor="" className="text-secondary">
                        Description
                    </label>
                    <p className="lh-sm">{props.repository.description}</p>
                </div>
                <Row className="mt-3">
                    <Col sm={6}>
                        <div>
                            <label htmlFor="">Watchers:</label>
                            <span className="ms-2 text-success">
                                {props.repository.watchers}
                            </span>
                        </div>
                        <div>
                            <label htmlFor="">Language:</label>
                            <span className="ms-2 text-warning">
                                {props.repository.language || "No identified"}
                            </span>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="mt-2 mt-sm-0">
                            <label htmlFor="">Forks:</label>
                            <span className="ms-2 text-info">
                                {props.repository.forks_count}
                            </span>
                        </div>
                        <div>
                            <label htmlFor="">Open issues:</label>
                            <span className="ms-2 text-danger">
                                {props.repository.open_issues}
                            </span>
                        </div>
                    </Col>
                </Row>
                <Row className="mt-3">
                    <Col sm={6}>
                        <div className="mt-1 mt-sm-0">
                            <label htmlFor="">Owner:</label>

                            <span className="ms-2 text-primary">
                                <a
                                    href={props.repository.owner.html_url}
                                    className="text-decoration-none"
                                    target={"_blank"}
                                >
                                    {props.repository.owner.login}
                                </a>
                            </span>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className="mt-1 mt-sm-0">
                            <a
                                href={props.repository.html_url}
                                target={"_blank"}
                                className="text-decoration-none"
                            >
                                Link to Repository
                            </a>
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
};

export default RepoModal;
