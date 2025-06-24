import { useRef, useState } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

function ProfilePhotoSelector({ image, setImage, preview, setPreview }) {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState("");

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (file) {
      setImage(file);

      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);

      if (setPreview) {
        setPreview(preview);
      }
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl("");

    if (setPreview) {
      setPreview(null);
    }
  };

  const onChooseFile = () => {
    inputRef.current.click();
  };

  return (
    <div className="flex justify-center mb-6">
      <input
        type="file"
        className="hidden"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
      />

      {!image ? (
        <div className="w-20 h-20 flex items-center justify-center bg-orange-50 rounded-full relative cursor-pointer">
          <LuUser className="text-4xl text-orange-500" />
          <button
            className="w-8 h-8 flex items-center justify-center bg-gradient-to-r from-orange-500/85 to-orange-600 text-white rounded-full absolute -bottom-1 -right-1 cursor-pointer"
            type="button"
            onClick={onChooseFile} // ✅ fixed
          >
            <LuUpload />
          </button>
        </div>
      ) : (
        <div className="relative">
          <img
            src={preview || previewUrl}
            alt="Profile"
            className="w-20 h-20 rounded-full object-cover"
          />
          <button
            type="button"
            onClick={handleRemoveImage} // ✅ fixed
            className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 -right-1"
          >
            <LuTrash />
          </button>
        </div>
      )}
    </div>
  );
}

export default ProfilePhotoSelector;
