export default {
  getLastHitTime: async () => {
    const response = await fetch(appsmith.URL);
    return new Date(response.headers.get('date')).toLocaleString();
  }
};