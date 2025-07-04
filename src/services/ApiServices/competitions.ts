import axios from 'axios';
import { CompetitionsResponse } from '../../screens/entities';

export const fetchCompetitionsApi = async (): Promise<CompetitionsResponse> => {
  const response = await axios.get<CompetitionsResponse>(
    'https://api.football-data.org/v4/competitions/',
  );
  return response.data;
};
