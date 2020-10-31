import React from "react";
import ReactDom from "react-dom";
//CSS
import "./index.css";

// stateless functional component
// always return JSX

// nested Components, react tools
function BookList() {
	return (
		<section className="booklist">
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
			<Book />
		</section>
	);
}
const Book = () => {
	return (
		<article className='book'>
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
//  JSX
const Title = () => <h1>Fortune and Glory: A Novel </h1>;
const Author = () => <h4 syle={{color:'#617d98', fontSize: '0.75rem', marginTop: '0.75rem'}}>Janet Evanovich </h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
