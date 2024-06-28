import { mapBoxAxios } from '@api/axios/mapBox';
import { BanksFetchResponseType, CoordinatesType } from '@api/banks/types';
import { BanksType } from '@types/banks';
import { addCurrenciesToBanks } from '@utils/helpers/addCurrenciesToBanks';
import { handleError } from '@utils/helpers/errorHandler';

const mapApiAccessToken = process.env.REACT_APP_MAP_BOX_API_KEY as string;

export const fetchBanks = async ({ long, lat }: CoordinatesType): Promise<BanksType> => {
  try {
    const { data } = await mapBoxAxios.get(
      `https://api.mapbox.com/search/searchbox/v1/category/bank?access_token=${mapApiAccessToken}&language=
      en&limit=25&proximity=${long},${lat}`,
    );

    return data.features.map(
      ({ properties, geometry }: BanksFetchResponseType): BanksType => ({
        latitude: geometry.coordinates[1],
        longitude: geometry.coordinates[0],
        info: `${properties.name},
             ${properties.full_address}
             ${properties.metadata.phone || ''}`,
        currencies: addCurrenciesToBanks(),
      }),
    );
  } catch (e: unknown) {
    throw handleError(e);
  }
};
