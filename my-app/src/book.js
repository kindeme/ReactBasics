// book js component

import React from "react";


// Normal app writing
const Book = (props) => {
	const { img, title, author } = props;

	//attribute,eventHandler
	// onclick,onMouseOver
	const clickHandler = (e) => {
		console.log(e.target);
		alert("hello world");
	};
	const complexExample = (author) =>{
		console.log(author);

	}
	return (
		<article className="book" onMouseOver={() =>{
			console.log(title);
		}}>
			<img src={img} alt="" />
			<h1 onClick={() => console.log(title)}>{title} </h1>
			<h4>{author}</h4>
			<button type="button" onClick={clickHandler}>
				Reference Example
			</button>
			<button type="button" onClick={() => complexExample(author)}>
				more complexe example
			</button>
		</article>
	);
};

export default  Book ;