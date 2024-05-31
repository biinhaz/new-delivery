import { useState } from "react";
import { PlusIcon, HomeIcon, BriefcaseIcon, ShoppingBagIcon, UserIcon } from "@heroicons/react/24/outline";

export function AddAddressCard({onSave}) {
    const [newAddressName, setNewAddressName] = useState("");
    const [newAddress, setNewAddress] = useState("");
    const [newPhoneNumber, setNewPhoneNumber] = useState("");
    const [selectedType, setSelectedType] = useState("home");

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [addresses, setAddresses] = useState([]);

    const handleAddAddressClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleModalSave = () => {
        const newAddressData = {
            id: Math.random().toString(36).substr(2, 9), // Gerar um ID único para o novo endereço
            addressName: newAddressName,
            address: newAddress,
            phoneNumber: newPhoneNumber,
            icon: selectedType === "home" ? HomeIcon : 
                selectedType === "work" ? BriefcaseIcon : 
                selectedType === "store" ? ShoppingBagIcon : UserIcon
        };
        onSave(newAddressData); // Passar o novo endereço para a função onSave
        setNewAddressName("");
        setNewAddress("");
        setNewPhoneNumber("");
    };

    return (
        <div className="flex flex-col items-center justify-center w-full h-auto border border-tertiary-black rounded-2xl p-4 bg-secondary-black">
            <h1 className="text-white text-xl font-bold mb-4">Add address</h1>
            <PlusIcon className="text-primary-color size-12 hover:text-light-primary-color" onClick={handleAddAddressClick} />
            {/* Modal */}
            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-80">
                    <div className="bg-black border border-tertiary-black rounded-lg shadow-lg p-10">
                        <h2 className="text-2xl font-bold mb-4 text-white">New Address</h2>
                        <p className="text-clear-white">Select address type</p>
                        <div className="flex gap-2 mt-2 mb-4">
                                <div className="flex items-center border border-tertiary-black p-2 rounded">
                                    <input
                                        type="radio"
                                        id="home"
                                        value="home"
                                        checked={selectedType === "home"}
                                        onChange={() => setSelectedType("home")}
                                        className="mr-2"
                                        />
                                    <HomeIcon className="text-white size-5 mr-2" />
                                    <label htmlFor="home" className="text-white">Home</label>
                                </div>
                                <div className="flex items-center border border-tertiary-black p-2 rounded">
                                    <input
                                        type="radio"
                                        id="work"
                                        value="work"
                                        checked={selectedType === "work"}
                                        onChange={() => setSelectedType("work")}
                                        className="mr-2"
                                    />
                                    <BriefcaseIcon className="text-white size-5 mr-2" />
                                    <label htmlFor="work" className="text-white">Work</label>
                                </div>
                                <div className="flex items-center border border-tertiary-black p-2 rounded">
                                    <input
                                        type="radio"
                                        id="store"
                                        value="store"
                                        checked={selectedType === "store"}
                                        onChange={() => setSelectedType("store")}
                                        className="mr-2"
                                    />
                                    <ShoppingBagIcon className="text-white size-5 mr-2" />
                                    <label htmlFor="store" className="text-white">Store</label>
                                </div>
                            </div>
                        <div className="grid gap-4 mb-4">
                            <input
                                type="text"
                                placeholder="Address Name"
                                value={newAddressName}
                                onChange={(e) => setNewAddressName(e.target.value)}
                                className="mt-1 p-2 sm:w-80 w-full border border-tertiary-black bg-primary-black text-white rounded"
                            />
                            <input
                                type="text"
                                placeholder="Address"
                                value={newAddress}
                                onChange={(e) => setNewAddress(e.target.value)}
                                className="mt-1 p-2 sm:w-80 w-full border border-tertiary-black bg-primary-black text-white rounded"
                            />
                            <input
                                type="text"
                                placeholder="Phone Number"
                                value={newPhoneNumber}
                                onChange={(e) => setNewPhoneNumber(e.target.value)}
                                className="mt-1 p-2 sm:w-80 w-full border border-tertiary-black bg-primary-black text-white rounded"
                            />
                        </div>
                        <div className="flex justify-end">
                            <button
                                className="bg-red-700 text-white px-4 py-2 rounded mr-2"
                                onClick={handleModalClose}
                            >
                                Cancel
                            </button>
                            <button
                                className="bg-primary-color text-white px-4 py-2 rounded"
                                onClick={handleModalSave}
                            >
                                Save
                            </button>
                        </div>
                </div>
            </div>
            )}
            {addresses.map(address => (
                <div key={address.id} className="flex items-center text-white">
                    <p>{address.addressName}</p>
                    <p>{address.address}</p>
                    <p>{address.phoneNumber}</p>
                </div>
            ))}
        </div>
    );
}