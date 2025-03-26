import React, { useCallback, useEffect, useState } from "react";
import { BoxData, ModalProps } from "../types/workPlace";

const WorkPlace: React.FC<{ boxes: BoxData[] }> = ({ boxes }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedBox, setSelectedBox] = useState<BoxData | null>(null);

  const openModal = (box: BoxData): void => {
    setSelectedBox(box);
    setModalOpen(true);
  };

  const closeModal = (): void => {
    setModalOpen(false);
    setSelectedBox(null);
  };

  const Modal: React.FC<ModalProps> = ({ box, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const goToNext = useCallback(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === box.images.length - 1 ? 0 : prevIndex + 1
      );
    }, [box.images.length]);

    const goToPrevious = useCallback(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? box.images.length - 1 : prevIndex - 1
      );
    }, [box.images.length]);

    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "ArrowRight") goToNext();
        if (event.key === "ArrowLeft") goToPrevious();
        if (event.key === "Escape") onClose();
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [goToNext, goToPrevious, onClose]);

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white w-full max-w-4xl p-6 rounded-lg max-h-screen overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">{box.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-900 text-2xl font-bold"
            >
              ×
            </button>
          </div>

          <div className="relative">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-full">
                <div className="border border-black h-64 flex items-center justify-center bg-gray-200">
                  <img
                    src={box.images[currentIndex]?.src}
                    alt={`${box.title} - Image ${currentIndex + 1}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <p className="mt-4">{box.images[currentIndex]?.description}</p>
              </div>
            </div>
            <div className="relative py-4">
              <div className="flex justify-center items-center">
                <span className="px-4 py-2 bg-gray-100 rounded-full">
                  {currentIndex + 1} / {box.images.length}
                </span>
              </div>
              <button
                onClick={goToPrevious}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
              >
                ← Previous
              </button>

              <button
                onClick={goToNext}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-lg"
              >
                Next →
              </button>
            </div>
            <div className="flex justify-center m-auto mt-4 gap-2">
              {box.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-3 w-3 rounded-full ${
                    currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full mx-auto p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
        {boxes.map((box) => (
          <div
            key={box.id}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => openModal(box)}
          >
            <div className="w-full flex flex-col items-center justify-center bg-gray-300 border border-black p-6 min-h-[300px] hover:bg-gray-200">
              {box.images.length > 0 && (
                <img
                  src={box.images[0]?.src}
                  alt={box.title}
                  className="max-h-40 max-w-full object-cover mb-2"
                />
              )}
              <p className="text-center font-semibold">{box.title}</p>
            </div>
          </div>
        ))}
      </div>

      {modalOpen && selectedBox && (
        <Modal box={selectedBox} onClose={closeModal} />
      )}
    </div>
  );
};

export default WorkPlace;
