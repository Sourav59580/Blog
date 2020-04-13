import React, { Component } from "react";
import { EditorState, convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import htmlToDraft from "html-to-draftjs";

export class Blog extends Component {
    constructor(){
        super();
        this.state = {
            editorState: EditorState.createEmpty()
        }
    }
    
    onEditorStateChange= (editorState) => {
        this.setState({
          editorState,
        });
      };

    render() {
        const { editorState } = this.state;
        return (
            <div
      className="container-fluid p-4"
      style={{
        overflowY: "scroll",
        height: "100vh"
      }}
    >
      <div className="row">
        <div className="col-12 d-flex justify-content-between flex-wrap">
          <h4 className="text-danger mt-2 mr-4"> Blog </h4>{" "}
          <input
            type="text"
            className="form-control mr-4 rounded shadow-sm border-0  my-2"
            placeholder="Blog title"
          />
          <div className="d-flex flex-wrap">
            <button className="btn btn-danger mr-4 my-2"> Publish </button>{" "}
            <button className="btn btn-success mr-4 my-2"> Save </button>{" "}
            <button className="btn btn-info mr-4 my-2"> Preview </button>{" "}
            <button className="btn btn-warning mr-4  my-2"> Close </button>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="row mt-4">
        <div className="col-12 bg-white p-0 shadow-sm" style={{minHeight:'300px'}}>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor px-4"
          onEditorStateChange={this.onEditorStateChange}
          className=''
        />

        {/* This is code show */}

        {/* <textarea
          disabled
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}
        
        </div>{" "}
      </div>{" "}
    </div>
        )
    }
}

export default Blog;
