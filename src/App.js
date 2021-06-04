import { useState } from "react";
import { Form, Input, Button, Select } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import "animate.css/animate.css";

function App() {
  const { Option } = Select;
  const [formLayout, setFormLayout] = useState('vertical');
  return (
    <>
      <main className="form-wrapper">
        <Form name="control-ref" layout={formLayout} className="animate__animated animate__fadeInDown">
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
            <Select placeholder="Select a dish type" allowClear>
              <Option value="pizza">Pizza</Option>
              <Option value="soup">Soup</Option>
              <Option value="sandwich">Sandwich</Option>
            </Select>
          </Form.Item>

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
