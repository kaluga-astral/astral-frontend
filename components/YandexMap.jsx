import { merge } from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class YandexMap extends Component {
  componentDidMount = () => {
    const {
      ymaps, state, options, address,
    } = this.props;

    ymaps.ready(async () => {
      const nearestObject = await this.getNearestObject(address);

      if (nearestObject) {
        const coordinates = nearestObject.geometry.getCoordinates();

        this.map = new ymaps.Map(
          this.mapContainer,
          merge({}, { center: coordinates }, state),
          options,
        );
        this.setCenter(coordinates);
      }
    });
  };

  getNearestObject = async (address) => {
    const { ymaps } = this.props;
    const { geoObjects } = await ymaps.geocode(address);

    return geoObjects.get(0);
  };

  setCenter = (coordinates) => {
    const { ymaps } = this.props;
    const placeMark = new ymaps.Placemark(coordinates);

    this.map.geoObjects.removeAll();
    this.map.geoObjects.add(placeMark);
    this.map.setCenter(coordinates, 14);
  };

  render = () => {
    const { className } = this.props;

    return (
      <div
        className={className}
        ref={(div) => {
          this.mapContainer = div;
        }}
      />
    );
  };
}

YandexMap.defaultProps = {
  state: {
    behaviors: [],
    controls: [],
  },
  options: null,
  className: null,
};

YandexMap.propTypes = {
  address: PropTypes.string.isRequired,
  ymaps: PropTypes.shape().isRequired,
  className: PropTypes.string,
  state: PropTypes.shape({
    behaviors: PropTypes.arrayOf(PropTypes.string),
    bounds: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
    center: PropTypes.arrayOf(PropTypes.number),
    controls: PropTypes.arrayOf(PropTypes.string),
    margin: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.number),
      PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.number)),
    ]),
    type: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
    zoom: PropTypes.number,
  }),
  options: PropTypes.shape({
    autoFitToViewport: PropTypes.oneOf(['none', 'ifNull', 'always']),
    avoidFractionalZoom: PropTypes.bool,
    exitFullscreenByEsc: PropTypes.bool,
    fullscreenZIndex: PropTypes.number,
    mapAutoFocus: PropTypes.bool,
    maxAnimationZoomDifference: PropTypes.number,
    maxZoom: PropTypes.number,
    minZoom: PropTypes.number,
    nativeFullscreen: PropTypes.bool,
    projection: PropTypes.func,
    restrictMapArea: PropTypes.bool,
    suppressMapOpenBlock: PropTypes.bool,
    suppressObsoleteBrowserNotifier: PropTypes.bool,
    yandexMapAutoSwitch: PropTypes.bool,
    yandexMapDisablePoiInteractivity: PropTypes.bool,
  }),
};

export default YandexMap;
