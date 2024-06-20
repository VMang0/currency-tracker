import { mapBoxAxios } from '@utils/axios';
import { addCurrenciesToBanks } from '@utils/helpers/addCurrenciesToBanks';

const mapApiAccessToken = process.env.REACT_APP_MAP_BOX_API_KEY;

export const fetchBanks = async ({ long, lat }: { long: number; lat: number }) => {
  try {
    const response = await mapBoxAxios.get(
      `https://api.mapbox.com/search/searchbox/v1/category/bank?access_token=${mapApiAccessToken}&language=en&limit=25&proximity=${long},${lat}`,
    );

    return response.data.features.map(({ properties, geometry }) => ({
      latitude: geometry.coordinates[1],
      longitude: geometry.coordinates[0],
      info: `${properties.name},
             ${properties.full_address}
             ${properties.metadata.phone || ''}`,
      currencies: addCurrenciesToBanks(),
    }));
  } catch (e) {
    throw new Error(e);
  }
};
