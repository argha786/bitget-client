import React from "react";
import { Link, useHistory } from "react-router-dom";

import "../../css/Admin.css"

export default function AdminNavbar() {

    let history=useHistory();
    return (

        <div className="adminNavbar" >
            <Link to="/846BC3C2F47B67D3932E98CF9306F2CB7B3854696870B64C6EBBEF066CE69C11/home" >
                Admin Console
            </Link>
            <Link to="/846BC3C2F47B67D3932E98CF9306F2CB7B3854696870B64C6EBBEF066CE69C11/activatedeactivatecard" >
                Activate/Deactive Card
            </Link>
            <Link to="/846BC3C2F47B67D3932E98CF9306F2CB7B3854696870B64C6EBBEF066CE69C11/drafts" >
                Drafts
            </Link>
            <Link to="/846BC3C2F47B67D3932E98CF9306F2CB7B3854696870B64C6EBBEF066CE69C11/status" >
                Status
            </Link>
            <Link to="/846BC3C2F47B67D3932E98CF9306F2CB7B3854696870B64C6EBBEF066CE69C11/userDetails" >
                User Details
            </Link>
            <Link to="/846BC3C2F47B67D3932E98CF9306F2CB7B3854696870B64C6EBBEF066CE69C11/adminbalancecontrol" >
                Balance Control
            </Link>
            <Link to="/846BC3C2F47B67D3932E98CF9306F2CB7B3854696870B64C6EBBEF066CE69C11/adminbulktransferaction" >
                Bulk Transfer
            </Link>
            <Link to="/846BC3C2F47B67D3932E98CF9306F2CB7B3854696870B64C6EBBEF066CE69C11/adminreport" >
                Report
            </Link>
            <Link to="/846BC3C2F47B67D3932E98CF9306F2CB7B3854696870B64C6EBBEF066CE69C11/adminsupport" >
                Support
            </Link>
            <Link to="/846BC3C2F47B67D3932E98CF9306F2CB7B3854696870B64C6EBBEF066CE69C11/adminbulkregisteruser" >
                Bulk Register User
            </Link>
            <Link to="/846BC3C2F47B67D3932E98CF9306F2CB7B3854696870B64C6EBBEF066CE69C11/singleuserregistration" >
                Single Register
            </Link>
            <Link to="/846BC3C2F47B67D3932E98CF9306F2CB7B3854696870B64C6EBBEF066CE69C11/adminsendinterest" >
                Send Interest
            </Link>
            <Link to="/846BC3C2F47B67D3932E98CF9306F2CB7B3854696870B64C6EBBEF066CE69C11/adminchangepaymentaddress" >
                Payment Addresss
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