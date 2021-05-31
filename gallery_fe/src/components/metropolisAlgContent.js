import React from 'react';

class MetropolisAlgContent extends React.Component{

    constructor(props) {
        super(props);
    }

    render() {
        return (<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%'}}>
                 <pre style={{alignSelf: 'center', marginTop: '10%'}}>{
`In 3 months time
I shall leave my home
and become a Nomad.

My only plan:
to walk randomly
around many cities
like some kind of
Metropolis Algorithm.

When the virus hit
my life took 
a sudden leap, 
and I ended up
in a better place.

Once a disciple
of gradient descent
I have become aware
of my prior,
local minima

The prophet Vinyals proclaimed:
"know thy objective function!"
But first I need
to re-evaluate
my optimizer

So in 3 months time
I shall leave my home
And become a Nomad.`
                 }</pre>
              </div>
        );
    }

}

export { MetropolisAlgContent }
