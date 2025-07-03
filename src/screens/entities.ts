export interface Competition {
  id: number;
  area: {
    id: number;
    name: string;
    code: string;
    flag: string | null;
  };
  name: string;
  code: string;
  type: string;
  numberOfAvailableSeasons: number;
  currentSeason?: {
    id: number;
    startDate: string;
    endDate: string;
    currentMatchday: number;
    winner: any;
  };
}

export interface CompetitionsResponse {
  competitions: Competition[];
}
