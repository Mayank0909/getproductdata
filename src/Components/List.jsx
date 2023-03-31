import React from "react";
import Card from "./Card";
import "../App.css";
function List({ data }) {
	console.log(data);
	return (
		<div className="productList">
			{data.map((el) => (
				<Card product={el} key={el._id} />
			))}
		</div>
	);
}

export default List;
