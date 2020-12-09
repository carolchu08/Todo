import React, { Component } from 'react';
import '../Style/NotFoundStyle.css';
class NotFound extends Component {
    render() {
        return (
            <div className="notFound">
                <h1>
                404 Not Found
                </h1>
                <h6>Oops...Look like the page does not exist.</h6>
            </div>
        );
    }
}

export default NotFound;