import { type ReactNode, useEffect } from 'react';

export type ModalProps = {
  children: ReactNode;
  isOpen: boolean;
  title: string;
  onClose: () => void;
};

export const Modal = ({ children, isOpen, title, onClose }: ModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <div
      onClick={onClose}
      className={`fixed top-0 right-0 bottom-0 left-0 z-100 h-screen w-screen bg-black/20 p-8 ${isOpen ? 'grid place-items-center' : 'hidden'}`}
    >
      <div
        className="relative w-full max-w-[480px] rounded-xl bg-white p-12"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-4 text-xl">{title}</div>
        <div
          className="absolute top-0 right-0 grid h-12 w-12 cursor-pointer place-items-center"
          onClick={onClose}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>
        </div>
        {children}
      </div>
    </div>
  );
};
