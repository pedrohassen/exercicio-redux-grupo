import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const { personal, professional } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          { personal.name }
        </div>
        <div>
          Email:
          { personal.email }
        </div>
        <div>
          CPF:
          { personal.cpf }
        </div>
        <div>
          Endereço:
          { personal.address }
        </div>
        <div>
          Cidade:
          { personal.city }
        </div>
        <div>
          Estado:
          { personal.uf }
        </div>
        <div>
          Currículo:
          { professional.curriculum }
        </div>
        <div>
          Cargo:
          { professional.job }
        </div>
        <div>
          Descrição do cargo:
          { professional.description }
        </div>
      </div>
    );
  }
}

FormDataDisplay.propTypes = {
  personal: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string,
    cpf: PropTypes.string,
    address: PropTypes.string,
    city: PropTypes.string,
    uf: PropTypes.string,
  }).isRequired,
  professional: PropTypes.shape({
    curriculum: PropTypes.string,
    job: PropTypes.string,
    description: PropTypes.string,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  personal: state.personalForm,
  professional: state.professionalForm });

export default connect(mapStateToProps)(FormDataDisplay);
