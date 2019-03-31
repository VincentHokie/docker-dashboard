import React from 'react';
import TokenInput from 'react-tokeninput';
import Base from '../../base.jsx';
import DetailNodeBase from '../node_container.jsx';
import DashboardWrapper from '../../dashboardHOC.jsx';
import NodeService from '../../../../actions/node_service.jsx';
import EventService from '../../../../actions/events_service.jsx';
import renderComboboxOptions from '../../../subcomponents/events/events_multi_select_option.jsx';


class NodeEvents extends Base {
  componentDidMount() { }

  render() {
    const options = renderComboboxOptions(this.props.filteredOptions);
    return (
      <DetailNodeBase match={this.props.match} push={this.pushNavigation}>
        <TokenInput
          menuContent={options}
          onInput={this.props.filterTags}
          onSelect={this.props.addToSelectedItems}
          onRemove={this.props.removeFromSelectedItems}
          selected={this.props.selectedEventTypes}
          placeholder="Select events of interest"
        />
      </DetailNodeBase>
    );
  }
}

export default DashboardWrapper(
  NodeEvents,
  { ...NodeService, ...EventService },
  state => ({
    events: state.containerReducer.events,
    selectedEventTypes: state.eventsReducer.selectedEventTypes,
    filteredOptions: state.eventsReducer.filteredOptions,
  }),
);
