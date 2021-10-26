const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        filename: (req, file, cb) => {
            const fileNameWithoutSpaces = file.originalname.replace(/\s/g,'_');
            const ext = path.extname(fileNameWithoutSpaces);
            const name = path.basename(fileNameWithoutSpaces, ext);

            cb(null, `${name}-${Date.now()}${ext}`);
        },
    }),
}