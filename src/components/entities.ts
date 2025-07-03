export interface CompetitionCardProps {
  competition: {
    id: number;
    name: string;
    area: { name: string };
    type: string;
    numberOfAvailableSeasons: number;
    currentSeason?: {
      startDate: string;
      endDate: string;
    };
    emblem?: string | null;
  };
}
