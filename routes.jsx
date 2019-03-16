import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import ContainerContainer from './components/containers/general/container_container.jsx';
import ImageContainer from './components/containers/general/image_container.jsx';
import VolumeContainer from './components/containers/general/volume_container.jsx';
import NetworkContainer from './components/containers/general/network_container.jsx';
import DockerDaemonContainer from './components/containers/general/docker_daemon_container.jsx';
import ServiceContainer from './components/containers/general/service_container.jsx';
import SecretContainer from './components/containers/general/secret_container.jsx';
import NodeContainer from './components/containers/general/node_container.jsx';
import ConfigContainer from './components/containers/general/config_container.jsx';

import VolumeInspect from './components/containers/detail/volume/inspect.jsx';

import ServiceInspect from './components/containers/detail/service/inspect.jsx';

import SecretInspect from './components/containers/detail/secret/inspect.jsx';

import NodeInspect from './components/containers/detail/node/inspect.jsx';

import NetworkInspect from './components/containers/detail/network/inspect.jsx';

import ImageInspect from './components/containers/detail/image/inspect.jsx';
import ImageHistory from './components/containers/detail/image/history.jsx';

import InspectContainer from './components/containers/detail/container/inspect.jsx';
// import ContainerEvents from './components/containers/detail/container/events.jsx';
import ContainerLogs from './components/containers/detail/container/logs.jsx';
import ContainerProcesses from './components/containers/detail/container/processes.jsx';
import ContainerStats from './components/containers/detail/container/stats.jsx';


export default () => (
  <BrowserRouter>
    <div>
      <Switch>
        <Route exact path="/" component={ContainerContainer} />

        <Route exact path="/containers" component={ContainerContainer} />
        <Route exact path="/images" component={ImageContainer} />
        <Route exact path="/volumes" component={VolumeContainer} />
        <Route exact path="/networks" component={NetworkContainer} />
        <Route exact path="/docker-daemon" component={DockerDaemonContainer} />
        <Route exact path="/services" component={ServiceContainer} />
        <Route exact path="/nodes" component={NodeContainer} />
        <Route exact path="/secrets" component={SecretContainer} />
        <Route exact path="/configs" component={ConfigContainer} />

        <Route exact path="/containers/:containerId/details" component={InspectContainer} />
        <Route exact path="/images/:imageId/details" component={ImageInspect} />
        <Route exact path="/volumes/:volumeId/details" component={VolumeInspect} />
        <Route exact path="/networks/:networkId/details" component={NetworkInspect} />
        <Route exact path="/services/:serviceId/details" component={ServiceInspect} />
        <Route exact path="/nodes/:nodeId/details" component={NodeInspect} />
        <Route exact path="/secrets/:secretId/details" component={SecretInspect} />

        {/*
        <Route path="/containers/:containerId/events" component={} />
        <Route path="/images/:imageId/events" component={} />
        <Route path="/volumes/:volumeId/events" component={} />
        <Route path="/networks/:networkId/events" component={} />
        <Route path="/docker-daemon/:docker-daemonId/events" component={} />
        <Route path="/services/:serviceId/events" component={} />
        <Route path="/nodes/:nodeId/events" component={} />
        <Route path="/secrets/:secretId/events" component={} />
        <Route path="/configs/:configId/events" component={} />
         */}

        <Route exact path="/images/:imageId/history" component={ImageHistory} />

        <Route path="/containers/:containerId/processes" component={ContainerProcesses} />
        <Route path="/containers/:containerId/stats" component={ContainerStats} />
        <Route path="/containers/:containerId/logs" component={ContainerLogs} />

        {/* <Route path="/services/:serviceId/logs" component={} /> */}

      </Switch>
      <ToastContainer />
    </div>
  </BrowserRouter>
);
