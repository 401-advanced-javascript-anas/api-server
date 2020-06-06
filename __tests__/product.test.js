// 'use strict';
// require('@code-fellows/supergoose');
// const products = require('../lib/models/products/products-model');


// const obj = {
//   'name': 'anas',
//   'display_name': 'zain',
//   'description': 'syrian',
// };

// const obj2 = {
//   'name': 'anas2',
//   'display_name': 'zain2',
//   'description': 'syrian2',
// };



// describe('products Model', () => {

//   it('post', () => {
//     return products
//       .post(obj)
//       .then((result) => {
//         Object.keys(obj).forEach((key) => {
//           expect(result[key]).toEqual(obj[key]);
//         });
//       });
//   });
//   it('get', () => {
//     return products.get().then((result) => {
//       Object.keys(obj).forEach((key) => {
//         expect(result[0][key]).toEqual(obj[key]);
//       });
//     });
//   });
//   it('put', () => {
//     return products.get().then((result) => {
//       const id = result[0]._id;
//       return products.update(id,obj2).then((result) => {
//         Object.keys(obj2).forEach((key) => {
//           expect(result[key]).toEqual(obj2[key]);
//         });
//       });
//     });

//   });
//   it('put', () => {
//     return products.get().then((result) => {
//       const id = result[0]._id;
//       return products.delete(id).then((result) => {
//         return products.get().then((result2) => {
//           expect(result2).toEqual([]);
//         });
//       });
//     });
//   });
// });