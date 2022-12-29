import { Form } from "react-bootstrap";

type Props = {
  children: string
}

const ValidationFeedback = ({children}: Props) => {
  return (
    <Form.Control.Feedback type="invalid" className="ms-3 my-auto">
      {children}
    </Form.Control.Feedback>
  );
};

export default ValidationFeedback;
