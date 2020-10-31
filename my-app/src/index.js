import React from "react";
import ReactDom from "react-dom";
//CSS
import "./index.css";

// always return JSX

//setup vars
const firstBook = {
	img:
		"https://images-na.ssl-images-amazon.com/images/I/71tPmybVKxL._AC_UL200_SR200,200_.jpg",
	title: "Fortune and Glory",
	author: "Janet Evanovich",
};

const secondBook = {
	img:
		"https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg",
	title: "A Promised Land",
	author: "Barack Obama",
};

// stateless functional component
function BookList() {
	return (
		<section className="booklist">
			<Book
				img={firstBook.img}
				title={firstBook.title}
				author={firstBook.author}
			/>
			<Book
				img={secondBook.img}
				title={secondBook.title}
				author={secondBook.author}
			/>
		</section>
	);
}

// Normal app writing
const Book = (props) => {
	return (
		<article className="book">
			<img src={props.img} alt="" />
			<h1>{props.title} </h1>
			<h4>{props.author}</h4>
		</article>
	);
};
// nested Components, react tools
// const Book = () => {
// 	return (
// 		<article className='book'>
// 			<Image></Image>
// 			<Title />
// 			<Author />
// 		</article>
// 	);
// };
// const Image = () => (
// 	<img
// 		src="https://images-na.ssl-images-amazon.com/images/I/71tPmybVKxL._AC_UL200_SR200,200_.jpg"
// 		alt=""
// 	/>
// );
//  JSX
// const Title = () => <h1>Fortune and Glory: A Novel </h1>;
// const Author = () => <h4 style={{color:'#617d98', fontSize: '0.75rem', marginTop: '0.25rem'}}>Janet Evanovich </h4>;

ReactDom.render(<BookList />, document.getElementById("root"));
