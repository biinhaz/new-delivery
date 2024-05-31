import { useState, useRef } from "react";
import { AddressCard } from "./address-card";
import { HomeIcon, ShoppingBagIcon, BriefcaseIcon, UserIcon } from "@heroicons/react/24/outline";
import { motion, useInView } from "framer-motion";
import { AddAddressCard } from "./add-address";

export function Addresses() {
    const [addressesData, setAddressData] = useState([
        {
            id: 1,
            addressName: "Beyond The Bytes",
            address: "68890 Leah Square, Carminemouth, HI 18185",
            phoneNumber: "+55 (11) 99958-7541",
            icon: BriefcaseIcon,
            },
            {
            id: 2,
            addressName: "Home",
            address: "7218 Beer Trace, East Alfonso, ID 09259-0482",
            phoneNumber: "+1 (054) 189-5948",
            icon: HomeIcon,
            },
            {
            id: 3,
            addressName: "Papa Pizza",
            address: "651 Corwin Skyway, Rodriguezberg, ND 02614-1363",
            phoneNumber: "+1 (661) 644-5094",
            icon: ShoppingBagIcon,
            },
            {
            id: 4,
            addressName: "Josh's House",
            address: "Apt. 282 113 Morissette Parkways, South Tabatha, MT 025513",
            phoneNumber: "+1 (962) 705-4440",
            icon: UserIcon,
            },
    ]);

    const cardVariants = {
        initial: { opacity: 0, scale: 0.8 },
        animate: { opacity: 1, scale: 1 },
    };

    const ref = useRef(null);
    const isInView = useInView(ref);

    const handleDelete = (id) => {
        setAddressData(addressesData.filter((address) => address.id !== id));
    };

    const handleSaveNewAddress = (newAddress) => {
        setAddressData([...addressesData, newAddress]); // Adicionar o novo endereço à lista de endereços
    };

    return (
        <section id="addresses">
            <h1 className="text-white font-title text-3xl font-bold text-center mt-10 mb-4 sm:mt-44 sm:mb-10 animate-float">
                My addresses
            </h1>
            <ul
                ref={ref}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8 p-6 sm:p-10 animate-float"
            >
                {addressesData.map((address, index) => (
                    <motion.li
                        key={address.id}
                        variants={cardVariants}
                        initial="initial"
                        animate={isInView ? "animate" : "initial"}
                        transition={{ duration: 0.3, delay: index * 0.2 }}
                    >
                        <AddressCard
                            addressName={address.addressName}
                            address={address.address}
                            phoneNumber={address.phoneNumber}
                            icon={address.icon}
                            onDelete={() => handleDelete(address.id)}
                        />
                    </motion.li>
                ))}
                <motion.li
                    key="add-address"
                    variants={cardVariants}
                    initial="initial"
                    animate={isInView ? "animate" : "initial"}
                    transition={{ duration: 0.3, delay: addressesData.length * 0.2 }}
                >
                    <AddAddressCard onSave={handleSaveNewAddress} />
                </motion.li>
            </ul>
        </section>
    );
}
