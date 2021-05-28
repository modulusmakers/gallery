//arboretum: arbore (ablative case or latin arbor, or tree) + tum
//fruticetum: frutice (ablative case of latin frutex, or shrub) + tum
//floretum: flore (ablative case of latin flos, or flower) + tum
//ablative case: denotes removal or separation from somthing
//accuusitive case: arborem, fruticem, florem, used to mark an immediate object
//-tum: latin suffix used to derive abstract nouns

import React from 'react';
import ReactDOM from 'react-dom';
import { matrix, multiply, add, subset, index } from 'mathjs';

class SVGPoiFlower extends React.Component{
  constructor(props) {
    super(props);
    this.state = {start: Date.now(),
                  now: Date.now(),
                  w_a: props.w_a,
                  w_p: props.w_p,
                  w_0_a: props.w_0_a,
                  w_0_p: props.w_0_p,
                  };
    this.q = [];
    this.handleChangeWa = this.handleChangeWa.bind(this);
    this.handleChangeWp = this.handleChangeWp.bind(this);
    this.handleChangeW0a = this.handleChangeW0a.bind(this);
    this.handleChangeW0p = this.handleChangeW0p.bind(this);

  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }


  handleChangeWa(event) {
    this.q = [];
    this.setState({w_a: isNaN(parseFloat(event.target.value)) ?  this.state.w_a  : parseFloat(event.target.value)});
  }

  handleChangeWp(event) {
    this.q = [];
    this.setState({w_p: isNaN(parseFloat(event.target.value)) ?  this.state.w_p  : parseFloat(event.target.value)});
  }

  handleChangeW0a(event) {
    this.q = [];
    this.setState({w_0_a: isNaN(parseFloat(event.target.value)) ?  this.state.w_0_a  : parseFloat(event.target.value)});
  }

  handleChangeW0p(event) {
    this.q = [];
    this.setState({w_0_p: isNaN(parseFloat(event.target.value)) ?  this.state.w_0_p  : parseFloat(event.target.value)});
  }


  tick() {
    this.setState({now: Date.now()});
  }

  render() {

    //update position
    const t = this.state.now/5000;

    const theta_aro = 2 * Math.PI * (this.state.w_a * t + this.state.w_0_a);
    const x_aro = this.props.r_a * Math.cos(theta_aro);
    const y_aro = this.props.r_a * Math.sin(theta_aro);
    const aro = matrix([[x_aro], [y_aro]]);
    
    const theta_pra = 2 * Math.PI * (this.state.w_p * t + this.state.w_0_p);
    const x_pra = this.props.r_p * Math.cos(theta_pra);
    const y_pra = this.props.r_p * Math.sin(theta_pra);
    const pra = matrix([[x_pra], [y_pra]]);

    const r_a20 = matrix([[Math.cos(theta_aro), -1 * Math.sin(theta_aro)],
                          [Math.sin(theta_aro), Math.cos(theta_aro)]]);
    const pro = add(multiply(r_a20, pra), aro);

    const x = subset(pro, index(0, 0));
    const y = subset(pro, index(1, 0));

    //update q
    this.q = [[x, y]].concat(this.q);
    if (this.q.length > 100){
      this.q =  this.q.slice(0, 100);
    }


    //build trail JSX
    const trail = [];
    const circle_trail = [];
    if(this.q.length > 4){
      const idxs = Array.from(Array(this.q.length - 2).keys());
      for (const start_idx in idxs){
        const end_idx = parseInt(start_idx) + 1;
        const start_pos = this.q[start_idx];
        const end_pos = this.q[end_idx];

        circle_trail.push(<circle r={5}
                           cx={start_pos[0] + 250}
                           cy={start_pos[1] + 250}
                           fill="orange"
                           opacity={.5*(1-start_idx/200)}
                           key={'circle_'.concat(String(start_idx))}/>);

        trail.push(<line x1={start_pos[0] + 250}
                         y1={start_pos[1] + 250}
                         x2={end_pos[0] + 250}
                         y2={end_pos[1] + 250}
                         stroke="orange"
                         strokeWidth={10}
                         opacity={(1-start_idx/200)}
                         key={'line_'.concat(String(start_idx))}/>);
      }
    }

    const controls = [];
    if(this.props.debug){
          controls.push(<div>
                        <input type="text" onBlur={this.handleChangeWa} /><br/>
                        <input type="text" onBlur={this.handleChangeWp} /><br/>
                        <input type="text" onBlur={this.handleChangeW0a} /><br/>
                        <input type="text" onBlur={this.handleChangeW0p} /><br/>
                       </div>);
    }

    return (
      <div>
        <div>
          <svg width={this.props.width}
               height={this.props.height}
               viewBox={this.props.viewBox}>
            {trail}
            {circle_trail}
          </svg>
        </div>
        {controls}
      </div>
    );
  }
}


export {SVGPoiFlower}
