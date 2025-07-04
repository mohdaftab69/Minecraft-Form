import Form from "@/components/Form";


const page = () => {
  return (
    <div>
      <Form />
      <br />
      <br />

      <div className="video-background">
        <iframe
          src="https://www.youtube.com/embed/_jUOP3X9fEQ?autoplay=1&mute=1&controls=0&loop=1&playlist=_jUOP3X9fEQ"
          title="YouTube video player"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default page;
