"use client";

import { MapContainer, TileLayer, Marker, Polyline, Tooltip } from "react-leaflet";
import { divIcon, type LatLngBoundsExpression, type LatLngTuple } from "leaflet";
import "leaflet/dist/leaflet.css";
import type { RouteStop } from "@/lib/journeys";

function stopIcon(isEndpoint: boolean) {
  const size = isEndpoint ? 14 : 11;
  return divIcon({
    className: "",
    html: `<span style="
      display:block;
      width:${size}px;
      height:${size}px;
      border-radius:9999px;
      background:${isEndpoint ? "#c2622b" : "#e8a33d"};
      border:2px solid white;
      box-shadow:0 1px 4px rgba(0,0,0,0.35);
    "></span>`,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
  });
}

// Bearing (degrees clockwise from north) between two lat/lng points, using a
// flat-plane approximation — good enough at the regional scale these route
// maps cover, and avoids needing a mounted map instance to compute it.
function bearing(a: LatLngTuple, b: LatLngTuple) {
  const dx = b[1] - a[1];
  const dy = b[0] - a[0];
  return (Math.atan2(dx, dy) * 180) / Math.PI;
}

function arrowIcon(angleDeg: number) {
  return divIcon({
    className: "",
    html: `<span style="
      display:block;
      width:16px;
      height:16px;
      transform: rotate(${angleDeg}deg);
      filter: drop-shadow(0 1px 2px rgba(0,0,0,0.35));
    ">
      <svg viewBox="0 0 16 16" width="16" height="16">
        <path d="M8 2 L13 11 L8 8.5 L3 11 Z" fill="#c2622b" />
      </svg>
    </span>`,
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });
}

export default function RouteMap({ stops }: { stops: RouteStop[] }) {
  if (stops.length === 0) return null;

  const positions: LatLngTuple[] = stops.map((s) => [s.lat, s.lng]);
  const bounds: LatLngBoundsExpression = positions;

  // Collapse consecutive duplicate stops (e.g. a loop returning through the
  // same city) so the marker + tooltip only render once per visited place.
  const uniqueStops = stops.filter(
    (s, i) => i === 0 || s.name !== stops[i - 1].name || s.lat !== stops[i - 1].lat
  );

  // One directional arrow at the midpoint of every leg, pointing toward the
  // next stop — this is what actually communicates "what's next" at a
  // glance, rather than making people trace a thin dashed line.
  const legs = positions.slice(0, -1).map((from, i) => {
    const to = positions[i + 1];
    const mid: LatLngTuple = [(from[0] + to[0]) / 2, (from[1] + to[1]) / 2];
    return { mid, angle: bearing(from, to), key: `leg-${i}` };
  });

  // Opens the same route in Google Maps, stop-for-stop, so "the actual map"
  // is one tap away instead of us trying to replicate live traffic/search/
  // street view inside the small embedded preview. Routing by place name
  // (rather than our stored lat/lng, which mark the general stay area)
  // lets Google resolve each stop to the city's actual center/landmark
  // instead of dropping a pin on whatever address is nearest those
  // coordinates.
  const googleMapsUrl = `https://www.google.com/maps/dir/${uniqueStops
    .map((s) => encodeURIComponent(`${s.name}, India`))
    .join("/")}`;

  return (
    <a
      href={googleMapsUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open this route in Google Maps"
      className="group relative block h-[320px] w-full overflow-hidden rounded-2xl border border-ink-900/5"
    >
      <MapContainer
        bounds={bounds}
        // Cap the zoom CARTO's label style resolves at, so tight clusters of
        // stops (e.g. a same-city loop) don't zoom in far enough to reveal
        // town/village-level labels — only state- and city-tier names show.
        boundsOptions={{ padding: [32, 32], maxZoom: 8 }}
        scrollWheelZoom={false}
        zoomControl={false}
        attributionControl={false}
        className="h-full w-full"
      >
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png" />
        <Polyline
          positions={positions}
          pathOptions={{ color: "#c2622b", weight: 2.5, opacity: 0.65 }}
        />
        {legs.map((leg) => (
          <Marker key={leg.key} position={leg.mid} icon={arrowIcon(leg.angle)} interactive={false} />
        ))}
        {uniqueStops.map((stop, i) => (
          <Marker
            key={`${stop.name}-${i}`}
            position={[stop.lat, stop.lng]}
            icon={stopIcon(i === 0 || i === uniqueStops.length - 1)}
          >
            <Tooltip direction="top" offset={[0, -10]} opacity={1} permanent className="route-stop-label">
              {stop.name}
            </Tooltip>
          </Marker>
        ))}
      </MapContainer>
      <span className="pointer-events-none absolute bottom-2 right-2 z-[400] rounded-full bg-white/90 px-3 py-1 text-xs font-medium text-ink-900/70 opacity-0 shadow transition-opacity group-hover:opacity-100">
        Open in Google Maps
      </span>
    </a>
  );
}
