import L from "leaflet";

const fireIcon: any = L.Icon.extend({
  options: {
    iconUrl: "../assets/flame-outline.svg",
    iconRetinaUrl: "../assets/flame-outline.svg",
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: "",
  },
});

export { fireIcon };
