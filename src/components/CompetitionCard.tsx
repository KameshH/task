import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { CompetitionCardProps } from './entities';

const DEFAULT_EMBLEM = 'https://crests.football-data.org/ac.png';

const CompetitionCard: React.FC<CompetitionCardProps> = ({ competition }) => {
  return (
    <View style={styles.card}>
      <Image
        source={{ uri: competition.emblem || DEFAULT_EMBLEM }}
        style={styles.emblem}
        resizeMode="contain"
      />
      <View style={styles.info}>
        <Text style={styles.title}>{competition.name}</Text>
        <Text style={styles.area}>{competition.area.name}</Text>
        <Text style={styles.type}>{competition.type}</Text>
        <Text style={styles.seasons}>
          Seasons: {competition.numberOfAvailableSeasons}
        </Text>
        <Text style={styles.dates}>
          {competition.currentSeason
            ? `Season: ${competition.currentSeason.startDate} - ${competition.currentSeason.endDate}`
            : 'No current season'}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 2,
  },
  emblem: {
    width: 56,
    height: 56,
    marginRight: 16,
    borderRadius: 8,
    backgroundColor: '#f0f0f0',
  },
  info: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 2,
    color: '#222',
  },
  area: {
    fontSize: 15,
    color: '#555',
    marginBottom: 2,
  },
  type: {
    fontSize: 14,
    color: '#888',
    marginBottom: 2,
  },
  seasons: {
    fontSize: 13,
    color: '#007AFF',
    marginBottom: 2,
  },
  dates: {
    fontSize: 13,
    color: '#666',
  },
});

export default CompetitionCard;
