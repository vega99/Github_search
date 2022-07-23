import CloseButton from "react-bootstrap/CloseButton";
import { Outlet } from "react-router-dom";
import useSidebar from "../hooks/useSidebar";
import Navbar from "./Navbar";
import Avatar from "./Avatar";
import LinkList from "./LinkList";

const SideBar = () => {
    const { open, setOpen } = useSidebar();

    return (
        <div>
            <aside
                className={`position-fixed sidebar text-white zindex-fixed  ${
                    !open && "hideSidebar"
                }`}
            >
                <div className="d-flex justify-content-end p-4">
                    <CloseButton
                        onClick={() => setOpen(false)}
                        variant="white"
                        className="hide"
                    />
                </div>
                <div className="p-3 text-white">
                    <Avatar />
                    <LinkList />
                </div>
            </aside>
            <Navbar />
            <div className="myNav p-3 p-sm-4 p-xl-5 content">
                <Outlet />
            </div>
        </div>
    );
};

export default SideBar;
