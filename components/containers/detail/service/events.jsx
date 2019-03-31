import React from 'react';
import TokenInput from 'react-tokeninput';
import Base from '../../base.jsx';
import ServiceDetailBase from '../service_container.jsx';
import DashboardWrapper from '../../dashboardHOC.jsx';
import ServiceService from '../../../../actions/service_service.jsx';
import EventService from '../../../../actions/events_service.jsx';
import renderComboboxOptions from '../../../subcomponents/events/events_multi_select_option.jsx';


class ServiceEvents extends Base {
  componentDidMount() { }

  render() {
    const options = renderComboboxOptions(this.props.filteredOptions);
    return (
      <ServiceDetailBase match={this.props.match} push={this.pushNavigation}>
        <TokenInput
          menuContent={options}
          onInput={this.props.filterTags}
          onSelect={this.props.addToSelectedItems}
          onRemove={this.props.removeFromSelectedItems}
          selected={this.props.selectedEventTypes}
          placeholder="Select events of interest"
        />
      </ServiceDetailBase>
    );
  }
}

export default DashboardWrapper(
  ServiceEvents,
  { ...ServiceService, ...EventService },
  state => ({
    events: state.containerReducer.events,
    selectedEventTypes: state.eventsReducer.selectedEventTypes,
    filteredOptions: state.eventsReducer.filteredOptions,
  }),
);
