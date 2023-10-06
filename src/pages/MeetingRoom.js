import React, { Fragment, useEffect, useRef, useState } from 'react'
import JoinMeet from '../components/JoinMeet';
import Room from '../components/Room';
import { useParams } from 'react-router-dom';

export default function MeetingRoom() {
  const { id } = useParams();
  let videoRef = useRef(null);
  const [media, setMedia] = useState({
    video: true,
    audio: false
  });

  useEffect(() => {
    if (navigator.mediaDevices) {
      navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(stream => {
          videoRef.current.srcObject = stream;
        })
        .catch(err => console.log(err));
    } else {
      alert('Your browser does not support media devices');
    }
  }, []);
  
  return (
    <Fragment>
      <Room media={media} setMedia={setMedia} id={id} />
      {/* <JoinMeet media={media} setMedia={setMedia} videoRef={videoRef} /> */}
    </Fragment>
  );
}
