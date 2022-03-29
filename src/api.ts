const Api = () => {
  const BASE_API_URL = process.env.REACT_APP_BASE_API_URL;
  const FIBONACCI_RESOURCE_URL = process.env.REACT_APP_FIBONACCI_RESOURCE_URL;

  const getNTermFibonacci = async ({
    nTerm
  }: {
    nTerm: number
  }) => {
    const response = await (await fetch(`${BASE_API_URL}/${FIBONACCI_RESOURCE_URL}/${nTerm}`)).json();
    return response;
  };

  return {
    getNTermFibonacci
  };
};

export default Api;
