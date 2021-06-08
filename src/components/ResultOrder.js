import React, { useState } from "react";
import { Modal} from "antd";

export default function ResultOrder({ orderResult }) {
  const [isModalVisible, setIsModalVisible] = useState(true);
  const { name, preparation_time, type,  } = orderResult;
  const handleClose = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Modal title="Thank you for the order!" visible={isModalVisible} onOk={handleClose} onCancel={handleClose} >
        <h3> Your order is:</h3>
        <p>{name}</p>
        <p>{type}</p>
        <p>{preparation_time}</p>
      </Modal>
    </>
  );
}
