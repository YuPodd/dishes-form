import IconSlider from "./Slider";
import { Form, Input } from "antd";

export default function DependentField({ currentDishType }) {
  switch (currentDishType) {
    case "pizza":
      return (
        <>
          <Form.Item
            label="Number of slices"
            name="no_of_slices"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Diameter"
            name="diameter"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input />
          </Form.Item>
        </>
      );
    case "sandwich":
      return (
        <Form.Item
          label="Slices of bread"
          name="slices_of_bread"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
      );
    case "soup":
      return (
        <Form.Item
          label="Spiciness"
          name="spiciness_scale"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <IconSlider max={10} min={0} />
        </Form.Item>
      );
    default:
      return null;
  }
}
