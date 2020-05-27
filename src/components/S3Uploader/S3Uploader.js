import React, { Component } from "react";
import DropzoneS3Uploader from "react-dropzone-s3-uploader";

export default class S3Uploader extends React.Component {
  
  
  render() {
    const PORT = process.env.PORT || "http://localhost:5000";
    const uploadOptions = {
      server: PORT,
      signingUrlQueryParams: { uploadType: "avatar" },
    };
    const s3Url = "https://congressional-art-competition.s3.amazonaws.com";

    return (
      <DropzoneS3Uploader
        onFinish={this.props.handleFinishedUpload}
        s3Url={s3Url}
        maxSize={1024 * 1024 * 5}
        upload={uploadOptions}
      />
    );
  }
}
