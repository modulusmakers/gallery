import React from 'react';

class EmmersonMirrorContent extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%'}}>
                 <pre style={{alignSelf: 'center', marginTop: '10%'}}>{
`
Emmerson was not
a transparent eyeball,
he was a mirror.

His writing
is evidence
of his reflection.

& like any mirror
he was manufactured
with imperfections

warps & nicks

so that what he
reflects
is not quite
what he
gazed upon

Our community is a house of mirrors,
where light is bent and distorted
until we can't tell
from which direction
it originated

& yet, it illuminates us
`
                 }</pre>
              </div>
        );
    }

}

export { EmmersonMirrorContent }
