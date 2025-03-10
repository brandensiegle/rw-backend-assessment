import type {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Context,
} from "aws-lambda";

/**
 *
 * Using the (Streaming Availability API (Documentation Link))[https://docs.movieofthenight.com/resource/shows#search-shows-by-filters],
 * return to me a list of movies to watch and the streaming service they’re on. Group them by the service and order them in
 * increasing order of quality. Order the groups by the average quality.The total length of the movies returned
 * should be less than the number of hours I have available as I hate to not know how something ends.
 *
 * 
 * Request Body will be of type
 *  `{“duration”:number,”platforms”:string[], “genre”:string}`
 *
 * Response body is a json object of type
 *  `{“service”: string[]}`
 * where service is the name of the streaming service and the array is the list of movies
 */
export const handler = async (
  event: APIGatewayProxyEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const RAPID_API_KEY = process.env.RAPID_API_KEY;

  const response = {
    statusCode: 200,
    body: "Hello World!",
  };

  return response;
};
