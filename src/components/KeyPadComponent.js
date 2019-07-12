import React, {Component} from 'react';

class KeyPadComponent extends Component {

    render() {
        return (
            <div className="button">
           <br/>
           <br/>
                <button name="-" onClick={e => this.props.onClick(e.target.name)}>-</button> &nbsp;&nbsp;&nbsp;
                <button name="+" onClick={e => this.props.onClick(e.target.name)}>+</button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button name="*" onClick={e => this.props.onClick(e.target.name)}>* </button>&nbsp;&nbsp;&nbsp;&nbsp;
                <button name="/" onClick={e => this.props.onClick(e.target.name)}>÷</button>
                <br/><br/>


                <button name="1" onClick={e => this.props.onClick(e.target.name)}>1</button> &nbsp;&nbsp;&nbsp;
                <button name="2" onClick={e => this.props.onClick(e.target.name)}>2</button> &nbsp;&nbsp;&nbsp;
                <button name="3" onClick={e => this.props.onClick(e.target.name)}>3</button> &nbsp;&nbsp;&nbsp;
                <button name=")" onClick={e => this.props.onClick(e.target.name)}>)</button>
                <br/><br/>


                <button name="4" onClick={e => this.props.onClick(e.target.name)}>4</button> &nbsp;&nbsp;&nbsp;
                <button name="5" onClick={e => this.props.onClick(e.target.name)}>5</button> &nbsp;&nbsp;&nbsp;
                <button name="6" onClick={e => this.props.onClick(e.target.name)}>6</button> &nbsp;&nbsp;&nbsp;
                <button name="(" onClick={e => this.props.onClick(e.target.name)}>(</button>
                <br/><br/>

                <button name="7" onClick={e => this.props.onClick(e.target.name)}>7</button> &nbsp;&nbsp;&nbsp;
                <button name="8" onClick={e => this.props.onClick(e.target.name)}>8</button> &nbsp;&nbsp;&nbsp;
                <button name="9" onClick={e => this.props.onClick(e.target.name)}>9</button> &nbsp;&nbsp;&nbsp;
                <button name="%" onClick={e => this.props.onClick(e.target.name)}>%</button>
                
                <br/><br/>

                <button name="2.73" onClick={e => this.props.onClick(e.target.name)}>e</button> &nbsp;&nbsp;&nbsp;
                <button name="0" onClick={e => this.props.onClick(e.target.name)}>0</button> &nbsp;&nbsp;&nbsp;
                <button name="3.14" onClick={e => this.props.onClick(e.target.name)}>Pi</button> &nbsp;&nbsp;&nbsp;
                <button name="CE" class="yellow" onClick={e => this.props.onClick(e.target.name)}>CE</button>
                <br/><br/>

                 
                <button name="." onClick={e => this.props.onClick(e.target.name)}>.</button> &nbsp;&nbsp;&nbsp;
                
                <button name="=" class="double" onClick={e => this.props.onClick(e.target.name)}>=</button> &nbsp;&nbsp;&nbsp; 
               

                
                <button name="C" class="red" onClick={e => this.props.onClick(e.target.name)}>AC</button><br/><br/>
                           </div>
        );
    }
}


export default KeyPadComponent;
