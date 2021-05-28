import './index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import {Graph} from 'react-d3-graph';
import {ModManifestoContent} from './components/modManifestoContent.js';
import {SVGPoiFlower} from './components/floretumContent.js';

class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
      switch(this.props.activeNodeId) {
        case "Mod.":
          return(<ModManifestoContent />);
        case "Floretum":
          return (<SVGPoiFlower
                    width={500}
                    height={500}
                    viewbox="0 0 500 500"
                    w_a={1}
                    r_a={100}
                    w_0_a={0}
                    w_p={3}
                    r_p={70}
                    w_0_p={0}
                    debug={true}
                  />);

        default:
          return(<p>nothingness...</p>);
      } 
    }
}


class Ontology extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const graphConfig = {node: {color: 'grey', 
                                    size: 360
                             },
                             link: {hilightColor: 'green'}
        };


        return(<div>
                 <Graph
                   id='ontology'
                   data={this.props.graphData}
                   config={graphConfig}
                   onClickNode={this.props.onClickNode}
                 />
               </div>
        );
    }


}

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {activeNodeId: "",
                  graphData: {
                    nodes: [{ id: "Mod." },
                            { id: "Writing" },
                            { id: "Movement Art" },
                            { id: "Floretum" }
                           ],
                    links: [
                      { source: "Mod.", target: "Writing" },
                      { source: "Mod.", target: "Movement Art" },
                      { source: "Movement Art", target: "Floretum" },
                    ],
                  }
    };
    this.handleOntologyClick.bind(this);
  }


  handleOntologyClick(nodeId) {
    this.setState({activeNodeId: nodeId})
  }

  render() {
    return(
        <div>
          <div className="columnL">
              <Content activeNodeId={this.state.activeNodeId} />
          </div>
          <div className="columnR">
              <Ontology 
                graphData={this.state.graphData}
                onClickNode={(nodeId) => this.handleOntologyClick(nodeId)}
              />
          </div>
        </div>
    );
  }
}

ReactDOM.render(<Gallery />,
                document.getElementById('root')
);

//export default App;
