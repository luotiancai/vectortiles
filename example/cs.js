
//在线
// var url = "https://a.tiles.mapbox.com/v4/mapbox.mapbox-streets-v6/{z}/{x}/{y}.vector.pbf?access_token={k}";
// var key = "pk.eyJ1IjoidWN6bHRsdSIsImEiOiJjam4zOXgzeHkyY2ZhM2txbG81eTY5cHgxIn0.fTjC7nPLAXEfR7fSxU9XFw";

//离线
var url = "http://localhost:8080/geoserver/gwc/service/tms/1.0.0/tms:river@EPSG:900913@pbf/{z}/{x}/{y}.pbf";
var mvtLayer = createMVTWithStyle(Cesium, ol, createMapboxStreetsV6Style, {
  url: url,
  // key: key
})
console.log(mvtLayer)

var viewer = new Cesium.Viewer('cesiumContainer', {
  imageryProvider: mvtLayer,
  baseLayerPicker: false,
  timeline: false,
  animation: false,
  navigationHelpButton: false,
  homeButton: false,
  sceneModePicker: false,
  geocoder: false,
  fullscreenButton: false,
  selectionIndicator: false
});
// viewer.imageryLayers.addImageryProvider(new Cesium.ArcGisMapServerImageryProvider({
//     url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer'
// }), -1);
// viewer.scene.globe.baseColor = new Cesium.Color(1.0, 1.0, 1.0, 1.0);
// 除去cesium标志
viewer._cesiumWidget._creditContainer.style.display = 'none'