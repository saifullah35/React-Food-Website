import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer Oewpc6IlOfa95CdfFlkgJaau80JGalMPWSUkLr8KkJEyZx5wAS3j0SNf295wMeAh1ELCr-BBlw78zXk0wJ1s3okXUoa8Y3s14o1j4S8xF7gKKIpQi3KVSb7yr2m5ZXYx'
    }
});

