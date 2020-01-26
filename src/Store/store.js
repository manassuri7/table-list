import { createStore } from 'redux';
import reducer from '../Reducer/appReducer'

const initialList =
  [
    {
      "id": 1,
      "title": "Request from Indu",
      "updated_at": "2015-08-15 12:27:01 -0600",
      "created_at": "2015-08-12 08:27:01 -0600",
      "status": "Denied",
      "editing": false
    },
    {
      "id": 2,
      "title": "Request from Glen",
      "updated_at": "2015-07-22 11:27:01 -0600",
      "created_at": "2015-07-15 12:27:01 -0600",
      "status": "Approved",
      "editing": false
    },
    {
      "id": 3,
      "title": "Request from Kiran",
      "updated_at": "2015-07-22 11:27:01 -0600",
      "created_at": "2015-06-15 13:27:01 -0600",
      "status": "Pending",
      "editing": false
    },
    {
      "id": 4,
      "title": "Request from Jerry",
      "updated_at": "2015-07-15 13:27:01 -0600",
      "created_at": "2015-07-14 14:27:01 -0600",
      "status": "Pending",
      "editing": false
    },
    {
      "id": 5,
      "title": "Request from Francis",
      "updated_at": "2015-08-22 11:27:01 -0600",
      "created_at": "2015-07-29 15:27:01 -0600",
      "status": "Approved",
      "editing": false
    },
    {
      "id": 6,
      "title": "Request from Kate",
      "updated_at": "2015-07-29 14:27:01 -0600",
      "created_at": "2015-07-15 10:27:01 -0600",
      "status": "Denied",
      "editing": false
    },
    {
      "id": 7,
      "title": "Request from Michael",
      "updated_at": "2015-06-15 12:27:01 -0600",
      "created_at": "2015-06-13 18:27:01 -0600",
      "status": "Denied",
      "editing": false
    },
    {
      "id": 8,
      "title": "Request from AJ",
      "updated_at": "2015-09-22 11:10:01 -0600",
      "created_at": "2015-07-15 11:27:01 -0600",
      "status": "Approved",
      "editing": false
    },
    {
      "id": 9,
      "title": "Request from Kate",
      "updated_at": "2015-09-13 11:18:01 -0600",
      "created_at": "2015-09-10 06:27:01 -0600",
      "status": "Approved",
      "editing": false
    },
    {
      "id": 10,
      "title": "Request from Kate",
      "updated_at": "2015-05-12 08:27:01 -0600",
      "created_at": "2015-04-15 06:27:01 -0600",
      "status": "Pending",
      "editing": false
    },
    {
      "id": 11,
      "title": "Request from Kate",
      "updated_at": "2015-07-28 09:27:01 -0600",
      "created_at": "2015-07-17 05:27:01 -0600",
      "status": "Approved",
      "editing": false
    },
    {
      "id": 12,
      "title": "Request from Ale",
      "updated_at": "2015-07-22 10:27:01 -0600",
      "created_at": "2015-07-18 15:27:01 -0600",
      "status": "Pending",
      "editing": false
    },
    {
      "id": 13,
      "title": "Request from Christy",
      "updated_at": "2015-04-22 19:27:01 -0600",
      "created_at": "2015-03-15 16:27:01 -0600",
      "status": "Pending",
      "editing": false
    },
    {
      "id": 14,
      "title": "Request from Surjadeep",
      "updated_at": "2015-07-01 11:27:01 -0600",
      "created_at": "2015-06-29 17:27:01 -0600",
      "status": "Approved",
      "editing": false
    },
    {
      "id": 15,
      "title": "Request from Vasanth",
      "updated_at": "2015-07-02 11:27:01 -0600",
      "created_at": "2015-07-01 18:27:01 -0600",
      "status": "Approved",
      "editing": false
    },
    {
      "id": 16,
      "title": "Request from Ramesh",
      "updated_at": "2015-01-22 16:27:01 -0600",
      "created_at": "2014-12-25 11:27:01 -0600",
      "status": "Denied",
      "editing": false
    },
    {
      "id": 17,
      "title": "Request from Jim",
      "updated_at": "2015-10-22 17:27:01 -0600",
      "created_at": "2015-10-15 13:27:01 -0600",
      "status": "Approved",
      "editing": false
    },
    {
      "id": 18,
      "title": "Request from Dileep",
      "updated_at": "2015-08-18 18:27:01 -0600",
      "created_at": "2015-07-11 12:27:01 -0600",
      "status": "Denied",
      "editing": false
    },
    {
      "id": 19,
      "title": "Request from Kumar",
      "updated_at": "2015-06-22 19:27:01 -0600",
      "created_at": "2015-05-28 16:27:01 -0600",
      "status": "Approved",
      "editing": false
    },
    {
      "id": 20,
      "title": "Request from Kumar",
      "updated_at": "2015-02-14 08:27:01 -0600",
      "created_at": "2015-01-02 12:27:01 -0600",
      "status": "Approved",
      "editing": false
    }
  ];


const intialState = { list: initialList, updatedList: initialList };
const store = createStore(reducer, intialState);

export default store