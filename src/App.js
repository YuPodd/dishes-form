import { useState } from "react";
import { Form, Input, Button, Select, Slider } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import "animate.css/animate.css";
import FormItemLabel from "antd/lib/form/FormItemLabel";

function App() {
  const { Option } = Select;
  const [formLayout, setFormLayout] = useState("vertical");
  const [formItemName, setFormItemName] = useState("");
  const [formItemLabel, setFormItemLabel] = useState("");

  const onDishChange = (value) => {
    switch (value) {
      case "pizza":
        console.log("pizza");
        setFormItemName("slices");
        setFormItemLabel("Number of Slices");
        return;

      case "sandwich":
        console.log("sandwich");
        setFormItemName("spiceness");
        setFormItemLabel("Spiceness");
        return;

      case "soup":
        console.log("soup");
        setFormItemName("slices");
        setFormItemLabel("Number of Slices");
        return;
    }
    console.log("1st time");
  };
  return (
    <>
      <main className="form-wrapper">
        <Form
          name="control-ref"
          layout={formLayout}
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
            <Input />
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
              <Option value="pizza">Pizza</Option>
              <Option value="soup">Soup</Option>
              <Option value="sandwich">Sandwich</Option>
            </Select>
          </Form.Item>
          {formItemName !== "" ? (
            <Form.Item name={formItemName} label={formItemLabel}>
              {FormItemLabel}
            </Form.Item>
          ) : null}
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
            <Button htmlType="button">Reset</Button>
          </Form.Item>
        </Form>
      </main>
    </>
  );
}

export default App;
