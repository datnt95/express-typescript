"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multer = require("multer");
const storage = multer.diskStorage({
    destination: function (_req, _file, cb) {
        cb(null, "uploads/");
    },
    filename: function (_req, file, cb) {
        cb(null, file.originalname);
    },
});
const uploads = multer({ storage: storage });
exports.default = uploads;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vdXBsb2FkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsaUNBQWlDO0FBRWpDLE1BQU0sT0FBTyxHQUFHLE1BQU0sQ0FBQyxXQUFXLENBQUM7SUFDakMsV0FBVyxFQUFFLFVBQVMsSUFBSSxFQUFFLEtBQUssRUFBRSxFQUFFO1FBQ25DLEVBQUUsQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7SUFDdkIsQ0FBQztJQUNELFFBQVEsRUFBRSxVQUFTLElBQUksRUFBRSxJQUFJLEVBQUUsRUFBRTtRQUMvQixFQUFFLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0YsQ0FBQyxDQUFDO0FBRUgsTUFBTSxPQUFPLEdBQUcsTUFBTSxDQUFDLEVBQUUsT0FBTyxFQUFFLE9BQU8sRUFBRSxDQUFDLENBQUM7QUFFN0Msa0JBQWUsT0FBTyxDQUFDIn0=