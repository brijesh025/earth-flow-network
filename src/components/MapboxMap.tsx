import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  MapPin, 
  Settings, 
  Truck, 
  BarChart3,
  FileCheck,
  AlertTriangle,
  Info
} from "lucide-react";

interface MapboxMapProps {
  onSiteSelect?: (coordinates: [number, number]) => void;
  selectedSites?: Array<{ lng: number; lat: number; score: number; type: string }>;
  wasteCollectionRoutes?: boolean;
}

const MapboxMap: React.FC<MapboxMapProps> = ({ 
  onSiteSelect, 
  selectedSites = [], 
  wasteCollectionRoutes = false 
}) => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [mapboxToken, setMapboxToken] = useState('');
  const [showTokenInput, setShowTokenInput] = useState(true);

  const initializeMap = () => {
    if (!mapContainer.current || !mapboxToken) return;

    try {
      mapboxgl.accessToken = mapboxToken;
      
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [77.1025, 28.7041], // Delhi coordinates
        zoom: 10,
        pitch: 45,
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl({
          visualizePitch: true,
        }),
        'top-right'
      );

      map.current.on('load', () => {
        // Add existing waste facilities
        const existingFacilities = [
          { lng: 77.0892, lat: 28.7196, type: 'landfill', name: 'Bhalswa Landfill' },
          { lng: 77.1331, lat: 28.6692, type: 'transfer', name: 'Central Transfer Station' },
          { lng: 77.0648, lat: 28.7500, type: 'recycling', name: 'North Recycling Center' }
        ];

        existingFacilities.forEach((facility, index) => {
          const color = facility.type === 'landfill' ? '#ef4444' : 
                       facility.type === 'transfer' ? '#f59e0b' : '#10b981';
          
          new mapboxgl.Marker({ color })
            .setLngLat([facility.lng, facility.lat])
            .setPopup(new mapboxgl.Popup().setText(facility.name))
            .addTo(map.current!);
        });

        // Add potential sites
        selectedSites.forEach((site, index) => {
          const color = site.score > 80 ? '#10b981' : 
                       site.score > 60 ? '#f59e0b' : '#ef4444';
          
          new mapboxgl.Marker({ color, scale: 0.8 })
            .setLngLat([site.lng, site.lat])
            .setPopup(new mapboxgl.Popup().setText(`Potential ${site.type} Site - Score: ${site.score}%`))
            .addTo(map.current!);
        });

        // Add collection routes if enabled
        if (wasteCollectionRoutes) {
          const routeData = {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'LineString',
                  coordinates: [
                    [77.0800, 28.7100],
                    [77.0900, 28.7200],
                    [77.1000, 28.7150],
                    [77.1100, 28.7050]
                  ]
                },
                properties: { route: 1 }
              }
            ]
          };

          map.current?.addSource('routes', {
            type: 'geojson',
            data: routeData as any
          });

          map.current?.addLayer({
            id: 'routes',
            type: 'line',
            source: 'routes',
            layout: {
              'line-join': 'round',
              'line-cap': 'round'
            },
            paint: {
              'line-color': '#10b981',
              'line-width': 3
            }
          });
        }
      });

      // Handle map clicks for site selection
      if (onSiteSelect) {
        map.current.on('click', (e) => {
          onSiteSelect([e.lngLat.lng, e.lngLat.lat]);
        });
      }

      setShowTokenInput(false);
    } catch (error) {
      console.error('Error initializing map:', error);
    }
  };

  const handleTokenSubmit = () => {
    if (mapboxToken.trim()) {
      initializeMap();
    }
  };

  useEffect(() => {
    return () => {
      map.current?.remove();
    };
  }, []);

  if (showTokenInput) {
    return (
      <div className="flex flex-col items-center justify-center h-full space-y-4 p-6">
        <Alert>
          <Info className="h-4 w-4" />
          <AlertDescription>
            To use the mapping features, please enter your Mapbox public token. 
            You can get one from <a href="https://mapbox.com/" target="_blank" rel="noopener noreferrer" className="underline text-primary">mapbox.com</a>
          </AlertDescription>
        </Alert>
        
        <div className="space-y-2 w-full max-w-md">
          <Label htmlFor="mapbox-token">Mapbox Public Token</Label>
          <Input
            id="mapbox-token"
            type="text"
            placeholder="pk.eyJ1IjoieW91cnVzZXJuYW1lIi..."
            value={mapboxToken}
            onChange={(e) => setMapboxToken(e.target.value)}
          />
        </div>
        
        <Button onClick={handleTokenSubmit} disabled={!mapboxToken.trim()}>
          Initialize Map
        </Button>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <div ref={mapContainer} className="absolute inset-0 rounded-lg" />
    </div>
  );
};

export default MapboxMap;