import * as React from 'react';
import { Range } from 'react-range';
import "./home.css"
class Rangs extends React.Component {
  state = { values: [0] };
  render() {
    return (
      <>
      <Range className="range2"
        step={0.1}
        min={0}
        max={1500000}
        values={this.state.values}
        onChange={(values) => this.setState({ values })}
        renderTrack={({ props, children }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '6px',
              width: '100%',
              backgroundColor: '#ccc'
            }}
          >
            {children}
          </div>
        )}
        renderThumb={({ props }) => (
          <div
            {...props}
            style={{
              ...props.style,
              height: '25px',
              borderRadius:"50%",
              width: '25px',
              backgroundColor: '#999'
            }}
          />
        )}
      />
      <div className="ranges" >
        <span><img src="/images/r.png" alt="" />{this.state.values}</span>
        <span><img  src="/images/r.png" alt=""  />15,00,000</span>
      </div>
      <div className="btnsReg">
        <div className="values" >
          <span>Min</span>
          <button className="btnval1"> <span><img src="/images/r.png" alt="" />{this.state.values}</span></button>
        </div>--
        <div className="values">
        <span>Max</span>
          <button className="btnval2"> <span><img src="/images/r.png" alt="" /> 15,00,000</span></button>
        </div>
      </div>
      </>
    );
  }
}

export default Rangs