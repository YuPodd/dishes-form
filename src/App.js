import React from "react";
import { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import "animate.css/animate.css";
import DependentField from "./components/DependentField";
import { typesOfDishes } from "./constants/constants";
import ResultOrder from "./components/ResultOrder"

export default function App() {
  const { Option } = Select;
  const [form] = Form.useForm();
  const [currentDishType, setCurrentDishType] = useState("");
  const [orderIsDone, setOrderIsDone] = useState(false);
  const [orderResult, setOrderResult] = useState('');
  let formRef = React.createRef();
  let dishType;
  const dishes = typesOfDishes.map(({ name, id }) => {
    return (
      <Option value={name} key={id}>
        {name}
      </Option>
    );
  });
  const sendForm = (values) => {
    fetch("https://frosty-wood-6558.getsandbox.com:443/dishes", {
      crossDomain: true,
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((response) => setOrderIsDone(true))
      .then((response) => setOrderResult(values));
  };
  const resetFields = () => {
    form.resetFields();
  };

  const onDishChange = (value) => {
    switch (value) {
      case "pizza":
        dishType = "pizza";
        break;
      case "sandwich":
        dishType = "sandwich";
        break;
      case "soup":
        dishType = "soup";
        break;
      default:
        break;
    }
    setCurrentDishType(dishType);
  };
  return (
    <>
      <main className="form-wrapper">
        <Form
          form={form}
          ref={formRef}
          onFinish={sendForm}
          name="control-ref"
          layout="vertical"
          className="animate__animated animate__fadeInDown"
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="preparation_time"
            label="Preparation time"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input type="time" step="2"></Input>
          </Form.Item>
          <Form.Item
            name="type"
            label="Dish type"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Select
              placeholder="Select a dish type"
              allowClear
              onChange={onDishChange}
            >
              {dishes}
            </Select>
          </Form.Item>
          {currentDishType !== "" ? (
            <DependentField currentDishType={currentDishType} />
          ) : null}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button" onClick={resetFields}>
              Reset
            </Button>
          </Form.Item>
        </Form>
       {orderIsDone ? <ResultOrder orderResult={orderResult} /> : null} 
      </main>
    </>
  );
}
