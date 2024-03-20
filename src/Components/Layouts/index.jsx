import React from "react";
import Header from "../../Shared/Header";
import Sidemenu from "../../Shared/Sidemenu";

const Layouts = ({ children }) => {
    return(
        <div >
           <Header />
            <div>
                {children}
            </div>
            <Sidemenu />
        </div>
    )
}

export default Layouts;