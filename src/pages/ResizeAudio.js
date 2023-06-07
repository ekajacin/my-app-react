import React, { useState, useRef} from "react";
// import AudioPlayer from 'react-audio-player';
import { saveAs } from 'file-saver';
import Header from "../components/header";

function ResizeAudio(){
  const [audioUrl, setAudioUrl] = useState('');
  const [originalSize, setOriginalSize] = useState(0);
  const [resizedSize, setResizedSize] = useState(0);
  const [resizedAudio, setResizedAudio] = useState(0);
  const audioRef = useRef(null);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    const fileUrl = URL.createObjectURL(file);
    setAudioUrl(fileUrl);
    setOriginalSize(file.size);
  };

  const resizeAudioStorage = () => {
    if (!audioUrl) return;
    
    const xhr = new XMLHttpRequest();
    xhr.open('GET', audioUrl, true);
    xhr.responseType = 'blob';
    xhr.onload = function () {
      if (xhr.status === 200) {
        const blob = xhr.response;
        const resizedBlob = blob.slice(0, blob.size * 0.5);
        setResizedSize(resizedBlob.size);
        setResizedAudio(resizedBlob);
        // saveAs(resizedBlob, 'resized_audio.mp3');
      }
    };
    xhr.send();
  };

  const handleDownload = () => {
    saveAs(resizedAudio, 'resized_audio.mp3');
  };
    return(
        <>
        <Header/>
        <div class="block">
        <div className="judul">
            <h1>Resize Audio</h1>
          </div>
        <div class="out-input">
           <div class="input">
            <div class="input-file"><input type="file" accept="audio/*" onChange={handleFileUpload}/></div>
            
           </div>
        </div>
        <div class="button">
            <div class="input-button"><button onClick={resizeAudioStorage}>Upload</button></div>
            <div class="input-button"><button onClick={handleDownload}>Download</button></div>
        </div>
        {audioUrl && (
        <div>
          <p>Original Size: {originalSize} bytes</p>
          <p>Resized Size: {resizedSize} bytes</p>
        </div>
      )}
    </div>
        </>
    );
}

export default ResizeAudio;