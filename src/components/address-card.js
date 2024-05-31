import { useState } from "react";
import { EllipsisHorizontalIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/outline";

export function AddressCard({ addressName, address, phoneNumber, icon, onDelete }) {
    const [isEditing, setIsEditing] = useState(false);
    const [menuVisible, setMenuVisible] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [editedAddressName, setEditedAddressName] = useState(addressName);
    const [editedAddress, setEditedAddress] = useState(address);
    const [editedPhoneNumber, setEditedPhoneNumber] = useState(phoneNumber);

    const IconComponent = icon;

    const handleEditClick = () => {
        setIsEditing(true);
        setMenuVisible(false);
        setModalVisible(true);
    };

    const handleSaveClick = () => {
        setIsEditing(false);
        setModalVisible(false);
    };

    const handleMenuClick = () => {
        setMenuVisible(!menuVisible);
    };

    const handleDeleteClick = () => {
        onDelete();
        setMenuVisible(false);
    };

    return (
        <div className={`relative w-full h-auto border border-tertiary-black rounded-2xl p-4 ${isEditing ? 'border-primary-color' : 'bg-secondary-black'}`}>
            <div className="flex gap-3 items-center">
                <IconComponent className="size-6 text-white" />
                <h1 className="text-white font-bold pt-2 font-body">{editedAddressName}</h1>
            </div>
            <div className="h-auto sm:h-24 w-full">
                <p className="text-white pt-4 font-thin">{editedAddress}</p>
                <p className="text-white pt-2 font-thin">{phoneNumber}</p>
            </div>
            <div className="flex items-center relative">
                <p className="text-primary-color pt-6 font-thin hover:text-light-primary-color">View on map</p>
                <EllipsisHorizontalIcon
                    className="size-12 text-white pt-6 pl-6 ml-auto cursor-pointer"
                    onClick={handleMenuClick}
                />
                {menuVisible && (
                    <div className="absolute top-16 right-0 bg-secondary-black border border-tertiary-black rounded-md shadow-lg z-10">
                        <ul className="text-white">
                            <div className="flex items-center p-2 hover:bg-primary-color rounded-md">
                                <PencilIcon className="text-white size-4"></PencilIcon>
                                <li className="p-2 cursor-pointer" onClick={handleEditClick}>Edit address</li>
                            </div>
                            <div className="flex items-center p-2 hover:bg-primary-color rounded-md" onClick={handleDeleteClick}>
                                <TrashIcon className="text-red-700 size-4"></TrashIcon>
                                <li className="p-2 cursor-pointer">Delete address</li>
                            </div>
                        </ul>
                    </div>
                )}
            </div>
            {modalVisible && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
                    <div className="bg-black border border-tertiary-black rounded-lg shadow-lg p-10">
                        <h2 className="text-2xl font-bold mb-4 text-white">Edit Address</h2>
                        <div className="mb-4">
                            <label className="block text-primary-color">Address Name</label>
                            <input
                                type="text"
                                value={editedAddressName}
                                onChange={(e) => setEditedAddressName(e.target.value)}
                                className="mt-1 p-2 sm:w-80 w-full border border-tertiary-black bg-primary-black text-white rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-primary-color">Address</label>
                            <input
                                type="text"
                                value={editedAddress}
                                onChange={(e) => setEditedAddress(e.target.value)}
                                className="mt-1 p-2 sm:w-80 w-full border border-tertiary-black bg-primary-black text-white rounded"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-primary-color">Phone Number</label>
                            <input
                                type="text"
                                value={editedPhoneNumber}
                                onChange={(e) => setEditedPhoneNumber(e.target.value)}
                                className="mt-1 p-2 sm:w-80 w-full border border-tertiary-black bg-primary-black text-white rounded"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="bg-red-700 text-white px-4 py-2 rounded mr-2"
                                onClick={() => setModalVisible(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-primary-color text-white px-4 py-2 rounded"
                                onClick={handleSaveClick}
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
