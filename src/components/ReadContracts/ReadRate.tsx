import { Form } from "antd";
import * as React from "react";
import { XYZCOIN_ADDRESS } from "../../constants/address";
import useReadRate from "../../hooks/useReadRate";
import FormCustomRead from "../FormCustomRead";

export function ReadRate() {
  const [inputData, setInputData] = React.useState<any>({});
  const { data, isSuccess } = useReadRate(inputData.currency);
  const [formReadRate] = Form.useForm();
  const onFinish = (values: any) => {
    setInputData(values);
  };
  const onReset = () => {
    formReadRate.resetFields();
  };
  const onFill = () => {
    formReadRate.setFieldsValue({
      currency: XYZCOIN_ADDRESS,
    });
  };
  const fieldList = [{ id: 1, name: "currency", label: "Currency" }];
  return (
    <FormCustomRead
      data={data}
      isSuccess={isSuccess}
      form={formReadRate}
      onFill={onFill}
      onFinish={onFinish}
      onReset={onReset}
      fieldList={fieldList}
      inputData={inputData}
      buttonLabel="Read Rate"
    />
  );
}
