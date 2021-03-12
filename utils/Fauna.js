const faunadb = require('faunadb');
const faunaClient = new faunadb.Client({ secret: process.env.FAUNA_SECRET });
const q = faunadb.query;

const getSnippets = async () => {
    //TODO: get snippets
    faunaClient.query(
        q.Map(
            q.Paginate(q.Documents(q.Collection('snippets'))
            ),
            q.Lambda('ref', q.Get(q.Var('ref')))
        )
    )
};

const getSnippetById = async (id) => {
    //TODO: get snippet by id
};

const createSnippet = async (code, language, description, name) => {
    //TODO: create snippet
};

const updateSnippet = async (id, code, language, name, description) => {
    //TODO: update snippet
};

const deleteSnippet = async (id) => {
    //TODO: delete snippet
};

module.exports = {
    createSnippet,
    getSnippets,
    getSnippetById,
    updateSnippet,
    deleteSnippet,
};
