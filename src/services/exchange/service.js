import axios from "axios";
const API_URL = "http://localhost:5000/api/exchange";

const create = (
    exchangerMember, 
    exchanger, 
    openDate,
    closeDate,
    lastModifiedDate,
    accountBallance,
    status) => {
  return axios.post(API_URL + "", {
    exchangerMember, 
    exchanger, 
    openDate,
    closeDate,
    lastModifiedDate,
    accountBallance,
    status
  });
};

const getAll = () => {
    console.log('axios')
    return axios.get(API_URL);
}

const deleteEx = (_id) => {
    console.log(_id)
    return axios.delete(API_URL, {
        headers: {
            'X-HTTP-Method-Override': 'DELETE',
          },
          data: { id: _id }, // Data to be sent
        }
    )
}

const exchangeService = {
    create,
    getAll,
    deleteEx,
};

export default exchangeService;