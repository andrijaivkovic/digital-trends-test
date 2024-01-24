import Embed from "../Embed/Embed";

const KeyVideo = ({ language }) => {
  return (
    <section className="key-video">
      <div className="key-video__text">
        <h2 className="key-video__title">Key video</h2>
        {language === "en-US" ? (
          <p className="key-video__body-text">
            If you don’t have time to read, you can watch the video in which we
            briefly described each trend
          </p>
        ) : (
          <p className="key-video__body-text">
            Ako nemaš vremena da čitaš, pogledaj video u kome smo ukratko
            opisali svaki trend
          </p>
        )}
      </div>
      <Embed
        type="horizontal"
        site="youtube"
        src="https://www.youtube.com/embed/J-WpIOxbEpQ?si=N1tx5XLAatbYvDgx&autoplay=1"
        title="Youtube video player"
        allowFullScreen={true}
        backgroundImage="/images/embed-bg/key-video/key-video_embed_1.jpg"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen;"
      />
    </section>
  );
};

export default KeyVideo;
