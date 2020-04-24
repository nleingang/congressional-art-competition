import React, { Component } from "react";

import { connect } from "react-redux";
import S3Uploader from "../S3Uploader/S3Uploader";
import { Image } from "semantic-ui-react";
import Swal from "sweetalert2";

class AdminUpload extends Component {
  state = {
    image: "",
    title: "",
    artist: "",
  };

  //handle input changes
  handleChangeFor = (input) => (event) => {
    this.setState({
      ...this.state,
      [input]: event.target.value,
    });
  };

  handleFinishedUpload = (info) => {
    console.log("File uploaded with filename", info.filename);
    console.log("Access it on s3 at", info.fileUrl);
    this.setState({
      ...this.state,
      image: info.fileUrl,
    });
  };

  //handle "Add Item" button click
  handleAddItem = () => {
    if (this.state.image && this.state.title && this.state.artist) {
      //dispatch to saga
      this.props.dispatch({
        type: "ADD_NEW_ARTWORK",
        payload: this.state,
      });
      this.setState({
        image: "",
        title: "",
        artist: "",
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Added to artwork!",
        timer: 1000,
        timerProgressBar: true,
      }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
    }
  };

  render() {
    
    return (
      <section class="admin-upload">
        <h2>Image Upload</h2>
        <div class="new-image-wrapper">
          <div class="all-inputs">
            <div>
              {/* renders image if an image has been uploaded; 
            renders dropzone uploader if no image has been uploaded */}
              {this.state.image ? (
                <Image className="uploaded-image" src={this.state.image} height="200px" width="auto" />
              ) : (
                <div className="upload-div">
                <h4>Click to choose a file or drag and drop an image here:</h4>
                <S3Uploader
                  handleFinishedUpload={this.handleFinishedUpload.bind(this)}
                />
                </div>
              )}
            </div>
            <div class="text-inputs">
              <div>
                <label for="title">Title:</label>
                <div class="ui input">
                  <input
                    type="text"
                    id="title"
                    placeholder="Title..."
                    value={this.state.title}
                    onChange={this.handleChangeFor("title")}
                  />
                </div>
              </div>

              <div>
                <label for="artist">Artist:</label>
                <div class="ui input">
                  <input
                    type="text"
                    id="artist"
                    placeholder="Artist..."
                    value={this.state.artist}
                    onChange={this.handleChangeFor("artist")}
                  />
                </div>
              </div>
            </div>
          </div>

          <div class="submit-btn">
            <button class="ui green button" onClick={this.handleAddItem}>Submit</button>
          </div>
        </div>
      </section>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(AdminUpload);
