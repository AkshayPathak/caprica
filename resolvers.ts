const knex = require('./db/db');

const resolveFunctions = {
    Query: {
        users() {
            const inputs = knex('user')
                .select();
            return inputs.then((users => users));
        },
        user(_, { id }) {
            const query = knex('user')
                .where('id', id);
            return query.then(([row]) => row);
        },
    },
};

export default resolveFunctions;
