export interface ModalProps {
  studios: BoxData;
  onClose: () => void;
}
export interface ImageWithDescription {
  src: string;
  description: string;
}

export interface BoxData {
  id: number;
  title: string;
  images: ImageWithDescription[];
}
