const { sequelize } = require('../../src/app/models');

module.exports = () => {
    Object.keys(sequelize.models).map(async key => {
        await sequelize.models[key].destroy({ truncate: true, force: true})
    });
}

// module.exports = () => {
//     console.log(sequelize.models);
//     return Promise.all(Object.keys(sequelize.models).map(key => {
//         return sequelize.models[key].destroy({ truncate: true, force: true})
//     }));
// }