import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';

import styles from './nearbyjobs.style';

import { COLORS } from '../../../constants';

import NearByJobCard from '../../common/cards/nearby/NearbyJobCard';

import useFetch from '../../../hook/useFetch';

const Nearbyjobs = () => {
  const { data, isLoading, error } = useFetch('search', {
    query: 'React developer',
    num_pages: 1,
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>See all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
        ) : (
          data?.map((job) => (
            <NearByJobCard
              job={job}
              key={`nearby-job-${job?.job_id}`}
              handleNavigate={() =>
                useRouter.push(`/job-details/${job.job_id}`)
              }
            />
          ))
        )}
      </View>
    </View>
  );
};

export default Nearbyjobs;
