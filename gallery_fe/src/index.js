import './index.css'
import React, {useRef} from 'react';
import ReactDOM from 'react-dom';
import {Graph} from 'react-d3-graph';
import {ModManifestoContent} from './components/modManifestoContent.js';
import {SVGPoiFlower} from './components/floretumContent.js';
import {MetropolisAlgContent} from './components/metropolisAlgContent.js';
import {EmmersonMirrorContent} from './components/emmersonMirrorContent.js';

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
        case "Metropolis Alg.":
          return(<MetropolisAlgContent />)
        case "R.W.E. Mirror":
          return(<EmmersonMirrorContent />)


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
        const graphConfig = {node: { size: 720,
                                     fontSize: 16,
                             },
                             link: {},
                             d3: {gravity: -500},
                             height: this.props.height,
                             width: this.props.width
        };


        return(<div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100vh'}} >
                 <Graph
                   id='ontology'
                   data={this.props.graphData}
                   config={graphConfig}
                   onClickNode={this.props.onClickNode}
                   style={{alignSelf: 'center'}}
                 />
               </div>
        );
    }


}

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    const fullGraphData = {
                    nodes: [{ id: "Mod.", color: "green"},
                            { id: "Writing", symbolType: "square" , color: "grey"},
                            { id: "Movement", symbolType: "square", color: "grey"},
                            { id: "Floretum", color: "grey" },
                            { id: "Pseudomath", symbolType: "square", color: "grey"},
                            { id: "Metropolis Alg.", color: "grey" },
                            { id: "R.W.E. Mirror", color: "grey" }
                           ],
                    links: [
                      { source: "Mod.", target: "Writing" },
                      { source: "Mod.", target: "Movement" },
                      { source: "Mod.", target: "Pseudomath" },
                      { source: "Movement", target: "Floretum" },
                      { source: "Writing", target: "R.W.E. Mirror" },
                      { source: "Writing", target: "Metropolis Alg." },
                      { source: "Pseudomath", target: "Metropolis Alg." },
                    ],
                  };
    

    this.state = {activeNodeId: "Mod.",
                  graphData: fullGraphData
    };
    this.handleOntologyClick.bind(this);
  }


  handleOntologyClick(nodeId) {
    //focus the clicked node
    let newNodes = this.state.graphData.nodes;
    newNodes.forEach(item => {
        if (item.id == nodeId) item.color = "green";
        else item.color = "grey";
      });
    let newGraphData = this.state.graphData;
    newGraphData.nodes = newNodes;

    //if this is a content node, display its content
    this.setState({activeNodeId: nodeId,
                   graphData: newGraphData});

    //TODO if this is a topic node, toggle its children
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
                height={window.innerWidth/2} //TODO this is such a hack
                width={window.innerHeight}
              />
          </div>
        </div>
    );
  }
}

ReactDOM.render(<Gallery />,
                document.getElementById('root')
);

