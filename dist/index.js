"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const cors = require("cors");
const upload_1 = require("./upload");
// app
const app = express();
app.use(cors());
app.post("/", upload_1.default.single("avatar"), (req, res) => {
    try {
        res.send("File is loaded success: " + req.file.filename);
    }
    catch (error) {
        console.log(error);
    }
});
app.listen(3000, function () {
    console.log("listening on port 3000!");
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLG1DQUFtQztBQUNuQyw2QkFBNkI7QUFDN0IscUNBQStCO0FBRS9CLE1BQU07QUFDTixNQUFNLEdBQUcsR0FBRyxPQUFPLEVBQUUsQ0FBQztBQUN0QixHQUFHLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDLENBQUM7QUFFaEIsR0FBRyxDQUFDLElBQUksQ0FDTixHQUFHLEVBQ0gsZ0JBQU8sQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLEVBQ3hCLENBQUMsR0FBb0IsRUFBRSxHQUFxQixFQUFFLEVBQUU7SUFDOUMsSUFBSTtRQUNGLEdBQUcsQ0FBQyxJQUFJLENBQUMsMEJBQTBCLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUMxRDtJQUFDLE9BQU8sS0FBSyxFQUFFO1FBQ2QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztLQUNwQjtBQUNILENBQUMsQ0FDRixDQUFDO0FBRUYsR0FBRyxDQUFDLE1BQU0sQ0FBQyxJQUFJLEVBQUU7SUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLHlCQUF5QixDQUFDLENBQUM7QUFDekMsQ0FBQyxDQUFDLENBQUMifQ==