import iplocate from 'node-iplocate';

export const getGeolocation = async (req, res, next) => {
  let country;
  let country_code;
  await iplocate(req.params.ip_address).then((results) => {
    country = results.country;
    country_code = results.country_code;
  });
  try {
    res.json({
      ip: req.params.ip_address,
      country: country,
      country_code: country_code,
    });
  } catch (error) {
    return res.json(error.message);
  }
};
