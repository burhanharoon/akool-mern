import React from 'react'

const Error = ({ content }) => {
	return (
		<div id="notfound">
			<div class="notfound">
				<div class="notfound-404">
					<h3>Oops! Page not found</h3>
					<h1><span>4</span><span>0</span><span>4</span></h1>
				</div>
				<h2>{content}</h2>
			</div>
		</div>
	)
}

export default Error
