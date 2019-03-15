import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Menu from 'react-bulma-components/lib/components/menu';
import '../../static/styles/components/sidebar.css';
import Base from '../containers/base.jsx';


class SideBar extends Base {
  render() {
    return (
      <div className="column is-half-mobile is-one-third-tablet is-one-quarter-desktop is-one-fifth-widescreen is-one-fifth-fullhd">
        <Menu as="aside">
          <Menu.List title="General">
            <Menu.List.Item>
              <a href="/containers" onClick={this.props.push}>
                Containers
              </a>
            </Menu.List.Item>
            <Menu.List.Item>
              <a href="/images" onClick={this.props.push}>
                Images
              </a>
            </Menu.List.Item>
            <Menu.List.Item>
              <a href="/volumes" onClick={this.props.push}>
                Volumes
              </a>
            </Menu.List.Item>
            <Menu.List.Item>
              <a href="/networks" onClick={this.props.push}>
                Networks
              </a>
            </Menu.List.Item>
            <Menu.List.Item>
              <a href="/docker-daemon" onClick={this.props.push}>
                Docker Daemon
              </a>
            </Menu.List.Item>
          </Menu.List>
          <Menu.List title="Swarm Mode">
            <Menu.List.Item>
              <a href="/services" onClick={this.props.push}>
                Services
              </a>
            </Menu.List.Item>
            <Menu.List.Item>
              <a href="/nodes" onClick={this.props.push}>
                Nodes
              </a>
            </Menu.List.Item>
            <Menu.List.Item>
              <a href="/secrets" onClick={this.props.push}>
                Secrets
              </a>
            </Menu.List.Item>
            <Menu.List.Item>
              <a href="/configs" onClick={this.props.push}>
                Configs
              </a>
            </Menu.List.Item>
          </Menu.List>
        </Menu>
      </div>

    );
  }
}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

const mapStateToProps = state => ({
  form: state.modalReducer.form,
  error: state.modalReducer.error,
  onSubmit: state.modalReducer.onSubmit,
  show: state.modalReducer.show,
  modalTitle: state.modalReducer.modalTitle,
  buttonLabel: state.modalReducer.buttonLabel,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SideBar);
