"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import styles from "./image-picker.module.css";
export default function ImagePicker({ label, name }) {
  const [imageURL, setImageURL] = useState(null); // State to hold the image URL

  function handleImageChange(e) {
    const file = e.target.files[0]; // Get the selected file
    if (!file) {
      setImageURL(null);
      return;
    }
    if (file && file.type.startsWith("image/")) {
      // Make sure it's an image file
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageURL(e.target.result); // Set the image URL to the result of the FileReader
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  }
  function handlePickClick() {
    imageRef.current.click();
  }
  const imageRef = useRef();
  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>

      <div className={styles.controls}>
        <div className={styles.preview}>
          {!imageURL && <p>No image picked yet</p>}
          {imageURL && (
            <Image src={imageURL} alt="the image selected by the user" fill />
          )}
        </div>
        <input
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpeg"
          name={name}
          ref={imageRef}
          onChange={handleImageChange}
          required
        />
        <button
          onClick={handlePickClick}
          className={styles.button}
          type="button"
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
