import { useState, useEffect } from 'react';

interface PrayerTimesData {
  Fajr: string;
  Dhuhr: string;
  Asr: string;
  Maghrib: string;
  Isha: string;
}

interface UsePrayerTimesResult {
  prayerTimes: PrayerTimesData | null;
  loading: boolean;
  error: string | null;
  date: string;
}

// Osnabrück coordinates
const LATITUDE = 52.2799;
const LONGITUDE = 8.0472;
const METHOD = 3; // Muslim World League

export const usePrayerTimes = (): UsePrayerTimesResult => {
  const [prayerTimes, setPrayerTimes] = useState<PrayerTimesData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [date, setDate] = useState('');

  useEffect(() => {
    const fetchPrayerTimes = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const today = new Date();
        const day = today.getDate();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        
        const response = await fetch(
          `https://api.aladhan.com/v1/timings/${day}-${month}-${year}?latitude=${LATITUDE}&longitude=${LONGITUDE}&method=${METHOD}`
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch prayer times');
        }
        
        const data = await response.json();
        
        if (data.code === 200 && data.data?.timings) {
          const timings = data.data.timings;
          setPrayerTimes({
            Fajr: timings.Fajr,
            Dhuhr: timings.Dhuhr,
            Asr: timings.Asr,
            Maghrib: timings.Maghrib,
            Isha: timings.Isha,
          });
          setDate(data.data.date?.readable || today.toLocaleDateString());
        } else {
          throw new Error('Invalid response from API');
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
        // Fallback to static times if API fails
        setPrayerTimes({
          Fajr: '05:45',
          Dhuhr: '13:15',
          Asr: '15:30',
          Maghrib: '17:45',
          Isha: '19:30',
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPrayerTimes();
    
    // Refresh prayer times at midnight
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    const msUntilMidnight = tomorrow.getTime() - now.getTime();
    
    const midnightTimeout = setTimeout(() => {
      fetchPrayerTimes();
    }, msUntilMidnight);
    
    return () => clearTimeout(midnightTimeout);
  }, []);

  return { prayerTimes, loading, error, date };
};
