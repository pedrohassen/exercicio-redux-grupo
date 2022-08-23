import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionSendFormPersonal } from '../store/actions/indexActions';

import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';

class PersonalForm extends Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      uf: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { sendPersonalData, history } = this.props;
    const { name, email, cpf, address, city, uf } = this.state;
    const ufList = [
      'Rio de Janeiro',
      'Minas Gerais',
      'Amapá', 'Amazonas', 'São Paulo', 'Ceará', 'Distrito Federal'];
    return (
      <fieldset>
        <Input
          label="Nome: "
          type="text"
          onChange={ this.handleChange }
          value={ name }
          name="name"
          required
        />
        <Input
          label="Email: "
          type="text"
          onChange={ this.handleChange }
          value={ email }
          name="email"
          required
        />
        <Input
          label="Cpf: "
          type="text"
          onChange={ this.handleChange }
          value={ cpf }
          name="cpf"
          required
        />
        <Input
          label="Endereço: "
          type="text"
          onChange={ this.handleChange }
          value={ address }
          name="address"
          required
        />
        <Input
          label="Cidade: "
          type="text"
          onChange={ this.handleChange }
          name="city"
          value={ city }
        />
        <Select
          defaultOption="Selecione"
          onChange={ this.handleChange }
          value={ uf }
          label="Estado: "
          id="uf"
          name="uf"
          options={ ufList }
        />
        <Button
          type="button"
          label="Enviar"
          onClick={ () => {
            sendPersonalData(this.state);
            history.push('/professionalform');
          } }
        />
      </fieldset>
    );
  }
}

const mapStateToProps = (state) => ({
  personalData: state.personalFormReducer });

const mapDispatchToProps = (dispatch) => ({
  sendPersonalData: (state) => dispatch(actionSendFormPersonal(state)) });

export default connect(mapStateToProps, mapDispatchToProps)(PersonalForm);
