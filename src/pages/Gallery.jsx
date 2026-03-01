import { useState } from "react";
import { X } from "lucide-react";

const images = [
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1492724441997-5dc865305da7",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e",
  "https://images.unsplash.com/photo-1519681393784-d120267933ba",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1470770841072-f978cf4d019e",
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div className="min-h-screen text-white">

      <h1 className="text-3xl font-semibold mb-8">Image Gallery</h1>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {images.map((src, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-2xl"
            onClick={() => setSelectedImage(src)}
          >
            <img
              src={src}
              alt="Gallery"
              className="w-full h-60 object-cover transition duration-500 group-hover:scale-110"
            />

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition duration-300" />
          </div>
        ))}
      </div>

      {/* Modal Preview */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[200] p-4">

          <button
            className="absolute top-6 right-6 text-white"
            onClick={() => setSelectedImage(null)}
          >
            <X size={28} />
          </button>

          <img
            src={selectedImage}
            alt="Preview"
            className="max-h-[85vh] rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </div>
  );
};

export default Gallery;