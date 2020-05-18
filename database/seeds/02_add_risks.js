exports.seed = function (knex) {
  // Deletes ALL existing entries
  // return knex("risks")
  //   .truncate()
  //   .then(function () {
  // Inserts seed entries
  return knex("risks").insert([
    {
      projectId: 1,
      type: "managerial",
      description: "managerial",
      probability: 1,
      consequence: 1,
      owner: "JG",
      mitigation: "mitigation1",
    },
    {
      projectId: 1,
      type: "commercial",
      description: "commercial",
      probability: 1,
      consequence: 1,
      owner: "JG",
      mitigation: "mitigation2",
    },
    {
      projectId: 1,
      type: "commercial",
      description: "commercial",
      probability: 1,
      consequence: 1,
      owner: "JG",
      mitigation: "mitigation3",
    },
    {
      projectId: 1,
      type: "commercial",
      description: "commercial",
      probability: 1,
      consequence: 1,
      owner: "JG",
      mitigation: "mitigation4",
    },
    {
      projectId: 1,
      type: "commercial",
      description: "commercial",
      probability: 1,
      consequence: 1,
      owner: "JG",
      mitigation: "mitigation5",
    },
    {
      projectId: 1,
      type: "technical",
      description: "technical",
      probability: 1,
      consequence: 1,
      owner: "JG",
      mitigation: "mitigation6",
    },
    {
      projectId: 1,
      type: "environmental",
      description: "environmental",
      probability: 1,
      consequence: 1,
      owner: "JG",
      mitigation: "mitigation7",
    },
    {
      projectId: 1,
      type: "legal",
      description: "legal",
      probability: 1,
      consequence: 1,
      owner: "JG",
      mitigation: "mitigation8",
    },
  ]);
  // });
};
