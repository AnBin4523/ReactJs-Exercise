import { useState } from "react";
import dataShoe from "./dataShoe.json";
import ShoeList from "./ShoeList";
import Modal from "./Modal";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function ShoeStore() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelectedProduct = (product) => {
    setSelectedProduct(product);
    setIsOpen(true);
  };

  const handleClosedModal = () => {
    setSelectedProduct(null);
    setIsOpen(false);
  };

  return (
    <div className="container">
      <h1 className="text-center">Shoe Store</h1>
      <ShoeList product={dataShoe} onSelect={handleSelectedProduct} />
      <Modal
        product={selectedProduct}
        isOpen={isOpen}
        onClose={handleClosedModal}
      />
    </div>
  );
}
