const {
  addBookHandler,
  getAllBooksHandler,
  getBookByIdHandler,
  editBookByIdHandler,
  deleteBookByIdHandler,
} = require('./handler');

const routes = [
  {
    method: 'POST',
    path: '/books',
    handler: addBookHandler,
  },
  {
    method: 'GET',
    path: '/books',
    handler: getAllBooksHandler,
  },
  {
    method: 'GET',
    path: '/books/{Id}',
    handler: getBookByIdHandler,
  },
  {
    method: 'PUT',
    path: '/books/{Id}',
    handler: editBookByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/books/{Id}',
    handler: deleteBookByIdHandler,
  },
];

module.exports = routes;
