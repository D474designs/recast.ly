{/*
var App = () => (
  <div>
    <Nav />
    <div className="col-md-7">
      <VideoPlayer video={window.exampleVideoData[0]} />
    </div>
    <div className="col-md-5">
      <VideoList videos={window.exampleVideoData}/>
    </div>
  </div>
);
*/}

{/*
var App = () => (
  <div>
    <nav className="navbar">
      <div className="col-md-6 offset-md-3">
      <Search/>
      </div>
    </nav>
    <div className="row">
      <div className="col-md-7">
      <VideoPlayer/>
      </div>
      <div className="col-md-5">
      <VideoList reactVideos={exampleVideoData}/>
      </div>
    </div>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
*/}

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: {window.exampleVideoData},
      currentVideo: {window.exampleVideoData[0]}
    }
  }

  handleVideoListEntryTitleClick(video) {
    this.setState({
      currentVideo: video
    });
  }

  render() {
    return(
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer video={this.state.currentVideo} />
        </div>
        <div className="col-md-5">
          <VideoList
          videos={this.state.videos}
          handleVideoListEntryTitleClick={this.handleVideoListEntryTitleClick.bind(this)}
          />
        </div>
      </div>
    )
  }
};

window.App = App;
