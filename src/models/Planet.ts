export type Planet = {
  id: string | number;
  name: string;
  diameter: string;
  climates: string[];
  terrains: string[];
  active?: boolean | undefined;
}
