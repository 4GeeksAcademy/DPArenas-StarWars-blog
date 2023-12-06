import React from "react";
import { useContext } from "react";
import { Context } from "../store/appContext";
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Dropdown } from "react-bootstrap";



export const Btnfavorites = () => {
    const { store, actions } = useContext(Context)
    const myFavorites = store.favorites;

    return (
        // <Dropdown>
        //     <Dropdown.Toggle variant="secondary" id="dropdown-basic">
        //         Favorites
        //     </Dropdown.Toggle>

        //     <Dropdown.Menu>
        //         <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        //         <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        //         <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        //     </Dropdown.Menu>
        // </Dropdown>

        
            <div className="dropdown">
                <button className="btn btn-dark dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Favorites
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-warning text-dark">
                        {myFavorites.length}
                    </span>
                </button>
                {<ul className="dropdown-menu dropdown-menu-dark dropdown-menu-lg-end">
                    {myFavorites.length === 0 ? (
                        <li><span className="dropdown-item">No favorites selected</span></li>
                    ) : (
                        myFavorites.map((item, id) => (
                            <li key={id} className="d-flex align-items-center">
                                <span className="dropdown-item">{item.name}</span>
                                <button type="button" className="btn btn-outline-danger"
                                    onClick={() => actions.removeFavorite(item, myFavorites)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </li>
                        ))
                    )}
                </ul>}
            </div>

    );
};