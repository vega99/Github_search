import React, { forwardRef, InputHTMLAttributes } from "react";
import { AiOutlineClose, AiOutlineSearch } from "react-icons/ai";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    clear: VoidFunction
}

const SearchBar = forwardRef<HTMLInputElement, Props>(
    ({ className,clear, ...props }, ref) => {
        return (
            <div className="d-flex align-items-center rounded searchbar-container my-3">
                <input
                    ref={ref}
                    type="text"
                    className={`searchbar rounded ${className}`}
                    {...props}
                />
                <div className="mx-2 cursor-pointer">
                    {props.value != "" ? (
                        <AiOutlineClose
                            size={25}
                            onClick={clear}
                        />
                    ) : (
                        <AiOutlineSearch size={25} />
                    )}
                </div>
            </div>
        );
    }
);

export default SearchBar;
