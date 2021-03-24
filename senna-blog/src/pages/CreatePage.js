import { Formik, Form, Field } from "formik";
import RichTextEditor from "react-rte";
import styled from "styled-components";

import { useBlogs } from "../hooks/useBlog";

function CreatePage({ className }) {
  const { createBlog } = useBlogs();

  function onSubmit(form) {
    createBlog({
      ...form,
      content: form.content.toString("html"),
    });
  }

  return (
    <div className={className}>
      <h1>
        <b>Create blog</b>
      </h1>
      <Formik
        initialValues={{
          title: "",
          slug: "",
          content: RichTextEditor.createEmptyValue(),
        }}
        onSubmit={onSubmit}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <label>Title</label>
            <Field type="text" name="title" placeholder="enter title" />
            <label>Slug</label>
            <Field type="text" name="slug" placeholder="enter slug" />
            <label>Content</label>
            <RichTextEditor
              value={values.content}
              onChange={(value) => setFieldValue("content", value)}
            />

            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

const CreatePageStyled = styled(CreatePage)`
  form {
    display: flex;
    flex-direction: column;

    label {
      font-weight: bold;
      margin-top: 10px;
    }

    button {
      margin-top: 20px;
    }
  }
`;

export default CreatePageStyled;
