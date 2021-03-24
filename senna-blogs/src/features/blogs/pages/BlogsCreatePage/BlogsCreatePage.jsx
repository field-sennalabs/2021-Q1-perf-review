import React from "react";
import styled from "styled-components";
import { Formik } from "formik";
import * as yup from "yup";
import RichTextEditor from "react-rte";

import { TextField } from "../../../../components/TextField";

const validationSchema = yup.object().shape({
  title: yup.string().required(),
  slug: yup.string().required(),
  content: yup.string().required()
});

function BlogsCreatePage({
  className,
  initialValues = {
    title: "",
    slug: "",
    content: ""
  },
  onSubmit
}) {
  return (
    <div className={className}>
      <div className="header">
        <h1>Create blog</h1>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
        {({ handleSubmit, values, setFieldValue }) => (
          <>
            <div className="form-wrapper">
              <TextField label="Title" name="title" required />
              <TextField label="Slug" name="slug" required />
              <RichTextEditor
                value={RichTextEditor.createValueFromString(
                  values.content,
                  "html"
                )}
                onChange={value => {
                  setFieldValue("content", value.toString("html"));
                }}
              />
            </div>
            <div className="footer">
              <button type="submit" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </>
        )}
      </Formik>
    </div>
  );
}

const StyledBlogsCreatePage = styled(BlogsCreatePage)`
  .header {
    text-align: center;
  }

  .form-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  .footer {
    display: flex;
    justify-content: center;
    padding: 1rem;
  }
`;

export { StyledBlogsCreatePage as BlogsCreatePage };
