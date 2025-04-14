import React, { useCallback, useEffect, useState, useRef } from "react";
import { BoxData, ModalProps } from "../types/workPlace";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const WorkPlace: React.FC<{ studios: BoxData[] }> = ({ studios }) => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedBox, setSelectedBox] = useState<BoxData | null>(null);

  const openModal = (studios: BoxData): void => {
    setSelectedBox(studios);
    setModalOpen(true);
  };

  const closeModal = (): void => {
    setModalOpen(false);
    setSelectedBox(null);
  };

  const Modal: React.FC<ModalProps> = ({ studios, onClose }) => {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const modalContentRef = useRef<HTMLDivElement>(null);

    const goToNext = useCallback(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === studios.images.length - 1 ? 0 : prevIndex + 1
      );
    }, [studios.images.length]);

    const goToPrevious = useCallback(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? studios.images.length - 1 : prevIndex - 1
      );
    }, [studios.images.length]);

    useEffect(() => {
      const handleKeyDown = (event: KeyboardEvent) => {
        if (event.key === "ArrowRight") goToNext();
        if (event.key === "ArrowLeft") goToPrevious();
        if (event.key === "Escape") onClose();
      };

      window.addEventListener("keydown", handleKeyDown);
      return () => window.removeEventListener("keydown", handleKeyDown);
    }, [goToNext, goToPrevious, onClose]);

    const handleBackdropClick = (e: React.MouseEvent) => {
      if (
        modalContentRef.current &&
        !modalContentRef.current.contains(e.target as Node)
      ) {
        onClose();
      }
    };

    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
        onClick={handleBackdropClick}
      >
        <div
          ref={modalContentRef}
          className="w-full max-w-2xl mx-auto flex flex-col relative"
        >
          <div className="relative w-full">
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-20 text-white hover:text-[rgb(67,67,67)] text-3xl font-bold rounded-full h-10 w-10 flex items-center justify-center"
            >
              ×
            </button>

            <div className="flex items-center justify-center h-full">
              <img
                src={studios.images[currentIndex]?.src}
                alt={`${studios.title} - Image ${currentIndex + 1}`}
                className="max-h-[70vh] object-contain w-full"
              />

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 hover:bg-opacity-70 text-white p-3 rounded-full"
                aria-label="Previous image"
              >
                <MdKeyboardArrowLeft className="text-2xl" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 hover:bg-opacity-70 text-white p-3 rounded-full"
                aria-label="Next image"
              >
                <MdKeyboardArrowRight className="text-2xl" />
              </button>
            </div>
          </div>

          <div className="bg-white p-6 w-full">
            <h2 className="text-xl font-bold mb-4">{studios.title}</h2>
            <p className="mb-4">{studios.images[currentIndex]?.description}</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 pb-2 border-b border-gray-300 text-[rgb(67,67,67)]">
        London
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {studios.map((studios) => (
          <div
            key={studios.id}
            className="flex flex-col cursor-pointer mb-8"
            onClick={() => openModal(studios)}
          >
            <div className="text-sm text-[rgb(67,67,67)] mb-2">
              North London
            </div>

            <div
              className="w-full bg-gray-200 mb-2 overflow-hidden"
              style={{ aspectRatio: "4 / 3" }}
            >
              {studios.images.length > 0 && (
                <img
                  src={studios.images[0]?.src}
                  alt={studios.title}
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            <div className="mt-2">
              <h3 className="font-bold text-lg text-[rgb(67,67,67)]">
                {studios.title}
              </h3>
              <p className="text-sm text-[rgb(67,67,67)]">Workplace</p>
              <p className="text-sm mt-2">info info</p>
            </div>

            <div className="mt-4 border-t border-gray-300 pt-2"></div>
          </div>
        ))}
      </div>

      {modalOpen && selectedBox && (
        <Modal studios={selectedBox} onClose={closeModal} />
      )}
    </div>
  );
};

export default WorkPlace;
