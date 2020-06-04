import React from "react";

import "./faq.styles.scss";

class FAQQ extends React.Component {
	render() {
		return (
			<div className='faq-container'>
				<h2>FAQ</h2>

				<button className='accordion' onClick={this.toggle}>
					1. How do I return?
				</button>
				<div className='panel'>
					<p className='text'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
						consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
				</div>
				<div className='space' />
				<button className='accordion'>2. Will an item be back in stock?</button>
				<div className='panel'>
					<p className='text'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
						consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
				</div>
				<div className='space' />
				<button className='accordion'>3. Where is my delivery?</button>
				<div className='panel'>
					<p className='text'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
						consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
				</div>
				<div className='space' />
				<button className='accordion'>
					4. My item is faulty. What do I do?
				</button>
				<div className='panel'>
					<p className='text'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
						consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
				</div>
				<div className='space' />
				<button className='accordion'>5. When will I be charged?</button>
				<div className='panel'>
					<p className='text'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
						consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
				</div>
				<div className='space' />
				<button className='accordion'>6. Wrong item received</button>
				<div className='panel'>
					<p className='text'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
						consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
				</div>
				<div className='space' />
				<button className='accordion'>
					7. Why are some items not able to be delivered to SG?
				</button>
				<div className='panel'>
					<p className='text'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
						consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
				</div>
				<div className='space' />
				<button className='accordion'>
					8. What are the different types of payment?
				</button>
				<div className='panel'>
					<p className='text'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
						eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
						ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
						aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet,
						consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea commodo
						consequat.
					</p>
				</div>
			</div>
		);
	}
}

export default FAQQ;
