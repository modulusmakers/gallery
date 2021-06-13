import React from 'react';

class ModManifestoContent extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%'}}>
                 
                 <img src="./static/mod_script.png" style={{height: '33%', width: '33%', alignSelf: 'center'}} />
                 <p style={{alignSelf: 'center'}} >Idea Rhizome: v0.1</p>
                </div>
        );
    }

}

export { ModManifestoContent }
