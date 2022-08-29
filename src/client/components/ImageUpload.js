import { useState } from "react";

export const ImageLoader = () => {
  const [baseImage, setBaseImage] = useState("");

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
  };

  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

  return (
    <div>
      <form action="">
        <input
          type="file"
          multiple
          onChange={(e) => {
            uploadImage(e);
          }}
        />
      </form>
      <img className="plant-image" src={baseImage} alt="" />
    </div>
  );
};
