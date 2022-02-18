import React from 'react';
import './Counter.scss';

type State = {
  count: number,
};

export class Counter extends React.Component<{}, State> {
  state = {
    count: 0,
  };

  addOne = () => {
    this.setState((state) => ({
      count: state.count + 1,
    }));
  };

  add100 = () => {
    this.setState((state) => ({
      count: state.count + 100,
    }));
  };

  render() {
    const { count } = this.state;

    return (
      <div className="count">
        <h1 className="count__result">{`Count ${this.state.count}`}</h1>
        <div className="count__buttons">
          <button
            type="button"
            onClick={this.addOne}
          >
            Add 1
          </button>
          <button
            type="button"
            onClick={this.add100}
          >
            Add 100
          </button>
          <button
            type="button"
            onClick={count % 5 === 0 ? this.add100 : this.addOne}
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}
