import React from "react";
import ReactDom from "react-dom";
//CSS
import "./index.css";

// always return JSX

//setup vars
const books = [
	{
		id: 1,
		img:
			"https://images-na.ssl-images-amazon.com/images/I/71tPmybVKxL._AC_UL200_SR200,200_.jpg",
		title: "Fortune and Glory",
		author: "Janet Evanovich",
	},

	{
		id: 2,
		img:
			"https://images-na.ssl-images-amazon.com/images/I/91uwocAMtSL._AC_UL200_SR200,200_.jpg",
		title: "A Promised Land",
		author: "Barack Obama",
	},
	{
		id: 3,
		img:
			"https://images-na.ssl-images-amazon.com/images/I/A1i8NcG05pL._AC_UL200_SR200,200_.jpg",
		title: "A Time for Mercy (Jake Brigance)",
		author: "John Grisham",
	},
];

// stateless functional component

function BookList() {
	return (
		<section className="booklist">
			{books.map((book,index) => {
				return <Book key={book.id} {...book}></Book>;
			})}
		</section>
	);
}

// Normal app writing
const Book = (props) => {
	const { img, title, author } = props;
	return (
		<article className="book">
			<img src={img} alt="" />
			<h1>{title} </h1>
			<h4>{author}</h4>
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
