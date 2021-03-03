import YoutubePlayer from "react-player";

export const VideoPlayer = ({ youtubeId, audio }) => {
  return (
    <div className="wrapper">
      <div className="video">
        <YoutubePlayer
          playing={true}
          url={"https://www.youtube.com/embed/" + youtubeId + "&t=" + 20}
          width="100%"
          height="100%"
          controls={true}
          volume={0.2}
          muted={audio}
          playsinline={true}
          config={{
            youtube: {
              playerVars: {
                autoplay: 1,
                showinfo: 0,
                controls: 0,
                playsinline: 1
              }
            }
          }}
        />
      </div>
    </div>
  );
};
