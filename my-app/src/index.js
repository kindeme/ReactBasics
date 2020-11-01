import React from "react";
import ReactDom from "react-dom";
//CSS
import "./index.css";

// import js file
 import {books} from './books';
 import { greeting } from "./testing/testing";
//  default export for import
  import Book from "./book";
// stateless functional component

function BookList() {
	console.log(greeting);
	return (
		<section className="booklist">
			{books.map((book, index) => {
				return <Book key={book.id} {...book}></Book>;
			})}
		</section>
	);
}


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
