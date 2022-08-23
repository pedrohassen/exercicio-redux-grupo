import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionSendFormProfessional } from '../store/actions/indexActions';

import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';

class ProfessionalForm extends Component {
  constructor() {
    super();
    this.state = {
      curriculum: '',
      job: '',
      description: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { sendProfessionalData, history } = this.props;
    const { curriculum, job, description } = this.state;
    return (
      <fieldset>
        <TextArea
          label="Resumo do currículo: "
          value={ curriculum }
          name="curriculum"
          maxLength="1000"
          onChange={ this.handleChange }
          required
        />
        <Input
          label="Cargo:"
          name="job"
          type="text"
          value={ job }
          onChange={ this.handleChange }
          required
        />
        <TextArea
          label="Descrição do cargo: "
          name="description"
          maxLength="500"
          onChange={ this.handleChange }
          value={ description }
          required
        />
        <Button
          label="enviar"
          onClick={ () => {
            sendProfessionalData(this.state);
            history.push('/formdisplay');
          } }
        />
      </fieldset>
    );
  }
}

const mapStateToProps = (state) => ({
  professionalData: state.professionalFormReducer });

const mapDispatchToProps = (dispatch) => ({
  sendProfessionalData: (state) => dispatch(actionSendFormProfessional(state)) });

export default connect(mapStateToProps, mapDispatchToProps)(ProfessionalForm);
