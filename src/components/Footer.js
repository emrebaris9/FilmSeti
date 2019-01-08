import React from 'react';
import { Container, Icon, List, Segment, Button, Image } from 'semantic-ui-react';


const Footer = props => {
	return (
		<div>
	<Segment inverted style={{ margin: '5em 0em 0em', padding: '5em 0em' }} vertical>
	<Image as='a' href='/'src='https://cdn3.iconfinder.com/data/icons/movie-video/512/Icon_16-512.png' centered size='mini' />
		  <Container textAlign='center'> 
            <List horizontal inverted divided link size='small'>
              <List.Item as='a' href='https://github.com/emrebaris9'>
			  <Button animated='vertical'>
					<Button.Content hidden>Github</Button.Content>
					<Button.Content visible>
						<Icon name='github' size="large" />
					</Button.Content>
			  </Button>
              </List.Item>
              <List.Item as='a' href='https://www.linkedin.com/in/yunusemrebaris/'>
			  <Button animated='vertical'>
					<Button.Content hidden>LinkeIn</Button.Content>
					<Button.Content visible>
						<Icon name='linkedin' size="large" />
					</Button.Content>
			  </Button>
              </List.Item>
              <List.Item as='a' href='https://www.instagram.com/emrebariss'>
			  <Button animated='vertical'>
					<Button.Content hidden>Instagram</Button.Content>
					<Button.Content visible>
						<Icon name='instagram' size="large" />
					</Button.Content>
			  </Button>
              </List.Item>
              <List.Item inverted="true" as='a' href='https://www.facebook.com/emrebaris9'>
			  <Button animated='vertical'>
					<Button.Content hidden>Facebook</Button.Content>
					<Button.Content visible>
						<Icon name='facebook' size="large"/>
					</Button.Content>
			  </Button>
              </List.Item>
            </List>
          </Container>
        </Segment>
		</div>
	);
};

export default Footer;