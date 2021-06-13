import React from 'react';

class ConwARContent extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%', marginTop:'25%'}}>
                  <video width="480" height="720" controls autoPlay loop muted style={{alignSelf: 'center'}} >
                    <source src='./static/conwAR_tahoe.mov' type="video/mp4"></source>
                  </video>
                  <p style={{alignSelf: 'center', marginTop: '10%'}} >ConwAR is an iOS app built using Swift and ARKit4.</p>
                  <img src="./static/bays_3d_gliders.png" style={{height: 'auto', width: 'auto', alignSelf: 'center'}} />
                </div>
        );
    }

}

export { ConwARContent }
