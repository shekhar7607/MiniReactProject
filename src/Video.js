import React, { Component } from 'react';
import ModalVideo from 'react-modal-video';
// import "react-modal-video/scss/modal-video.scss";
// import YouTube from 'react-youtube';

class Video extends Component{
    constructor(){
        super();
        this.state = {
            isOpen: false,
        };
        this.openModal = this.openModal.bind(this);
    }

    openModal(){
        this.setState({isOpen: true});
    }

    render()
    {
        return(
            <div>
                <div>
                    <ModalVideo
                    channel="youtube"
                    isOpen={this.state.isOpen}
                    videoId="b1c6i0VT7ak"
                    onClose={() => this.setState({isOpen: false})}
                    />
                    <button onClick={this.openModal}>Open</button>
                </div>
            </div>
        )
    }

}

export default Video;