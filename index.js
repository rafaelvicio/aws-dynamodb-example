const AWS = require("aws-sdk");

AWS.config.update({ accessKeyId: "", secretAccessKey: "" });
AWS.config.update({ region: "sa-east-1" });

const docClient = new AWS.DynamoDB.DocumentClient();

const table = "news";

const params = {
  TableName: table,
  Item: {
    title: "a",
    info: {
      desciption: "Nothing happens at all."
    }
  }
};

console.log("Adding a new item...");
docClient.put(params, function(err, data) {
  if (err) {
    console.error(
      "Unable to add item. Error JSON:",
      JSON.stringify(err, null, 2)
    );
  } else {
    console.log("Added item:", JSON.stringify(data, null, 2));
  }
});
