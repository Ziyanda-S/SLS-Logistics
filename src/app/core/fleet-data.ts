export interface FleetVehicle {
  id: string;
  name: string;
  category: string;
  description: string;
  imagePath: string;
}

export const fleetVehicles: FleetVehicle[] = [
  {
    id: 'faw-8d-tipper',
    name: 'FAW 8D Tipper',
    category: 'Tipper Transport',
    description: 'A heavy-duty tipper vehicle suited to the transportation of suitable bulk materials for construction, infrastructure and related applications.',
    imagePath: 'assets/fleet/faw-8d-tipper.jpg'
  },
  {
    id: 'faw-8-ton',
    name: 'FAW 8-Ton Truck',
    category: 'General Freight',
    description: 'An 8-ton transport vehicle suited to the movement of commercial goods, materials and supplies.',
    imagePath: 'assets/fleet/faw-8-ton.jpg'
  }
];
