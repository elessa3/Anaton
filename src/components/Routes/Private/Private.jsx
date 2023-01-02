import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import StoreContext from "../../../context/storeContext";

const RoutesPrivate = ({ component: component, ...rest}) => {
    const {token} = useContext(StoreContext)

    return(
        <Route
        {...rest}
        render={() => token
        ? <component {...rest}/>
        : <Redirect to="/login"/>
        }
        />
    )
}

export default RoutesPrivate;