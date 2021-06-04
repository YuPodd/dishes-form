import { useState } from "react";
import { Form, Input, Button, Select, Slider } from "antd";
import "antd/dist/antd.css";
import "./index.css";
import "animate.css/animate.css";
import IconSlider from "./Slider";

function App() {
  const { Option } = Select;
  const [formLayout, setFormLayout] = useState("vertical");
  const [typeOfDish, setTypeOfDish] = useState("");
  const [formItemName, setFormItemName] = useState("");
  const [formItemLabel, setFormItemLabel] = useState("");
  let dishName, dishLabel, dishType;
  const onDishChange = (value) => {
    switch (value) {
      case "pizza":
        console.log("pizza");
        dishName = "slices";
        dishType = "pizza";
        dishLabel = "Number of Slices";
        break;

      case "sandwich":
        console.log("sandwich");
        dishType = "sandwich";
        dishName = "spiciness";
        dishLabel = "Spiciness";
        break;

      case "soup":
        console.log("soup");
        dishType = "soup";
        dishName = "slices";
        dishLabel = "Number of Slices";
        break;
    }
    setTypeOfDish(dishType);
    setFormItemName(dishName);
    setFormItemLabel(dishLabel);
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
              {typeOfDish === "sandwich" ? (
                <IconSlider min={0} max={10} className="slider" />
              ) : (
                <Input></Input>
              )}
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
