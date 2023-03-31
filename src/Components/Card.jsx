import React from "react";
import "../App.css";

function Card({ product }) {
	const discountedData = (price, discountAmount) => {
		const percentage = ((price - discountAmount) / price) * 100;
		return percentage.toFixed(2);
	};

	return (
		<div className="productItem">
			<div className="productItemImageContainer">
				<img src={product.imageUrl || "https://placehold.co/600x400"} alt="" />
			</div>
			<div className="productItemHeading">{product.name}</div>
			<div className="productItemDescription">{product.description}</div>
			<div className="productItemPriceContainer">
				<span>Rs {product.discountAmount}</span>
				<span>Rs {product.price}</span>
				<span>
					({discountedData(product.price, product.discountAmount)}% OFF)
				</span>
			</div>
			<button className="cartButton">Add To Cart</button>
		</div>
	);
}

export default Card;

// createdAt: "2022-05-27T06:08:41.242Z";
// description: "MYTHIC OIL ";
// discountAmount: 670;
// imageUrl: "https://www.lorealprofessionnel.in/-/media/master/in/products/packshotphoto/hair-care/mythic-oil/mythic-oil-creme-universelle.jpg?as=1&w=900&hash=02EFD039516FC75A8F8D4046A30298B91F281B87";
// isActive: true;
// isDeleted: false;
// name: "MYTHIC OIL ";
// price: 760;
// productBrandId: "7d2a2654-79f3-4abe-9430-3700c3ba5707";
// productCategoryId: "ddf7c1bf-81cb-4167-b377-6113ed43323f";
// rating: 4;
// reviewCount: 0;
// slugName: "MYTHIC OIL ";
// updatedAt: null;
