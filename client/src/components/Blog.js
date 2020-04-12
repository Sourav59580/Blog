import React from "react";
function Blog() {
  return (
    <div className="container-fluid p-4">
      <div className="row">
        <div className="col-12 d-flex justify-content-between flex-wrap">
          <h4 className="text-danger mt-2 mr-4">Blog</h4>
          <input
            type="text"
            className="form-control mr-4 rounded shadow-sm border-0  my-2"
            placeholder="Blog title"
          />
          <div className="d-flex flex-wrap">
            <button className="btn btn-danger mr-4 my-2">Publish</button>
            <button className="btn btn-success mr-4 my-2">Save</button>
            <button className="btn btn-info mr-4 my-2">Preview</button>
            <button className="btn btn-warning mr-4  my-2">Close</button>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12">

          <div id="summernote">
             <p>Hello Summernote</p>
          </div>
           
        </div>
      </div>
    </div>
  );
}

export default Blog;
