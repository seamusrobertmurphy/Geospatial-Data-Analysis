import * as React from "react";
import { MapContainer, TileLayer, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import styles from "./map.module.css";
import { Marker } from "../Marker";
import axios from "axios";

const L = require("leaflet");

let DefaultIcon = L.icon({
  iconUrl: "./flame-outline.svg",
  iconRetinaUrl: "./flame-outline.svg",
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(15, 15),
  className: "icon",
});

export const Map = () => {
  const [data, setData] = React.useState<any>([]);

  async function fetchData() {
    try {
      const res = await axios.get("geospatial-backend/data");
      setData(res.data);
      console.log(res);
    } catch (error) {
      console.error(error);
    }
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={2}
      scrollWheelZoom={false}
      className={styles.mapContainer}
    >
      <TileLayer
        attribution="Esri, DigitalGlobe, GeoEye, Earthstar Geographics, CNES/Airbus DS, USDA, USGS, AeroGRID, IGN, and the GIS User Community"
        className="basemap"
        maxNativeZoom={20}
        maxZoom={20}
        subdomains={["clarity"]}
        url="https://{s}.maptiles.arcgis.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
      />

      {data.events &&
        data.events.map(
          (item: any, index: string) =>
            item.categories[0].id === 8 && (
              <Marker
                position={[
                  item.geometries[0].coordinates[1],
                  item.geometries[0].coordinates[0],
                ]}
                icon={DefaultIcon}
                key={index}
              >
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            )
        )}
    </MapContainer>
  );
};
