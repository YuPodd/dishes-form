import React from 'react';
import "antd/dist/antd.css";
import "../index.css";
import { Slider } from 'antd';
import { MinusOutlined, FireOutlined } from '@ant-design/icons';

export default class IconSlider extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: 0 };
   }
  handleChange = value => {
    this.setState({ value });
  };

  render() {
    const { max, min } = this.props;
    const { value } = this.state;
    const mid = ((max - min) / 2).toFixed(5);
    const preColorCls = value >= mid ? '' : 'icon-wrapper-active';
    const nextColorCls = value >= mid ? 'icon-wrapper-active' : '';
    return (
      <div className="icon-wrapper">
        <MinusOutlined className={preColorCls} />
        <Slider {...this.props} onChange={this.handleChange} value={value} />
        <FireOutlined className={nextColorCls} />
      </div>
    );
  }
}