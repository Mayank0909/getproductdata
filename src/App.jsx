import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import List from "./Components/List";
function App() {
	useEffect(() => {
		getProductsData();
	}, []);
	const [productData, setProductData] = useState([]);
	const getProductsData = async () => {
		const { data } = await axios.post(
			"http://3.7.252.58:4001/product/getAllProduct"
		);
		setProductData(data);
	};
	return (
		<div className="App">
			<List data={productData}></List>
		</div>
	);
}

export default App;
