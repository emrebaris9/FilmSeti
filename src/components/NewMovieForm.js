import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Button, Form, Image, Message, Segment } from 'semantic-ui-react'
import InlineError from './InlineError';

class NewMovieForm extends Component {
	state = {
		_id: this.props.movie ? this.props.movie._id : '',
		title: this.props.movie ? this.props.movie.title : '',
		cover: this.props.movie ? this.props.movie.cover : '',
		errors: {},
		redirect: false
	};

	static propTypes = {
		onNewMovieSubmit: PropTypes.func.isRequired
	};

	componentWillReceiveProps(nextProps) {
		const { movie } = nextProps.newMovie;
		if (
			movie.title
			&&
			movie.title !== this.state.title
		) {
			this.setState({
				title: movie.title,
				cover: movie.cover,
			});

		}
	}

	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		});
	};

	onSubmit = () => {
		const errors = this.validate();
		this.setState({
			errors,
			redirect: true
		});

		const _id = this.state._id || this.props.newMovie.movie._id;

		if (Object.keys(errors).length === 0) {
		  if (!_id)
				this.props.onNewMovieSubmit(this.state);
			else
				this.props.onUpdateMovieSubmit({ ...this.state, _id});
		}
	};

	validate = () => {
		const errors = {};
		if (!this.state.title) errors.title = "Bos Bırakılamaz!"
		if (!this.state.cover) errors.cover = "Bos Bırakılamaz!"
		return errors;
	};

	render() {
		const {errors} = this.state;
		const form = (
		
			<Form onSubmit={this.onSubmit} loading={this.props.newMovie.fetching || this.props.newMovie.movie.fetching}>
				<Form.Field >
					<label>Başlık</label>
					{ errors.title && <InlineError message={errors.title} /> }
					<input
						id="title"
						name="title"
						value={this.state.title}
						onChange={this.handleChange}
						placeholder='Title' />
				</Form.Field>
				<Form.Field>
					<label>Kapak Url</label>
					{ errors.cover && <InlineError message={errors.cover} /> }
					<input
						id="cover"
						name="cover"
						value={this.state.cover}
						onChange={this.handleChange}
						placeholder='Cover Url' />
				</Form.Field>
				<Image src={this.state.cover} size='small' />
				<div className="clearfix"></div>
				<Button type='submit'>Submit</Button>

				{
					this.props.newMovie.error.response
					&&
					(
						<Message negative>
							<Message.Header>We`re Sorry</Message.Header>
							<p>A problem occured while recording.</p>
						</Message>
					)
				}
			</Form>
		);

		return (
			<div>
				{
					this.props.newMovie.done && this.state.redirect
						? <Redirect to="/movies" /> : form
				}
			</div>
		);
	}
}

export default NewMovieForm;
