import React, { useEffect, useState } from "react";
import { Modal, ModalBody, Spinner } from "react-bootstrap";
import { TOKEN } from "../api/axios";
import { UserDetails } from "../global/user.interface";

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
        let getDetails = async () => {
            try {
                const res = await fetch(props.url, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${TOKEN}`,
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
                    <div className="text-center">
                        <Spinner animation="border" variant="secondary" />
                    </div>
                ) : (
                    <div className="d-flex flex-column align-items-center">
                        <img
                            src={details?.avatar_url}
                            className="img-fluid rounded-circle"
                            style={{
                                width: 300,
                            }}
                            alt=""
                        />
                        <div className="mt-3">
                            <h4>{details?.name}</h4>
                        </div>
                    </div>
                )}
            </ModalBody>
        </Modal>
    );
};

export default UserModal;
