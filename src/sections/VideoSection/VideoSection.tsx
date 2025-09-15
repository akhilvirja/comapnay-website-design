function VideoSection() {
  return (
    <section className="bg-primary w-full flex">
      <div className="container">
        <div className="pb-5 pt-10">
            <video className="w-full h-auto rounded-2xl md:rounded-3xl lg:rounded-4xl" autoPlay playsInline loop >
                <source src="https://tecoreng.com/videos/Tecoreng_previewVideo.mp4" type="video/mp4" />
            </video>
        </div>
      </div>
    </section>
  )
}

export default VideoSection