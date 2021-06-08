import React, { useEffect, useState } from "react";
import "antd/dist/antd.css";
import "../index.css";
import { Slider } from "antd";
import { MinusOutlined, FireOutlined } from "@ant-design/icons";

export default function IconSlider(props) {
  const min = 0;
  const max = 10;

  function handleChange(value) {
    props.onChange(value);
  }

  return (
    <div className="icon-wrapper">
      <MinusOutlined />
      <Slider min={min} max={max} onChange={handleChange} value={props.value} />
      <FireOutlined />
    </div>
  );
}
