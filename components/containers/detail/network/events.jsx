import React from 'react';
import TokenInput from 'react-tokeninput';
import Base from '../../base.jsx';
import DetailNetworkBase from '../network_container.jsx';
import DashboardWrapper from '../../dashboardHOC.jsx';
import NetworkService from '../../../../actions/network_service.jsx';
import EventService from '../../../../actions/events_service.jsx';
import renderComboboxOptions from '../../../subcomponents/events/events_multi_select_option.jsx';


class NetworkEvents extends Base {
  componentDidMount() { }

  render() {
    const options = renderComboboxOptions(this.props.filteredOptions);
    return (
      <DetailNetworkBase match={this.props.match} push={this.pushNavigation}>
        <TokenInput
          menuContent={options}
          onInput={this.props.filterTags}
          onSelect={this.props.addToSelectedItems}
          onRemove={this.props.removeFromSelectedItems}
          selected={this.props.selectedEventTypes}
          placeholder="Select events of interest"
        />
      </DetailNetworkBase>
    );
  }
}

export default DashboardWrapper(
  NetworkEvents,
  { ...NetworkService, ...EventService },
  state => ({
    events: state.containerReducer.events,
    selectedEventTypes: state.eventsReducer.selectedEventTypes,
    filteredOptions: state.eventsReducer.filteredOptions,
  }),
);
