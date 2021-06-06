import React from 'react';

class ConwARContent extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (<video width="480" height="720" controls autoPlay loop muted>
                  <source src='./static/conwAR_tahoe.mov' type="video/mp4"></source>
                </video>);
    }

}

export { ConwARContent }
