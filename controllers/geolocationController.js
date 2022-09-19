import iplocate from 'node-iplocate';

export const getGeolocation = async (req, res, next) => {
  let country;
  let country_code;
  let splitIp = req.params.ip_address.split('.');
  splitIp[splitIp.length - 1] = 0;
  let anonyIp = splitIp.join('.');
  await iplocate(req.params.ip_address).then((results) => {
    country = results.country;
    country_code = results.country_code;
  });
  try {
    res.json({
      ip: anonyIp,
      country: country,
      country_code: country_code,
    });
  } catch (error) {
    return res.json(error.message);
  }
};
