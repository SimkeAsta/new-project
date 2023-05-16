import { Form, Button } from "react-bootstrap";

export const NewBlog = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Post Image</Form.Label>

        <Form.Control type="text" placeholder="Image url" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Post Title</Form.Label>

        <Form.Control type="text" placeholder="Title" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Post Text</Form.Label>

        <Form.Control as="textarea" rows={3} />
      </Form.Group>

      <Button>Add new post</Button>
    </Form>
  );
};
