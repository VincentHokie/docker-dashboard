import React from 'react';
import TokenInput from 'react-tokeninput';
import Base from '../../base.jsx';
import DetailSecretBase from '../secret_container.jsx';
import DashboardWrapper from '../../dashboardHOC.jsx';
import SecretService from '../../../../actions/secret_service.jsx';
import EventService from '../../../../actions/events_service.jsx';
import renderComboboxOptions from '../../../subcomponents/events/events_multi_select_option.jsx';


class SecretEvents extends Base {
  componentDidMount() { }

  render() {
    const options = renderComboboxOptions(this.props.filteredOptions);
    return (
      <DetailSecretBase match={this.props.match} push={this.pushNavigation}>
        <TokenInput
          menuContent={options}
          onInput={this.props.filterTags}
          onSelect={this.props.addToSelectedItems}
          onRemove={this.props.removeFromSelectedItems}
          selected={this.props.selectedEventTypes}
          placeholder="Select events of interest"
        />
      </DetailSecretBase>
    );
  }
}

export default DashboardWrapper(
  SecretEvents,
  { ...SecretService, ...EventService },
  state => ({
    events: state.containerReducer.events,
    selectedEventTypes: state.eventsReducer.selectedEventTypes,
    filteredOptions: state.eventsReducer.filteredOptions,
  }),
);
