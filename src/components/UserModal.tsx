import React, { useEffect, useState } from "react";
import { CloseButton, Modal, ModalBody } from "react-bootstrap";
import { UserDetails } from "../global/user.interface";
import Loading from "./Loading";

interface Props {
    show: boolean;
    hide: VoidFunction;
    url: string;
}

const UserModal = (props: Props) => {
    const [loading, setLoading] = useState(true);
    const [details, setDetails] = useState<UserDetails | null>(null);

    useEffect(() => {
        // Esta linea prevee que se hagan peticiones al servidor cuando el modal este cerrado
        if (!props.show) return;
        // function para obtener los datos del usuario
        let getDetails = async () => {
            try {
                const res = await fetch(props.url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
                const data = await res.json();
                setDetails(data);
            } catch (error) {
            } finally {
                setLoading(false);
            }
        };
        getDetails();
    }, [props.show]);

    return (
        <Modal show={props.show} onHide={props.hide} centered>
            <ModalBody className="bg text-white rounded">
                {loading ? (
                    <Loading />
                ) : (
                    <div className="d-flex flex-column align-items-center">
                        <div className="align-self-end">
                            <CloseButton onClick={props.hide} />
                        </div>
                        <img
                            src={details?.avatar_url}
                            className="img-fluid rounded-circle"
                            alt=""
                        />
                        <div className="mt-3" style={{ minWidth: "80%" }}>
                            <div>
                                <label htmlFor="" className="fw-bold">
                                    Name:
                                </label>
                                <span className="fw-bolder fst-italic fs-6 ms-3 text-warning">
                                    {details?.name || "No name"}
                                </span>

                                <hr className="solid" />
                            </div>
                            <div className="">
                                <label htmlFor="" className="fw-bold">
                                    Company:
                                </label>
                                <span className="fw-bolder fst-italic fs-6 ms-3 text-warning">
                                    {details?.company || "No company"}
                                </span>
                                <hr className="solid" />
                            </div>
                            <div>
                                <label htmlFor="" className="fw-bold">
                                    Bio:
                                </label>
                                <span className="fw-bolder fst-italic fs-6 ms-3 lh-sm text-light text-just">
                                    {details?.bio || "No bio"}
                                </span>
                                <hr className="solid" />
                            </div>
                            <div className="d-flex flex-wrap justify-content-between w-100">
                                <div>
                                    <label htmlFor="" className="fw-bold">
                                        Followers:
                                    </label>
                                    <span className="fw-bolder fst-italic fs-6 ms-2 lh-sm text-info">
                                        {details?.followers}
                                    </span>
                                </div>
                                <div>
                                    <label htmlFor="" className="fw-bold">
                                        Following:
                                    </label>
                                    <span className="fw-bolder fst-italic fs-6 ms-2 lh-sm text-success">
                                        {details?.following}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </ModalBody>
        </Modal>
    );
};

export default UserModal;
