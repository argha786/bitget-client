import React from "react";
import { Link, useHistory } from "react-router-dom";

import "../../css/Admin.css"

export default function AdminNavbar() {

    let history=useHistory();
    return (

        <div className="adminNavbar" >
            <Link to="/admin/home" >
                Admin Console
            </Link>
            <Link to="/admin/activatedeactivatecard" >
                Activate/Deactive Card
            </Link>
            <Link to="/admin/drafts" >
                Drafts
            </Link>
            <Link to="/admin/status" >
                Status
            </Link>
            <Link to="/admin/adminbalancecontrol" >
                Balance Control
            </Link>
            <Link to="/admin/adminbulktransferaction" >
                Bulk Transfer
            </Link>
            <Link onClick={()=>{
                    localStorage.removeItem("aToken");
                    history.push("/")
                }}>
                Log Out
            </Link>
        </div>
    )
}