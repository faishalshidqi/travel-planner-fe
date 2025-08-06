import {MapContainer, Marker, Popup, TileLayer} from "react-leaflet";
import {useState} from "react";

export default function Map() {
    const [latitude, setLatitude] = useState(0)
    const [longitude, setLongitude] = useState(0)
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            (position: GeolocationPosition) => {
                setLatitude(position.coords.latitude)
                setLongitude(position.coords.longitude)
            },
            (position) => {
                console.error(position)
            }
        );
    }
    else {
        alert("Geolocation is not supported. Allow access to geolocation!");
    }
    console.log(latitude, longitude)
    return (
        <MapContainer center={[latitude, longitude]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[latitude, longitude]}>
                <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    )
}