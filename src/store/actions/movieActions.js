import axios from "../../utils/Axios";
import { loadMovie, removeMovie } from "../reducers/movieSlice";

export const getAsyncMovieDetails = (id) => async (dispatch) => {
  try {
    const detail = await axios.get(`/movie/${id}`);
    const externalId = await axios.get(`/movie/${id}/external_ids`);
    const recommendations = await axios.get(`/movie/${id}/recommendations`);
    const similar = await axios.get(`/movie/${id}/similar`);
    const videos = await axios.get(`/movie/${id}/videos`);
    const watchProviders = await axios.get(`/movie/${id}/watch/providers`);

    const allVariableDetails = {
      detail: detail.data,
      externalId: externalId.data,
      recommendations: recommendations.data.results,
      similar: similar.data.results,
      trailers: videos.data.results.filter((m) => m.type === "Trailer"),
      watchProviders: watchProviders.data.results?.IN || null,
    };

    dispatch(loadMovie(allVariableDetails));
    console.log(allVariableDetails);
  } catch (error) {
    console.log(`Error fetching movie details: ${error}`);
    dispatch(removeMovie()); // optional: clear state on error
  }
};
