import React from "react";
import ReactDom from "react-dom";

// stateless functional component
// always return JSX

// nested Components, react tools
function BookList() {
	return (
		<section>
			<Book />
			<Book />
			<Book />
		</section>
	);
}
const Book = () => {
	return (
		<article>
			<Image></Image>
			<Title />
			<Author />
		</article>
	);
};
const Image = () => (
	<img
		src="https://images-na.ssl-images-amazon.com/images/I/71tPmybVKxL._AC_UL200_SR200,200_.jpg"
		alt=""
	/>
);
const Title = () => (
	<h1>Fortune and Glory: A Novel </h1>
);
const Author = () => (
	<h4>Janet Evanovich </h4>
);
ReactDom.render(<BookList />, document.getElementById("root"));
