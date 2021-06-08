import IconSlider from "./Slider";
import { Form, InputNumber } from "antd";

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
             <InputNumber/>
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
             <InputNumber 
             step="0.1"/>
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
          <InputNumber/>
        </Form.Item>
      );
    case "soup":
      return (
        <Form.Item
          label="Spiciness"
          name="spiciness_scale"
          rules={[
            {
              required: false,
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
