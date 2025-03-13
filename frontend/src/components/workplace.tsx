import React, { useState } from "react";
import { BoxData, ModalProps } from "../types/workPlace";

const WorkPlace: React.FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedBox, setSelectedBox] = useState<BoxData | null>(null);

  const boxes: BoxData[] = [
    {
      id: 1,
      title: "Box 1",
      images: [
        {
          src: "Image 1 for Box 1",
          description:
            "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus enim aliquid totam inventore officia, recusandae ipsa. Vel minus deleniti provident optio iusto impedit a? Libero eveniet inventore debitis nihil deserunt!",
        },
        {
          src: "Image 2 for Box 1",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus dignissimos mollitia magnam earum cumque. Eius, voluptatem? Animi, quae. Exercitationem quibusdam libero in doloribus labore quam, fugit odit corporis animi ducimus.",
        },
        {
          src: "Image 3 for Box 1",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum delectus exercitationem vitae in facilis quis, aut itaque voluptates placeat alias omnis repellat blanditiis earum ipsum dolor fugit culpa, repudiandae aliquam..",
        },
        {
          src: "Image 4 for Box 1",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum adipisci saepe fuga! Officiis quidem sapiente, reiciendis minima quaerat, numquam quod sit illo repellendus, nam consequatur! Numquam voluptatem amet ab a?",
        },
      ],
    },
    {
      id: 2,
      title: "Box 2",
      images: [
        {
          src: "Image 1 for Box 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eaque modi aspernatur laudantium minus dolorum voluptas autem. Ullam, iusto quod reiciendis illum ea maiores voluptatum ipsum, delectus, sed doloremque eveniet.",
        },
        {
          src: "Image 2 for Box 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga corrupti reiciendis laborum distinctio porro molestiae natus! Doloribus explicabo recusandae magni, ipsum, error mollitia eum debitis maxime facere vero saepe? Vero.",
        },
        {
          src: "Image 3 for Box 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam est dolorem qui! Ipsum autem reprehenderit culpa aliquam laborum iure ex excepturi molestias maiores rem. Iure molestias neque eum ipsa vero.",
        },
        {
          src: "Image 4 for Box 2",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos in quos, sed itaque rem esse tempore! Dignissimos doloremque fugit voluptatum saepe tempora blanditiis beatae, ipsam voluptas enim possimus, laborum repellat!",
        },
      ],
    },
    {
      id: 3,
      title: "Box 3",
      images: [
        {
          src: "Image 1 for Box 3",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo asperiores beatae fugit velit excepturi delectus dignissimos ex eum molestiae cumque architecto illum nihil, quia voluptatem voluptatibus doloribus commodi in consequuntur!",
        },
        {
          src: "Image 2 for Box 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet placeat maiores inventore suscipit debitis dicta voluptas repellendus tempore saepe voluptate, autem expedita ducimus porro impedit facere exercitationem iure. Inventore, quasi.",
        },
        {
          src: "Image 3 for Box 3",
          description:
            "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus, voluptate. Veritatis temporibus commodi numquam earum? Doloremque voluptate sit quibusdam, nostrum eligendi aliquid, eos voluptates quam doloribus magnam officiis, nemo ratione.",
        },
        {
          src: "Image 4 for Box 3",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint amet voluptates modi quo libero laboriosam minima commodi magni aperiam excepturi architecto asperiores quisquam fuga, quae illo atque tenetur repellat et.",
        },
      ],
    },
    {
      id: 4,
      title: "Box 4",
      images: [
        {
          src: "Image 1 for Box 4",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores aperiam assumenda facere perspiciatis! Beatae minima accusamus maxime voluptatem atque saepe necessitatibus adipisci, veritatis repellat sed recusandae ipsum architecto amet rerum.",
        },
        {
          src: "Image 2 for Box 4",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi tempore unde incidunt. Hic excepturi veniam reprehenderit cumque mollitia, maxime iure, est enim optio beatae quidem error placeat. Quaerat, omnis provident!",
        },
        {
          src: "Image 3 for Box 4",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit voluptas atque, labore soluta sapiente non est quas voluptatem dolores deleniti consequatur numquam. Modi dolorem debitis neque at excepturi nam numquam!",
        },
        {
          src: "Image 4 for Box 4",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, quis aut, et, quibusdam dolorem tempora amet repellendus aspernatur aliquid delectus nulla sed corrupti ad dolorum accusamus dolore explicabo? Tenetur, culpa?",
        },
      ],
    },
    {
      id: 5,
      title: "Box 5",
      images: [
        {
          src: "Image 1 for Box 5",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum porro recusandae consequuntur. Officiis quis, consequuntur at temporibus dolorum iste. Neque aliquam saepe repellendus quis tempore ullam odio quisquam sequi voluptatibus.",
        },
        {
          src: "Image 2 for Box 5",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore libero placeat sit enim accusantium sequi odio, expedita reprehenderit doloremque quod nemo natus error eos quaerat. Praesentium in sequi ad repudiandae!",
        },
        {
          src: "Image 3 for Box 5",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque porro blanditiis doloremque quam iure quasi corrupti fugiat perferendis, rem cupiditate in nobis ipsam, quisquam sequi provident incidunt earum magnam. Minima.",
        },
        {
          src: "Image 4 for Box 5",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit ullam sequi nam sit ipsum nesciunt, officia voluptatibus suscipit doloremque expedita facilis voluptates rerum tempore mollitia fuga? Ducimus deserunt consequuntur maxime!",
        },
      ],
    },
    {
      id: 6,
      title: "Box 6",
      images: [
        {
          src: "Image 1 for Box 6",
          description:
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid eum tempora minus cumque, in eaque optio. Id voluptates eos, ipsa aspernatur quos harum non commodi. Hic maiores voluptatibus harum nulla.",
        },
        {
          src: "Image 2 for Box 6",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis atque voluptatibus, iure sequi ratione enim vero recusandae consectetur fugit magnam ipsam iusto repudiandae totam tempore voluptates tempora laboriosam amet ipsum!",
        },
        {
          src: "Image 3 for Box 6",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum dolore, voluptatibus libero autem, dolorum illo architecto voluptatum accusamus nostrum optio animi harum ratione accusantium perspiciatis sed ullam dolores unde consectetur!",
        },
        {
          src: "Image 4 for Box 6",
          description:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui, omnis iste. A totam temporibus odio laboriosam molestias quasi reprehenderit tempore voluptatum sint, alias error autem accusantium vel, deleniti labore ratione.",
        },
      ],
    },
  ];

  const openModal = (box: BoxData): void => {
    setSelectedBox(box);
    setModalOpen(true);
  };

  const closeModal = (): void => {
    setModalOpen(false);
    setSelectedBox(null);
  };

  const Modal: React.FC<ModalProps> = ({ box, onClose }) => {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white w-full max-w-4xl p-6 rounded-lg max-h-screen overflow-y-auto">
          <div className="flex justify-between items-center mb-6">
            <button
              onClick={onClose}
              className="text-gray-600 hover:text-gray-900 text-2xl font-bold"
            >
              ×
            </button>
          </div>

          <div className="space-y-8">
            {box.images.map((image, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-2/3">
                  <div className="border border-black h-64 flex items-center justify-center bg-gray-200">
                    <p>{image.src}</p>
                  </div>
                </div>

                <div className="w-full md:w-1/2 flex items-center">
                  <div className="border border-black p-4 h-full flex items-center">
                    <p>{image.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="w-full mx-auto p-6">
      <div className="flex flex-col lg:flex-row gap-12">
        {boxes.slice(0, 3).map((box) => (
          <div
            key={box.id}
            className="w-full lg:w-1/3 flex flex-col items-center"
            onClick={() => openModal(box)}
          >
            <div className="w-full flex items-center justify-center bg-gray-300 border border-black p-6 min-h-[300px] cursor-pointer hover:bg-gray-200">
              <p>{box.images[0].src}</p>
            </div>
            <p className="mt-4 text-center">{box.title}</p>
          </div>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-12 mt-12">
        {boxes.slice(3).map((box) => (
          <div
            key={box.id}
            className="w-full lg:w-1/3 flex flex-col items-center"
            onClick={() => openModal(box)}
          >
            <div className="w-full flex items-center justify-center bg-gray-300 border border-black p-6 min-h-[300px] cursor-pointer hover:bg-gray-200">
              <p>{box.images[0].src}</p>
            </div>
            <p className="mt-4 text-center">{box.title}</p>
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
