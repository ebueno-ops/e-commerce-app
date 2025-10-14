import React from 'react';
import {Image} from "react-bootstrap";
import ErrorImage from "../images/404.png";

function ErrorPage() {
    return (
        <div className="error-page-div">
            <Image src={ErrorImage} />
            <h1>Page Not Found</h1>
        </div>

    );
}

export default ErrorPage;