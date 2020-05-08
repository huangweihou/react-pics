import axios from "axios";

export default axios.create({
  baseURL: " https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID vaEVAcM2Q1CRzPmDjHmjUzfoyjoUvaVH4nzQa1hwm9o",
  },
});
