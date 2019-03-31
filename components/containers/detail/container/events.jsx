import React from 'react';
import TokenInput from 'react-tokeninput';
import Base from '../../base.jsx';
import DetailContainerBase from '../container_container.jsx';
import DashboardWrapper from '../../dashboardHOC.jsx';
import ContainerService from '../../../../actions/container_service.jsx';
import EventService from '../../../../actions/events_service.jsx';
import renderComboboxOptions from '../../../subcomponents/events/events_multi_select_option.jsx';


class ContainerEvents extends Base {
  componentDidMount() { }

  render() {
    const options = renderComboboxOptions(this.props.filteredOptions);
    return (
      <DetailContainerBase match={this.props.match} push={this.pushNavigation}>
        <TokenInput
          menuContent={options}
          onInput={this.props.filterTags}
          onSelect={this.props.addToSelectedItems}
          onRemove={this.props.removeFromSelectedItems}
          selected={this.props.selectedEventTypes}
          placeholder="Select events of interest"
        />
      </DetailContainerBase>
    );
  }
}

export default DashboardWrapper(
  ContainerEvents,
  { ...ContainerService, ...EventService },
  state => ({
    events: state.containerReducer.events,
    selectedEventTypes: state.eventsReducer.selectedEventTypes,
    filteredOptions: state.eventsReducer.filteredOptions,
  }),
);
