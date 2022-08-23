import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class FormDataDisplay extends Component {
  render() {
    const { formDataDisplay } = this.props;
    return (
      <div>
        <h2>Dados enviados</h2>
        <div>
          Nome:
          { formDataDisplay.personalForm.state.name }
        </div>
        <div>
          Email:
          { formDataDisplay.personalForm.state.email }
        </div>
        <div>
          CPF:
          { formDataDisplay.personalForm.state.cpf }
        </div>
        <div>
          Endereço:
          { formDataDisplay.personalForm.state.address }
        </div>
        <div>
          Cidade:
          { formDataDisplay.personalForm.state.city }
        </div>
        <div>
          Estado:
          { formDataDisplay.personalForm.state.uf }
        </div>
        <div>
          Currículo:
          { formDataDisplay.professionalForm.state.curriculum }
        </div>
        <div>
          Cargo:
          { formDataDisplay.professionalForm.state.job }
        </div>
        <div>
          Descrição do cargo:
          { formDataDisplay.professionalForm.state.description }
        </div>
      </div>
    );
  }
}

FormDataDisplay.propTypes = {
  formDataDisplay: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    cpf: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    job: PropTypes.string.isRequired,
    curriculum: PropTypes.string.isRequired,
    uf: PropTypes.string.isRequired,
    city: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  formDataDisplay: state });

export default connect(mapStateToProps, null)(FormDataDisplay);
