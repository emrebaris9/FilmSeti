import React, {Component} from 'react';
import {Link, NavLink} from "react-router-dom";
import {fixedMenuStyle, menuStyle} from "../helpers/styleHelper";
import { Container, Visibility, Menu, Image, Dropdown } from 'semantic-ui-react';

class Header extends Component {
	state = {
		menuFixed: null,
		overlayFixed: false,
	};

	stickTopMenu = () => this.setState({ menuFixed: true });
	unStickTopMenu = () => this.setState({ menuFixed: null });

	render() {
		const { menuFixed } = this.state;

		return (
			<div>
				<Visibility
					onBottomPassed={this.stickTopMenu}
					onBottomVisible={this.unStickTopMenu}
					once={false}
				>
					<Menu
						borderless
						fixed={menuFixed && 'top'}
						style={menuFixed ? fixedMenuStyle : menuStyle}
					>
						<Container text>
							<Menu.Item as={Link} to="/" exact="true">
								<Image size='mini' src='https://cdn3.iconfinder.com/data/icons/movie-video/512/Icon_16-512.png' />
								<Menu.Item header>Film Seti</Menu.Item>
							</Menu.Item>
							<Menu.Item as={NavLink} to="/movies" exact>
								Filmler
							</Menu.Item>
							<Menu.Item  as={NavLink} to="/movies/new">
								Yeni Film
							</Menu.Item>

							<Menu.Menu position='right'>
								<Dropdown text='Ekstra' pointing className='link item'>
								<Dropdown.Menu>
									<Dropdown.Item as={NavLink} to="/news" exact> Haberler </Dropdown.Item>
									<Dropdown.Item as={NavLink} to="/weather" exact> Hava Durumu </Dropdown.Item>
								</Dropdown.Menu>
								</Dropdown>
						    </Menu.Menu>

						</Container>
					</Menu>
				</Visibility>
			</div>
		);
	}
}

export default Header;
