import React from 'react';
import { useState, useRef } from "react";
import { Form, Input, Button, Select } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import "animate.css/animate.css";
import DependentField from "./components/DependentField";
import { typesOfDishes } from "./constants/constants";

export default function App() {
  const { Option } = Select;
  const [form] = Form.useForm();
  const [currentDishType, setCurrentDishType] = useState("");
  let formRef = React.createRef();
  
  let dishType;
  const dishes = typesOfDishes.map(({ name, id }) => {
    return (
      <Option value={name} key={id}>
        {name}
      </Option>
    );
  });
  const onFinish = (values) => {
    console.log(values);
  };
  const resetFields = () => {
    form.resetFields();
  };

  const onDishChange = (value) => {
    switch (value) {
      case "Pizza":
        dishType = "pizza";
        break;

      case "Sandwich":
        dishType = "sandwich";
        break;

      case "Soup":
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
        <Form form={form} 
        ref={formRef}
        onFinish={onFinish}
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
            <Input/>
          </Form.Item>
          <Form.Item
            name="dish"
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
            <Button htmlType="button" onClick={resetFields}>Reset</Button>
          </Form.Item>
        </Form>
      </main>
    </>
  );
}
