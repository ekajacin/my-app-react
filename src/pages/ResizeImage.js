import React, { useState} from "react";
import Header from "../components/header";

function ResizeImage(){
  const [selectedFile, setSelectedFile] = useState(null);
  const [resizedImage, setResizedImage] = useState(null);
  const [originalFileSize, setOriginalFileSize] = useState(null);
  const [compressedFileSize, setCompressedFileSize] = useState(null);
    
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(URL.createObjectURL(file));
    const originalFileSize = file.size;
    setOriginalFileSize(originalFileSize);
  };

const handleImageResize = () => {
  const img = new Image();
  img.src = selectedFile;
  img.onload = () => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Menghitung lebar dan tinggi gambar yang diubah
    const maxWidth = 500;
    const maxHeight = 500;
    let width = img.width;
    let height = img.height;

    if (width > height) {
      if (width > maxWidth) {
        height *= maxWidth / width;
        width = maxWidth;
      }
    } else {
      if (height > maxHeight) {
        width *= maxHeight / height;
        height = maxHeight;
      }
    }

   // Mengatur ukuran canvas sesuai dengan gambar yang diubah
        canvas.width = width;
        canvas.height = height;

  // Menggambar gambar di canvas dengan ukuran yang diubah
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

    const resizedDataURL = canvas.toDataURL('image/jpeg', 0.2);
    const compressedFileSize = Math.round((resizedDataURL.length - 'data:image/jpeg;base64,'.length) * 3 / 4);
    console.log('Gambar terkompresi: ', resizedDataURL);

    
    setCompressedFileSize(compressedFileSize);
    setResizedImage(resizedDataURL);
  };
  
};


const handleDownload = () => {
  const link = document.createElement('a');
  link.href = resizedImage;
  link.download = 'foto2.jpg';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  
    return(
        <>
        <Header/>
        <div class="block">
          <div className="judul">
            <h1>Resize Image</h1>
          </div>
        <div class="out-input">
          <div class="input">
            <div class="input-file"><input type="file" accept="image/*" onChange={handleFileChange}/>
            </div>
           </div>
        </div>
        <div class="button">
            <div class="input-button"><button onClick={handleImageResize}>upload</button></div>
            <div class="input-button"><button onClick={handleDownload}>Download</button></div>
        </div>
        {/* {resizedImage && (
        <div>
          <h2>Resized Image</h2>
          <img src={resizedImage} alt="Resized" />
        </div>
      )} */}
      <div class="foto">
      {originalFileSize && (
        <p>Original file size: {originalFileSize} bytes</p>
      )}
      <img src={selectedFile} alt="Gambar Asli"></img>
      {compressedFileSize && (
        <p>Compressed file size: {compressedFileSize} bytes</p>
      )}
      <img src={resizedImage} alt="Hasil Resize"></img>
      </div>
    </div>
        </>
    );
}

export default ResizeImage;