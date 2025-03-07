import { Component, computed, input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NzSafeAny } from 'ng-zorro-antd/core/types';

@Component({
  selector: 'app-maps',
  imports: [CommonModule],
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.scss',
})
export class MapsComponent {
  carte_point = input<NzSafeAny[]>([]);

  locations = computed<Location[]>(() => {
    return this.carte_point().map((location) => ({
      name: location.name,
      phone: location.phone,
      website: location.website,
      address: location.address,
      email: location.email,
      marker_information: location.marker_information,
      coordinates: this.generateRandomCoordinates(),
    }));
  });

  hoveredLocation: Location | null = null;

  onHover(location: Location) {
    this.hoveredLocation = location;
  }

  onLeave() {
    this.hoveredLocation = null;
  }

  generateRandomCoordinates() {
    const lat = (Math.random() * 100).toFixed(2);
    const lng = (Math.random() * 100).toFixed(2);
    return {
      latitude: parseFloat(lat) < 15 ? (parseFloat(lat) + 15).toFixed(2) : lat,
      longitude: parseFloat(lng) < 15 ? (parseFloat(lng) + 15).toFixed(2) : lng,
    };
  }
}

interface Location {
  name: string;
  website: string;
  address: string;
  phone?: string | string[];
  email?: string;
  marker_information: string[];
  coordinates?: {
    latitude: string;
    longitude: string;
  };
}
