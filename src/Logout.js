import React, { useContext } from "react";
import StateContext from "./context";

export default function Logout() {

    const {state, dispatch} = useContext(StateContext);
    return (
        <form onSubmit={(e) => {e.preventDefault(); dispatch({type: "LOGOUT"})}}>
            Logged in as: <b>{state.user}</b>
            <input type="submit" value="Logout" />
        </form>
    );
}
