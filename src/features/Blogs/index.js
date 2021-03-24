import React, { Component } from "react";
import RichTextEditor from "react-rte";
import blogsApi from "../../api/blogs";
export default class Blogs extends Component {
  state = {
    content: RichTextEditor.createEmptyValue(),
    title: "",
    slug: "",
  };

  onChangeContent = (value) => {
    this.setState({ content: value });
  };

  onChangeTitle = (value) => {
    this.setState({ title: value.target.value });
  };

  onChangeSlug = (value) => {
    this.setState({ slug: value.target.value });
  };

  submitValue = () => {
    const data = {
      content: this.state.content.toString("html"),
      title: this.state.title,
      slug: this.state.slug,
    };
    console.log(data);
    blogsApi.postBlog(data);
  };

  render() {
    return (
      <div>
        <div className="field">
          <label className="label">Title</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Title"
              name="title"
              value={this.state.title}
              onChange={this.onChangeTitle}
            />
          </div>
        </div>
        <div className="field">
          <label className="label">Slug</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="Slug"
              name="slug"
              value={this.state.slug}
              onChange={this.onChangeSlug}
            />
          </div>
        </div>
        <RichTextEditor
          value={this.state.content}
          onChange={this.onChangeContent}
        />
        <div className="control">
          <button onClick={this.submitValue} className="button is-link">
            Submit
          </button>
        </div>
      </div>
    );
  }
}
