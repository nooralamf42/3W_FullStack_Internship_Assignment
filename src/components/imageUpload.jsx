import React, { useState, useRef, useEffect } from "react";

const ImageUpload = ({isOpen}) => {
  const [image, setImage] = useState(null);
  const [imageName, setImageName] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);

  useEffect(() => {
    setImage(null);
    setImageName("");
  }, [isOpen]);

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageName(file.name);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
      setError("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!image) {
      setError("Please select an image.");
    } else {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-2">
      <form onSubmit={handleSubmit} className="w-full max-w-md space-y-2">
        {!image && (
          <button
            type="button"
            onClick={handleButtonClick}
            className="w-full px-4 py-2 bg-black/30 text-white rounded-md active:bg-black/60 focus:outline-none focus:ring-2 focus:ring-blue-300"
          >
            Select Image
          </button>
        )}

        <input
          type="file"
          accept="image/*"
          ref={inputRef}
          className="hidden"
          onChange={handleImageChange}
        />

        {image && (
          <div className="relative w-full max-w-xs mx-auto">
            <img
              src={image}
              alt={imageName}
              className="w-full aspect-video object-cover rounded-lg shadow-lg"
            />
            <button
              type="button"
              onClick={handleButtonClick}
              className="absolute inset-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 text-white rounded-lg opacity-100"
            >
              Select Another
            </button>
          </div>
        )}
        {error && (
          <p className="text-red-500 text-center">{error}</p>
        )}

        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500/90 text-white rounded-md mt-2 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ImageUpload;
