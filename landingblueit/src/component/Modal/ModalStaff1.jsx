import React from "react";

const ModalStaff1 = ({ isOpen, onClose }) => {
  if (!isOpen) return null; // Không render modal nếu không mở

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4 relative">
        <button className="absolute top-2 right-2 text-xl" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-lg font-semibold">Staff Profile</h2>
        <img src="" alt="Staff" className="w-full h-auto rounded" />
        <p>Thông tin chi tiết về nhân viên Bùi Hữu Hoài.</p>
      </div>
    </div>
  );
};

export default ModalStaff1;
