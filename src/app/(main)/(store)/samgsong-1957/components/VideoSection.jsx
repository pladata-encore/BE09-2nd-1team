"use client";

export default function VideoSection(){
    return(
        <>
        {/* YouTube 영상 */}
      <div className="relative overflow-hidden rounded-lg shadow-xl aspect-video">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/jC8B2WQtoWc?si=TgJEu_IEhCOyGOLV" 
          title="SAMSONG 1957 | 삼송1957 _ 토탈베이커리"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
        </>
    )
}