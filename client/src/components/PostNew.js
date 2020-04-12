import React, { Component } from "react";

export class PostNew extends Component {
  render() {
    return (
      <div className="container-fluid p-4" style={{overflowY:'scroll',height:'100vh'}}>
        <a href="/blog" className="btn btn-danger">New post</a>
        <div className="row">
          <div className="col-12 d-flex justify-content-between flex-wrap">
            <div className='mt-4'>
              <div className="btn-group">
                <button type="button" class="btn btn-info">
                  Publish
                </button>
                <button type="button" class="btn btn-info">
                  Revert to draft
                </button>
                <button type="button" class="btn btn-info">
                  <i className="mdi mdi-delete"></i>
                </button>
              </div>
            </div>
            <div className='mt-4'>
              <div className="btn-group">
                <button type="button" class="btn btn-success">
                  <i className="mdi mdi-chevron-left"></i>
                </button>
                <button type="button" class="btn btn-success">
                  1
                </button>
                <button type="button" class="btn btn-success">
                  <i className="mdi mdi-chevron-right"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <ul class="list-group list-group-flush mt-4">
              <li class="list-group-item d-flex justify-content-between flex-wrap">
                 <div className='mt-3'>
                     <p>UI Display</p>
                     <div>
                         <a href="#">Edit</a> | <a href="#">Preview</a> | <a href="#">Delete</a>
                     </div>
                 </div>
                 <div className='d-flex justify-content-between mt-3 flex-wrap'>
                    <i className='text-danger mr-4'>Draft</i>
                    <p className='text-primary mr-4'>Display</p>
                    <p className='mr-4'><span className='mr-1'>0</span><i className='mdi mdi-message'></i></p>
                    <p className='mr-4'><span className='mr-1'>1</span><i className='mdi mdi-eye'></i></p>
                    <p className='mr-4'>11/12/2020</p>
                 </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PostNew;
