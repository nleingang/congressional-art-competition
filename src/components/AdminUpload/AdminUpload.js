import React, { Component } from 'react';

import { connect } from "react-redux";


class AdminUpload extends Component {
    render() {
        return (
            <section class="admin-upload">
                <h2>Image Upload</h2>
                <div class="new-image-wrapper">
                    <div class="all-inputs">
                        <div>
                            <button class="ui button">
                                <i class="arrow up icon" />Upload
                            </button>
                        </div>
                        <div class="text-inputs">
                            <div>
                                <label for="title">Title:</label>
                                <div class="ui input">
                                    <input type="text" id="title" placeholder="Title..."/>
                                </div>
                            </div>

                            <div>
                                <label for="artist">Artist:</label>
                                <div class="ui input">
                                    <input type="text" id="artist" placeholder="Artist..."/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="submit-btn">
                        <button class="ui green button">
                            Submit
                        </button>
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